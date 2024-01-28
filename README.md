# Pattern Assignment Frontend

This project is a frontend for the given technical assignment. It is built using ReactJS.

The project has single page to show the "Product Reviews" of the products fetched from "Amazon Rainforest API" which was provided.

React Project Description:

The project is built using React v18 & the other packages which are used to display different UI elements are:
1. Font Awesome (For displaying product review rating stars)
2. Styled Components: This is used for creating customised tags alongwith CSS stylings applied on it.
3. React Router DOM: Used for routing the web page to default home page. This will also help us if we have more than 1 routes to be added in the project

What can be Improved further?

1. We can create Redux Store where we have global store of data available for the entire project. This helps in pulling the data from global store from any components.
    => We can create "Saga" to keep checking change in the componenet
    => We can create "Actions" to dispatch actions from react component and that will invoke both saga and reduce in our global store.
    => We can create "Reducers" to preprare the payload and reduce format the API response
2. Use Axios for API calls and create a generic module where we have declared the GET, POST, PUT, PATCH, DELETE, OPTIONS all types of API calls
3. We can create a separate component where if anything goes wrong on UI then we can show "404 NOT FOUND" page
4. We can component for Product, Customer, Orders etc.

## To setup project on your local

In the project directory, you can run:

### `npm install`

### `npm start`

Once you run "npm start" the frontend will open on your localhost by default on port no 3000

Go to your browser & check => Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
