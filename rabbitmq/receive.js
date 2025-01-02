#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

function show(set) {
    console.clear();
    set.forEach((item) => {
        console.log(item);
    });
}

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';
        var processingMessages = new Set();

        channel.assertQueue(queue, {
            durable: false
        });

        const limit = Number(process.argv[2]) || 0
        if (limit !== 0) {
            console.log('Prefetch limit:', limit)
            channel.prefetch(limit)
        }

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, async function (msg) {
            const messageContent = msg.content.toString();
            processingMessages.add(messageContent);
            show(processingMessages);
            // console.log(" [x] Received %s", messageContent);
            // console.log(" [x] Currently processing: ", Array.from(processingMessages));

            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(' [x] Done %s', messageContent);
                    processingMessages.delete(messageContent);
                    // console.log(" [x] Currently processing: ", Array.from(processingMessages));
                    show(processingMessages);
                    resolve();
                    channel.ack(msg);
                }, 1000 * Math.round(Math.random() * 10));
            });
        }, {
            noAck: false
        });
    });
});