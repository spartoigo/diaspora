App.Views.Search = Backbone.View.extend({
  className: "search-view",

  initialize: function(){
    this.render();
  },

  events: {
  },

  render: function() {
    var $content = $("#content").html("");
    TemplateHelper.get("search", $.proxy(function(templateHtml) {
      $(this.el).html(
        $.mustache(templateHtml, {})
      ).appendTo($content);
    }, this));
    return this;
  }
});
