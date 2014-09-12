import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EdAsyncRelENV.locationType
});

Router.map(function() {
  this.resource('project', { path: 'projects/:id' }, function () {
    this.route('participants');
  });
});

export default Router;
