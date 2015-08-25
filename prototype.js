var Shared = {
	Base : function(){
		if(!(this instanceof arguments.callee)){
			return new Shared.Base();
		}

		this.__init_base = function(){
			this.properties.id      = 0;
			this.properties.removed = false;
		}
	}
};

var Objects = {
	User : function(config){
		if(!(this instanceof arguments.callee))
			return new Objects.User(config);

		if(!config) config = {};

		this.properties    = config.properties || {};

		this.init = function(){
			this.__init_base();
			this.properties.first = this.properties.first || "Diogo";
			this.properties.last  = this.properties.last  || "Batista";
			this.properties.age   = this.properties.age   || 29;
		}

		this.print = function(){
			var str = [];
			str.push(
				this.properties.id,
				this.properties.first,
				this.properties.last,
				this.properties.age,
				this.properties.removed
		    );
		    console.log(str.join('\n'));
		}

		this.init();
	}
}

Objects.User.prototype = new Shared.Base();

var diogo = new Objects.User();
var jose  = new Objects.User({properties: {first: 'Jose', last: 'Silva', age: 55 }});

diogo.print();
jose.print();