# 🚀 Three-Tier Task Manager Application

This project is a simple three-tier application demonstrating a full-stack setup with frontend, backend, and database.

## 🧱 Architecture

Frontend → Backend → Database

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (Express)
- Database: MySQL

## ✨ Features

- Add tasks
- View tasks
- Delete tasks

## 🎯 Purpose

This project is built to implement and demonstrate DevOps practices including containerization, CI/CD, and Kubernetes deployment on AWS EKS.

---

## 🐳 Phase 1: Containerization (Completed ✅)

- Built a 3-tier application
- Created Dockerfiles for backend and frontend
- Used Docker Compose to orchestrate services
- Implemented service-to-service communication
- Added retry logic for database readiness
- Debugged real-world issues:
  - Container startup timing issues
  - Port conflicts
  - API routing mismatches
  - Docker caching problems

---

## 💾 Data Persistence

- Used Docker named volumes for MySQL: db_data → /var/lib/mysql

- Ensures data is preserved across container restarts

---

## 📦 Phase 2: Container Registry (Completed ✅)

- Built Docker images for:
  - Backend
  - Frontend
- Tagged and pushed images to AWS ECR
- Verified image availability in cloud registry

---

## 🔄 DevOps Workflow

Code → Docker Build → Docker Compose → ECR Push → (Next: EKS Deployment)

---

## 🚀 Upcoming Phases

- 🔹 Deploy application on EKS (Kubernetes)
- 🔹 Provision infrastructure using Terraform
- 🔹 Implement CI/CD pipeline
- 🔹 Add monitoring (Prometheus + Grafana)

---

## 🛠️ Tech Stack

- Docker
- Docker Compose
- Node.js
- MySQL
- Nginx
- AWS ECR
- (Next: EKS, Terraform, CI/CD, Monitoring)

---

## 📌 Key Learnings

- Running services together exposes real system behavior
- Container networking differs from local execution
- Debugging distributed systems requires tracing across layers
- Docker image caching can cause unexpected inconsistencies

---

## 🤝 Contributing / Following Along

This project is being built step-by-step as part of a deeper exploration into DevOps systems.

If you're working on similar setups or exploring cloud-native architectures, feel free to connect and share insights.

---

## 📬 Author

DevOps Engineer exploring full system design and implementation across containers, cloud, and orchestration.
