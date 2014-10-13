Chat.Message = DS.Firebase.Model.extend ({
	username: DS.attr('string'), 
  	timestamp: DS.attr('date'),
  	message: DS.attr('string')
});

Chat.Message.FIXTURES = [
{
	id:1,
	message:"hey"
},
{
	id:2,
	message:"heyo"
},
{
	id:3,
	message:"heya"
}
];
