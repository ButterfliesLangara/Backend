DROP DATABASE IF EXISTS stepaw;   
CREATE DATABASE IF NOT EXISTS stepaw;   
USE stepaw; 

DROP TABLE IF EXISTS user; 

CREATE TABLE IF NOT EXISTS user 
  ( 
    UserID          INT PRIMARY KEY auto_increment, 
    UserName        VARCHAR(25) UNIQUE NOT NULL, 
    FirstName       VARCHAR(50) NOT NULL, 
    LastName        VARCHAR(50) NOT NULL, 
    EmailID         VARCHAR(100) UNIQUE NOT NULL,  
    BluetoothID     VARCHAR(50) NOT NULL
  ); 