if(localStorage.getItem('testReadTime')===false){localStorage.setItem('testReadTime', [500])};
if(localStorage.getItem('testTruthTime')===false){localStorage.setItem('testTruthTime', [1000])};
if(localStorage.getItem('testLieTime')===false){localStorage.setItem('testLieTime', [1400])};

var testReadTime = localStorage.getItem('testReadTime')//[0532, 0423, 1023, 0976];
var testTruthTime = localStorage.getItem('testTruthTime')//[1000, 1243, 1212, 1111];
var testLieTime = localStorage.getItem('testLieTime')//[2211, 2345, 2432, 2255];
if (window.localStorage.length !== 5){
    window.localStorage.setItem('ReadTime', testReadTime);
    window.localStorage.setItem('TruthTime', testTruthTime);
    window.localStorage.setItem('LieTime', testLieTime);
    window.localStorage.setItem('IndLieTime', []);
    window.localStorage.setItem('IndTruthTime', []);
};
// The above is a placholder

var Qstns = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'];

var questionDict = {
    'Q1':['Q1_1', 'Q1_2'], 
    'Q2':['Q2_1', 'Q2_2'], 
    'Q3':['Q3_1', 'Q3_2', 'Q3_3', 'Q3_4'], 
    'Q4':['Q4_1', 'Q4_2', 'Q4_3', 'Q4_4', 'Q4_5', 'Q4_6', 'Q4_7', 'Q4_8', 'Q4_9', 'Q4_10', 'Q4_11', 'Q4_12', 'Q4_13'], 
    'Q5':['Q5_1', 'Q5_2', 'Q5_3', 'Q5_4', 'Q5_5', 'Q5_6', 'Q5_7', 'Q5_8', 'Q5_9', 'Q5_10', 'Q5_11', 'Q5_12', 'Q5_13'], 
    'Q6':['Q6_1', 'Q6_2', 'Q6_3', 'Q6_4', 'Q6_5', 'Q6_6', 'Q6_7', 'Q6_8', 'Q6_9', 'Q6_10', 'Q6_11', 'Q6_12', 'Q6_13'], 
    'Q7':['Q7_1', 'Q7_2', 'Q7_3', 'Q7_4', 'Q7_5', 'Q7_6', 'Q7_7', 'Q7_8', 'Q7_9', 'Q7_10', 'Q7_11', 'Q7_12', 'Q7_13']
};

var cardsBelief = {
    'AceD': 0,
    'D2': 0,
    'D3': 0,
    'D4': 0,
    'D5': 0,
    'D6': 0,
    'D7': 0,
    'D8': 0,
    'D9': 0,
    'D10': 0,
    'JackD': 0,
    'QueenD': 0,
    'KingD': 0,
    'AceH': 0,
    'H2': 0,
    'H3': 0,
    'H4': 0,
    'H5': 0,
    'H6': 0,
    'H7': 0,
    'H8': 0,
    'H9': 0,
    'H10': 0,
    'JackH': 0,
    'QueenH': 0,
    'KingH': 0,
    'AceS': 0,
    'S2': 0,
    'S3': 0,
    'S4': 0,
    'S5': 0,
    'S6': 0,
    'S7': 0,
    'S8': 0,
    'S9': 0,
    'S10': 0,
    'JackS': 0,
    'QueenS': 0,
    'KingS': 0,
    'AceC': 0,
    'C2': 0,
    'C3': 0,
    'C4': 0,
    'C5': 0,
    'C6': 0,
    'C7': 0,
    'C8': 0,
    'C9': 0,
    'C10': 0,
    'JackC': 0,
    'QueenC': 0,
    'KingC': 0,
};

const RedCards = ['AceD', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'JackD', 'QueenD', 'KingD', 'AceH', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'JackH', 'QueenH', 'KingH'];
const BlackCards = ['AceS', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'JackS', 'QueenS', 'KingS', 'AceC', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'JackC', 'QueenC', 'KingC'];
 
