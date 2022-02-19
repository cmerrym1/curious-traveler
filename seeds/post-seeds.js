const { Post } = require('../models');

const postdata = [
  {
    title: 'Beechcreek Botanical Gardens and Butterfly House',
    post_url: 'https://www.beechcreekgardens.org/',
    user_id: 3
  },
  {
    title: 'Cooperrider Kent Bog State Nature Preserve',
    post_url: 'https://ohiodnr.gov/go-and-do/plan-a-visit/find-a-property/cooperrider-kent-bog-state-nature-preserve',
    user_id: 3
  },
  {
    title: 'Leetonia Beehive Coke Ovens Park',
    post_url: 'https://ohio.org/things-to-do/destinations/leetonia-beehive-coke-ovens-park',
    user_id: 3
  },
  {
    title: 'Wigwam Motel, Holbrook, AZ',
    post_url: 'http://www.sleepinawigwam.com/index.html',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
