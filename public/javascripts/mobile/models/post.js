App.Models.Post = Backbone.Model.extend({
  initialize: function() {
    console.log(this.attributes);
  },

  url: function(){
    return '/posts/' + this.id
  },

  reactionCount: function(){
    return this.get('comments_count') + this.get('likes_count');
  }
});
