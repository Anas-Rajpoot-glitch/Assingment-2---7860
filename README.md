Assignment 2 – E-Commerce Application
This project is a full-stack E-Commerce mobile app designed to demonstrate the connection between a React Native frontend and a Node.js + MySQL backend.
The application allows users to explore a product catalog, check details, and interact with data stored in a real database.

 Technology Stack
Frontend: React Native (Expo), React Navigation, Native Base
Backend: Node.js, Express.js
Database: MySQL

 Key Features
Product Display Screen: Shows a list of products retrieved from the backend.
API Integration: Fetches live data from a REST API built with Node.js and Express.
Modular Project Setup: Clear separation between frontend and backend folders.
User-Friendly Interface: Simple, mobile-friendly layout with responsive design.
Scalable Codebase: Easily extendable for more advanced features (e.g., authentication, cart, checkout).

 Steps to Run the Application
Backend Setup
cd backend
node server.js

Frontend Setup
cd frontend
npx expo start

You can open the app using the Expo Go mobile app or through an Android/iOS emulator.

🔗 API Endpoint Example
Products are fetched dynamically from:
http://localhost:3000/products
and then displayed inside the app’s product listing screen.

👨‍💻 Developed By
Anas Bin Masud
Registration No: 7860
Course: Mobile Application Development – Assignment 2

📂 How to Add This File
In your VS Code terminal, run:
cd "C:\anasr\Documents\A2"
echo > README.md

Then open the created README.md file and paste this content inside.
Finally, commit and push it using:

git add README.md
git commit -m "Added custom README for E-Commerce App"
git push
