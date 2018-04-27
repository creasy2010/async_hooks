
import async_hooks from  'async_hooks';

setTimeout(() => {
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
},0);

setTimeout(() => {
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
  printAsyncInfo();
},0);
console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);


function printAsyncInfo(){
  console.log(`executionAsyncId:${async_hooks.executionAsyncId()},triggerAsyncId:${async_hooks.triggerAsyncId()}}`);
}
