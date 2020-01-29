# Deployment Pipeline

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

On this deployment pipeline will cover:

  - Build docker
  - Push docker to image registry / docker hub
  - deploy into minikube

Pre-requisite:
  - `docker login through terminal` (This will use to deploy docker image into registry before deploy to kubernetes)
     example:
    ```
    $ docker login --username={your_docker_hub_username}
    ```
  - pull latest code from https://github.com/RobertMaulana/minikube_pipeline
  - minikube installed on your local computer

# Backend service

How to run builder pipeline:
```
$ cd minikube_pipeline/backend
$ ./deploy.sh
```
Detail:
In the `./deploy.sh` command it will start pipeline flow `build image`, `push image`, `deploy process`

# Frontend service

How to run builder pipeline:
```
$ cd minikube_pipeline/frontend
$ ./deploy.sh
```
Detail:
In the `./deploy.sh` command it will start pipeline flow `build image`, `push image`, `deploy process`

How to access frontend application:
```
$ minikube service frontend-svc --url
http://192.168.99.101:30000  <- copy & paste this url to your browser
```

# What're need to improve?
  - Application versioning include on the pipeline
  - Multi environment pipeline
  - Environment variable management need to improve
