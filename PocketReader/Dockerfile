FROM openjdk:17-jdk-slim
WORKDIR /target
ADD target/PocketReader-0.0.1-SNAPSHOT.jar target/PocketReader-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "target/PocketReader-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080