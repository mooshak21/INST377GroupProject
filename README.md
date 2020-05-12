# INST 377 Group Project : PG County Foreclosures
We have created a website that gives our stakeholders a place to look for areas in form of a heatmap that have foreclosed houses. 

## Heroku Link 
Heroku Link: (https://inst377finalproject.herokuapp.com/index.html)

### Target Browsers
We are mostly targeting personal computers. However, this website can also be viewed in your phones. This is compatible with iOS and Androids systems. 
### User Manual
For the user manual please check [user.md](docs/user.md) file for details

### Developer Manual 

## Installation process
To make this application work you will need an environment where you will code HTML, CSS and Javascript. 
You will also need access to GitHub to be able to fetch a version of the code from the application repository
To run the website you will need to install NPM/node.js and the dependencies needed for this website to run are: 
* Express for the server
* Heatmap.js to be able to create a heatmap
* Node-fetch to set up the server 
* Nodemon to restart your website and implement changes 
* If you want to save your database into SQLLite you will also need sqlite dependency 
* You will need to deploy your website to heroku to be able to see the website

# Deployment 
Once you have node.js install and npm dependencies you will be able to run your code locally and we have set it to run at localhost:3000. 
However, this website is deployed to Heroku which is a cloud platform that allows us to deploy web applications. 

# API
Since our had troubles setting up our API since we use a database that was locally located, we made endpoints that just provided messages in the console. 
the get endpoint 

# Issues
The biggest issues with this application is that it uses a local database. We have not sent our database in a server therefore we have it fetched locally. 

