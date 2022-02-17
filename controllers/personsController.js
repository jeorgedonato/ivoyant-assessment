const express = require("express");
const config = require("config");
const env = process.env.NODE_ENV || 'development';
const app = express();
const router = express.Router();
const xml2js = require('xml2js');
const fs = require("fs").promises

//Creating a GET API for JSON Persons Data
router.get("/json", async (req, res) => {
    try {
        const persons = await require("../data/personsJson.json")

        setTimeout(() => {
            res.json(persons)
        }, config.get("jsonDelay") * 1000);

    } catch (error) {
        //Sending an error to the frontend
        console.log(error)
        res.status(500).send("Server Error")
    }
})

//Creating a GET API for XML Persons Data
router.get("/xml", async (req, res) => {
    try {
        //Reading the XML File
        const persons = await fs.readFile("./data/personsXml.xml", "utf8");
        //Parsing the xml
        const parsedXml = await xml2js.parseStringPromise(persons)

        setTimeout(() => {
            res.json(parsedXml)
        }, config.get("xmlDelay") * 1000);

    } catch (error) {
        //Sending an error to the frontend
        console.log(error)
        res.status(500).send("Server Error")
    }
})

module.exports = router;