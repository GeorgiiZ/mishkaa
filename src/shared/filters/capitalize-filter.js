export default function (value) {
    var capitalFirst = value.charAt(0).toUpperCase() 
    var noCaseTail = value.slice(1, value.length) 
    return capitalFirst + noCaseTail;
}