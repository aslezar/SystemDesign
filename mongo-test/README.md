# Mongo Load Testing

## Methods to Monitor MongoDB Performance

1. **Using Mongo Shell**  
   Run the following command to monitor connections:
   ```bash
   watch -n 1 'mongo --eval "printjson(db.serverStatus().connections)"'
   ```

2. **Using MongoDB Compass**  
   You can use [MongoDB Compass](https://www.mongodb.com/products/compass) to visualize performance statistics and monitor the database's health.

3. **Using Prometheus**  
   Set up Prometheus to collect and monitor MongoDB metrics for a more comprehensive analysis.