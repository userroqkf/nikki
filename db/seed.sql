
INSERT INTO users (first_name, last_name, username, confirmed) VALUES
  ('John', 'Doe', 'johndoe', TRUE),
  ('Alice', 'Johnson', 'alicej', TRUE),
  ('Jane', 'Smith', 'janesmith', TRUE),
  ('Bob', 'Smith', 'bobsmith', TRUE),
  ('Ella', 'Anderson', 'ella', TRUE),
  ('David', 'Brown', 'davidbrown', TRUE);

INSERT INTO posts (text, owner_id, date_created) VALUES
  ('Hello, World!', 1, NOW() - INTERVAL '1 day'),
  ('A sample post', 2, NOW() - INTERVAL '2 hours'),
  ('Another post', 1, NOW() - INTERVAL '3 minutes'),
  ('Yet another post', 2, NOW() - INTERVAL '4 days'),
  ('An interesting post', 1, NOW() - INTERVAL '5 hours'),
  ('Last post for today', 2, NOW() - INTERVAL '6 days');

INSERT INTO comments (owner_id, post_id, text, date) VALUES
  (1, 1, 'Nice post!', NOW() - INTERVAL '10 minutes'),
  (2, 2, 'I agree!', NOW() - INTERVAL '2 days'),
  (1, 2, 'Great content!', NOW() - INTERVAL '4 hours'),
  (2, 1, 'Keep it up!', NOW() - INTERVAL '6 minutes'),
  (1, 1, 'Awesome!', NOW() - INTERVAL '2 days'),
  (2, 2, 'Well said!', NOW() - INTERVAL '1 hour');

INSERT INTO likes (owner_id, post_id, date) VALUES
  (1, 1, NOW() - INTERVAL '5 minutes'),
  (2, 2, NOW() - INTERVAL '1 day'),
  (1, 2, NOW() - INTERVAL '3 hours'),
  (2, 1, NOW() - INTERVAL '1 day'),
  (1, 3, NOW() - INTERVAL '30 minutes'),
  (2, 4, NOW() - INTERVAL '5 days');

INSERT INTO follow (follower, following) VALUES
  (1, 2),
  (2, 1),
  (3, 4),
  (4, 3);
