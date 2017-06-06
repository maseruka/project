Vue.component('app-header', {
	'template': `
		<div class='container-fluid ui'>
		<div class='ui menu secondary rm-rd white fixed'>
			<div class='container ui'>
			<div class='header item'><i class='icon code big blue'></i>{{ title }}</div>
			<div class='menu right'>
				<div class='header item'>Login with</div>
				<a href='#' class='header item'><i class='icon github big'></i>Github</a>
				<a href='#' class='header item'><i class='icon facebook big'></i> Facebook</a>
			</div>
			</div>
		</div>
		</div>
	`,
	props:['title']
})
new Vue({
	el: '#app'
})