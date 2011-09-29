App.Views.Post = Backbone.View.extend({
  className: "post-view",

  initialize: function(){
    this.render();
  },

  events: {
    "submit #new_comment_form" : "submitComment",
  },

  render: function() {
    var $content = $("#content").html("");
    TemplateHelper.get("post", $.proxy(function(postTemplateHtml) {
      TemplateHelper.get("comment", $.proxy(function(commentTemplateHtml) {

        $(this.el).html(
          $.mustache(postTemplateHtml, this.model.toJSON(), {comment: commentTemplateHtml})
        ).appendTo($content);
      }, this));
    }, this));
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
