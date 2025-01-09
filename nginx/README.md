# Nginx

- Load Balancer
- HTTP Caching
- Reverse Proxy
- SSL Termination

## Running Nginx

To run Nginx using Docker, you can use the following command:

```bash
docker run --name nginx-server -p 8080:80 -v .:/usr/share/nginx/html:ro -v ./nginx.conf:/etc/nginx/nginx.conf:ro -d nginx:stable-alpine
```

Alternatively, you can use a Dockerfile to build and run your Nginx container.

## References

- [Nginx Beginner's Guide](http://nginx.org/en/docs/beginners_guide.html).