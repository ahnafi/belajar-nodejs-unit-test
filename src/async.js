export const sayHelloAsync = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`hello ${name}`);
      } else {
        reject("name is empty");
      }
    }, 1000);
  });
};

export async function getBalance(name,from){
  const balance = await from()
  return {name,balance}
}