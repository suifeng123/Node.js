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
//确定渲染函数
var render = internals ? ReactDOMServer.renderToString:ReactDOMServer.renderToStaticMarkup;


var markup = options.doctype || '';
try{
    var component = require(filepath);
    //转换ES6代码后，组件输出可能形如 {default:Component} 的形式
    component = component.default || component;
    markup += render(React.createElement(component,locals));
}catch(err){
    err.code = 'REACT';
    throw err;
}

if(options.beautify) {
    //注意：它可能会弄错一些重要的空格，而且和生产环境下有所不同
    markup = beautifyHTML(markup);
}

var writeResp = locals.writeResp === false ? false : (locals.writeResp || options.writeResp);

if(writeResp){
    this.type = 'html';
    this.body = markup;
}

return markup;