export default function(paramKey){
    var namesMap = {
        color : 'цвет',
        diameter: 'диаметр',
        height: 'высота',
        weight: 'вес'

    };
    return namesMap[paramKey];
}