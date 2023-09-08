# Mini Project Documentation

<p align="left">
  Built with:
</p>

[![Express-JS](https://img.shields.io/badge/Express--JS-%5E4.18.2-green)](https://www.npmjs.com/package/express)
[![Sequelize-JS](https://img.shields.io/badge/Sequelize--JS-%5E6.32.1-blue)](https://www.npmjs.com/package/sequelize)
[![Mysql](https://img.shields.io/badge/MySQL-%5E3.6.0-blue)](https://www.npmjs.com/package/mysql2)

## Table of Contents

- [Introduction](#introduction)
- [How to Run the App](#how-to-run-the-application)
- [Deployment](#deployment)
- [Documentation](#documentation)

## Introduction

Welcome to the documentation for my Mini Project assessment. This is Backend implements example of using authorization and authentication, user related API and is built using Express.js, Sequelize, and MySQL.

## How to Run the Application

### 1. Clone this repository

Clone this repository by run the following code:

```
$ git clone <this-repo-url>
```

### 2. Install dependency packages

Install dependency packages by run the following code inside project folder:

```
$ npm install
```

### 3. Configure .env file

Configure .env file by create file named .env inside project folder and add this line to the file:

```
NODE_ENV = your current env : development|production

<!-- using production or development env will change endpoint response -->

DB_USER = your database username
DB_PASSWORD = your database password
DB_HOST = your database host
DB_NAME = your database name


SECRET_KEY = your jwt secret key
ISSUER = your jwt issuer
EXPIRES_IN = jwt expired at
```

### 4. Database Creation

Compose database container using docker, run the following code

```
$ docker-compose up
```

### 5. Database Migration

To migrate database, run the following code

```
$ npm run migrate:up
```

### 6. Run projects

Run this projects by run the following code:

```
$ npm run dev
```

## Documentation

you can see this project full features and documentation at this [link](https://tinyurl.com/topindo-assessment)
