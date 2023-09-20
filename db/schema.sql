\c nikki

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  owner_id VARCHAR(255) NOT NULL,
  post_id VARCHAR(255) REFERENCES posts(id) 
  date DATE
); 
