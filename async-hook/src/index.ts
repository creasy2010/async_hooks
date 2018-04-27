
import async_hooks from 'async_hooks';

setTimeout(() => {
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
},0);

setTimeout(() => {
  //方法调用仍在同一个hook中.
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
  printAsyncInfo();
},0);

let inteval  = setInterval(() => {
  //Interval 在同一个hook中.
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
  printAsyncInfo();
},1000);

setTimeout(()=>clearInterval(inteval),5000);

console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);


function printAsyncInfo(){
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
}
