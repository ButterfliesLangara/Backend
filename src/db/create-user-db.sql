DROP DATABASE IF EXISTS stepaw;   
CREATE DATABASE IF NOT EXISTS stepaw;   
USE stepaw; 

DROP TABLE IF EXISTS User; 

CREATE TABLE IF NOT EXISTS User 
  ( 
    UserID          INT PRIMARY KEY auto_increment, 
    UserName        VARCHAR(25) UNIQUE NOT NULL, 
    FirstName       VARCHAR(50) NOT NULL, 
    LastName        VARCHAR(50) NOT NULL, 
    EmailID         VARCHAR(100) UNIQUE NOT NULL,  
    BluetoothID     VARCHAR(50) NOT NULL
  ); 

CREATE TABLE IF NOT EXISTS Pets 
  ( 
    PetID          INT PRIMARY KEY auto_increment, 
    Breed        VARCHAR(25) UNIQUE NOT NULL, 
    Age       INT(2) NOT NULL, 
    Weight        INT(2) NOT NULL, 
    Gender         VARCHAR(3) UNIQUE NOT NULL,  
    Picture     VARCHAR(200),
    NumberOfSteps     INT(4) NOT NULL
  ); 