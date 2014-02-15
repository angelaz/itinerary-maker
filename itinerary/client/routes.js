Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {

  this.route('home', {
    path: '/',
    template: 'home'
  });

  // this.route('cities', {
  //   path: '/cities'
  // });

  this.route('city', {
    path: '/cities/:name',
    data: function() {
      return Destinations.find({city: this.params.name});
    },
    template: 'city'
  });

  this.route('admin', {
    path: '/admin',
    template: 'admin'
  });

  this.route('destination_entry', {
    path: '/destination_entry',
    template: 'destination_entry'
  });

  this.route('planner', {
    path: '/planner',
    template: 'planner'
  });

  this.route('plan', {
    path: '/plan/:name',
    data: function() {
      return Destinations.find({city: this.params.name});
    },
    template: 'plan'
  });

});