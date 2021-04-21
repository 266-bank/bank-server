CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE bank (
  username VARCHAR(25) PRIMARY KEY,
  balance Decimal(12,2) NOT NULL
);
