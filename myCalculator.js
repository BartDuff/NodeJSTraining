let c; 

function ajouter(a, b) {
    return c = a + b;
}

function soustraire(a, b) {
    return c = a - b;
}

function multiplier(a, b) {
    return c= a * b;
}

function diviser(a, b) {
    try {
        return c = a/b;
    } catch {
        console.log("Division par 0 impossible");
    } 
}

function rappel(){
    return c;
}

module.exports = {
    ajouter: ajouter,
    soustraire : soustraire,
    rappel: rappel,
    multiplier : multiplier,
    diviser: diviser
}