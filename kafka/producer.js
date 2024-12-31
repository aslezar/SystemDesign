const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const topic = "rider";
let count = 0;

const sendMessages = async (producer) => {
    const p = Math.floor(Math.random() * 2);
    console.log(p);
    
    await producer.send({
        topic,
        messages: [
            {
                partition: p,
                key: p.toString(),
                value: `Message ${count}`
            },
        ]
    });
    count++;
};

async function init() {
    const producer = kafka.producer();

    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");

    const x = 1;
    for (let i = 0; i < x; i++) {
        setInterval(sendMessages, 1000, producer);
    }
}

init();