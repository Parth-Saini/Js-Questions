const str = "ankush";

const myFunction = (name) => {
    if (name%2 !== 0) {
    const firstChar = name.charAt(0).toUpperCase();
    const lastChar = name.charAt(name.length - 1).toUpperCase();
    const secondChar = name.slice(1,Math.floor(name.length/2)).toLowerCase();
    const middle = name.charAt(Math.ceil(name.length/2)).toUpperCase();
    const forth = name.slice(Math.ceil(name.length/2),name.length-1).toLowerCase();
    const output = firstChar + secondChar + middle + forth + lastChar;
    } 
    else if (name%2 == 0) {
        const firstChar = name.charAt(0).toUpperCase();
        const lastChar = name.charAt(name.length - 1).toUpperCase();
        const secondChar = name.slice(1,(name.length/2)).toLowerCase();
        const middle = name.charAt((name.length/2)-1).toUpperCase();
        const forth = name.charAt(name.length/2).toUpperCase();
        const output = firstChar + secondChar + middle + forth + lastChar;
    }
    return output;
}
console.log(myFunction(str));