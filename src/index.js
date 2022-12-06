const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv').config();
// Create express app
const app = express();
app.use(express.json())
const port = 3000;
// Create pool
const pool = new Pool({
    user: process.env.PSQL_USER,
    host: process.env.PSQL_HOST,
    database: process.env.PSQL_DATABASE,
    password: process.env.PSQL_PASSWORD,
    port: process.env.PSQL_PORT,
    ssl: {rejectUnauthorized: false}
});

// Add process hook to shutdown pool
process.on('SIGINT', function() {
    pool.end();
    console.log('Application successfully shutdown');
    process.exit(0);
});

app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set("view engine", "ejs");

app.get('/', (req, res) => {
     res.render('user');
}); 

let x = 28;
//Garlic Fries
app.get('/order/gf', (req, res) => {
    
    const q = "INSERT INTO orders (order_id, order_time, total_price) VALUES ("+ x +", '2022-11-09', 10.98);";
    pool.query(q, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
    res.render('user');
    x++;
}); 

//2 falafels
app.get('/order/tf', (req, res) => {
    
    const q = "INSERT INTO orders (order_id, order_time, total_price) VALUES ("+ x +", '2022-11-09', 10.54);";
    pool.query(q, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
    res.render('user');
    x++;
});

//Pita 
app.get('/order/p', (req, res) => {
    
    const q = "INSERT INTO orders (order_id, order_time, total_price) VALUES ("+ x +", '2022-11-09', 11.19);";
    pool.query(q, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
    res.render('user');
    x++;
});

//Fountain Drink
app.get('/order/fd', (req, res) => {
    
    const q = "INSERT INTO orders (order_id, order_time, total_price) VALUES ("+ x +", '2022-11-09', 8.99);";
    pool.query(q, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
    res.render('user');
    x++;
});

//Vegan Box
app.get('/order/vb', (req, res) => {
    
    const q = "INSERT INTO orders (order_id, order_time, total_price) VALUES ("+ x +", '2022-11-09', 14.18);";
    pool.query(q, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
    res.render('user');
    x++;
});

app.get('/manager', (req, res) => {
    res.render('manager');
}); 

app.get('/Menu-Edit1', (req, res) => {
    
    const q = "SELECT * FROM manager";
    pool.query(q, (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
      }
    });
    res.render('manager');
}); 


//
//app.get('/', (req, res) => {
//    teammembers = []
//    pool
//        .query('SELECT * FROM manager;')
//        .then(query_res => {
//            for (let i = 0; i < query_res.rowCount; i++){
//                teammembers.push(query_res.rows[i]);
//            }
//            const data = {teammembers: teammembers};
//            console.log(teammembers);
//            res.render('user', data);
//        });
//});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
