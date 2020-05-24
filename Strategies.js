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

function CalcRewardTraining(){
    const a = () => {
        if(Training_Result[-1] == TrainingDraw){
            return 0.1
        }else{
            return -0.05
        };
    };

    var finalpredictionReward = a()
    RewardsOBJ['finalpredictionReward'] = finalpredictionReward;

    const b = () => {
        var NmbCrctBlfs = 0
        for(var i = 0; i < Training_Result; i++) {
            if(Training_Result[i] == TrainingDraw) { NmbCrctBlfs += 1 };
        };
        if(NmbCrctBlfs > 0) {
            return (NmbCrctBlfs/100)
        } else if (NmbCrctBlfs == 0 && Training_Result[-1] != TrainingDraw) {
            return -0.08
        } else {
            return 0
        };
    };

    NmbCorrectPrdctnRwrd = b()
    RewardsOBJ['NmbCorrectPrdctnRwrd'] = NmbCorrectPrdctnRwrd;

    const c = () => {
        const MeanDiff = getdiffIndvMean(Training_LT, Training_TT)
        if(MeanDiff >= 3000) { return 0.1 }
        else if(MeanDiff >= 2000) { return 0.05 }
        else if(MeanDiff >= 1000) { return 0.025 }
        else if(MeanDiff >= 500) { return 0.005 }
        else if(MeanDiff <= 200) { return -0.03 }
        else { return 0 };
    };

    DiffMeanRwrd = c()
    RewardsOBJ['DiffMeanRwrd'] = DiffMeanRwrd;

    l((finalpredictionReward + NmbCorrectPrdctnRwrd + DiffMeanRwrd))
    return (finalpredictionReward + NmbCorrectPrdctnRwrd + DiffMeanRwrd)
};

function getdiffIndvMean(dataSetL, dataSetT) {
    /**Calulates the mean difference between  lying and telling the truth*/
    var truth = calcMean(dataSetT);
    var lie = calcMean(dataSetL);
    return (lie - truth);
}; 

function RewardOfDiffMean(diffIndvMeanNew, diffIndvMeanOld) {
    /**Reard system for  individual mean difference. It provides proper feedback by checking what the diff is 
     * between the new and the old data. Providing possitive feedback for incresing difference.
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

function shouldDecend(goal){
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
    // // l('shouldDecend1')
    // // l(CurrQstn)
    // // l(goal)
    path = verticalDict[goal]
    // // l(path)
    if(CurrQstn[1] != '4' && CurrQstn[1] != '5' && CurrQstn[1] != '6' && CurrQstn[1] != '7') {
        for(var a in path){
            // // l('shouldDecend2')
            // // l(path[a])
            if(path[a] == CurrQstn) {return path[a-1]}
            else if(path[a][1] == '1') {return false}
        };
    }else {return 'lowest'};
};

function Ascend(){
    /**A function for determining which is the next question by ascending in the search tree. It takes the current
     * question as a parameater and return what its next state will be. 
    */
    if(CurrQstn[1] != 1) {var nextState = verticalDict[CurrQstn][1]}
    else {var nextState = verticalDict[CurrQstn][1]}
    return nextState;
};

