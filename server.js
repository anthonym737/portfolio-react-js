require("dotenv").config({ path: './.env' });
const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require('mysql2');

const contactRoute = require('./router/contactRoute')
const app = express();

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

//create the middleware
app.use(express.json());
app.use(cors());
app.use("/",contactRoute);

//route to bring all projects
app.get('/api/projects', (req, res) => {
    db.query('SELECT * FROM projects', (err, results) => {
        console.log(results);
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
});

//route to get a single project by ID
app.get('/api/projects/:id', (req, res) => {
    const projectId = req.params.id;
    console.log("Requested project ID:", projectId);
    db.query('SELECT * FROM projects WHERE pf_id = ?', [projectId], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        //If no project found with ID, return error 404
        if(results.length === 0) {
            return res.status(404).send('Project not found');
        }
        res.status(200).json(results[0]);
    });
});

//Deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*",(req,res)=>
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    )
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening to port ${port}`));

