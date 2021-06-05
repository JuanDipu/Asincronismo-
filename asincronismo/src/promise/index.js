//promesas, paso, puede pasar o nunca paso
const somethingWillHappen = () => {
  //dos argumentos si se ejecuta o rechazada
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!"); //se cumplio
    } else {
      reject("Whooops!"); // no se ejecuo
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 4000);
    } else {
      const error = new Error("Whoop2!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.log(err);
  });
