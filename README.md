# GENOAH Backend

---

## Description

GENOAH Backend is a REST API developed using Node.js, Express and Prisma ORM.

The API is responsible for managing subscription data, handling CRUD operations and connecting the frontend application to a MongoDB Atlas database.

---

## Features

- Create new subscriptions
- Get all subscriptions
- Update existing subscriptions
- Delete subscriptions
- Store subscription category and status
- Allow repeated account emails
- REST API architecture
- MongoDB Atlas database integration
- Prisma ORM database management

---

## Technologies Used

### Backend
- Node.js
- Express.js
- JavaScript
- Prisma ORM
- MongoDB Atlas
- REST API
- CORS

### Frontend Connection
- React
- Vite
- JavaScript
- CSS3
- Axios
- React Hooks
- Component-Based Architecture

### Tools & Version Control
- Git
- GitHub
- VS Code

---

## Project Development

This backend was developed based on a previous CRUD API originally created by me as part of my full stack development learning process.

The API was redesigned and expanded to support a subscription management system, replacing the original user registration structure with subscription-related data.

The backend was built using Node.js, Express and Prisma ORM, connected to MongoDB Atlas as the database service.

It is connected to a separate React frontend application, which consumes the API using Axios to create, read, update and delete subscription records.

During development, the API routes, database schema and server structure were adapted to support subscription fields such as service name, monthly price, account email, category and status.

---

## Project Structure

```bash
API/
│
├── prisma/
│   └── schema.prisma
│
├── generated/
│
├── node_modules/
│
├── README.md
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── prisma.config.ts
└── server.js
```

---

## GitHub Repository Backend

https://github.com/GustavoTR20/Genoah-backend

---

## GitHub Repository Frontend

https://github.com/GustavoTR20/Genoah-frontend

---

## Live Website

The backend API is deployed and can be accessed at:

https://genoah-frontend.onrender.com/

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/GustavoTR20/Genoah-backend.git
```

2. Navigate to the API folder:

```bash
cd API
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and add your MongoDB connection string:

```env
DATABASE_URL="your_mongodb_connection_string"
```

5. Generate Prisma client:

```bash
npx prisma generate
```

6. Push the Prisma schema to the database:

```bash
npx prisma db push
```

7. Start the backend server:

```bash
npm run dev
```

8. The API will run on:

```txt
http://localhost:3000
```