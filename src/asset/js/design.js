//单例模式
var getSingle = function( fn ){
    var result;
    return function(){
        return result || ( result = fn.apply(this, arguments ) );
    }
};


//订阅发布模式
let Event = function (){};
Event.prototype.evList = {};
Event.prototype.register = function (name, cb){
    let thisEv = this.evList[name];
    if(!thisEv || thisEv.length == 0) {
        this.evList[name] = [];
    }
    this.evList[name].push(cb);
}
Event.prototype.emit = function (name, e){
    let thisEv = this.evList[name];
    if(thisEv && thisEv.length > 0) {
        thisEv.map(item => {
            item(e)
        })
    }
}

let event = new Event();
event.register("changeNav", function (e) {
    console.log(e)
})
// event.emit('changeNav', {index: 1})


// 数据劫持
let bb = {
    a: 12,
}
var val = 12;
Object.defineProperty(bb, 'a', {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
        console.log('get value')
        return val
    },
    set: function reactiveSetter(newVal) {
        console.log('change value')
        val = newVal
    }
})
console.log(bb.a)








