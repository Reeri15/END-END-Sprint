CREATE DATABASE IF NOT EXISTS BloodDonation;

USE BloodDonation;

CREATE TABLE IF NOT EXISTS donations (
    Patient_ID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    bloodType VARCHAR(10) NOT NULL,
    donationDate DATE NOT NULL,
    agreeToTerms BOOLEAN NOT NULL
);

SELECT * FROM donations;