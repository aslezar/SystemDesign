// import mongoose from "mongoose";
const mongoose = require("mongoose");

let pendingPromises = 0;
let completedOperations = 0;
let startTime = Date.now();

function logStats() {
    const used = process.memoryUsage();
    const runningTime = (Date.now() - startTime) / 1000; // in seconds
    const opsPerSecond = completedOperations / runningTime;
    
    console.clear();
    console.log(`
Memory Usage:
    RSS: ${Math.round(used.rss / 1024 / 1024)} MB
    Heap Total: ${Math.round(used.heapTotal / 1024 / 1024)} MB
    Heap Used: ${Math.round(used.heapUsed / 1024 / 1024)} MB
Pending Promises: ${pendingPromises}
Completed Operations: ${completedOperations}
Operations/second: ${Math.round(opsPerSecond)}
Running Time: ${Math.round(runningTime)}s
    `);
}

async function insertBatch(collection, startIndex, batchSize) {
    const batch = Array.from({ length: batchSize }, (_, index) => ({
        name: `test${startIndex + index}`,
        value: startIndex + index
    }));
    
    pendingPromises++;
    try {
        await collection.insertMany(batch, { ordered: false });
        completedOperations += batchSize;
    } catch (error) {
        console.error("Batch error:", error);
    } finally {
        pendingPromises--;
    }
}

const start = async () => {
    console.log("Connecting to MongoDB...");
    await mongoose.connect("mongodb://127.0.0.1:27017",{
        maxPoolSize: 1000000,
    });
    console.log("Connected to MongoDB");

    const collection = mongoose.connection.db.collection("test");
    const batchSize = 100000000;
    const totalDocuments = 100000000;
    const concurrentBatches = 5000; // Number of concurrent requests

    const statsInterval = setInterval(logStats, 1000);

    try {
        for (let i = 0; i < totalDocuments; i += (batchSize * concurrentBatches)) {
            const batchPromises = [];
            
            // Create multiple concurrent batch requests
            for (let j = 0; j < concurrentBatches; j++) {
                const startIndex = i + (j * batchSize);
                if (startIndex < totalDocuments) {
                    batchPromises.push(insertBatch(collection, startIndex, batchSize));
                }
            }

            // Wait for all concurrent batches to complete
            await Promise.all(batchPromises);
        }
    } catch (error) {
        console.error("Main error:", error);
    } finally {
        clearInterval(statsInterval);
        console.log("Finished!");
    }
}

start();
