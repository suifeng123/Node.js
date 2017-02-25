function getRE(){
	var re = /[a-z]/;//正则表示式的用法
	re.foo = "bar";
	return re;
}
var reg = getRE();
var reg2 = getRE();
console.log(reg==reg2);//false 内存地址保证不一致
reg.foo="hello";
console.log(reg.foo); //会对原来的进行覆盖