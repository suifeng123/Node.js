/**
 * Created by Administrator on 2017/7/13.
 */
//匹配模板文件路径已清除cache
var match = createMatchFunction(options.views);
if(options.cache) {
    cleanCache(match);
}

function cleanCache(match) {
    Object.keys(require.cache).forEach(function(module){
        if(match(require.cache[module].filename)) {
            delete require.cache[module];
        }
    })
}