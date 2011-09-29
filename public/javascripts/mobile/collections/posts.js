App.Collections.Posts = Backbone.Collection.extend({
  url: "/aspects.json",
  model: App.Models.Post,
}),

App.Collections.Stream = new App.Collections.Posts();
