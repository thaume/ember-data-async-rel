import Ember from 'ember';

export default Ember.Controller.extend({

  users: Ember.computed.alias('model.users'),
  newProject: Ember.computed.alias('model.newProject'),

  actions: {

    create: function () {
      // Creation of the array of selected users
      var selectedUsers = this.get('users').filter(function (user) {
        return !!user.get('checked');
      });

      // Opening the PromiseArray 'participant' from the newly created project
      return this.get('newProject.participants').then(function (participants) {
        participants.pushObjects(selectedUsers);
        return this.get('newProject').save();

      }.bind(this)).then(function (project) {
        this.transitionToRoute('project.index', project.get('id'));

      }.bind(this));
    }
  }

});
