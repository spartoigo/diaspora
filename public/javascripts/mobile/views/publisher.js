App.Views.Publisher = Backbone.View.extend({
  template: $.mustache,

  className: "publisher",

  events : {
    "submit #new_status_message_form" : "submitPost",
  },

  render: function() {
    $("#content").html("<form id='new_status_message_form'><textarea>publisher goes here</textarea><input type='submit'/></form>");
    return this;
  },

  submitPost : function(evt){
    console.log(evt);
    alert('heroi');
    console.log('here');
    evt.preventDefaults();
    new App.Models.Post({"text" : "hello"}).save();
    return this;
  }

});