const Dimonds = ['AceD', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'JackD', 'QueenD', 'KingD'];
const Hearts = ['AceH', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'JackH', 'QueenH', 'KingH'];
const Spades = ['AceS', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'JackS', 'QueenS', 'KingS'];
const Clover = ['AceC', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'JackC', 'QueenC', 'KingC'];

const specialCards = ['AceD', 'AceH', 'AceS', 'AceC', 'JackD', 'QueenD', 'KingD', 'JackH', 'QueenH', 'KingH', 'JackS', 'QueenS', 'KingS', 'JackC', 'QueenC', 'KingC'];
const nmbCards = ['D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'];

const questionCard = {
    'Q1_1' :RedCards, 
    'Q1_2' :BlackCards,
    'Q2_1' :nmbCards, 
    'Q2_2' :specialCards,
    'Q3_1' :Dimonds, 
    'Q3_2' :Hearts, 
    'Q3_3' :Spades, 
    'Q3_4' :Clover,
    'Q4_1' :'AceD', 
    'Q4_2' :'D2',
    'Q4_3' :'D3',
    'Q4_4' :'D4',
    'Q4_5' :'D5',
    'Q4_6' :'D6',
    'Q4_7' :'D7', 
    'Q4_8' :'D8', 
    'Q4_9' :'D9', 
    'Q4_10':'D10', 
    'Q4_11':'JackD', 
    'Q4_12':'QueenD', 
    'Q4_13':'KingD',
    'Q5_1' :'AceH',
    'Q5_2' :'H2',
    'Q5_3' :'H3',
    'Q5_4' :'H4',
    'Q5_5' :'H5',
    'Q5_6' :'H6',
    'Q5_7' :'H7',
    'Q5_8' :'H8',
    'Q5_9' :'H9',
    'Q5_10':'H10',
    'Q5_11':'JackH',
    'Q5_12':'QueenH',
    'Q5_13':'KingH',
    'Q6_1' :'AceS',
    'Q6_2' :'S2',
    'Q6_3' :'S3',
    'Q6_4' :'S4',
    'Q6_5' :'S5',
    'Q6_6' :'S6',
    'Q6_7' :'S7',
    'Q6_8' :'S8',
    'Q6_9' :'S9',
    'Q6_10':'S10',
    'Q6_11':'JackS',
    'Q6_12':'QueenS',
    'Q6_13':'KingS',
    'Q7_1' :'AceC',
    'Q7_2' :'C2',
    'Q7_3' :'C3',
    'Q7_4' :'C4',
    'Q7_5' :'C5',
    'Q7_6' :'C6',
    'Q7_7' :'C7',
    'Q7_8' :'C8',
    'Q7_9' :'C9',
    'Q7_10':'C10',
    'Q7_11':'JackC',
    'Q7_12':'QueenC',
    'Q7_13':'KingC'
};

var testRTM = calcMean(testReadTime)
var testRTstd = calcSTD(testReadTime, testRTM)
var testTTM = calcMean(testTruthTime)
var testTTstd = calcSTD(testTruthTime, testTTM)
var testLTM = calcMean(testLieTime)
var testLTstd = calcSTD(testLieTime, testLTM)

var Inconlusivetimes = []
var IndTruthTime = []
var IndLieTime = [] 

var Inconlusivetimes = []
var IndTruthTime = []
var IndLieTime = [] 

var highScore = 0
var reactionTime = 0
var startTime = 0
var counter = 0

function getCards(question){
    var cards = questionCard[question];
    return cards;
};

