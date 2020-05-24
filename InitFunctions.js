var WhieghtsArray = {}

function splitObject(obj) {
    var arr1 = Object.keys(obj);
    var arr2 = Object.values(obj);
    return [arr1, arr2]
};

function shuffle(obj) {
    //Partly from stackoverflow; https://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize 
    var t = splitObject(obj)
    // // l(t[0])
    for (var i = 0; i < t[0].length - 1; i++) {
        var j = i + Math.floor(Math.random() * (t[0].length - i));

        var temp = t[0][j];
        t[0][j] = t[0][i];
        t[0][i] = temp;
    }
    var mp = new Map()
    for(var i in t[0]) { mp.set([t[0][i]], obj[t[0][i]]) };
    return mp;
}

function selectStrategy() {
    // l('Hello World')
    var strategyMap = shuffle(WhieghtsArray);
    // l(strategyMap)
    for(var b of strategyMap) {
        var a = Math.random()
        if(b[1] > a) {
            if(b[0][0] == 1) {  return Strategy1 }
            else if(b[0][0] == 2) { return Strategy2 }
            else if(b[0][0] == 3) { return Strategy3 }
            else if(b[0][0] == 4) { return Strategy4 }
        };
    };
    backup = selectStrategy()
    return backup
};