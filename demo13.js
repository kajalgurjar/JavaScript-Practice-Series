// 1️⃣3️⃣ Debounce Function

function debounce(func, delay){
   let timer;

   return function(){
      clearTimeout(timer);

      timer = setTimeout(() => {
         func();
      }, delay);
   }
}