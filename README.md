# Forstler – Single Page Application

Repository for the app part of Forstler. Please keep in mind that this is a work in progress.

## What is this project about?

This repository is the ReactJs single page application part of Forstler. Forstler is an app to monitor and visualize forest health. It uses regional data from thir party providers and compares it with the local data which is being gathered by the Forstler IoT module. The repository for this module can be found here: https://github.com/n3ur0mancer/forstler-iot

The Forstler app also tries to provide recommendations for tree species, which can be suitable for the selected location, based on the climate, lighting and soil conditions.

This project is currently just a mere prototype and needs further development to be fully functional.

## Which tech stack is being used?

The following technologies/ software is being used in this project:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/)
- [ReactJs](https://reactjs.org/)
- [Recharts](https://recharts.org/)
- [Pigeon-Maps](https://pigeon-maps.js.org/)

## Getting Started

### Create a MySQL container in Docker

1. Install Docker. The Docker Desktop application is optional, but a nice user interface tool to visualise the running containers.
2. Create a _docker-compose.yml_ file in a dedicated directory.
3. Copy paste the following code into the newly created file:

```
version: "3.3"
services:
  db:
    container_name: forstler-mysqldb
    image: mysql:latest
    command: --default-authentication-plugin=mysql_native_password --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: mypassword
      MYSQL_DATABASE: mydb
      MYSQL_ROOT_HOST: "%"
    volumes:
      - ./mysql-data/8.0.23:/var/lib/mysql
    ports:
      - 3307:3306
    expose:
      - 3307
```

4. Compose a docker container from the _docker-compose.yml_ file in the directory where the file is located:

```
docker-compose -f docker-compose.yml up
```

5. The docker container should now be up and running.
6. You can terminate the container via the Docker Desktop application, or with the following command:

```
docker stop forstler-mysqldb
```

7. To restart the created container, use the Docker Desktop application, or the following command:

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

Use the “Create table” files to create the necessary tables.

Import the data. The datasets are available at Kaggle

### Cloning the project

Use your preferred method to clone the whole project. Navigate to the root folder of the cloned project and install the dependencies for the client and the server.

1. Change your directory to the `./forstler-app/client` directory and install the dependencies with `npm install`.
2. Repeat this process in the `./forstler-app/server` directory.

### Creating the .env file for the database connection

Create a _dbconfig.env_ file in the root directory of the project (the directory with client and server inside).

In case you are using the stock configuration from the part “Create a MySQL container in Docker” you can simply copy and paste the following into the newly created _dbconfig.env_ file:

```
MYSQL_DATABASE="mydb"
MYSQL_USERNAME="root"
MYSQL_PASSWORD="mypassword"
MYSQL_HOST="127.0.0.1"
```

In case you used your personal configuration in the previous parts, make sure to adapt the information accordingly. The .env is included in the _.gitignore_ file to make sure, that your supplied credentials will not be uploaded in case you want to fork this project.

### Starting the server

Make sure that you have Node.js and Express installed.

1. Naviagte to the `./forstler-app/server` directory.
2. In the CLI start the server with the following command:

```
node index.js
```

3. You should be greeted with the following statement if everything worked our correctly: “Server listening on port 3001”

### Starting the client

Make sure that you have all the necessary dependencies installed.

1. Naviagte to the `./forstler-app/client` directory.
2. In the CLI start the server with the following command:

```
npm start
```

3. The react.js app should now be up and running on the port 3000.
