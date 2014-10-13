Chat.Router.map(function() {
  this.resource('messages');
  this.route('about');
});

// Chat.ChatRoute = Ember.Route.extend({
// 	model: function() {
//     	return this.store.find('index');
//     }
// });

Chat.MessageRoute = Ember.Router.extend ({
	model: function (){
		return Chat.Message.FIXTURES;
	}
});
