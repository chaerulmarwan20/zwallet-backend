<h1 align="center">Backend - Zwallet</h1>
<p align="center">
  <a href="https://zwallet-banking.vercel.app/" target="_blank"><img src="./images/Zwallet.png" width="400" alt="Zwallet" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Documentation](#documentation)
- [Link](#link)
- [Author](#author)

## Introduction

Zwallet is a digital wallet application that simplifies your financial needs and can save a lot of time on your banking needs with just one application. Zwallet is in the field of digital banking, which is increasingly developing rapidly as technology advances. This application is able to save money, make transfers between users or top up balances.

## Features

- JWT authentication

- Nodemailer for email verification

- Upload image using multer

- Form validation using joi

- CRUD for all tables required in the application

## Built With

- [ExpressJs](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/)
- [Joi](https://www.npmjs.com/package/joi)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Multer](https://www.npmjs.com/package/multer)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Ip](https://www.npmjs.com/package/ip)

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [MySQL](https://www.mysql.com/)

## Installation

1. Clone the repository

```
git clone https://github.com/chaerulmarwan20/zwallet-backend.git
cd zwallet-backend
```

2. Install package

```
npm install
```

3. Create a new database with a name `zwallet` and import `zwallet.sql` from this repository

4. Create .env file

```
# Host & Port
HOST=
PORT=
PORT_FRONTEND=

# Database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=zwallet

# Secret Key
SECRET_KEY=

# Email
EMAIL_USER=
EMAIL_PASS=
```

5. Run application

```
npm run dev
```

Or

```
npm start
```

## Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/11970262/TzXtJfmE)

## Link

- :white_check_mark: [`Frontend Zwallet`](https://github.com/chaerulmarwan20/zwallet-frontend)
- :rocket: [`Publication`](https://zwallet-banking.vercel.app/)

## Author

- [Chaerul Marwan](https://github.com/chaerulmarwan20)
