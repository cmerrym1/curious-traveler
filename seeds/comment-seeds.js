const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Love this place!',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Cant wait to go here!',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Adding this to my roadtrip list!',
    user_id: 1,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
