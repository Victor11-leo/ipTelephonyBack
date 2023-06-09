const mysql = require('mysql2/promise')
const dotenv = require("dotenv").config()

const getAdmins = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const q = 'SELECT * FROM `adminregistration`'
    const [values] = await connection.execute(q)
    res.status(200).json({admins:values})
}

const adminLogin =  async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const q = 'SELECT * FROM `telephoneadmin`'
    const [values] = await connection.execute(q)
    res.status(200).json({admins:values})   
}
const getAdmin = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {email} = req.body
    // ID is a number
    const q = 'SELECT * FROM `adminregistration` WHERE email = ?'
    const [values] = await connection.execute(q,[email])
    res.status(200).json({admins:values})
}

const createAdmin = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {fname,surname,othernames,email,adminType,addedBy} = req.body
    const q = 'INSERT INTO `adminregistration` (fname,surname,othernames,email,adminType,addedBy) VALUES (?,?,?,?,?,?)'
    await connection.execute(q,[fname,surname,othernames,email,adminType,addedBy])
    res.status(201).json({message:`Created an admin ${fname}`})
}

const updateAdmin = async(req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {adminType,email} = req.body
    const q = 'UPDATE `adminregistration` SET adminType = ? WHERE email = ?'
    await connection.execute(q,[adminType,email])
    res.status(200).json({message:"Updating an admin"})
}

const deleteAdmin = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {email} = req.body
    const q = 'DELETE FROM `adminregistration` WHERE email = ?'
    await connection.execute(q,[email])
    res.status(201).json({message:`Deleted an admin ${email}`})
}

module.exports = {
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin,
    adminLogin
}