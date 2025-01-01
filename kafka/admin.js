import { kafka } from "./client";

async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Adming Connection Success...");

  console.log("Creating Topic [rider]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created Success [rider]");

  console.log("Disconnecting Admin..");
  await admin.disconnect();
}

init();