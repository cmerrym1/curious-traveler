use curious_traveler_db;

INSERT INTO user
  (username, email,  password)
VALUES
  ('jackp', 'jackp@gmail.com', 'passsword1234'),
  ('jillp', 'jillp@gmail.com', 'passsword1234'),
  ('mgoose', 'mgoose@gmail.com', 'passsword1234')
  
INSERT INTO post
  (title, post_url, user_id)
VALUES
  ('test site1', 'best food ever', 4),
  ('test site2', 'fine food', 3),
  ('test site3', 'best food never', 3)

INSERT INTO comments
  (comment_text)
VALUES
  ('Ronald is nice'),
  ('Virginia')
  
  