const { createPool } = require("mysql");

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

module.exports = pool;

/*
CREATE TABLE `er_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `lastName` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `gender` varchar(1) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `uid` varchar(64) COLLATE latin1_general_ci DEFAULT NULL,
  `role` varchar(32) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

*/