// init
global.__base = __dirname + '/';
require('dotenv').config();
import * as Debug from "debug";
const debug:any = Debug("mqtt:server");
const mqtt = require('mqtt');
const persist = require(global.__base + 'persist');

const client = mqtt.connect(process.env.MQTT_URL, {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
    clientId: process.env.ANA_CLIENT_ID
});

client.on('connect', function () {
    debug('>>> connected');
    client.subscribe('+/exec/#');
    client.subscribe('+/sysinfo/report/#');
    client.subscribe(`$SYS/${process.env.MQTT_MOSCA_ID}/clients/state`);
});

client.on('message', async (topic:any, message:any) => {
    debug('message', topic);

    try {
        await persist(topic, message);
        return;
    } catch (error) {
        return error;
    }

});

