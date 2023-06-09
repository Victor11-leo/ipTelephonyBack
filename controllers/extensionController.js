const mysql = require('mysql2/promise')
const dotenv = require("dotenv").config()

const getExtensions = async(req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const q = 'SELECT * FROM `depts` INNER JOIN `campuses` ON depts.ccode = campuses.ccode ORDER BY depts.deptcode DESC'
    const [values] = await connection.execute(q)
    res.status(200).json({extensions:values})
}

const createExtension = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {ccode,deptcode,ownerassigned,deptname} = req.body
    // Can do this in the frontend
    // Need to compare ccode in campuses and return campus name viseversa
    // const q = 'SELECT cname FROM `campuses` WHERE ccode = ?'
    // const [values] = await connection.execute(q,[ccode])
    const q2 = 'INSERT INTO `depts` (ccode,deptcode,ownerassigned,deptname) VALUES (?,?,?,?)'
    await connection.execute(q2,[ccode,deptcode,ownerassigned,deptname])
    res.status(200).json({message:"Creating an extension"})
}

const updateExtension = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {deptcode,ccode,deptname,ownerassigned} = req.body
    const q = 'UPDATE `depts` SET ccode = ?, deptname = ?, ownerassigned = ? WHERE deptcode = ?'
    const [values] = await connection.execute(q,[ccode,deptname,ownerassigned,deptcode])
    res.status(200).json({message:"Updating an extension"})
}

const deleteExtension = async (req,res) => {
    const connection = await mysql.createConnection({
        host:process.env.HOST, 
        user:process.env.USER, 
        database:process.env.DB
    });
    const {deptcode} = req.body
    const q = 'DELETE FROM `depts` WHERE deptcode = ?'
    await connection.execute(q,[deptcode])
    res.status(200).json({message:"Deleting an extension"})
}

module.exports = {
    getExtensions,
    createExtension,
    updateExtension,
    deleteExtension
}