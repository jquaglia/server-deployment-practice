# LAB: Node Ecosystem, CI, CD

## The Setup

### Getting Started

1. Clone down the repository

1. Run the command `npm install`

1. Create a `.env` file with `PORT` variable

### Testing the Server

1. Run the command `npm test` to test the server

### Running the Server

1. To run the server locally, run `nodemon`

1. Open up your browser to the localhost you set your `PORT` variable to

## Lab Instructions

Time to get hands on with Node.js development! Today, you'll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

### Github

1. Create a new repository at GitHub, called `server-deployment-practice`
   - Select the "Add a README" option
   - Select the "Add a .gitignore" option, and choose Node.js
   - Opt for the MIT license
1. Clone this to your local machine.
1. Immediately create a "dev" branch to do your work in
   `git checkout -b dev`

### Heroku

At heroku, we're going to setup 2 deployments. One for your dev branch and one for your main branch. As you check in code, you should be able to see Heroku instantly deploy from GitHub, assuming your tests pass!

1. Login to your Heroku account
1. Create a new Heroku app, called `yourname-server-deploy-prod`
   1. Go to the deployment tab
   1. Choose "GitHub"
   1. Connect to your repository
   1. Choose the "master" or "main" branch
   1. Choose the "Wait for CI to pass before deploy" option
   1. Choose the "enable automatic deploys" option

### The Code

You've been provided a working demo server by your instructor. Get this code working locally. Note that while you are permitted to simply copy the files, it's better if you create the server from scratch, typing the lines of code in the demo provide. Build up your muscle memory

1. Initialize your app -- `npm init -y`
1. Install your dependencies -- `npm i dotconfig express jest`
1. Create the files and folders required for the application
1. Create the correct content in the files
1. Test your server -- `npm test`
   - You should see 100% of tests passing
1. Start your server -- `nodemon`
   - Visit <http://localhost:3000/data> in your browser to confirm that the server is visible

## Deploy!

Now that you have it all running, let's get it deployed.

- [Link to Heroku Deployment](https://jquaglia-server-deploy-prod.herokuapp.com/)

- [Link to Github Actions Tab](https://github.com/jquaglia/server-deployment-practice/actions)

- [Link to PR on Github](https://github.com/jquaglia/server-deployment-practice/pull/1)
