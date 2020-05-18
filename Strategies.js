//var strategy = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// createsequncearray() {
//     arr = []
//     for(var i= 0;i<6;i++)
//         i = Math.round(Math.random() * )
// }

// function selectStrategy(){
//     var arr = createsequncearray() 
// };

// function createSessionStrategy() {
//     for(var a = 0; a <=49; a++) {};
// }; //Finish this

function getdiffIndvMean(dataSetL, dataSetT) {
    /**Calulates the mean difference between  lying and telling the truth*/
    var truth = calcMean(dataSetT);
    var lie = calcMean(dataSetL);
    return (lie - truth);
}; 

function stretegiesreward(diffIndvMeanNew, diffIndvMeanOld) {
    /**Reard system for  individual mean difference. It provides proper feedback by checking what the diff is 
     * between the new and the old data. Providing possitive feedback for incresing difference between
     * old and new difference. The system should converge when there is a difference of 2000ms.
     * 
     * The function takes two parameters which are the current diff in mean (diffIndvMeanNew) 
     * and the old (diffIndvMeanOld). It returns either a negative or possitive reward.
    */
    rewardStep1 = diffIndvMeanNew - diffIndvMeanOld;
    if (rewardStep1 < 0){
        return negativeReward = (-1 * pow(rewardStep1)); 
    }else if (rewardStep1 > 1 && diffIndvMeanOld < 2000) {
        return positiveReward = pow(rewardStep1);
    };
};

function shouldDecend(){
    /** A function to answer the CurrQstn if the software agent should decend in the search tree.
     * It takes two parameater which are the CurrQstn it is currently asking (CurrQstn). Which represents the 
     * agents current state. And the card of highest certanty (CurrHgh) which represents its goal.
     * 
     * The algorith check upwards from the goal too see if it finds the current state. If not it is assumed 
     * that the agent should ascend instead of deceand to get to the path of the goal. If it is at the lowest 
     * level of the tree it returns 
     * 
     * 
     * (current.id[0] + current.id[1]) != (CurrQstn[0] + CurrQstn[1]) //save
     */
    goal = document.getElementById(CurrHgh).id; // Gets element of highest card from id: 'TreeStructure' in the html
    // l('shouldDecend1')
    // l(CurrQstn)
    // l(goal)
    path = verticalDict[goal]
    // l(path)
    if(CurrQstn[1] != '4' && CurrQstn[1] != '5' && CurrQstn[1] != '6' && CurrQstn[1] != '7') {
        for(var a in path){
            // l('shouldDecend2')
            // l(path[a])
            if(path[a] == CurrQstn) {return path[a-1]}
            else if(path[a][1] == '1') {return false}
        };
    }else {return 'lowest'};
};

function Ascend(){
    /**A function for determining which is the next question by ascending in the search tree. It takes the current
     * question as a parameater and return what its next state will be. 
    */
//    l('Ascend1')
    if(CurrQstn[1] != 1) {var nextState = verticalDict[CurrQstn][1]}
    else {var nextState = verticalDict[CurrQstn][1]}
    // else {l('Ascend3'); nextState = horizontalSample(CurrQstn)};
    return nextState;
}; //Needs fixing

function startOver(){
    /**A function that starts the questioning process over from one of the two questions on color*/
    // l('startOver1')
    beginwith = Math.round(Math.random())
    if(beginwith === 0){
        l('startOver_Q1_1')
        var nextState = 'Q1_1'
    } else {
        // l('startOver_Q1_2')
        var nextState = 'Q1_2'
    };
    return nextState
};

function Testtop(){
    top5 = getTop5();
    selection = Math.floor(Math.random() * top5.length)
    var nextState = top5[selection]
    return nextState
};

function Strategy1(){
    // l('*********************************************************************************')
    // l('Strategy1_1')
    // l(CurrQstn)
    var answer = ''
    if(counter == 1){
        var coin = coinflip()
        if(coin == 1){answer = 'Q1_1'} else {answer = 'Q1_2'}
    } else {
        answer = shouldDecend();
    };   
    if(answer === false){
        // l('Strategy1_2')
        var nextState = Ascend();
    } else if (answer === 'lowest'){
        // l('Strategy1_3')
        if(CurrHgh == CurrQstn){
            // l('Strategy1_startOver')
            var nextState = startOver();
        } else {
            // l('Strategy1_Testtop')
            var nextState = Ascend();
        };
    } else {
        // l('Strategy1_4')
        var nextState = answer;
    };
    CurrQstn = nextState
    Training_qstn.push(CurrQstn)
    // l('Strategy1_5')
    // l(CurrQstn)
    // l('------------------------------------------------------------------------------')
    return nextState;
};

function Strategy2(){
    return allIDs[14+counter]
}

function Strategy3(){
    //Strategy that
};

function selectrandom(){
    return AllCards[Math.round(Math.random() * AllCards.length)];
};

function horizontalSample(){
    var current = document.getElementById(CurrQstn);
    var parent = current.parentElement.parentElement
    var chldrn = parent.children
    var possibles = Array.from(chldrn).filter((entry) => {return (entry.firstChild != current && current.classList[1] == entry.firstChild.classList[1])})
    if(possibles.length > 1) {var selection = possibles[Math.round(Math.random() * possibles.length)].firstChild.id} else {var selection = possibles[0].firstChild.id};
    return selection
}; 