function updatecards(answer, ReactionResult, question){
    var cards = getCards(question)
    var multipleCards = Array.isArray(cards)
    if (answer === 'Yes'){
        console.log('yes')
        if (ReactionResult[0] === 'probT'){
            console.log('true')
            if(multipleCards === true){
                for(a=0; a <= cards.length; a++){
                    console.log('Here1')
                    cardsBelief[cards[a]] = cardsBelief[cards[a]] + ReactionResult[1]
                };
            } else {
                console.log('Here2')
                cardsBelief[cards[a]] = cardsBelief[cards[a]] + ReactionResult[1]
            };
        } else if (ReactionResult[0] === 'probL'){
            console.log('lie')
            if(multipleCards === true){
                for(a=0; a <= cards.length; a++){
                    console.log('Here3')
                    cardsBelief[cards[a]] = cardsBelief[cards[a]] - ReactionResult[1]
                };
            } else {
                console.log('Here4')
                cardsBelief[cards[a]] = cardsBelief[cards[a]] - ReactionResult[1]
            };
        };
    } else if (answer === 'No'){
        if (ReactionResult[0] === 'probT'){
            if(multipleCards === true){
                for(a=0; a <= cards.length; a++){
                    console.log('Here5')
                    cardsBelief[cards[a]] = cardsBelief[cards[a]] - ReactionResult[1]
                };
            } else {
                console.log('Here5.5')
                cardsBelief[cards[a]] = cardsBelief[cards[a]] - ReactionResult[1]
            };
        } else if (ReactionResult[0] === 'probL'){
            if(multipleCards === true){
                for(a=0; a <= cards.length; a++){
                    console.log('Here6')
                    cardsBelief[cards[a]] = cardsBelief[cards[a]] + ReactionResult[1]
                };
            } else {
                console.log('Here7')
                cardsBelief[cards[a]] = cardsBelief[cards[a]] + ReactionResult[1]
            };
        };
    };
    console.log('HEEEELOOOOOOO----')
    console.log(cardsBelief)
};

function calcMean(SetofItems){
    var sum = 0.000;
    for(a = 1; a <= (SetofItems.length-1); a++){sum += SetofItems[a]};
    var mean = sum/SetofItems.length;
    return mean;
};

function calcSTD(SetofItems, mean){
    var sum = 0.00
    var bit = 0.00
    for(a = 1; a <= (SetofItems.length-1); a++) {
         bit = Math.pow((SetofItems[a]-mean), 2);
         sum += bit;
    };
    variance = sum/(SetofItems.length);
    std = Math.sqrt(variance)
    return [variance, std]
};

// function probdist(RTset){
//     mean = calcMean(RTset);
//     [vari, STD] = calcSTD(RTset, mean);

//     return [mean, vari, STD];
// };

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
//function createProbDistributions

function selectrandom(Qstns){
    var randkey = Qstns[Math.floor(Math.random() * Qstns.length)];
    return randkey
};

function selectrandquestion(randkey, questionDict){
    var questions = questionDict[randkey];
    randomQuestions = questions[Math.floor(Math.random() * questions.length)];
    var Question = document.getElementById(randomQuestions).value
    return Question
};

function addquestion(Question){
    var place = document.getElementById("Questions_here");
    var q = document.createTextNode(Question);
    place.appendChild(q);
};

function removequestion(){
    var place = document.getElementById("Questions_here");
    var trash = place.firstChild
    while(trash){
        place.removeChild(trash)
        trash = place.firstChild
    };
};

function finalprediction(highestcard){
    console.log('highestcard')
    console.log(highestcard)
    addquestion(highestcard); //placeholder
};

function GethighScore(reactionTime){
    highScore = highScore + (20000 - reactionTime);
};

function uppdateHighscore(){
    var place = document.getElementById("Highscore");
    var q = document.createTextNode(highScore);
    place.appendChild(q);
};

function SaveReactionResult(ReaktionResult, reactionTime){
    if (ReaktionResult === true){
        IndTruthTime.push(reactionTime)
    } else {
        IndLieTime.push(reactionTime)
    };
};

function endkeypressTrain(qst, prompts){
    if (qst === 'Yes' || qst === 'No'){
        removequestion()
        removequestion()
        Question = ''
        randomQuestions = ''
        mainTrain(prompts)
    };
};

