function getRE(){
	var re = /[a-z]/;//�����ʾʽ���÷�
	re.foo = "bar";
	return re;
}
var reg = getRE();
var reg2 = getRE();
console.log(reg==reg2);//false �ڴ��ַ��֤��һ��
reg.foo="hello";
console.log(reg.foo); //���ԭ���Ľ��и���