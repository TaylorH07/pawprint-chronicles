// import the Vote model
const Vote = require('./Vote');



// create the associations
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'

  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });

  






// export Vote along with User and Post
  module.exports = { User, Post, Vote };
