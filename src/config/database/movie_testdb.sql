DROP DATABASE IF EXISTS movie_testdb; 
CREATE DATABASE movie_testdb;
DROP TABLE IF EXISTS movie;
CREATE TABLE movie (
  id serial primary key,
  info jsonb default '{}'::jsonb
);
INSERT INTO movie (info)
VALUES('{ "title": "Matrix", "genre": [{"name":"sc-fi"}, {"name":"action"}], "year": 1999, "directors":[{"firstName":"Lilly", "lastName":"Wachowski"}, {"firstName":"Lana", "lastName":"Wachowski"}] }'),
('{ "title": "The fellowship of the ring", "genre": [{"name":"adventure"}, {"name":"fantasy"}], "year": 2001, "directors":[{"firstName":"Peter", "lastName":"Jackson"}] }');