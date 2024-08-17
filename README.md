# Nodejs Rest API [![CI Pipeline](https://github.com/Codexter-Lab/nodejs-rest-api/actions/workflows/ci.yaml/badge.svg)](https://github.com/Codexter-Lab/nodejs-rest-api/actions/workflows/ci.yaml)

This is a production-grade backend service that provides APIs for user and product management. The application is built using Node.js, Express, and PostgreSQL. It also includes a CI/CD pipeline using GitHub Actions to run unit tests, build Docker images, and push them to DockerHub.

## Features

- **User API**: Create, read, update, and delete user data.
- **Product API**: Manage products with features to create, read, update, and delete product details.
- **CI/CD Pipeline**: Automated testing, Docker image building, and deployment using GitHub Actions.

## Technologies Used

- Node.js
- Express
- PostgreSQL
- Sequelize (ORM)
- Docker
- GitHub Actions

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18.x.x or higher)
- Docker
- PostgreSQL (if running locally without Docker)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Codexter-Lab/nodejs-rest-api
cd nodejs-rest-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a .env file in the root directory with the following content:

```plaintext
JWT_SECRET=your_jwt_secret_key
DATABASE_URL=postgres://username:password@localhost:5432/yourdatabase
Replace your_jwt_secret_key with a strong secret key.
Replace username, password, and yourdatabase with your PostgreSQL credentials.
```

### Running the Application

#### Locally

1. **Start PostgreSQL (if not using Docker):**

Make sure your PostgreSQL server is running, and the database is set up according to your .env configuration.

Run the application:

```bash
npm start
```

The application will start on http://localhost:3000.

2. **Access the APIs:**

User API: http://localhost:3000/users
Product API: http://localhost:3000/products

#### With Docker

Build and run the containers:

```bash
docker-compose up --build
```
The application will be accessible at http://localhost:3000.

### Running Tests
To run the unit tests, use the following command:

```bash
npm test
```
This will execute all tests in the src/tests directory using jest.

### GitHub Actions CI/CD Pipeline
This project includes a GitHub Actions workflow that automates the testing, Docker image building, and deployment process.
### Workflow Details

- **Test Job:**
  - Runs on every push or pull request to the `main` branch.
  - Sets up PostgreSQL as a service and runs the unit tests.

- **Build and Push Job:**
  - Executes after a successful test job.
  - Builds the Docker image and pushes it to DockerHub.

### Secrets

Ensure you add the following secrets to your GitHub repository:

- `DOCKER_USERNAME`: Your DockerHub username.
- `DOCKER_PASSWORD`: Your DockerHub password.

### Deployment

Once the Docker image is pushed to DockerHub, you can deploy it to any environment that supports Docker, such as AWS, Azure, GCP, or your on-premises servers.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.


### Key Points Covered in the `README.md`:

1. **Overview of the application**: Brief description of the project's purpose and features.
2. **Technologies used**: List of core technologies and tools utilized.
3. **Getting Started**: Instructions for setting up the project, both locally and with Docker.
4. **Running Tests**: Details on how to run unit tests using `jest`.
5. **GitHub Actions CI/CD Pipeline**: Explanation of the automated workflow, including secrets configuration.
6. **Deployment**: General guidance on how to deploy the Docker image.
7. **Contributing**: Encouragement for contributions and instructions on how to do so.
8. **License**: Information about the project's licensing.

This `README.md` provides a comprehensive guide for developers and stakeholders to understand, set up, and contribute to the project.
