export default function(value, key){
    var unitsMap = {
        color : '',
        diameter: 'см',
        height: 'см',
        width: 'см',
        cost: 'руб.',
        weight: 'г'
    }
    return `${value} ${unitsMap[key]}`;
}