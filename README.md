<h1 align="center">Backend - Zwallet</h1>
<p align="center">
  <a href="https://booking-tickitz-film.netlify.app/" target="_blank"><img src="./images/Zwallet.png" width="400" alt="Zwallet" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Endpoint](#endpoint)
- [Installation](#installation)
- [Related Project](#related-project)

## Introduction

Zwallet is a digital wallet application that simplifies your financial needs and can save a lot of time on your banking needs with just one application. Zwallet is in the field of digital banking, which is increasingly developing rapidly as technology advances. This application is able to save money, make transfers between users or top up balances.

## Features

- JWT authentication with cookie

- Nodemailer for email verification

- Upload image using multer

- Form validation using joi

- CRUD for all tables required in the application

## Built With

- [ExpressJs](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Nodemailer](https://nodemailer.com/)

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [XAMPP](https://www.apachefriends.org/index.html)

## Endpoint

- User

|  METHOD  |                API                 |
| :------: | :--------------------------------: |
|  `GET`   |           /api/v1/users            |
|  `GET`   |       /api/v1/users/find-one       |
|  `POST`  |           /api/v1/users            |
|  `GET`   |     /api/v1/users/auth/verify      |
|  `PUT`   |         /api/v1/users/:id          |
|  `POST`  |      /api/v1/users/auth/login      |
|  `POST`  | /api/v1/users/auth/forgot-password |
|  `PUT`   | /api/v1/users/auth/reset-password  |
|  `PUT`   | /api/v1/users/change-password/:id  |
|  `GET`   |       /api/v1/users/pin/:id        |
|  `POST`  |      /api/v1/users/pin/:email      |
|  `PUT`   |       /api/v1/users/pin/:id        |
|  `POST`  |   /api/v1/users/phoneNumber/:id    |
| `DELETE` |   /api/v1/users/phoneNumber/:id    |
| `DELETE` |         /api/v1/users/:id          |

- Transaction

| METHOD |                  API                   |
| :----: | :------------------------------------: |
| `GET`  |          /api/v1/transactions          |
| `GET`  |        /api/v1/transactions/:id        |
| `GET`  |   /api/v1/transactions/details/users   |
| `GET`  |    /api/v1/transactions/details/:id    |
| `GET`  | /api/v1/transactions/details/users/:id |
| `PUT`  |    /api/v1/transactions/top-up/:id     |
| `GET`  |    /api/v1/transactions/income/:id     |
| `GET`  |    /api/v1/transactions/expense/:id    |
| `GET`  |   /api/v1/transactions/receiver/:id    |
| `POST` |          /api/v1/transactions          |
| `POST` |      /api/v1/transactions/details      |

## Installation

1. Open your terminal or command prompt. Then, clone the repository `git clone https://github.com/chaerulmarwan20/zwallet-backend.git`
2. Create database named `zwallet` and import `zwallet.sql` from this repository
3. Go to directory `cd zwallet-backend`
4. Install all required package `npm install`
5. Create a new file named `.env`, add it's content from `.env.example`
6. Run server `npm run dev'

## Related Project

- :white_check_mark: [`Frontend Zwallet`](https://github.com/chaerulmarwan20/zwallet-frontend)
- :rocket: [`Production`](https://zwallet-banking.vercel.app/)
