l = console.log
var UR = 'https://script.google.com/macros/s/AKfycbxgndRdAPoNlvFkQymHTRo1czNDmkpgUjGw0AD36vg8dmazELCC/exec'

load()

function load(){
    const url = UR
    var ab = fetch(url, { 
    method: 'POST', 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: new URLSearchParams('Hello World')
    })
    .then( result => {
        // console.log(result.text())
        // var parsed = JSON.parse(result.text().PromiseValue)
        l('DOOOONEEE')
        a = result.json()
        return a

    })
    .then( objct => {
        Loaded = objct

        TTTarr = sum_RT_Arrays('listTTT')
        TLTarr = sum_RT_Arrays('listTLT')
        TRTarr = sum_RT_Arrays('listTRT')

        Strategy1_R = 0.25
        Strategy2_R = 0.25
        Strategy3_R = 0.25
        Strategy4_R = 0.25

        setRewards()

        WhieghtsArray[1] = Strategy1_R
        WhieghtsArray[2] = Strategy2_R
        WhieghtsArray[3] = Strategy3_R
        WhieghtsArray[4] = Strategy4_R

        testRTM = calcMean(TRTarr)
        testRTstd = calcSTD(TRTarr, testRTM)
        testTTM = calcMean(TTTarr)
        testTTstd = calcSTD(TTTarr, testTTM)
        testLTM = calcMean(TLTarr)
        testLTstd = calcSTD(TLTarr, testLTM)

        strtg = selectStrategy()
    })
};

function sum_RT_Arrays(key) {
    var data = Loaded[key]
    var arr = []
    for(var a in data) {
        var t = data[a][0].split(',')
        for(b in t) {
            arr.push(parseInt(t[b]))
        }
    };
    arr = arr.filter((value) => {return !Number.isNaN(value);})
    return arr
};

function setRewards(){
    var RewardsList = Loaded['RewardsList']
    var StrtgList = Loaded['StrtgList']
    for(var a in RewardsList){
        try{
            object = JSON.parse(RewardsList[a])
            var totalReward = 0
            for(b in object) {
                totalReward += object[b]
            }
            if(StrtgList[a] == 'Strategy1') {
                Strategy1_R += totalReward
            } else if (StrtgList[a] == 'Strategy2') {
                Strategy2_R += totalReward
            } else if (StrtgList[a] == 'Strategy3') {
                Strategy3_R += totalReward
            } else if (StrtgList[a] == 'Strategy4') {
                Strategy4_R += totalReward
            };
        }catch{}
    }
}