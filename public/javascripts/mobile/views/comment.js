App.Views.Post = Backbone.View.extend({
  tagName: 'li',
  className: "comment",

  initialize: function(){
    this.render();
  },

  render: function() {
    TemplateHelper.get("comment", $.proxy(function(templateHtml) {
      $(this.el).html(
        $.mustache(templateHtml, this.model.toJSON())
      ).appendTo(stream);
    }, this));
    return this;

    // var $content = $("#content").html("");
    // TemplateHelper.get("post", $.proxy(function(postTemplateHtml) {
    //   TemplateHelper.get("comment", $.proxy(function(commentTemplateHtml) {

    //     $(this.el).html(
    //       $.mustache(postTemplateHtml, this.model.toJSON(), {comment: commentTemplateHtml})
    //     ).appendTo($content);
    //   }, this));
    // }, this));
    // return this;
  }
});
