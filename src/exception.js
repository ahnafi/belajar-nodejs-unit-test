export class MyException extends Error {}

export const callMe= (name)=> {
  if (name == "eko") {
    throw new MyException("ups ada yang salah!");
  } else {
    return "ok";
  }
}