App.Views.Post = Backbone.View.extend({
  className: "stream-element",

  initialize: function(){
    this.render();
  },

  events: {
    "submit #new_comment_form" : "submitComment",
    "click .image_link.like_action.inactive" : "like"
  },

  render: function() {
    var stream = $(".stream").first().html('');

    TemplateHelper.get("post", $.proxy(function(templateHtml) {
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
  },

  like: function(evt) {
    evt.preventDefault();
    var like = new App.Models.Like({ "post_id" : this.model.id });
    alert('liked!');
    return this;
  },

  submitComment: function(evt){
    evt.preventDefault();
    var comment = new App.Models.Comment({ "post_id" : this.model.id, "text" : $("textarea", evt.target).val()});

    comment.save({}, {
      success: function(comment, response){
        TemplateHelper.get("comment", $.proxy(function(commentTemplateHtml) {
          $(
            $.mustache(commentTemplateHtml, response)
          ).appendTo($("#comments"));

          $("textarea").val("");
        }, this));
      }
    });

    return this;
  },

});
