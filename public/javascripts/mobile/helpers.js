var TemplateHelper = {
  cache: {},
  callbacks: {},
  path: "/javascripts/mobile/templates/",
  extension: ".mustache",
  get: function(templateName, callback) {
    this.callbacks[templateName] = this.callbacks[templateName] || [];

    if(!this.callbacks[templateName].length && !this.cache[templateName]) {
      this.callbacks[templateName].push(callback);

      $.get(this.path + templateName + this.extension, $.proxy(function(data) {
        this.cache[templateName] = data;

        this.fireAllCallbacks(templateName);

        this.callbacks[templateName] = [];
      }, this));
    }
    else if(this.callbacks[templateName].length && !this.cache[templateName]) {
      this.callbacks[templateName].push(callback);
    }
    else {
      this.fireAllCallbacks(templateName, callback);
      this.callbacks[templateName] = [];
    }

  },
  fireAllCallbacks: function(templateName, callback) {
    if(callback) {
      callback(this.cache[templateName]);
    }

    $.each(this.callbacks[templateName], $.proxy(function(index, callback) {
        callback(this.cache[templateName]);
    }, this));
    
    this.callbacks[templateName] = [];
  }
};
