# Redis

## Running Redis

```sh
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

- Server Port: 6379
- Redis Insight Port: 8001

## Main Features

- Get/Set with expiration
- Pub/Sub messaging
- Geospatial support
- Streams

## Data Types

- String
- Lists
- Sets
- Hashmaps
- Ordered Sets
- Geospatial

## Pub/Sub
- Publish/Subscribe
- Can be used for realtime chat apps in distributed systems.

## Streams
- Similar to Kafka
- Kafka is pull-based system, consumer pull from Kafka as needed
- Redis is push-based system, producer push to Redis and messages are instantly forwarded to consumers.
- Kafka is better performant mainly because it was designed to use like this.

## References

- [The Difference Between Kafka and Redis](https://aws.amazon.com/compare/the-difference-between-kafka-and-redis/)
