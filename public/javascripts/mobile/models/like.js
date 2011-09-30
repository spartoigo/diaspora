App.Models.Like = Backbone.Model.extend({
  url: function(post_id){
    return '/post/' + post_id + '/likes/' + this.id + '.json'
  },
});
