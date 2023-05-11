const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'user_pekerja'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database!');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    connection.query(query, (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            res.status(401).json({ error: 'Invalid email or password' });
        } else {
            res.status(200).json({ message: 'Login successful' });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});