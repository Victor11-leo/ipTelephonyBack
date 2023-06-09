const mysql = require('mysql2/promise')
const dotenv = require("dotenv").config()

const getCampuses = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const q = 'SELECT * FROM `campuses`'
    const [values] = await connection.execute(q)
    res.status(200).json({admins:values})
}

// Null and void shall not be used
const getCampus = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {cname} = req.body
    const q = 'INSERT INTO `adminregistration` (fname,surname,othernames,email,adminType) VALUES (?,?,?,?,?)'
    await connection.execute(q,[fname,surname,othernames,email,adminType])
    res.status(201).json({message:`Created an admin ${fname}`})
}

const createCampus = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {cname} = req.body
    const q = 'DELETE FROM `campuses` WHERE cname'
    await connection.execute(q,[cname])
    res.status(201).json({message:`Created an admin ${fname}`})
}



module.exports = {
    getCampuses,
    getCampus,
    createCampus
}