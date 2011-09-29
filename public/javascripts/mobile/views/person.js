App.Views.Person = Backbone.View.extend({
  className: "person-view",

  initialize: function(){
    this.render();
  },

  events: {
    "click #new-message" : "sendMessage",
    "click #new-mention" : "postWithMention"
  },

  render: function() {

    console.log(this.model);

    var $content = $("#content").html("");
    TemplateHelper.get("person", $.proxy(function(personTemplateHtml) {
      TemplateHelper.get("stream_element", $.proxy(function(postTemplateHtml) {

        $(this.el).html(
          $.mustache(personTemplateHtml, this.model.toJSON(), {stream_element: postTemplateHtml})
        ).appendTo($content);
      }, this));
    }, this));

    return this;
  },

  sendMessage: function(){
    window.location = "#conversations/new?person_id=" + this.model.get("id");
  },

  postWithMention: function(){
    window.location = "#posts/new?person_id=" + this.model.get("id");
  }
});
