App.Routers.Aspects = Backbone.Router.extend({
  routes: {
    "": "index",
    "aspects": "index"
  },

  index: function() {
    App.Collections.Stream.fetch({
      success: function() {
        App.Views.Stream.render();
      },
      error: function() {
        alert("Error loading stream!");
      }
    });
    return this;
  }
});
