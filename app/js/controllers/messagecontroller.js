Chat.MessageController = Ember.Controller.extend ({
	timestamp: function (){

		return(new Date()).toDateString()
	}.property()
});