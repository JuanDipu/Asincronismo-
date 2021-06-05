const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Do Something Async"), 3000)
      : reject(new Error("Test Error"));
  });
};

const doSomething = async () => {
  // esto siceda
  const something = await doSomethingAsync();
  console.log(something);
};

console.log("Before");
doSomething();
console.log("After");

const anotherFuntion = async ()=>{
    try {
        const something = await doSomething();
        //console.log(something);
        
    } catch (error) {
        console.error(error);
        
    }
}
console.log("Before 1");
anotherFuntion();
console.log("After 1");