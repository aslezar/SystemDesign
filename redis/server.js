import Redis from "ioredis";

const redis = new Redis({
    host: "localhost",
    port: 6379,
});

const redis2 = new Redis({
    host: "localhost",
    port: 6379,
});
async function server() {
    console.log("Connecting to Redis...");

    redis.on("connect", () => {
        console.log("Connected to Redis");
    });

    const user = await redis.get("user:1");
    console.log("User:", user);

    await redis.set("user:2", "john", "EX", 50);
    await redis.set("json:2", { name: "john" });

    setInterval(() => {
        const message = { foo: Math.random() };
        // Publish to my-channel-1 or my-channel-2 randomly.
        const channel = `my-channel-${1 + Math.round(Math.random())}`;

        // Message can be either a string or a buffer
        redis2.publish(channel, JSON.stringify(message));
        console.log("Published %s to %s", message, channel);
    }, 1000);

    redis.subscribe("my-channel-1", "my-channel-2", (err, count) => {
        if (err) {
            console.error("Failed to subscribe: %s", err.message);
        } else {
            console.log(
                `Subscribed successfully! This client is currently subscribed to ${count} channels.`
            );
        }
    });

    redis.on("message", (channel, message) => {
        console.log(`Received ${message} from ${channel}`);
    });
}

server()