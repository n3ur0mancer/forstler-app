# Forstler – Single Page Application

Repository for the app part of Forstler. Please keep in mind that this is a work in progress.

## What is this project about?

This repository is the ReactJs single page application part of Forstler. Forstler is an app to monitor and visualize forest health. It uses regional data from thir party providers and compares it with the local data which is being gathered by the Forstler IoT module. The repository for this module can be found here: https://github.com/n3ur0mancer/forstler-iot

The Forstler app also tries to provide recommendations for tree species, which can be suitable for the selected location, based on the climate, lighting and soil conditions.

This project is currently just a mere prototype and needs further development to be fully functional.

## Which tech stack is being used?

The following technologies/ software is being used in this project:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [ReactJs](https://reactjs.org/)
- [Recharts](https://recharts.org/)
- [Pigeon-Maps](https://pigeon-maps.js.org/)

## Getting Started

Clone the repository and navigate to the directory.

Install the dependencies:

```
npm install
```

Start the application:

```
npm start
```

Your default browser should open up automatically, if not copy and paste the following URL: localhost:3000/home
