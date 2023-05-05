const express = require('express');
const app = express();
const mongoose = require("mongoose");


/** 
 *  FIRST DB CONNECTION
 *  ===================
 * */

// UPDATE YOUR DEFAULTS
const firstDB = {
    name: "First", // for demo
    connStr: "your first db connection url",
    db: "mydb",
    coll: "mycoll"
};
// CONNECT DB
const firstConn = require("./connect")(firstDB.name, firstDB.connStr);
// CREATE MODEL & SCHEMA
const FirstSchema = firstConn.useDb(firstDB.db).model(
    firstDB.coll, 
    new mongoose.Schema({}, { strict: false, collection: firstDB.coll })
);
// DO TRANSACTIONS WITH SCHEMA
async function firstInsert() {
    let doc = await FirstSchema.create({ name: "test", calledAt: new Date() });
    console.log(doc);
}
firstInsert();


/** 
 *  SECOND DB CONNECTION
 *  ====================
 * */

// UPDATE YOUR DEFAULTS
const secondDB = {
    name: "Second", // for demo
    connStr: "your second db connection url",
    db: "mydb",
    coll: "mycoll"
};
// CONNECT DB
const secondConn = require("./connect")(secondDB.name, secondDB.connStr);
// CREATE MODEL & SCHEMA
const SecondSchema = secondConn.useDb(secondDB.db).model(
    secondDB.coll, 
    new mongoose.Schema({}, { strict: false, collection: secondDB.coll })
);
// DO TRANSACTIONS WITH SCHEMA
async function secondInsert() {
    let doc = await SecondSchema.create({ name: "test", calledAt: new Date() });
    console.log(doc);
}
secondInsert();


// CONNET SERVER
const port = 3001;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});