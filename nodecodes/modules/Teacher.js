var User = require('./User');
function Teacher(id,name,age) {
	User.apply(this,[id,name,age]); //继承了User的方法
    this.teach = function(res){
		res.write(this.name+"讲课");
	}
}

module.exports = Teacher;