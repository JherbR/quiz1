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

git clone https://github.com/JherbR/datastalgoQuiz1

Change Directory:

cd "datasalgoQuiz1


Install Dependencies:

You must install the project's dependencies, including React-Bootstrap for UI components, Bootstrap for styling, and React Router DOM for navigation.

npm install
or
yarn install
