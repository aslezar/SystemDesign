# System Design

## Reference Articles

- [System Design for Beginners - Complete Guide](https://medium.com/@shivambhadani_/system-design-for-beginners-everything-you-need-in-one-article-c74eb702540b)

## Learning Tasks

### AWS Related

- [ ] Deploy applications to AWS
- [ ] Implement Horizontal Scaling with Load Balancers
- [ ] Configure Auto-Scaling groups
- [ ] Set up CDN using AWS S3

### Caching & Messaging

- [x] Redis Cache implementation
- [x] RabbitMQ Message Queue
- [x] Redis Pub/Sub patterns
- [x] Apache Kafka

### Additional

- [ ] Apache Spark
- [ ] Wireshark
- [x] Nginx
- [ ] grpc
- [ ] vim
- [ ] tmux

### To Check

- Mongodb Aggregation
- Leader Election Algorithms
- [Software Design Patterns](https://www.linkedin.com/pulse/understanding-essence-software-design-patterns-chukwuebuka-ejie-k1snf/)
- [Schema Design Patterns](https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/)
- [Schema Design Process](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)

## Tools and Languages

- **Erlang**

  - Build for distributed, scalable systems
  - Runs on the philosophy "let it fail", which means instead of preventing errors, it lets them occur and quickly recovers from them.
  - ejabberd -> real-time messaging system server
  - Used by WhatsApp

- **Prometheus** - For Monitoring Metrics
- **Datadog** - For Cloud Monitoring and Analytics
- [**AutoCannon**](https://www.npmjs.com/package/autocannon) - For Performance Testing
- **Grafana** - For Visualization and Dashboarding
- **ELK stack** - For Logging and Log Management
- [**Opentelemetry**](https://opentelemetry.io/) - For Distributed Tracing and Observability

## Saves

1. **ESR-Rule for Compound index**: For a compound index to work efficiently, fields must be defined in the order:

   - **E**: Equality Fields which values match exactly
   - **S**: Sort Fields which decide the order
   - **R**: Range Fields on which range operations like greater than are performed

2. **SuperDisk Strategy used by Discord**, a combination of local SSD and persistent disk [ref](https://youtu.be/S2xmFOAUhsk?feature=shared&t=869)

   ![alt text](image.png)

3. [**Optimize Query - Mongodb explain command**](https://www.mongodb.com/docs/manual/reference/method/cursor.explain/)
4. **Mongo ObjectId**

   - 4 byte timestamp
   - 5 byte random value unique to machine and process
   - 3 byte incrementing counter
   - Since Mongo ID contains a timestamp, they are roughly sortable based on creation time.

5. **Discord channel schema**
   - **Channel ID**: Identifies the specific channel where the message was sent
   - **Bucket**: A static 10-day time window used for data partitioning
   - **Message ID**: A Snowflake-type ID that is chronologically sortable

## Good Articles

- [How Discord Stores Billions of Messages](https://discord.com/blog/how-discord-stores-billions-of-messages)
- [How Discord Stores Trillions of Messages](https://discord.com/blog/how-discord-stores-trillions-of-messages)
- [Benchmarking GraphQL Solutions in the JS/TS Landscape](https://tomekdev.com/posts/benchmarking-graphql-solutions-in-the-js-ts-landscape)
