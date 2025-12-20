QUIZ 2 README
iMango: Data Structures & Algorithms Quiz Project

This repository contains the full-stack implementation of the iMango startup platform. It includes a React-based frontend (Quiz 1) and a Django REST Framework backend (Quiz 2).

Project Structure

datasalgoQuiz1/
├── backend/            # Django REST API (Quiz 2)
├── frontend/           # React Application (Quiz 1)
└── README.md           # Project Documentation


🚀 Backend Setup (Quiz 2)

1. Prerequisites

Python 3.10+

pip (Python package manager)

2. Installation

Navigate to the backend directory and set up a virtual environment:

cd backend
python -m venv venv


Activate the virtual environment:

Windows: venv\Scripts\activate

Mac/Linux: source venv/bin/activate

Install dependencies:

pip install -r requirements.txt


3. Environment Variables (.env)

Create a .env file in the backend/ root:

DEBUG=True
SECRET_KEY=your_secret_key_here
CORS_ALLOWED_ORIGINS=http://localhost:3000,[http://127.0.0.1:3000](http://127.0.0.1:3000)


4. Database & Server

python manage.py makemigrations
python manage.py migrate
python manage.py runserver


5. API Endpoints

API Routes (Root): GET /api/ - Returns a list of all available endpoints.

List View: GET /api/items/ - Returns all objects (properly serialized).

Detail View: GET /api/items/<id>/ - Returns details for a specific object.

💻 Frontend Setup (Quiz 1)

1. Prerequisites

Node.js (v16+)

npm

2. Installation

Navigate to the frontend directory:

cd frontend
npm install


3. Environment Variables (.env)

Create a .env file in the frontend/ root:

REACT_APP_API_URL=[http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)


4. Execution

npm start


The app will be available at http://localhost:3000.

🛠 Features & Requirements (Quiz 2)

CORS Policy: Strictly configured using CORS_ALLOWED_ORIGINS. CORS_ALLOW_ALL is disabled for security.

Serialization: Utilizes Django REST Framework Serializers for complex data-to-JSON conversion.

Models: Custom models implemented to represent the startup's core data structures.

Environment Management: Both tiers use .env files to keep sensitive configurations out of version control.

Git Ignore: Configured to exclude venv, __pycache__, and .env files.




QUIZ 1 README

Client Background: iMango

iMango is a popular local mango shake vendor known for its excellent taste and high-quality beverages. It currently operates primarily near Jenra Grand Mall in Angeles City.

The project initiative stems from the enthusiastic customer base and the recognized need to move beyond simple in-person transactions and social media promotion.

Current Digital Presence (Reference): iMango currently relies exclusively on its Facebook page for customer engagement, menu promotion, and location information.

Reference URL: https://www.facebook.com/imangojenra

Project Routes and Screens

The application utilizes react-router-dom for client-side routing to provide a fast and modern user experience.

HomeScreen
"/"
Home Page  Main Menu View. This is the default landing page. It displays all available products in a responsive grid. Each product name serves as a clickable link that navigates the user to the corresponding product detail page.

ProductScreen
"/product/:id"
Detailed List View. This page loads and renders all specific information for a single shake, using the :id parameter extracted from the URL. It features a large product image, name, price, and a detailed description, alongside the "Order" function.

How to Run Locally (Standard React Setup)

Follow these steps to set up and run the iMango frontend on your local machine:

Clone the repository:

git clone https://github.com/JherbR/quiz1

Change Directory:

cd quiz1
cd frontend

Install Dependencies:

You must install the project's dependencies, including React-Bootstrap for UI components, Bootstrap for styling, and React Router DOM for navigation.

npm install
or
yarn install
