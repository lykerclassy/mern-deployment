# 🚀 MERN Stack Deployment & DevOps

This project demonstrates a production-ready MERN application with a complete CI/CD pipeline, environment configuration, and system monitoring.

## 🔗 Live Deployment Links
* **Frontend (Vercel):** [https://mern-deployment-np7u.vercel.app](https://mern-deployment-np7u.vercel.app)
* **Backend (Render):** [https://mern-deployment-1.onrender.com](https://mern-deployment-1.onrender.com)

---

## 📂 Features Implemented

### 1. 🏭 CI/CD Pipeline (GitHub Actions)
* **Automated Workflow:** Defined in `.github/workflows/ci.yml`.
* **Continuous Integration:** Triggers on every push to `main`, installing dependencies and running build scripts to ensure code quality before deployment.

### 2. ☁️ Cloud Deployment
* **Backend:** Hosted on **Render.com** using Node.js environment. Secured with environment variables for database credentials.
* **Frontend:** Hosted on **Vercel** with automated build optimization for React (Vite).
* **Database:** **MongoDB Atlas** cluster with connection pooling.

### 3. 📊 Monitoring & Health Checks
* **Health Endpoint:** The API includes a `/health` endpoint that reports system uptime and status.
* **Live Dashboard:** The frontend fetches this status in real-time to display a "System Status: UP" indicator.
* **Production Logging:** Server-side logging enabled for debugging production issues.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **DevOps:** GitHub Actions, Render, Vercel

---

## ⚙️ Local Setup Instructions

If you want to run this project locally:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mern-deployment