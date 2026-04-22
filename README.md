---

# 💬 Real-Time Chat App

A full-stack real-time chat application built with the **MERN stack** and **Socket.IO** for instant messaging.

---

## 🚀 Features

* 🔐 JWT Authentication
* 💬 Real-time messaging
* 🟢 Online user status
* 🖼️ Image upload (Cloudinary)
* ⚡ Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** React, Zustand, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Real-Time:** Socket.IO

---

## ⚙️ Setup

```bash
# Clone repo
git clone https://github.com/your-username/chat-app.git

# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

Create a `.env` file in backend:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 🌐 API (Sample)

* `POST /api/auth/login`
* `POST /api/messages/send/:id`
* `GET /api/messages/:id`

---

## 🚀 Future

* Group chats
* Typing indicators
* Video calls (WebRTC)

---

## 👨‍💻 Author

**Vansh Talwar**

---
