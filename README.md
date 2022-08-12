# Comfy Store App

<p align="center">
  <img src="./public/ezgif-4-c681ecd364.gif" alt="Comfy Store App"/>
</p>

## Description

## User Stories

- **Sign up:**
  ​
- **Login:**
  ​
- **Logout:**

- **View and Buy Items**

- **Add To Cart**

- **Check Out**

## Backlog

- Deployment to S3 as a serverless web App

- Integrate with aws cloudfront (error pages, Geographic Restriction). Sample lab: https://play.whizlabs.com/site/task_details?lab_type=1&task_id=9&quest_id=37

- API Payment Gateway with Stripe and AWS Lambda.

- CI/CD Pipeline for the Frontend Application

- Build my own Backend API with Serverless Architecture (CI/CD Pipeline included)

# Client / Frontend

## React Router Routes (React App)

| Path          | Component/Pages  | Permissions             | Behavior                                                     |
| ------------- | ---------------- | ----------------------- | ------------------------------------------------------------ |
| `/`           | Landing Page     | public`Route>`          | Home page                                                    |
| `/signup`     | Sign up Page     | public`Route>`          |                                                              |
| `/login`      | Login Page       | public`Route>`          | Login form, link to signup, navigate to homepage after login |
| /about        | About Page       | public`Route>`          |                                                              |
| /products     | Products Page    | public`Route>`          |                                                              |
| /products/:id | Product Detail   | public`Route>`          |                                                              |
| /cart         | Client Cart Page | public`Route>`          |                                                              |
| /checkout     | Checkout Page    | private`<PrivateRoute>` |                                                              |

​

## Components

- addToCart
- amountButtons
- carContent
- cartButtons
- cartColumns
- cartItem
- cartTotals
- contact
- error
- featuredProducts
- filters
- gridView
- hero
- listView
- loading
- navbar
- pageHero
- product
- productImage
- productList
- services
- sidebar
- sort
- stars
- stripeCheckout

## Page Components

- aboutPage
- authWrapper
- cartPage
- checkoutPage
- errorPage
- homePage
- productsPage
- singleProductPage

## Folder structure

```
C:.
| .env_example
| .gitignore
| netlify-notes.txt
| netlify.toml
| package-lock.json
| package.json
| README.md
|
+---functions
| create-payment-intent.js
| hello.js
| sample_json.js
|
+---public
| favicon.ico
| index.html
| logo192.png
| logo512.png
| manifest.json
| robots.txt
| \_redirects
|
\---src
| actions.js
| App.js
| index.css
| index.js
|
+---assets
| hero-bcg-2.jpeg
| hero-bcg.jpeg
| logo.svg
|
+---components
| | index.js
| |
| +---addToCart
| | addToCart-style.js
| | AddToCart.js
| |
| +---amountButtons
| | amountButtons-style.js
| | AmountButtons.js
| |
| +---carContent
| | carContent-style.js
| | CarContent.js
| |
| +---cartButtons
| | cartButtons-style.js
| | CartButtons.js
| |
| +---cartColumns
| | cartColumns-style.js
| | CartColumns.js
| |
| +---cartItem
| | cartItem-style.js
| | CartItem.js
| |
| +---cartTotals
| | cartTotals-style.js
| | CartTotals.js
| |
| +---contact
| | contact-style.js
| | Contact.js
| |
| +---error
| | Error.js
| |
| +---featuredProducts
| | featuredProducts-style.js
| | FeaturedProducts.js
| |
| +---filters
| | filters-style.js
| | Filters.js
| |
| +---footer
| | footer-style.js
| | Footer.js
| |
| +---gridView
| | gridView-style.js
| | GridView.js
| |
| +---hero
| | hero-style.js
| | Hero.js
| |
| +---listView
| | listView-style.js
| | ListView.js
| |
| +---loading
| | Loading.js
| |
| +---navbar
| | Navbar-style.js
| | Navbar.js
| |
| +---pageHero
| | pageHero-style.js
| | PageHero.js
| |
| +---product
| | product-style.js
| | Product.js
| |
| +---productImages
| | ProductImages-style.js
| | ProductImages.js
| |
| +---productList
| | productList-style.js
| | ProductList.js
| |
| +---services
| | services-style.js
| | Services.js
| |
| +---sidebar
| | sidebar-style.js
| | Sidebar.js
| |
| +---sort
| | sort-style.js
| | Sort.js
| |
| +---stars
| | stars-style.js
| | Stars.js
| |
| \---stripeCheckout
| stripeCheckout-style.js
| StripeCheckout.js
|
+---context
| cart_context.js
| filter_context.js
| products_context.js
| user_context.js
|
+---pages
| | index.js
| | PrivateRoute.js
| |
| +---aboutPage
| | aboutPage-style.js
| | AboutPage.js
| |
| +---authWrapper
| | authWrapper-style.js
| | AuthWrapper.js
| |
| +---cartPage
| | cartPage-style.js
| | CartPage.js
| |
| +---checkoutPage
| | checkoutPage-style.js
| | CheckoutPage.js
| |
| +---errorPage
| | errorPage-style.js
| | ErrorPage.js
| |
| +---homePage
| | homePage-style.js
| | HomePage.js
| |
| +---productsPage
| | productsPage-style.js
| | ProductsPage.js
| |
| \---singleProductPage
| singleProductPage-style.js
| SingleProductPage.js
|
+---reducers
| cart_reducer.js
| filter_reducer.js
| products_reducer.js
|
\---utils
constants.js
helpers.js
```

# Server / Backend

API provided by the course:

- https://course-api.com/react-store-products
- https://course-api.com/react-store-single-product?id=recZkNf2kwmdBcqd0

## Wireframes

###### Home Page

<p align="center">
  <img src="./public/home-page.jpeg"/>
</p>

###### Products Page

<p align="center">
  <img src="./public/products-page.jpeg"/>
</p>

###### Product Page

<p align="center">
  <img src="./public/single-product-page.jpeg"/>
</p>

###### About Page

<p align="center">
  <img src="./public/about-page.jpeg"/>
</p>

[Wirefame in PDF](./public/WebAppComfySloth.pdf)

[Lucidchart Link](https://lucid.app/lucidchart/63c396d8-429e-43c2-96d3-3aaf7e3f78fa/edit?invitationId=inv_3de81357-160a-40b4-9ffe-addfb3a3c2ba)

### Notion

[Task organization](https://www.notion.so/d198c02bc7894d558c27d7edb4044845?v=e02f9810e1fa425e8158acc67b1d99c2)

<p align="center">
  <img src="./public/notion.PNG"/>
</p>

## How to run it in local

## How to run it in Development (AWS)
