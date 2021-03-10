let vue = new Vue({
	el:'#calc-wrap',
	data: {
		result:'',
		number:[0,1,2,3,4,5,6,7,8,9],
		opirationClick: false,
	},
	metods: {
		input: function(up){
			if(this.operationClick){
				this.result = '';
				this.operationClick =false;
			}
			this.result +=up;
		},
		reset: function() {
			this.result = '';
		},
		divide: function() {
			this.opertion = (a,b)=> b/a;
			this.setOrew();
		},
		multiplay: function() {
			this.opertion = (a,b)=> a*b;
			this.setOrew();
		},
		subtract: function() {
			this.opertion = (a,b)=> b-a;
			this.setOrew();
		},
		sum: function() {
			this.opertion = (a,b)=> b+a;
			this.setOrew();
		},

		cal: function(){
			this.result = this.opertion(
				parseInt(this.result),
				parseInt(this.prev),
			)
		},
		setOrew: function() {
			this.prev =this.result;
			this.operationClick = true;
		}
	}
});
