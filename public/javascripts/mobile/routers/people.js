App.Routers.People = Backbone.Router.extend({
  routes: {
    "people": "index",
    "people/:id": "show"
  },

  index: function(){
    new App.Views.Search({
      model : {}
    }).render();
    return this;
  },

  show: function(id){
    var person = new App.Models.Person({id : id});
    person.fetch({
      success: function(){
        new App.Views.Person({
          model : person
        }).render();
      }
    });

    return this;
  }

});
