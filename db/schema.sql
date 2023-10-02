DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS follow CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  date_created DATE,
  owner_id INTEGER REFERENCES users(id) ON UPDATE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE,
  text VARCHAR(255) NOT NULL,
  date DATE
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE,
  date DATE
);

CREATE TABLE follow (
  follower INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  following INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (follower, following)
);
