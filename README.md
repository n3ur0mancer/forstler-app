# Forstler – Single Page Application

Repository for the app part of Forstler. Please keep in mind that this is a work in progress.

<img width="1103" alt="frontend" src="https://user-images.githubusercontent.com/46748400/224561100-af71a2f4-61d2-490d-bdb7-cbe4aec883a3.png">

## What is this project about?

This repository is the single page application part of Forstler. Forstler is an app to monitor and visualize forest health. It uses regional data from third party providers and compares it with the local data which is being gathered by the Forstler IoT module.

The IoT part can be found in the [forstler-iot ](https://github.com/n3ur0mancer/forstler-iot) repository.

The Forstler app also tries to provide recommendations for tree species, which can be suitable for the selected location, based on the climate, lighting and soil conditions.

This project is currently just a prototype and needs further development to be fully functional.

## Getting Started

### Prerequisites to get started

This project assumes that you have [Node.js](https://nodejs.org/en/) and [Docker](https://www.docker.com/) already up and running on your machine.

### Create a MySQL container in Docker

1. The Docker Desktop application is optional, but a nice user interface tool to visualise the running containers.
2. Download the _docker-compose.yml_ file, and store it in a dedicated directory. You can download the file from the [Kaggle Forstler Project](https://kaggle.com/datasets/483ca185447940cc59deb6522599f8902ba71ab6922eb379a3ac15ff7e7820ba).

3. Compose a docker container from the _docker-compose.yml_ file in the directory where the file is located:

```
docker-compose -f docker-compose.yml up
```

4. The docker container should now be up and running.
5. You can terminate the container via the Docker Desktop application, or with the following command:

```
docker stop forstler-mysqldb
```

6. To restart the created container, use the Docker Desktop application, or the following command:

```
docker start forstler-mysqldb
```

### Connect and use SQL workbench

The following part assumes that you set up the MySQL docker container following the instructions from the previous section: “Create a MySQL container in Docker”.

I am using Sequel Ace since it seems to be the most reliable SQL workbench for me, but the following procedure should be roughly the same for other SQL workbenches as well.

1. Start the forstler-mysqldb docker container.
2. Open the SQL workbench of your choice and enter the credentials and port.
3. The port should be set to: 3307.
4. Test the connection and and insert the chosen password from the _docker-compose.yml_ .
5. You can now use the user interface of the SQL workbench to work with the database.

### Creating the tables and populating them with data

All the necessary data for the prototype can be found and downloaded from the [Kaggle Forstler Project](https://kaggle.com/datasets/483ca185447940cc59deb6522599f8902ba71ab6922eb379a3ac15ff7e7820ba). Also included are the aforementioned _docker-compose.yml_ and the following _dbconfig.env_.

Also included are the CREATE TABLE syntaxed, which should be used in the created docker container to create the necessary tables. Once these are created, import the CSV datasets. They are conveniently named after the table that they should be imported in.

### Creating the .env file for the database connection

Insert a _dbconfig.env_ file in the root directory of the project (the directory with client and server inside).

In case you are using the stock configuration from the part “Create a MySQL container in Docker” you can simply download the _dbconfig.env_ file from the [Kaggle Forstler Project](https://kaggle.com/datasets/483ca185447940cc59deb6522599f8902ba71ab6922eb379a3ac15ff7e7820ba) and store it in the root directory (i.e. in the directory with the _server_ and _client_ directories).

In case you used your personal configuration in the previous parts, make sure to adapt the information accordingly. The .env is included in the _.gitignore_ file to make sure, that your supplied credentials will not be uploaded in case you want to fork this project.

### Starting the server

1. Naviagte to the `./forstler-app/server` directory.
2. Install the dependencies:

```
npm install
```

3. In the CLI start the server with the following command:

```
node index.js
```

4. You should be greeted with the following statement if everything worked our correctly: “Server listening on port 3001”

### Starting the client

1. Naviagte to the `./forstler-app/client` directory.
2. Install the dependencies:

```
npm install
```

3. In the CLI start the server with the following command:

```
npm start
```

4. The react.js app should now be up and running on the port 3000.
