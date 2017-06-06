var datay = {uname:name};
Vue.component('app-header', {
	'template': `
		<div class='container-fluid ui'>
		<div class='ui menu secondary rm-rd white fixed'>
			<div class='container ui'>
			<div class='header item'><i class='icon code big blue'></i>{{ title }}</div>
			<div class='menu right'>
			   <div v-if="long == 'new' " class='item'>
				<p class='item'> {{ uname }}</p>
			  </div>
			  <div v-else class='item'>
				<div class='header item'>Login with</div>
				<a href='#' class='header item'><i class='icon github big'></i>Github</a>
				<a href='#' class='header item' @click='facebookLogin'><i class='icon facebook big'></i> Facebook</a>
			  </div>
			</div>
			</div>
		</div>
		</div>
	`,
	props:['title', 'long'],

	data:function() {
	 return datay
	},
	methods:{
		facebookLogin: function(){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      provider.setCustomParameters({
      'display': 'popup'
      });
      firebase.auth().signInWithPopup(provider).then(function(result) {
      localStorage['px_email'] = JSON.stringify(result);
      window.location.assign('/home');
}).catch(function(error) {
    alert('error');
console.log(JSON.stringify(error)); 
});
		}
	}
})
new Vue({
	el: '#app'
})