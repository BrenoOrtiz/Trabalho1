import mysql from 'mysql2'

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bod12345:)Breno",
    database: "crud_exp2"
    
})

export default db