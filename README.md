# XE Property App

## Description
This project is a full-stack web application with a **React (Vite)** frontend and an **Express.js** backend
which connects to **mySQL Database** with **sequelize**.

## Tech Stack
```
# Frontend
Tailwind CSS: rapid styling
Radix UI: headless ui components
React Query: handling api data fetching, caching, and synchronization efficiently
React Hook Form: to manage form state with minimal re-renders
Yup: schema based validation integrated with RHF
Axios: http client for REST API comunication

# Backend 
Express js: for building REST APIs
Sequelize ORM: managing models, queries and migrations
MYSQL: relational database
Morgan: HTTP request logger middlware
Axios: for external API calls
Jest: unit testing
Supertest: HTTP assertions for testing Express endpoints
```

The project structure is divided into two main folders:
- `frontend/` → React Vite app
- `backend/` → Express.js API server  

## Prerequisites
- [Node.js](https://nodejs.org/) (v22 or newer)
- [npm](https://www.npmjs.com/)  (v10 or newer)

## Installation

### 1. Clone the repository

```
git clone https://github.com/ManosTs/xe-property-app.git
cd xe-property-app

```Install depdencies
cd backend
npm install

cd frontend
npm install

``` Start backend
cd backend
npm run dev
backend should be running on http://localhost:8080 otherwise change SERVER URL in frontend/.env 

``` Start frontend
cd frontend
npm run dev
the frontend will start at http://localhost:5173
```

### 2. Database configuration

The backend connects to a MySQL database through configuration defined in `backend/config/database.config.ts`, which loads settings from the `.env` file.



