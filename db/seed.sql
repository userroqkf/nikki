-- Seed data for the users table
INSERT INTO users (first_name, last_name, username, profile_picture) VALUES
  ('John', 'Doe', 'johndoe', 'profile1.jpg'),
  ('Alice', 'Smith', 'alicesmith', 'profile2.jpg'),
  ('Bob', 'Johnson', 'bobjohnson', 'profile3.jpg');

-- Seed data for the posts table
INSERT INTO posts (text, image, date_created, owner_id) VALUES
  ('Hello world!', 'post1.jpg', '2023-10-02', 1),
  ('A beautiful sunset', 'post2.jpg', '2023-10-03', 2),
  ('Coding is fun!', NULL, '2023-10-04', 3);

-- Seed data for the comments table
INSERT INTO comments (owner_id, post_id, text, date) VALUES
  (2, 1, 'Nice post!', '2023-10-02'),
  (1, 2, 'Great shot!', '2023-10-03'),
  (3, 1, 'I agree!', '2023-10-02');

-- Seed data for the likes table
INSERT INTO likes (owner_id, post_id, date) VALUES
  (1, 1, '2023-10-02'),
  (2, 1, '2023-10-02'),
  (1, 2, '2023-10-03');

-- Seed data for the follow table
INSERT INTO follow (follower, following) VALUES
  (1, 2),
  (1, 3),
  (2, 1);