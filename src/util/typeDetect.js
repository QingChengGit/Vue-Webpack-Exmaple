/**
 * Created by qingcheng on 16/10/12.
 */
var _toString = Object.prototype.toString,
    that = {},
    features = ['Array', 'Object', 'Function', 'String', 'Number', 'Boolean', 'Null', 'Undefined'];

features.reduce(function(prev, cur, index, arr) {
    "use strict";
    prev['is' + cur] = function(o) {
        return _toString.call(o) === '[object ' + cur + ']';
    };
    return prev;
}, that);

that.isLikeObject = function(o) {
    "use strict";
    if(that.isObject(o) || that.isFunction(o)){
        return true;
    }
    return false;
};

module.exports = that;
