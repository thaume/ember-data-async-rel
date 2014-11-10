import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EdAsyncRelENV.locationType
});

Router.map(function() {
  this.resource('projects', function () {
    this.route('new');

    this.resource('project', { path: ':id' }, function () {
      this.route('participants');
    });
  });
});

export default Router;
