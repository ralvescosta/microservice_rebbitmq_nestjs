# Simple Microservices communication with RebbitMQ and NestJS

## Definitions

For you to use this repository easily, initially install the docker and docker-compose.

## Description

Microservices were built using the NestJS framework being instantiated as a hybrid application.

Each of the microservices is an HTTP server and are connected to amqp.

So when one of the microservices receives an Http request it publishes a message in a queue, the other microservice receives this message via RebbitMQ

## Get Started

Run amqp on docker

```bash
docker-compose up
```

Start first microservice

```bash
cd service_one

yarn

yarn start:debug
```

Start second microservice

```bash
cd service_two

yarn

yarn start:debug
```
