CREATE DATABASE movie_testdb;

CREATE TABLE movie (
  id serial primary key,
  movies jsonb default '{}'::jsonb
);