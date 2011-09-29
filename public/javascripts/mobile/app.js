var App =  {
  initialize: function() {
    _.each(this.Routers, function(router) {
      new router();
    });
    Backbone.history.start({pushState:true});
  },
  Collections: {},
  Routers: {},
  Models: {},
  Views: {}
};

$(document).ready(function() {
  App.initialize();
});
