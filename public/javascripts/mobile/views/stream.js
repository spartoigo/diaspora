App.Views.Stream = new (Backbone.View.extend({
  template: $.mustache,

  className: "stream",

  render: function() {
    var main = $("#main").html("");
    $("<div class='stream'></div>").appendTo(main);

    _.each(App.Collections.Stream.models, function(model) {
      new App.Views.Post({
        model: model
      }).render();
    });
    return this;
  }
}));
