CREATE DATABASE movie_testdb;

CREATE TABLE movie (
  id serial primary key,
  movies jsonb default '{}'::jsonb
);

INSERT INTO movie (movies)
VALUES('{ "title": "Matrix", "genre": ["sc-fi", "action"], "year": 1999, "directors":["Lilly Wachowski", "Lana Wachowski"] }');