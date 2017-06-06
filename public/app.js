new Vue({
	el: '#app-nner',
	data: {
		prods: [
		{id: 1, name: 'Yoza app', image: 'src/x1.jpg', dis: 'Hello this is yoza app make laundry.', per: '33.3%'},
		{id: 2, name: 'Analytics Best', image: 'src/x2.jpg', dis: 'We have got Analytics app.', per: '78.5%'}
		]
	},
	methods:{
		hello: function(boxid){
			alert(boxid)
		}
	}
})
new Vue({
	el: '#app3',
	data: {
		mores: [
		{id: 1, name: 'Yoza app', image: 'src/x1.jpg', dis: 'Hello this is yoza app make laundry.', per: '33.3%'},
		{id: 2, name: 'Analytics', image: 'src/x2.jpg', dis: 'We have got Analytics app.', per: '78.5%'},
		{id: 2, name: 'Jumia food', image: 'src/x2.jpg', dis: 'We have got Analytics app.', per: '78.5%'},
		{id: 2, name: 'Bus Go', image: 'src/x2.jpg', dis: 'We have got Analytics app.', per: '78.5%'}
		]
	}
})
new Vue({
	el: '#app4',
	data: {
		tests: {id: 2, name: 'Moves', image: 'src/x2.jpg', dis: 'We have got Analytics app.', per: '78.5%', logo: 'src/lg.jpg',
		dis2: 'We have got Analytics app that can tell all the shit About your life when you go for a run. sweats all the shit About your life when you go for a run all the shit About your life when you go for a run'}
	}
})
new Vue({
	el: '#app5',
	data: {
		tests: {id: 2, name: 'Ivan Mworozi', image: 'src/x2.jpg', dis: 'We have got Analytics app.', per: '22', logo: 'src/lg.jpg'}
	}
})