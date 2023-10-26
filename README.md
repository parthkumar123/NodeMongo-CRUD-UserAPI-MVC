# CRUD User API with MongoDB and Node.js

## Repository Description

This repository contains a simple yet powerful User API built using Node.js and MongoDB, following the Model-View-Controller (MVC) architecture. It allows you to perform Create, Read, Update, and Delete (CRUD) operations on user data. Whether you're a beginner looking to learn the basics of building a RESTful API or an experienced developer seeking a quick, reliable solution, this repository has got you covered.

## Features

- **User Management**: Create, retrieve, update, and delete user information.
- **RESTful API**: Designed following RESTful principles for easy integration with various clients.
- **MongoDB Integration**: Seamlessly store user data in a MongoDB database, ensuring data persistence.
- **Express.js Framework**: Utilizes the popular Node.js framework, Express, for routing and handling HTTP requests.
- **Modular Code**: Organized codebase with modular components following the MVC architecture for easy maintenance and scalability.
- **Validation**: Validates user input to prevent invalid data from being processed.
- **Secure Authentication**: Incorporates secure authentication mechanisms to protect user data.
- **Sample Routes**: Includes sample routes for creating, retrieving, updating, and deleting users.

## Installation

1. Clone the repository: `git clone https://github.com/parthkumar123/NodeMongo-CRUD-UserAPI-MVC.git`
2. Navigate to the project directory: `cd NodeMongo-CRUD-UserAPI-MVC`
3. Install dependencies: `npm install`

## Usage

1. Configure MongoDB connection in `development.env` file.
2. Start the server: `npm run dev`
3. Use your preferred API client (e.g., Postman) to interact with the API endpoints.
4. Access the API at `http://localhost:3000` (or the configured port).

## API Endpoints

- **GET /users**: Get a list of all users.
- **GET /users/:id**: Get a user by ID.
- **POST /users**: Create a new user.
- **PATCH /users/:id**: Update an existing user.
- **DELETE /users/:id**: Delete a user.

## About

This repository was created and is maintained by Parth Shiyani. For questions or inquiries, you can reach me at [shiyaniparth276@email.com].

Happy coding!