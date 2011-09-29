App.Views.Stream = new (Backbone.View.extend({
  template: $.mustache,

  className: "stream",

  render: function() {
    $("#content").html("");
    _.each(App.Collections.Stream.models, function(model) {
      new App.Views.StreamElement({
        model: model
      }).render();
    }); 

    return this;
  }
}));
