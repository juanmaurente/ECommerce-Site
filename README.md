# React e-Shop Website

## Design ![image](https://user-images.githubusercontent.com/26740359/183672771-ac5368e8-e0e5-4ff0-b62c-719faa35b99b.png)
![image](https://user-images.githubusercontent.com/26740359/183672878-7c377f96-21a3-4a43-9ed7-52c82e2f7de2.png)

## Frist plan

![image](https://user-images.githubusercontent.com/26740359/182779538-09d74e1a-4153-4240-89f0-5a9845418d8a.png)

## Intro

I built this project on React.js, using Firebase to store all data related to the products. I also used Jira to organize and visualize the steps needed and Github for version control.

###About the process

Starting from a basic structure Heading/Main/Footer, I tried to identify each component of the site beforehand as well as some expected behaviour. Once I had the basic idea I designed the different pages I wanted to reach (Product gallery and Product page). Then starting from functional components I started to develop the site, considering also its responsiveness from the beginning...

### Some issues found:

-   React route, did not recognize the id of each product.
-   Rendering image properly was more difficult than expected (quality, size, contrast, etc). 
-   First time using icons library from react material-ui / fontawsome
-   Fetching data from firestore implied to go deeper in the documentation. 

### Things to improve:
  
- Need to add different features for each product (size, color, etc)
-   (Bonus) Cart hasn't been implemented. My idea was to implement a new page or Cart section (hidden) and when clicked redirect or display this page/section. Also checking data, stock
-   not use of useContext and search bar to find products.
-   Carousel could change images automatically after certain amount of time
-   Testing libraries
-   Implement Spiners or similar while loading

# About this project
## Outline

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.
With this project you will practice how to:

-   Fetch Data within a React App
-   Use react-router-dom
-   Use Firebase/Firestore

## MVP

At a minimum your e-shop website should have two pages:

-   Home Page
    -   This will contain:
        -   A Grid of products
        -   Carousel of featured products
        -   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
-   All products should be stored in Firestore:
    -   You should store the following information:
        -   quantity
        -   variants (could be colors, sizes, etc)
        -   price per unit
        -   name
        -   image url
        -   favourited or not (boolean)
            All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

-   List of products in cart

    -   Ability to change quantity of products in cart
    -   Ability to remove items from cart

-   TIPS :

1. Make sure your site is scoped to one category of products

## Useful links

-   [React-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
-   [Dummy JSON](https://dummyjson.com/)
-   [Fake Store](https://fakestoreapi.com/)
