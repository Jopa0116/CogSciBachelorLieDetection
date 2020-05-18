function finalprediction(highestcard){
    addquestion(highestcard); //placeholder
};

function getCards(){
    var cards = questionCard[CurrQstn];
    return cards;
};

function getHighestProbCard(){
    var max = '';
    for (var a in cardsBelief) {
        var value = cardsBelief[a]
        // l('value')
        // l(value)
        if (cardsBelief[max] < value){
            max = a
            maxValue = value
            // l('MAX')
            // l(max)
        };
    };
    for(var i in questionCard) {if(questionCard[i] == max) {maxKey = i}};
    return [maxKey, max, maxValue]
};

function GethighScore(reactionTime){
    var result = highScore + (8000 - reactionTime);
    if(result > highScore) {
        highScore = result
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

function removeHighscore(){
    var place = document.getElementById("Highscore");
    var trash = place.firstChild
    place.removeChild(trash)
};

function updatecards(answer, ReactionResult){
    l('updatecards1')
    var cards = getCards(CurrQstn)
    // l(cards)
    var multipleCards = Array.isArray(cards)
    if (answer === 'Yes'){
        // l('updatecards-yes')
        if (ReactionResult[0] === 'probT'){
            l('updatecards-probT')
            if(multipleCards === true){
                l('updatecards-multipleCards')
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards[a]] = cardsBelief[cards[a]] + ReactionResult[1]
                    // l(cardsBelief[cards[a]])
                };
            } else {
                l('updatecards-singleCard')
                cardsBelief[cards] = cardsBelief[cards] + ReactionResult[1]
            };
        } else if (ReactionResult[0] === 'probL'){
            l('updatecards-probL')
            if(multipleCards === true){
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
                };
            } else {
                cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
            };
        };
    } else if (answer === 'No'){
        // l('updatecards-No')
        if (ReactionResult[0] === 'probT'){
            // l('updatecards-probT')
            if(multipleCards === true){
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
                };
            } else {
                cardsBelief[cards] = cardsBelief[cards] - ReactionResult[1]
            };
        } else if (ReactionResult[0] === 'probL'){
            // l('updatecards-probL')
            if(multipleCards === true){
                for(a=0; a < cards.length; a++){
                    cardsBelief[cards] = cardsBelief[cards] + ReactionResult[1]
                };
            } else {
                cardsBelief[cards] = cardsBelief[cards] + ReactionResult[1]
            };
        };
    };
    // l('here1')
    l(counter)
    l('cardsbelief')
    l(cardsBelief)
    CurrHgh = getHighestProbCard()[0];
    Training_Result.push(CurrHgh)
};

function uppdateHighscore(){
    var place = document.getElementById("Highscore");
    var d = document.createElement('text');
    d.innerHTML = highScore
    place.append(d)
};

function coinflip(){
    // return 0 //Debug line
    return Math.round(Math.random())
};
