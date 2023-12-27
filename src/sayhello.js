export function sayhello(name){
    if (name){
        return `hello ${name}`
    }else{
        return new Error("need name param")
    }
}