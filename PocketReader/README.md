# Build

mvn clean package && docker build -t pocket-reader .

# RUN

docker rm -f pocket-reader || true && docker run -p 3000:3000 pocket-reader