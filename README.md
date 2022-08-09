# React e-Shop Website

## Design - Inspiration

![image](https://user-images.githubusercontent.com/26740359/182778972-c3801368-e889-4953-8525-b8e4f5a56e94.png)
![image](https://user-images.githubusercontent.com/26740359/182779188-29bb4319-7739-45ee-bcfc-34a6d7ebfed7.png)
![image](https://user-images.githubusercontent.com/26740359/182779309-8bdb3c68-8898-4a45-9e46-94179c0e04f8.png)

## Frist plan

![image](https://user-images.githubusercontent.com/26740359/182779538-09d74e1a-4153-4240-89f0-5a9845418d8a.png)

## Comments/Troubles

I built this project on React, using Firebase to store all data related to the products. Starting from a basic structure Heading/Main/Footer, I tried to identify each component of the site beforehand as well as some expected behaviour. I also used Jira to organize and visualize the steps needed and Github.

### Some issues found:

-   React route, did not recognize the id of each product
-   rendering image properly was more difficult than expected (quality, size, contrast, etc)
-   first time using icons library from react material-ui / fontawsome
-   fetching data from firebase took a while

Things to improve:

-   Need to add different features for each product (size, color, etc)
-   (Bonus) Cart hasn't been implemented. My idea was to implement a new page or Cart section (hidden) and when clicked redirect or display this page/section. Also checking data, stock
-   not use of useContext and search bar to find products
-   Carousel could change images automatically after certain amount of time
-   Testing libraries
-   Implement Spiners or similar while loading

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
