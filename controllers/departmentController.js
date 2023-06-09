const mysql = require('mysql2/promise')
const dotenv = require("dotenv").config()

const getDepartments = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const q = 'SELECT * FROM `depts5`'
    const [values] = await connection.execute(q)
    res.status(200).json({admins:values})
}

const getDepartment = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {fname,surname,othernames,email,adminType} = req.body
    const q = 'INSERT INTO `adminregistration` (fname,surname,othernames,email,adminType) VALUES (?,?,?,?,?)'
    await connection.execute(q,[fname,surname,othernames,email,adminType])
    res.status(201).json({message:`Created an admin ${fname}`})
}

const createDepartment = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {ccode,deptname} = req.body
    const q = 'INSERT INTO `adminregistration` (ccode,deptname) VALUES (?,?)'
    await connection.execute(q,[ccode,deptname])
    res.status(201).json({message:`Created an admin ${fname}`})
}



module.exports = {
    getDepartments,
    getDepartment,
    createDepartment
}