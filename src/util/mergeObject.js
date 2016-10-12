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
                to[p] = from[p];
                //此处还需好好考虑下
                /*if(typeDetect.isLikeObject(toVal) && typeDetect.isLikeObject(fromVal)){
                    merge(toVal, fromVal);
                }*/
            }
        }
    }
}