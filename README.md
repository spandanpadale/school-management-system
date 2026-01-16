# 🎓 Student Management System

A full-stack Student Management System built using **React (Vite)**, **Node.js (Express)**, and **SQLite**.  
The application allows managing students with CRUD operations and a dashboard overview.

---

## 🚀 Features

- Add new students
- Edit existing student details
- Soft delete students
- Dashboard showing:
  - Total students
  - Active students
  - Deleted students
- Persistent data using SQLite
- Clean and responsive UI

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- SQLite (file-based, no admin access required)

---

## 📂 Project Structure

school-management-system/
│
├── backend/
│ ├── controllers/
│ ├── routes/
│ ├── db.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── package.json


## ▶️ How to Run the Project

## Backend
bash
cd backend
npm install
npm start


## Frontend
bash
Copy code
cd frontend
npm install
npm run dev

## 🧠 Implementation Notes

Soft delete is implemented using an isDeleted flag.

The SQLite database file (school.db) is generated locally and is not committed to GitHub.

This project works in restricted environments without admin permissions.

## 👨‍💻 Author

Spandan Padale

