// 1️⃣2️⃣ Async Await Example

async function fetchData(){
   return "Data Loaded";
}

async function show(){
   let result = await fetchData();
   console.log(result);
}

show();