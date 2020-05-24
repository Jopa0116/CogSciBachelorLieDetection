function calcMean(SetofItems){
    var sum = 0.000;
    for(a = 0; a <= (SetofItems.length-1); a++){sum += SetofItems[a]};
    var mean = sum/SetofItems.length;
    return mean;
};

function calcSTD(SetofItems, mean){
    var sum = 0.00
    var bit = 0.00
    for(a = 0; a <= (SetofItems.length-1); a++) {
         bit = Math.pow((SetofItems[a]-mean), 2);
         sum += bit;
    };
    variance = sum/(SetofItems.length);
    std = Math.sqrt(variance)
    return [variance, std]
};

function getprob(mean, STD, xValue){
    prob = (1/(STD * Math.sqrt(2*Math.PI)))*Math.exp((-1/2)*Math.pow(((xValue-mean)/STD), 2));
    return prob;
};

function calcCertanty(xValue){
    var probs = {
    'probR': getprob(testRTM, testRTstd[1], xValue),
    'probT': getprob(testTTM, testTTstd[1], xValue),
    'probL': getprob(testLTM, testLTstd[1], xValue)
    };
    var uncertanty = 0
    var highest = Math.max(probs['probR'], probs['probT'], probs['probL']);
    for(var a in probs){  
        if (probs[a] == highest){
            var highestkey = a;
        }
        else {
            uncertanty = uncertanty + probs[a]
        };
    };
    var certanty = highest - uncertanty;
    return [highestkey, certanty];
};