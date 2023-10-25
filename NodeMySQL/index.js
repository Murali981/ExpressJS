const express = require('express')

const mysql = require('mysql')

// create a connection

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'nodemysql'
})

// connect to mysql environment

db.connect(err => {
    if(err){
        throw err
    }
    console.log('MySQL is connected')
})

const app = express()

// create a database

app.get('/createdb' , (req,res) => {
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql,err => {
        if(err) {
            throw err
        }
        res.send('Database is created')
    })
})

// create table

app.get('/createemployee' , (req,res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT , name varchar(255) , designation varchar(255) , PRIMARY KEY(id))'
    db.query(sql,err => {
        if(err) {
            throw err
        }
        res.send('Employee table has been created successfully')
    })
})


// insert records into employee table

app.get('/employee1' , (req,res) => {
    let post = {name : 'Jake Smith' , designation : 'Cheif Executive Officer'}
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql,post,err => {
        if(err) {
            throw err
        }
        res.send('Data record has been inserted into the employee table successfully')
    })
})

// select employees

app.get('/getemployee' , (req,res) => {
    let sql = 'SELECT * from employee'
    let query = db.query(sql , (err,results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('Employee details has been fetched successfully')
    })
})

// Update employee

app.get('/updateemployee/:id' , (req,res) => {
    let newName = 'Updated name'
    let sql = `UPDATE employee set name = '${newName}'  WHERE id = ${req.params.id} `
    let query = db.query(sql, err => {
        if(err) {
            throw err
        }
        res.send('Employee table has been updated successfully')
    })
})

// Delete employee

app.get('/deleteemployee/:id' , (req,res) => {
    let sql = `DELETE from employee WHERE id=${req.params.id}`
    let query = db.query(sql , err => {
        if(err) {
            throw err
        }
        res.send('Employee record has been deleted successfully')
    })
})

app.listen(3000 , () => {
    console.log('Server started on port 3000')
});