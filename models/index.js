// import the Vote model
const Vote = require('./Vote');



// create the associations
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

  






// export Vote along with User and Post
  module.exports = { User, Post, Vote };
