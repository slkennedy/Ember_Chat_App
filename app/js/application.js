// var App = Ember.Application.create({});

window.Chat = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Chat.ApplicationAdapter = DS.FixtureAdapter.extend();