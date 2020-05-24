function finalprediction(highestcard){
    // l('finalprediction')
    hideElement('Exjobb_Web')
    document.getElementById('drawn_card').removeChild(document.getElementById('THE_CARD'))
    showElement('drawn_card')
    var text = document.createElement('p')
    text.id = 'yor_card?'
    text.innerHTML = 'Was this your card? (Answer honestly)'
    var elmnt = document.createElement('object')
    elmnt.type = 'image/svg+xml'
    elmnt.id = 'THE_CARD'
    elmnt.data = highestcard.concat('.SVG')
    document.getElementById('drawn_card').appendChild(elmnt)
};

function getCards(){
    var cards = questionCard[CurrQstn];
    return cards;
};

function getHighestProbCard(){
    var max = '';
    for (var a in cardsBelief) {
        var value = cardsBelief[a]
        // // l('value')
        // // l(value)
        if (cardsBelief[max] < value){
            max = a
            maxValue = value
            // // l('MAX')
            // // l(max)
        };
    };
    for(var i in questionCard) {if(questionCard[i] == max) {maxKey = i}};
    return [maxKey, max, maxValue]
};

function GethighScore(reactionTime){
    var toadd = Math.round((10000 - reactionTime)/100);
    var result = highScore + toadd;
    if(result > highScore) {
        highScore = result
        highscoreAdd = toadd
    } else {highScore = highScore};
};

function getTop5(){
    var top5 = {}
    var temp = cardsBelief;
    max = '';
    previus = {}
    for(x = 0; x <= 4; x++){
        for (var a in cardsBelief) {
            if (cardsBelief[max] < cardsBelief[a] && previus[a] !== 1){
                max = a;
            };
        };
        previus[max] = 1
        top5[max] = cardsBelief[max];
        max = ''
    };
    return top5
};

function selectrandquestion(){
    var questions = allIDs;
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQstn(randomQuestion)
    var Question = document.getElementById(randomQuestion).value
    return Question
};

function setCurrentQstn(QstnID) {
    CurrQstn = QstnID;
};

function removePlusScore() {
    var place2 = document.getElementById("_Score");
    var trash2 = place2.firstChild;
    place2.removeChild(trash2)
    highscoreAdd = 0;
};

function removeHighscore(){

    var place = document.getElementById("Highscore");
    var trash = place.firstChild;
    place.removeChild(trash)
};

function updatecards(answer, ReactionResult){
    //This function updates the card belives object with the new result. Creating the new belifes.
    l('updatecards1')
    var cards = getCards(CurrQstn)
    l(cards)
    var multipleCards = Array.isArray(cards)
    if (answer === 'Yes'){
        // // l('updatecards-yes')
        if (ReactionResult[0] === 'probT'){
            // // l('updatecards-probT')
            if(multipleCards === true){
                // // l('updatecards-multipleCards')
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards[a]] = cardsBelief[cards[a]] + ReactionResult[1]
                    // // l(cardsBelief[cards[a]])
                };
            } else {
                // // l('updatecards-singleCard')
                cardsBelief[cards] = cardsBelief[cards] + ReactionResult[1]
            };
        } else if (ReactionResult[0] === 'probL'){
            // // l('updatecards-probL')
            if(multipleCards === true){
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
                };
            } else {
                cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
            };
        };
    } else if (answer === 'No'){
        // // l('updatecards-No')
        if (ReactionResult[0] === 'probT'){
            // // l('updatecards-probT')
            if(multipleCards === true){
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
                };
            } else {
                cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
            };
        } else if (ReactionResult[0] === 'probL'){
            // // l('updatecards-probL')
            if(multipleCards === true){
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards] = cardsBelief[cards] + ReactionResult[1]
                };
            } else {
                cardsBelief[cards] = cardsBelief[cards] + ReactionResult[1]
            };
        };
    };
    // // l('here1')
    // // l(counter)
    // // l('cardsbelief')
    // // l(cardsBelief)
    CurrHgh = getHighestProbCard()[0];
    updateMeanBelievies();
    updatePathBeliefes()
};

function getCardsBelifes(cards){
    // // l('getCardsBelifes1')
    // // l(cards)
    var arr = [];
    for(var i in cards){
        arr.push(cardsBelief[cards[i]])
    };
    // // l('getCardsBelifes2')
    // // l(arr)
    return arr 
};

function returnArrCards(cards) {
    var arr = []
    for(var a in cards) {
        arr.push(questionCard[cards[a]])
    };
    // // l('returnArrCards1')
    // // l(arr)
    return arr
};

function updatePathBeliefes() {
    for(i = 0; i < 52; i++ ) {
        pathBeliefes[allIDs[14 + i]] = getPathMean(allIDs[14 + i])
    };
};

function updateMeanBelievies(){
    BlackMean = calcMean(getCardsBelifes(BlackCards));
    RedMean = calcMean(getCardsBelifes(RedCards));
    DiomondMean = calcMean(getCardsBelifes(Dimonds));
    HeartsMean = calcMean(getCardsBelifes(Hearts));
    SpadesMean = calcMean(getCardsBelifes(Spades));
    cloverMean = calcMean(getCardsBelifes(Clover));
    NmbMean = calcMean(getCardsBelifes(nmbCards));
    SpecialMean = calcMean(getCardsBelifes(specialCards));
    D_NmbMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_1a'])));
    D_SpecialMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_2a'])));
    H_NmbMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_1b'])));
    H_SpecialMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_2b'])));
    S_NmbMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_1c'])));
    S_SpecialMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_2c'])));
    C_NmbMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_1d'])));
    C_SpecialMean = calcMean(getCardsBelifes(returnArrCards(branchDict['Q2_2d'])));
};

function uppdateHighscore(){
    var place = document.getElementById("Highscore");
    var d = document.createElement('text');
    d.innerHTML = highScore
    place.append(d)

    var place2 = document.getElementById("_Score");
    var d2 = document.createElement('text');
    d2.innerHTML = "+" + highscoreAdd.toString()
    place2.append(d2)

    setTimeout(()=>{removePlusScore()}, 1000)
};


function coinflip(){
    // return 0 //Debug line
    return Math.round(Math.random())
};


function uppdateHighscoreNEGATIVE(){
    var place = document.getElementById("Highscore");
    var d = document.createElement('text');
    d.innerHTML = highScore
    place.append(d)

    var place2 = document.getElementById("_Score");
    var d2 = document.createElement('text');
    d2.innerHTML = "-" + highscoreAdd.toString()
    place2.append(d2)

    setTimeout(()=>{removePlusScore()}, 1000)
};

function chckIfSecond(){
    // l('chckIfSecond')
    if(doneOne == false) {
        // l('chckIfSecond-false')
        doneOne = true;
        MAIN();
    }else if(doneOne == true) {
        // l('chckIfSecond-true')
        MAIN();
    };
};