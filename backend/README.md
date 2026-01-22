# Admin Panel Backend Setup

This folder contains the backend API for the Capton Visa Point Admin Panel.

## Setup Instructions

1.  **Install Dependencies** (if not already done):

    ```bash
    cd backend
    npm install
    ```

2.  **Configure Environment**:
    - Open `backend/.env` file.
    - Replace the `MONGO_URI` with your actual MongoDB Atlas connection string.
    - Example: `mongodb+srv://user:password@cluster.mongodb.net/captonvisa?retryWrites=true&w=majority`

3.  **Seed Database (Create Admin)**:
    - Run this command to create the initial admin user and sample blogs:

    ```bash
    npm run seed
    ```

    - Default Admin: `admin@captonvisa.com`
    - Default Password: `Admin@123`

4.  **Start Server**:
    ```bash
    npm run dev
    ```

    - Server will run at `http://localhost:5000`

## API Endpoints

- **Auth**: `POST /api/auth/login`
- **Leads**: `GET /api/leads` (Protected), `POST /api/leads` (Public)
- **Blogs**: `GET /api/blogs` (Public), `POST/PUT/DELETE /api/blogs` (Protected)
