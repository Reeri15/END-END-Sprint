const express = require("express");
//const mysql = ("mysql2");
const mysql = require('mysql2');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create connection to Mysql database 

const con=mysql.createConnection({
    host: 'localhost',
    database: 'BloodDonation',
    user: 'root', 
    password: 'Letsdoit!'

});

// Connect to Mysql

con.connect((err)=> {
    if (err) {
        //console.error('Error connecting to Mysql: + err.stack');
        console.error('Error connecting to Mysql: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + con.threadId);
});


app.get('/donors/:id', (req, res) =>{
    const donorsId = req.params.id;
    con.query ('select * from Patients WHERE Patient_ID=?', donorsId, (err, rows)=>{
        if (err) {
            console.log(err)
        } else{
                res.send(rows)
            }
        })
    })
  
// Route to handle form submission
app.post('/submit-donation', (req, res) => {
    const { name, age, email, bloodType, donationDate } = req.body;

// Error due to int value incorrect
    const agreeToTerms = req.body.agreeToTerms ? 1:0;

    const query = "INSERT INTO donations (name, age, email, bloodType, donationDate, agreeToTerms) VALUES (?, ?, ?, ?, ?, ?)";
    con.query(query, [name, age, email, bloodType, donationDate, agreeToTerms], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Donation request submitted successfully' });
    });
});

async function getFetch(path, id = null) {
    const url = id
      ? `http://localhost:3000/${path}`
      : `http://localhost:3000/${path}/${id}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error.message);
    }
  }




    

//app.listen(3000, (err)=> {
//    console.log('Error starting sever: ' + err)
//    if (err){
//} else{
//onsole.log('Sever started on port 3306')
//}
//})

app.listen(3000, (err) => {
    if (err) {
        console.log('Error starting server: ' + err)
    }else{
        console.log('Server started on port 3000')
    }
});







