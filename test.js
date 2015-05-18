/**
 * Created by caoyangkaka on 5/16/15.
 */
var a = 12;
setTimeout(function(){
    a++;
    console.log('a' + a);
}, 100);
for(var i = 0; i < 100000; i++) {
    console.log(a);
}
for(var i = 0; i < 100000; i++) {
    console.log(a);
}