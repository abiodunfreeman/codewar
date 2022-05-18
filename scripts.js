const fuck = (pin) =>
{
    const arr = pin.split("");
    
    if (arr.length != 4 ) {
        if (arr.length != 6) return false;
    }
    let returnVal = arr.every(value => {
        const  allowedPinsChars = "0123456789".split("");
        if (!allowedPinsChars.includes(value)) return false;
        return true;
    })
    return returnVal;
}
console.log(fuck("2324"));