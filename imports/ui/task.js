import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './task.html';
 
Template.task.events({
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

