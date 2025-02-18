const str = "ankushj";

const myFunction = (name) => {
    const firstChar = name.charAt(0).toUpperCase();
    const lastChar = name.charAt(name.length - 1).toUpperCase();
    let output;
    if (name.length % 2 !== 0) {
        const secondChar = name.slice(1, Math.floor(name.length / 2)).toLowerCase();
        const middle = name.charAt(Math.ceil(name.length / 2) - 1).toUpperCase();
        const forth = name.slice(Math.ceil(name.length / 2), name.length - 1).toLowerCase();
        output = firstChar + secondChar + middle + forth + lastChar;
    }
    else {
        const secondChar = name.slice(1, (name.length / 2) - 1).toLowerCase();
        const middle = name.charAt((name.length / 2) - 1).toUpperCase();
        const forth = name.charAt((name.length / 2)).toUpperCase();
        const fifth = name.slice(4, (name.length) - 1).toLowerCase();
        output = firstChar + secondChar + middle + forth + fifth + lastChar;
    }
    return output;
}
console.log(myFunction(str));