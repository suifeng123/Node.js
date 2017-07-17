/**
 * Created by Administrator on 2017/7/17.
 */
var AdapterClass = require('./adapter');

exports.encode = function() {
    var encodeModule = arguments[0] ? arguments[0]:null;
    var algorithm = arguments[1]?arguments[1]:null;
    var enstring = arguments[2]?arguments[2]:null;
    var returnType = arguments[3]?arguments[3]:null;
    var encodeKey = arguments[4]?arguments[4]:null;
    var encodeType = arguments[5]?arguments[5]:null;
    var Adapter = new AdapterClass();
    return Adapter.encode(encodeModule,algorithm,enstring,returnType,encodeKey,encodeType);
};


