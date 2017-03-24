(function (name, definition) {
	//��������Ļ����Ƿ�ΪAMD������CMD
	var hasDefine = typeof define === "function",
        //��������Ļ����Ƿ�Ϊnode
		hasExports = typeof module !== 'undefined' && module.exports;
	if(hasDefine){
		//AMD��������CMD����
		define(definition);
	}else if (hasExports) {
		//����ΪNodeģ��
		module.exports = definition();
	}else {
		//��ģ���ִ�н������window����
		this[name]=definition();
	}
})('hello',function () {
	var hello = function () {};
	return hello;
});
