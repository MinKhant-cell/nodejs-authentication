# Node.js Authentication with NestJS, JWT, Prisma, and Postgres

## Overview

This project demonstrates a robust authentication system using Node.js, NestJS, JWT, Prisma, and Postgres. It provides a secure and scalable solution for managing user authentication, leveraging the power of modern technologies.

### Features

*   **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
*   **JWT (JSON Web Tokens)**: A standardized token format for securely transmitting information between parties.
*   **Prisma**: A modern ORM (Object-Relational Mapping) tool for interacting with databases in a type-safe and efficient manner.
*   **Postgres**: A powerful, open-source relational database management system.

### Authentication Flow

1.  **Registration**: Users register by providing their credentials (e.g., email, password).
2.  **Login**: Users log in with their registered credentials.
3.  **JWT Token Generation**: Upon successful login, a JWT token is generated and returned to the user.
4.  **Token Verification**: The user includes the JWT token in subsequent requests to access protected routes.
5.  **Token Validation**: The server verifies the JWT token on each request to ensure authenticity and authorization.

### Prisma and Postgres Integration

*   **Database Schema**: Prisma generates a database schema based on the defined models.
*   **Data Access**: Prisma provides a type-safe interface for interacting with the Postgres database.

### Security Considerations

*   **Password Hashing**: Passwords are hashed using a secure algorithm (e.g., bcrypt) to protect user credentials.
*   **Token Expiration**: JWT tokens are set to expire after a specified period to minimize security risks.

### Getting Started

1.  **Clone the Repository**: Clone this repository to your local machine.
2.  **Install Dependencies**: Run `npm install` or `yarn install` to install the required dependencies.
2.  **Docker Compose**: Run `docker-compose up -d` to setup the required database.
3.  **Configure Environment Variables**: Set environment variables for your Postgres database and other configurations or `cp .env.example .env`.
4.  **Start the Application**: Run `npm run start:dev` or `yarn start` to start the application.

### API Endpoints

*   **POST /auth/login**: Register a new user.
*   **GET /users**: Log in an existing user.
*   **GET /users/{id}**: Access a protected route (requires a valid JWT token).