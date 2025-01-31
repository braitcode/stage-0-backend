## Project Description

This is a public API that returns the following information in JSON format:
My registered email address (used to register on the HNG12 Slack workspace).
The current datetime as an ISO 8601 formatted timestamp.
The GitHub URL of this project's codebase.
This is a backend application built with Node.js and Express.js and it provides an API to handle requests related to details.

## Folder Structure

The folder structure of the project is as follows:

```
│
├── node_module/                       
├── src/            
│   ├── controllers/
│   └── routes/    
│
└── .env
└── .env.example
└── .gitignore
└── index.js
└── package-lock.json
└── package.json
└── README.md
```

Below are the steps on how I set up and run the application locally using Node.js and Express.js:

# Creating Express Server:
Express.js is a popular and minimalist web application framework for Node.js. For this project, I set up an Express server and configured environment variables using a `.env` file.

Creating an Express server involves several steps. Let's go through them one by one:

**Step 1: Initialize Your Project**
To begin, I created a new directory for my project, opened my terminal in VScode and ran the followng command to initialize it:

```bash
npm init
```

This command prompted me to provide information about my project, such as its name, version, description, entry point (usually `index.js`), and more. After the  completion of these prompts, we had generated for us a `package.json` file with the project's configuration.

**Step 2: Installing Express**
After the project was initialized, I installed Express as a dependency with the following command:

```bash
npm install express
```

This command added Express to my project and updated the `dependencies` section in my `package.json` file.

**Step 3: Creating an Entry Point (index.js)**
I created an `index.js` file as the entry point for my Express application. This file serves as the starting point for my server setup. I also set up mu Express App in this file

**Step 4: Configure Your Express Application**
In my `index.js` file, I imported Express and configured my application. See below:

```javascript
import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`)
})
```
**Step 5: Starting the Server**

We can start the Express server by running the following command:

```bash
node index.js
```
The server will begin running and can accessed by navigating to `http://localhost:8080` in the web browser.

**Step 2: Configuring `.env` File**
In my `.env` file, I defined environment-specific variables. For example:

```env
PORT=8000
```

**Step 3: Loading the Environment Variables**
In my index.js was where I loaded the environment variables using `dotenv`;

```javascript
import dotenv from "dotenv"
dotenv.config();
```

Now, the environment variables can be accessed anywhere in this application using `process.env`.

```javascript
const port = process.env.PORT || 8080;
```
This setup is to manage sensitive information and configuration options without exposing them in the codebase.

## Used packages for building this node api project

1. **express**: Express is a web application framework for Node.js that simplifies the process of building robust web applications.

    - **Installation**:
      Express was installed using npm:
      ```bash
      npm install express
      ```

2. **dotenv**: Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.

    - **Installation**:
      Install dotenv using npm:
      ```bash
      npm install dotenv

3. **Nodemon**: Nodemon is a utility that automatically restarts your Node.js application when source code changes are detected.

    - **Installation**:
      Install nodemon globally using npm:
      ```bash
      npm install nodemon
      ```

4. **Cors**: The CORS (Cross-Origin Resource Sharing) package allows you to enable or configure CORS for your Express application.

    - **Installation**:
      Install cors using npm:
      ```bash
      npm install cors
      ```

**Testing API Endpoints with Postman**

[Postman](https://www.postman.com/) is a great tool for testing your API endpoints. It allows you to send HTTP requests to your server and inspect the responses:

- **`/Get Details`:**
    
    [details](http://localhost:8080/api/details/)

    Response:

    ```json
    {
    "slack_email": "brightjohn489@gmail.com",
    "current_datetime": "2025-01-31T11:06:03.095Z",
    "github_url": "https://github.com/braitcode"
   }

**Coded by @braitcode**
