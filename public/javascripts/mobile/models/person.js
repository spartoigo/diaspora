App.Models.Person = Backbone.Model.extend({
  url: function(){
    return '/people/' + this.id + '.json'
  }
});
