/**
 * Created by Administrator on 2017/7/13.
 */
var defaultOPtions = {
    doctype: '<!DOCTYPE html>',
    beautify: false,
    cache:process.env.NODE_ENV === 'production',
    extname:'jsx',
    writeResp:true,
    views: path.join(__dirname,'views'),
    internals:false
};
//ȷ����Ⱦ����
var render = internals ? ReactDOMServer.renderToString:ReactDOMServer.renderToStaticMarkup;


var markup = options.doctype || '';
try{
    var component = require(filepath);
    //ת��ES6������������������� {default:Component} ����ʽ
    component = component.default || component;
    markup += render(React.createElement(component,locals));
}catch(err){
    err.code = 'REACT';
    throw err;
}

if(options.beautify) {
    //ע�⣺�����ܻ�Ū��һЩ��Ҫ�Ŀո񣬶��Һ�����������������ͬ
    markup = beautifyHTML(markup);
}

var writeResp = locals.writeResp === false ? false : (locals.writeResp || options.writeResp);

if(writeResp){
    this.type = 'html';
    this.body = markup;
}

return markup;