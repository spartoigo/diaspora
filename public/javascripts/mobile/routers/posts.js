App.Routers.Posts = Backbone.Router.extend({
  routes: {
    "posts/new": "newPost",
    "posts/:id": "show"
  },

  show: function(id){
    var post = new App.Models.Post({id : id});
    post.fetch({
      success: function(){
        new App.Views.Post({
          model : post
        }).render();
      }
    });

    return this;
  },

  newPost: function(){
    new App.Views.Publisher({
    }).render();
    return this;
  }

});
