# A2 – Full-Stack E-Commerce App

## Tech
- Frontend: React Native Expo, NativeBase, React Navigation, axios
- Backend: Node.js, Express.js, MongoDB (Mongoose)

- API base

Edit frontend/app.config.js → extra.API_URL to point to your backend (localhost or LAN IP).

Screens

Home (grid/list + search)

Product Details (add to cart)

Cart (update/remove)

Checkout (place order)

Order Confirmation

Profile (signup/login)

Categories/Filter

How FE talks to BE

The app uses src/api/axios.js to call Express endpoints:

GET /api/products, GET /api/products/:id

POST /api/auth/signup, POST /api/auth/login

GET/POST/DELETE /api/cart

POST /api/orders/checkout

DB Setup

Local MongoDB or MongoDB Atlas; models: Product, User, Order, CartItem.

## Quick start

### Frontend

cd ecommerce-app/frontend
npm i
npm start

### Backend

cd ecommerce-app/backend
cp .env.example .env   # or create .env as below
# .env:
# PORT=3000
# MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
# JWT_SECRET=super_secret_change_me
npm i
npm run seed
npm run dev

Developed by:

Anas Bin Masud 7860
Assignment 2 – Mobile Application Development
