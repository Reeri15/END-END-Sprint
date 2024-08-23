# Blood Donation API

This project is a simple Node.js application that interacts with a MySQL database to manage patient information for a blood donation system. The API allows you to retrieve patient data based on the patient ID.

## Table of Contents:
- [Installation](#installation)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)

## Installation

### Prerequisites
- Node.js (v12 or higher)
- MySQL

### Steps

1. Clone the repository:
    ```
    git clone https://github.com/your-username/blood-donation-api.git
    ```

2. Navigate to the project directory:
    ```
    cd blood-donation-api
    ```

3. Install the required dependencies:
    ```
    npm install
    ```

4. Set up your MySQL database and configure the connection settings in the code.

## Database Setup

Open your MySQL client and run the following commands to create the `BloodDonation` database and `Patients` table:

```sql
mysql -u root -p

CREATE DATABASE IF NOT EXISTS BloodDonation;

USE BloodDonation;

CREATE TABLE IF NOT EXISTS Patients (
    Patient_ID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL,
    Diagnosis VARCHAR(100) NOT NULL
);

INSERT INTO Patients (Name, Age, Gender, Diagnosis) 
VALUES
('John Doe', 45, 'Male', 'Hypertension'),
('Jane Smith', 34, 'Female', 'Diabetes'),
('Alice Johnson', 25, 'Female', 'Anemia'),
('Bob Brown', 54, 'Male', 'Cardiovascular Disease');

```
### Or run the setup.sql script:
cd /path/to/your/project-folder/
```
mysql -u root -p < setup.sql
```

Update the MySQL connection settings in the database.js file:

javascript
```
const con = mysql.createConnection({
    host: 'localhost',
    database: 'BloodDonation',
    user: 'root',
    password: 'password' // Replace 'password' with your own password
});

```

### Usage
## Start the server:
    node database.js

The server will run on port 3000. You can now make requests to the API using a tool like Postman or curl.

API Endpoints
Get Patient by ID

    Endpoint: /donors/:id
    Method: GET
    Description: Retrieves patient data based on the provided patient ID.
    Example: GET http:localhost:3000/donors/1


![Postman Screenshot](image.png)

### Or Use curl:
```
curl http://localhost:3000/donors/1 