function startOver(){
    /**A function that starts the questioning process over from one of the two questions on color*/
    // // l('startOver1')
    beginwith = Math.round(Math.random())
    if(beginwith === 0){
        // l('startOver_Q1_1')
        var nextState = 'Q1_1'
    } else {
        // // l('startOver_Q1_2')
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

function testNext() {
    CurrQstn
};

function Strategy1(){
    // // l('*********************************************************************************')
    // // l('Strategy1_1')
    // // l(CurrQstn)
    var answer = ''
    if(counter == 1){
        var coin = coinflip()
        if(coin == 1){answer = 'Q1_1'} else {answer = 'Q1_2'}
    } else {
        answer = shouldDecend(CurrHgh);
    };   
    if(answer === false){
        // // l('Strategy1_2')
        var nextState = Ascend();
    } else if (answer === 'lowest'){
        // // l('Strategy1_3')
        if(CurrHgh == CurrQstn){
            // // l('Strategy1_startOver')
            var nextState = startOver();
        } else {
            // // l('Strategy1_Testtop')
            var nextState = getHighestHorizontal();
        };
    } else {
        // // l('Strategy1_4')
        var nextState = answer;
    };
    Training_qstn.push(CurrQstn)
    // // l('Strategy1_5')
    // // l(CurrQstn)
    // // l('------------------------------------------------------------------------------')
    return nextState;
};

function Strategy2(){
    return allIDs[14+counter]
};

function returnHighestBeliefOf(cards){
    var value = -10000
    var selection = ''
    for(var a in cards) {
        if(cardsBelief[cards[a]] > value){
            value = cardsBelief[cards[a]]
            selection = cards[a]
        };
    };
    return [selection, value]
};

function returnPathHghBelief(){
    var value = -10000
    var selection = ''
    for(var a in pathBeliefes) {
        if(pathBeliefes[a] > value){
            value = pathBeliefes[a]
            selection = a
        };
    };
    return [selection, value]
};

function returnBiggerBranch(qstn){
    if(qstn[1] == 1 && qstn[3] == 1){
        if(DiomondMean > HeartsMean) { var i = 'Q3_1', l = DiomondMean } else { var i = 'Q3_2', l = HeartsMean };
    } else if (qstn[1] == 1 && qstn[3] == 2) {
        if(SpadesMean > cloverMean) { var i = 'Q3_3', l = SpadesMean } else { var i = 'Q3_4', l = cloverMean };
    } else if(qstn[1] == 3 && qstn[3] == 1){
        if(NmbMean > SpecialMean) { var i = 'Q2_1a', l = D_NmbMean  } else { var i = 'Q2_2a', l = D_SpecialMean };
    } else if (qstn[1] == 3 && qstn[3] == 2) {
        if(NmbMean > SpecialMean) { var i = 'Q2_1b', l = H_NmbMean } else { var i = 'Q2_2b', l = H_SpecialMean };
    } else if(qstn[1] == 3 && qstn[3] == 3){
        if(NmbMean > SpecialMean) { var i = 'Q2_1c', l = S_NmbMean } else { var i = 'Q2_2c', l = S_SpecialMean };
    } else if (qstn[1] == 3 && qstn[3] == 4) {
        if(NmbMean > SpecialMean) { var i = 'Q2_1d', l = C_NmbMean } else { var i = 'Q2_2d', l = C_SpecialMean };
    } else if(qstn == 'Q2_1a'){
        var crds = returnArrCards(branchDict['Q2_1a'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if (qstn == 'Q2_2a') {
        var crds = returnArrCards(branchDict['Q2_2a'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if(qstn == 'Q2_1b'){
        var crds = returnArrCards(branchDict['Q2_1b'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if (qstn == 'Q2_2b') {
        var crds = returnArrCards(branchDict['Q2_2b'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if(qstn == 'Q2_1c'){
        var crds = returnArrCards(branchDict['Q2_1c'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if (qstn == 'Q2_2c') {
        var crds = returnArrCards(branchDict['Q2_2c'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if(qstn == 'Q2_1d'){
        var crds = returnArrCards(branchDict['Q2_1d'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    } else if (qstn == 'Q2_2d') {
        var crds = returnArrCards(branchDict['Q2_2d'])
        var selection = returnHighestBeliefOf(crds)
        var i = Object.keys(questionCard).find(key => questionCard[key] === selection[0]), l = selection[1];
    };
    return [i, l]
};

function returnAscendedBelief(){
    const a = verticalDict[CurrQstn][1]
    if((a[1] + a[3] + a[4]) == '21a') { return D_NmbMean }
    else if((a[1] + a[3] + a[4]) == '22a') { return D_SpecialMean }
    else if((a[1] + a[3] + a[4]) == '21b') { return H_NmbMean }
    else if((a[1] + a[3] + a[4]) == '22b') { return H_SpecialMean }
    else if((a[1] + a[3] + a[4]) == '21c') { return S_NmbMean }
    else if((a[1] + a[3] + a[4]) == '22c') { return S_SpecialMean }
    else if((a[1] + a[3] + a[4]) == '21d') { return C_NmbMean }
    else if((a[1] + a[3] + a[4]) == '22d') { return C_SpecialMean }
    else if((a[1] + a[3]) == '31') { return DiomondMean }
    else if((a[1] + a[3]) == '32') { return HeartsMean }
    else if((a[1] + a[3]) == '33') { return SpadesMean }
    else if((a[1] + a[3]) == '34') { return cloverMean }
    else if((a[1] + a[3]) == '11') { return RedMean }
    else if((a[1] + a[3]) == '12') { return BlackMean };
};

function getHighestNeighbor(){
    if(CurrQstn[1] != 4 && CurrQstn[1] != 5 && CurrQstn[1] != 6 && CurrQstn[1] != 7) {
         w = returnBiggerBranch(CurrQstn)
         i = w[0]
         o = returnAscendedBelief()
        if(w[1] > o) { 
            return i 
        } else { 
            return verticalDict[CurrQstn][1]
        } 
    } else if ( CurrQstn[1] == 4 ||
                CurrQstn[1] == 5 || 
                CurrQstn[1] == 6 ||
                CurrQstn[1] == 7) {
                    var hgh = returnBiggerBranch(document.getElementById(CurrQstn).parentElement.parentElement.firstChild.id)
                    if(CurrQstn == hgh[0]) { return false } //It should start over
                    else { return  hgh[0]};
                };
};

function getHighestHorizontal(goal){
    var neighbors = questionDict[CurrQstn[1] + CurrQstn[2]]
    for(a in neighbors) {
        if(neighbors[a] == CurrHgh) {return neighbors[a]}
    }
    var nextState = Ascend()
    return nextState
};

function Strategy3(){
    //Strategy that pursuis most probable feuture.
    var answer = ''
    if(counter == 1){
        var coin = coinflip()
        if(coin == 1){answer = 'Q1_1'} else {answer = 'Q1_2'}
    } else {
       answer = getHighestNeighbor()
       // l('Strategy3')
       // l(answer)
    };
    if(answer == false) { var nextState = startOver() } else { var nextState = answer };
    Training_qstn.push(CurrQstn)
    return nextState;
};

function getPathMean(cardId){
    arr = verticalDict[cardId]
    cardBelief = cardsBelief[questionCard[arr[0]]]
    if(arr[1][1] == 2 && arr[1][3] == 2) {typeMean = SpecialMean} else {typeMean = NmbMean};
    if(arr[2][1] == 3 && arr[2][3] == 1) { suitMean = DiomondMean } else if(arr[2][1] == 3 && arr[2][3] == 2) {suitMean = HeartsMean} else if(arr[2][1] == 3 && arr[2][3] == 3) {suitMean = SpadesMean} else if(arr[2][1] == 3 && arr[2][3] == 4) {suitMean = cloverMean};
    if(arr[3][1] == 1 && arr[3][3] == 1) { colormean = RedMean } else if(arr[3][1] == 1 && arr[3][3] == 2) { colormean = BlackMean }
    result = (colormean + suitMean + typeMean + cardBelief)/4
    return result
};

function Strategy4() {
    //Strategy that uses the belives of the path
    // l('Strategy4_1')
    var top = returnPathHghBelief()
    // l(top)
    var answer = ''
    if(counter == 1){
        // l('Strategy4_1.5')
        var coin = coinflip()
        if(coin == 1){answer = 'Q1_1'} else {answer = 'Q1_2'}
    } else {
        // l('Strategy4_2')
        answer = shouldDecend(top[0]);
        // l(answer)
    };   
    if(answer === false){
        var nextState = Ascend();
    } else if (answer === 'lowest'){
        if(CurrHgh == CurrQstn){
            var nextState = startOver();
        } else {
            var nextState = getHighestHorizontal();
        };
    } else {
        var nextState = answer;
    };
    Training_qstn.push(CurrQstn)



    return nextState;
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