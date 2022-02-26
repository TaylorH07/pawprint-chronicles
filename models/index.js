// import the Vote model
const Vote = require('./Vote');
// import the User model
const User = require("./User")
//import the Post model
const Post = require("./Post");



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

  Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
  Vote.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });

 
  






// export Vote along with User and Post
  module.exports = { User, Post, Vote };
