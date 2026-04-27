# 🚀 MERN MySQL Auth & CRUD Application

## 📌 Project Overview

This project is a full-stack web application built using the MERN stack (Mongo-like structure with MySQL as database).
It provides secure authentication and allows users to manage items with full CRUD operations, status tracking, and real-time statistics.

---

## ✨ Features

### 🔐 Authentication

* User Registration (Name, Email, Password)
* Secure Login using JWT (JSON Web Token)
* Password hashing using bcrypt
* Protected routes for authorized access only

### 📦 Item Management (CRUD)

* ➕ Add new items
* 📄 View all items
* ✏️ Update items
* ❌ Delete items

### 📊 Status Tracking

Each item has a status:

* Active
* Pending
* Completed

### 📈 Dashboard Statistics

* Displays number of items by status
* Updates dynamically after add/delete

### 🎨 User Interface

* Responsive design
* Background image UI
* Centered dashboard card
* Styled buttons and inputs

---

## 🛠️ Tech Stack

| Layer          | Technology       |
| -------------- | ---------------- |
| Frontend       | React (Vite)     |
| Backend        | Node.js, Express |
| Database       | MySQL            |
| Authentication | JWT              |
| Styling        | CSS              |

---

## 📁 Project Structure

```bash
mern-projectfinal/
│
├── mern-backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── itemController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── itemRoutes.js
│   ├── package.json
│   └── server.js
│
├── mern-frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── assets/
│   │   │   └── bg.jpg
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── database.sql
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```bash
git clone https://github.com/santoshc55/mern-auth-project.git
cd mern-projectfinal
```

---

### 🔹 2. Setup Backend

```bash
cd mern-backend
npm install
node server.js
```

---

### 🔹 3. Setup Frontend

```bash
cd mern-frontend
npm install
npm run dev
```

---

### 🔹 4. Setup Database

* Open MySQL / phpMyAdmin
* Create database:

```sql
CREATE DATABASE mern_auth_db;
```

* Import `database.sql`

---

## 🔑 Environment Variables (.env)

Create `.env` file inside backend:

```env
PORT=5000
JWT_SECRET=your_secret_key
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=mern_auth_db
```

---

## 🌐 API Endpoints

### 🔐 Auth APIs

* POST `/api/auth/register`
* POST `/api/auth/login`

### 📦 Item APIs

* GET `/api/items`
* POST `/api/items`
* PUT `/api/items/:id`
* DELETE `/api/items/:id`
* GET `/api/items/stats`

---

## 🧪 Testing Flow

1. Register a new user
2. Login with credentials
3. Add items with different statuses
4. Update items
5. Delete items
6. Verify stats update

---

## 📸 Screens

* Login Page
* Register Page
* Dashboard
* Stats Section

---

## 👨‍💻 Author

**Name:** Santosh Mahadev Chougule
**USN:** 2KD22EC043
**Email:** [chougulesantu01@gmail.com](mailto:chougulesantu01@gmail.com)

---

## 🎯 Conclusion

This project demonstrates a complete full-stack application using MERN architecture with MySQL, secure authentication, and dynamic CRUD operations with a modern UI.

---
