App.Models.Post = Backbone.Model.extend({

  initialize: function() {
    this.comments = new App.Collections.Comments(this.get("comments"));
  },

  url: function(){
    return '/posts/' + this.id
  },

  reactionCount: function(){
    return this.get('commentCount') + this.get('likeCount');
  }
});
