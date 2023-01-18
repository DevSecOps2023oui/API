# Node watcher

This is a REST API that returns data from the database via different routes.

## Packages

Here are the packages used:

- @prisma/client: Used to connect to the database
- prisma : Used to connect to the database
- dotenv: Used to load environment variables
- express: Used to create a simple server
- typescript: adds additional syntax to JavaScript

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a .env file and add the following variables
4. Run `sh compile.sh`
5. Run `supervisor app`

## Use

6 routes différent

This "/" displays a house to see if the API is working
"/all" returns all data
"/allday" returns all the data of the day
"temp" returns only temperatures
"hydro" returns only hydrometry
"vent" returns only the wind speed

## How to test

Access url the different routes to see if data appear in your browser

## Build for production

Run `tsc` command to build the project. The build files will be in the `dist` folder.