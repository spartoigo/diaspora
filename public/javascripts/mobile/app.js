var App =  {
  initialize: function() {
    _.each(this.Routers, function(router) {
      new router();
    });
    Backbone.history.start();
  },
  Collections: {},
  Routers: {},
  Models: {},
  Views: {}
};

$(document).ready(function() {
  App.initialize();
});
