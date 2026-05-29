// 1️⃣1️⃣ Promise Example

let promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then(result => console.log(result));