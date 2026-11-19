# Backend Assignment — Node.js, Express and MongoDB

A REST API project using Node.js, Express.js, MongoDB Atlas and Mongoose.

## Features
- MongoDB Atlas connection using environment variables
- User registration with bcrypt password hashing
- User login and logout status
- Post create, read, update and delete (CRUD)
- JSON request/response handling, input validation and error responses

## Requirements
- Node.js 20.19 or later (recommended: Node.js 22), npm, MongoDB Atlas account and Postman

## Setup
1. Clone this repository and open the project folder.
2. Install dependencies: `npm install`
3. Create a file named `.env` in the project root.
4. Copy the format from `.env.example` and add your own MongoDB Atlas connection string as `MONGO_URI`.
5. Start the server: `npm run dev`
6. Open `http://localhost:3000`. You should see a message that the API is running.

**Important:** Never commit your real `.env` file or MongoDB password. The `.gitignore` file excludes it.

## API endpoints

Base URL: `http://localhost:3000`

### Users
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/users/register` | Register a user |
| POST | `/api/users/login` | Log in a user |
| POST | `/api/users/:userId/logout` | Log out a user |

Register JSON:
```json
{ "username": "sakshi", "email": "sakshi@example.com", "password": "pass1234" }
```

Login JSON:
```json
{ "email": "sakshi@example.com", "password": "pass1234" }
```

### Posts
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/posts` | Create a post |
| GET | `/api/posts` | Get all posts |
| GET | `/api/posts/:id` | Get one post |
| PATCH | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

Create JSON:
```json
{ "name": "Sample post", "description": "My first backend post", "age": 20 }
```

## Postman testing
Import `postman/Backend-Assignment.postman_collection.json` into Postman. Set the collection variable `baseUrl` to `http://localhost:3000`. For registration and login, edit the sample email/password in the request body if needed. After creating a post, copy its returned `_id` into the `postId` collection variable before testing get-one, update and delete.

For POST and PATCH requests, select **Body → raw → JSON**.

## Project structure
```
intro-to-backend1/
├── src/
│   ├── config/db.js
│   ├── models/User.js
│   ├── models/Post.js
│   ├── controllers/userController.js
│   ├── controllers/postController.js
│   └── routes/
│       ├── userRoutes.js
│       └── postRoutes.js
├── postman/Backend-Assignment.postman_collection.json
├── app.js
├── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```
