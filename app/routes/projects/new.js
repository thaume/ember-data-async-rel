import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return Ember.RSVP.hash({
      newProject: this.store.createRecord('project', {
        title: '',
        description: ''
      }),
      users: this.store.find('user')
    });
  }

});
