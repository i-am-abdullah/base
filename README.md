
---

# **Base - A Production-Grade Express Starter Template**

## **Why Choose Base?**

Base is a robust, scalable, and production-ready Express.js starter template written in TypeScript. It provides essential features such as JWT authentication with access and refresh tokens, secure password handling with bcrypt, and a modular structure for easy maintainability. Whether you're building APIs for small applications or enterprise-grade solutions, Base sets a strong foundation for your project with industry best practices.

### **Key Features**
- **TypeScript Support**: Type safety and modern JavaScript features.
- **JWT Authentication**: Includes secure authentication with access and refresh tokens.
- **Password Security**: Utilizes bcrypt for hashing and comparing passwords.
- **Modular Design**: Clean and scalable folder structure for maintainability.
- **Production-Grade Configuration**: Uses `dotenv` for environment variables and is pre-configured for deployment.
- **Error Handling**: Centralized and customizable error-handling middleware.
- **CORS Support**: Pre-configured CORS for cross-origin requests.
- **API Testing Ready**: Includes a `.rest` file for quick and easy API testing using REST Client in VS Code.

---

## **Table of Contents**
1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Folder Structure](#folder-structure)
4. [Available Scripts](#available-scripts)
5. [API Endpoints](#api-endpoints)
6. [Testing with REST Client](#testing-with-rest-client)
7. [Contributing](#contributing)
8. [License](#license)

---

## **Installation**

Follow these steps to clone and set up the project:

```bash
# Clone the repository
git clone https://github.com/your-repo/base.git

# Navigate to the project directory
cd base

# Install dependencies
npm install
```

---

## **Getting Started**

### **Setup Environment Variables**

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
SALT_ROUNDS=10
```

### **Run the Project**

For development:

```bash
npm run dev
```

For production:

```bash
npm run build
npm start
```

The server will run on `http://localhost:<PORT>`.

---

## **Folder Structure**

Here’s an overview of the project's folder structure:

```
base/
│
├── src/
│   ├── config/        # Configuration files (e.g., database connection)
│   ├── controllers/   # Business logic for API routes
│   ├── middlewares/   # Middleware for request validation and authentication
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   ├── utils/         # Helper utilities
│   ├── app.ts         # Express app initialization
│   └── server.ts      # Entry point to start the server
│
├── .env               # Environment variables
├── package.json       # Project metadata and scripts
├── tsconfig.json      # TypeScript configuration
├── .gitignore         # Ignored files and folders
├── requests.rest      # REST Client file for API testing
└── dist/              # Compiled output for production (generated after build)
```

---

## **Available Scripts**

### **`npm run dev`**
Starts the development server with hot-reloading using `nodemon`.

### **`npm run build`**
Compiles the TypeScript code into JavaScript (output in the `dist` directory).

### **`npm start`**
Starts the server in production mode.

---

## **API Endpoints**

### **Authentication**

#### **Register User**
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "fullName": "John Doe",
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "fullName": "John Doe",
      "username": "john_doe",
      "email": "john.doe@example.com"
    }
  }
  ```

#### **Login User**
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "john_doe",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "accessToken": "your_access_token",
    "refreshToken": "your_refresh_token"
  }
  ```

#### **Refresh Token**
- **URL**: `/api/auth/refresh-token`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "refreshToken": "your_refresh_token"
  }
  ```
- **Response**:
  ```json
  {
    "accessToken": "new_access_token"
  }
  ```

#### **Check Authentication**
- **URL**: `/api/auth/validate`
- **Method**: `GET`
- **Headers**:
  ```
  Authorization: Bearer your_access_token
  ```
- **Response** (If authenticated):
  ```json
  {
    "message": "User authenticated",
    "user": {
      "username": "john_doe",
      "email": "john.doe@example.com"
    }
  }
  ```
- **Response** (If not authenticated):
  ```json
  {
    "message": "user not authenticated"
  }
  ```

---

## **Testing with REST Client**

The project includes a `requests.rest` file for easy API testing with the REST Client extension in VS Code. Follow these steps to use it:

1. Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in VS Code.
2. Open the `requests.rest` file in the root directory.
3. Click the "Send Request" button above any request in the file.

The `.rest` file includes pre-configured API requests, such as registration, login, token refresh, and authentication checks. You can quickly verify that the application is working as expected without additional tools.

---

## **Contributing**

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Open a pull request.

---

## **Contact**

For any queries or issues, feel free to reach out to us at [heyiamabdullah@gmail.com](mailto:heyiamabdullah@gmail.com).

Happy coding! 🚀