App.Views.StreamElement = Backbone.View.extend({
  className: "stream-element",

  initialize: function(){
    this.model.bind("change", this.render, this);
  },

  render: function() {
    var stream = $("<div class='stream'></div>").appendTo($("#main"));

    TemplateHelper.get("stream_element", $.proxy(function(templateHtml) {
      $(this.el).html(
        $.mustache(templateHtml, this.model.toJSON())
      ).appendTo(stream);
    }, this));
    return this;
  }

});
