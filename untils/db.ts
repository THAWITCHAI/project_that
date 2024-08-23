import mysql from 'mysql2'

export const mysqlPool = mysql.createPool(String(process.env.MYSQL_URI))