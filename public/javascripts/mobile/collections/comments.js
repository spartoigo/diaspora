App.Collections.Comments = Backbone.Collection.extend({
  url: "/comments.json",
  model: App.Models.Comment,
})
