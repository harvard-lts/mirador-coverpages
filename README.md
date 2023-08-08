# Mirador Coverpages

A microservice for creating PDF coverpages for use with mirador-pdiiif-plugin.

## Technology Stack
### Language
NodeJS
Mirador

### Framework
Express

### Development Operations
Docker Compose

## Local Development Environment Setup Instructions

### 1: Clone the repository to a local directory
```git clone git@github.com:harvard-lts/mirador-coverpages.git```

### 2: Create app config

#### Create config file for environment variables
- Make a copy of the config example file `./env-example.txt`
- Rename the file to `.env`
- Replace placeholder values as necessary

*Note: The config file .env is specifically excluded in .gitignore and .dockerignore, since it contains credentials it should NOT ever be committed to any repository.*

### 3: Start

#### START

This command builds all images and runs all containers specified in the docker-compose-local.yml configuration.

```
docker-compose -f docker-compose-local.yml up -d --build --force-recreate
```

### 4: SSH into Container (optional)

#### Run docker exec to execute a shell in the container by name

Open a shell using the exec command to access the mps-viewer container.

```
docker exec -it mirador-coverpages bash
```

### 6: Stop

#### STOP AND REMOVE

This command stops and removes all containers specified in the docker-compose-local.yml configuration. This command can be used in place of the 'stop' and 'rm' commands.

```
docker-compose -f docker-compose-local.yml down
```
