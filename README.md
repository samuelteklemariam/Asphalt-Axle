# Asphalt-Axle

This is a personal project I created to showcase my software engineering skills

For this project I decided to create an E-commerse web applicatin that would be used see skate boards and 
in the future skate apparel as wll

For the creation of the web app, I used React js frame work and Mongodb to store all the products image files

This is a fully functional e-comerse application. Users of the web application can create a user account using their email and creating a password.
After creating a user account, they can add items to their cart and proceed to checkout

Tech stack used:
- React js
- Java Script
- Express
- Node.js
- Mongodb
- Git
- Vs Code

### Running the application `npm start`
To run this application, you will need to download all the necessary file from this repository including all the image files as well,
after downloading the files and putting them in a specific folder, using vscode or another editor, navigate to the folder where you have
put the project files and open the terminal in your editor. 

If you are not already in the project file when you open the terminal, you need to navigate to it and use the command "npm start"

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Admin and backend

This project has multiple pices, the code for the admin panael ( link: https://github.com/samuelteklemariam/Axle-admin ) and the 
code for the backend ( link: https://github.com/samuelteklemariam/Axle-backend ) of the code are availabe in their own repositories and both are necessary to use 
all the aspects of this project such as adding your own products to the website database and removing products from the database as well

### Known Issues

While I am very proud of this projects, there are a few bugs that I have to fix
- while adding items to your cart is fully functional, the cart page does not show the porducts that have been added, instead it shows a list of all the products in
  the database. The cart total still calculates your total amount using the sum of all the products that have been added to your cart but I still havn't been able to display
  just the item in the cart on the cart page
