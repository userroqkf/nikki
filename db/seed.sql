-- Insert sample data into the 'users' table
INSERT INTO users (first_name, last_name, username, profile_picture)
VALUES
  ('John', 'Doe', 'johndoe', 'john_profile.jpg'),
  ('Jane', 'Smith', 'janesmith', 'jane_profile.jpg'),
  ('Alice', 'Johnson', 'alicej', 'alice_profile.jpg');

-- Insert sample data into the 'posts' table
INSERT INTO posts (text, image, date_created, owner_id)
VALUES
  ('This is John''s first post!', 'post_image1.jpg', '2023-09-27', 1),
  ('A beautiful sunset!', 'post_image2.jpg', '2023-09-28', 2),
  ('Hello, world!', NULL, '2023-09-29', 3);

-- Insert sample data into the 'comments' table
INSERT INTO comments (owner_id, post_id, date)
VALUES
  (1, 1, '2023-09-27'),
  (2, 1, '2023-09-28'),
  (3, 2, '2023-09-29');

-- Insert sample data into the 'follow' table
INSERT INTO follow (follower, following)
VALUES
  (1, 2),
  (1, 3),
  (2, 1),
  (3, 2);
