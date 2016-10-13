/**
 * Created by qingcheng on 16/10/12.
 */
var typeDetect = require('./typeDetect');

function merge(to, from) {
    "use strict";
    var p,
        toVal,
        fromVal;
    if(!typeDetect.isLikeObject(to) || !typeDetect.isLikeObject(form)){
        throw new Error('parameters must be object or function!');
    }
    for(p in from){
        if(from.hasOwnProperty(p)){
            toVal = to[p];
            fromVal = from[p];
            if(!to.hasOwnProperty(p)){
                to[p] = fromVal;
            }else{
                if(typeDetect.isLikeObject(toVal) && typeDetect.isLikeObject(fromVal)){
                    //if toVal and fromVal are object/function then merge them
                    merge(toVal, fromVal);
                }
            }
        }
    }
}