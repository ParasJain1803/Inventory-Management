# Inventory-Management
# InventiQ - Inventory Management System

## Overview
InventiQ is a full-featured inventory management system designed to streamline stock tracking, order management, and reporting. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this web application ensures smooth and efficient inventory operations for businesses of all sizes.

## Features
- 📦 **Inventory Tracking** - Monitor stock levels in real-time.
- 🛒 **Order Management** - Manage purchases and sales efficiently.
- 📊 **Analytics & Reports** - Generate insights on inventory trends.
- 🏷 **Product Categorization** - Organize items into categories for better tracking.
- 🔐 **User Authentication & Roles** - Secure access with role-based permissions.
- 📜 **Activity Logs** - Maintain records of all inventory transactions.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **State Management:** Redux (Optional)
- **Hosting:** Vercel (Frontend), Render/Heroku (Backend)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```sh
git clone https://github.com/ParasJain1803/InventiQ.git
cd InventiQ
```

### Backend Setup
```sh
cd backend
npm install
npm run dev
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## API Endpoints
| Method | Endpoint            | Description                |
|--------|--------------------|----------------------------|
| GET    | `/api/products`     | Fetch all products        |
| POST   | `/api/products`     | Add a new product         |
| PUT    | `/api/products/:id` | Update a product          |
| DELETE | `/api/products/:id` | Remove a product          |
| GET    | `/api/orders`       | Fetch all orders          |
| POST   | `/api/orders`       | Create a new order        |

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

---
