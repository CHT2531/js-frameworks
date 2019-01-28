Vue.component('country-item', {
  props: ['country'],
  template: '<li v-on:click="showdetails">{{ country.name }}</li>',
  methods:{
  	showdetails:function(){
  		this.$emit('showcountrydetails')
  	}
  }
})

Vue.component('country-details', {
  props: ['country','showinfo'],
  template: '<div v-if="showinfo"><h2>{{country.name}}</h2><p>The capital city of {{country.name}} is {{country.capital}}. {{country.name}} has a population of {{country.population}}.</p></div>'

})

var app7 = new Vue({
  el: '#app-7',
  data: {
    countries:[],
    chosencountry:0,
    showinfo:false
  },
  created:function(){
  	this.$http.get('data/countries.json').then((response) => { 
  		this.countries=response.data
  	});
  },
  methods:{
  	show:function(country){
  		this.chosencountry=country.id-1;
  		this.showinfo=true;
  	}
  }
})