import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { AccountsCommon } from 'meteor/accounts-base';
import '../client/layouts/HomeLayout.html';//Need to add the html
import '../client/layouts/MainLayout.html';
import '../client/main.html';

console.log("kewlstuff");

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout');
  }
});
