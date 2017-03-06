// 'use strict';
//
// function first() {
//   return Promise.resolve('');
// }
//
// function second(value) {
//   return Promise.resolve(value);
// }
//
// first().then(second).then(console.log);
//
// 'use strict';
//
// function first(){
//     return Promise.resolve('SECRET VALUE');
// }
//
// function second(val){
//     return Promise.resolve(val);
// }
//
// first().then(second).then(console.log);

first().then(second).then(console.log)

// (function() {
//   var firstPromise, secondPromise;
//
//   firstPromise = first();
//
//   secondPromise = firstPromise.then(function(value) {
//     return second(value);
//   });
//
//   secondPromise.then(console.log);
//
// }).call(this);
//
// 'use strict';
//
//     /* global first, second */
//
//     var firstPromise = first();
//
//     var secondPromise = firstPromise.then(function (val) {
//       return second(val);
//     });
//
//     secondPromise.then(console.log);

    // As an alternative to the code above, ou could also do this:
    // first().then(second).then(console.log);
