App.Models.Post = Backbone.Model.extend({
  url: function(){
    return '/post/' + this.id + '.json'
  },

  reactionCount: function(){
    return this.get('commentCount') + this.get('likeCount');
  }
});
