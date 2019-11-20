   DROP DATABASE IF EXISTS q6ym1nfptvd3msuk;

    CREATE DATABASE q6ym1nfptvd3msuk;

    USE q6ym1nfptvd3msuk;

    CREATE TABLE burger(
      id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      eaten BOOLEAN NOT NULL DEFAULT 0
    );


