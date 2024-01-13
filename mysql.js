export async function query() {

}

const mysql = require("mysql2");
connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    database: "article",
    password: ""
}).promise();

connection.connect(function (err){
    if (err){
        return console.error("Error: "+err.message);
    }
    else{
        console.log("подключение к серверу MySQL успешно установлено")
    }
});
module.exports = connection;