function keypressTest(){
    document.addEventListener('keydown', (response) => {
        if (response.code === 'KeyN') {
            var reactionTime = Date.now() - startTime;
            var qst = "Yes";  
        }
        else if (response.code === 'KeyM') {
            var reactionTime = Date.now() - startTime;
            var qst = "No";
        };
        console.log(reactionTime);
    
        var ReactionResult = calcCertanty(reactionTime)
    
        var AgentReactionPrompt = '';
        if(ReactionResult[1] === 'probR'){
            AgentReactionPrompt = 'Please read and consider choices more carfully'
        } else if(ReactionResult[1] === 'probT'){
            updatecards()
        }
    
    
    
        
        GethighScore(reactionTime, highScore)
        uppdateHighscore(highScore)
        
        SaveReactionResult(ReactionResult, reactionTime)
    
        endkeypress(key)
    });
}

function mainTest(){
    counter += 1
    if (counter < 51){
        reactionTime = 0
        randkey = selectrandom(Qstns);
        Question = selectrandquestion(randkey, questionDict); //placeholder
        addquestion(Question);
        startTime = Date.now();
    }
    else {
        var max = 0
        for (var a in cardsBelief) {
            max = (max < a ? a : max);
        };
        finalprediction(highestcard)
    }
};

function createpromptsequence(){
    var sequence = []
    for(a=1;a < 26;a++){
        sequence.push('1')
    };
    for(b=1;b < 26;b++){
        sequence.push('2')
    };
    for (z = sequence.length - 1; z > 0; z--) {
        y = Math.floor(Math.random() * (z + 1));
        x = sequence[z];
        sequence[z] = sequence[y];
        sequence[y] = x;
    };
    return sequence
};

function addprompt(prompts){
    if(prompts[counter] === '1'){
        addquestion('Truth: ');
    } else {
        addquestion('False: ')
    };
};

function removeHighscore(){
    var place = document.getElementById("Highscore");
    var trash = place.firstChild
    place.removeChild(trash)
};

function keypressTrain(prompts){
    document.addEventListener('keydown', (response) => {
        if(response.code === 'KeyN' || response.code === 'KeyM'){
            if (response.code === 'KeyN') {
                var reactionTime = Date.now() - startTime;
                var qst = "Yes";  
            }
            else if (response.code === 'KeyM') {
                var reactionTime = Date.now() - startTime;
                var qst = "No";
            };

            var ReactionResult = calcCertanty(reactionTime)


            var AgentReactionPrompt = '';
            if(ReactionResult[0] === 'probR'){
                AgentReactionPrompt = 'Please read and consider choices more carfully'
                addquestion(AgentReactionPrompt)
            } else if(ReactionResult[0] === 'probT' || ReactionResult[0] === 'probL'){
                updatecards(qst, ReactionResult, randomQuestions);
            };

            

            GethighScore(reactionTime)
            if(counter > 1){removeHighscore()};
            uppdateHighscore()

            SaveReactionResult(ReactionResult, reactionTime)
        
            endkeypressTrain(qst, prompts)
        }
    });
};

function mainTrain(prompts){
    counter += 1
    if (counter < 8){
        reactionTime = 0
        var randkey = selectrandom(Qstns);
        Question = selectrandquestion(randkey, questionDict); //placeholder
        addprompt(prompts)
        addquestion(Question);
        startTime = Date.now();
    }
    else {
        console.log('end')
        var max = 0
        for (var a in cardsBelief) {
            if (max < a){
                console.log('heeeeeeeeeee')
                max = a
            };
        };
        console.log(max)
        finalprediction(max)

    }
};

function getHighestProbCard(){
    var max = 0
        for (var a = 0; a <= cardsBelief.length; a++) {
            if (max < a){
                console.log('heeeeeeeeeee')
                max = a
            };
        };
};


if (localStorage.getItem('Bigcounter') == false){
    localStorage.setItem('Bigcounter', 1);
} else {
    var Bigcounter = localStorage.getItem('Bigcounter');
    localStorage.setItem('Bigcounter', (Bigcounter + 1));
};
prompts = createpromptsequence();
keypressTrain(prompts);
mainTrain(prompts);