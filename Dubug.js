var l = console.log //For faster writing of the command
var testData = {'Participant': ['1'], 'Read_Times': [700, 800, 600], 'Truth_Times': [1000, 1000, 1000], 'Lie_Times': [2000, 2000, 2000]};

function doGetDEBUG(e){
    var yo = new URLSearchParams(e).toString()
    l(yo)
};

function ChangeCardBelief(Card, value){
    /** This code is used to manually change the certanty score of a single card*/
    cardsBelief[Card] = value
};

function saveDatatoTEST(){
    /**This function is a placeholder for the save event */
    nmb = window.localStorage.length + 1
    data = {
        'ReadTimes': IndReadTimes,
        'TruthTime': IndTruthTime,
        'LieTime': IndLieTime
    };
    window.localStorage.setItem('Trail' + toString(nmb), JSON.stringify(data))
}

function loadData(){
    /**This function is a placeholder for the load event */
    if(localStorage.getItem('Trail0') === 'null'){
        var data = [
            [500],
            [1000],
            [1400]
        ];
        window.localStorage.setItem('Trail0', data);
    };

    for(var a in window.localStorage){
        var q = window.localStorage[a]
        l(Object.keys(a))
        l(Object.keys(q))
        for(b = 0; b <= 50; b++){
            testReadTime.push(a['ReadTimes'][b]);
            testTruthTime.push(a['TruthTime'][b]);
            testLieTime.push(a['LieTime'][b]);
        };
    };
};



/** LOBOTOMIZED FUNCTIONS BELLOW */
/*function timekeypress(){
    document.addEventListener('keydown', (response) => {
        l('problem')
        var reactionTime = Date.now() - startTime;
        IndReadTimes.push(reactionTime)
        document.removeEventListener('keydown', response)
        keypressTrain(prompts)
    });
};*/

/**l(document.getElementById("SVG_tree").firstElementChild)
    document.getElementById("SVG_tree").getSVGDocument().getElementsByClassName('cls-9').visibility = "hidden" */

function removeRedDot(){
    document.getElementById(CurrQstn).visibility = "hidden"
};

function getTop5Debug(){
    var top5 = {}
    var max = 'AceD';
    var previus = {'AceD':1}
    console.log(previus['AceD'] !== 1)
};

function drawTree(){
    drawSVG('Tree.svg', 'SVG_Tree');
    document.getElementById('SVG_Tree');
    changeSize('SVG_Tree', '25%', '40%');
    changePosition('SVG_Tree', '36%', '66%')
};


function drawSVG(SVG, location){
    var pic = document.createElement('object');
    pic.id = 'SVG_tree'
    pic.data = SVG;
    pic.type = 'image/svg+xml'
    pic.style.position = 'absolute';
    pic.style.backgroundSize = 'cover';
    var place = document.getElementById(location);
    place.appendChild(pic);
};


var Qstns = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'];

/*function keypressTrain(prompts){
    document.addEventListener('keydown', (response) => {
        
        
        l('Hello')
        var keypresscount = 0
        if(response == true && keypresscount != true){
            l('yoo')
            var reactionTime = Date.now() - startTime;
            keypresscount = 1
            IndTruthTime.push(reactionTime);
        }
        else if(response.code === 'KeyN' || response.code === 'KeyM' && keypresscount > 1){
            l('mooooooo')
            if (response.code === 'KeyN') {
                l('nnnnnnnnnnnnnn')
                var reactionTime = Date.now() - startTime;
                var answ = "Yes";
                IndTruthTime.push(reactionTime)
            }
            else if (response.code === 'KeyM') {
                l('mmmmmmmmmmmmmmm')
                var reactionTime = Date.now() - startTime;
                var answ = "No";
                IndLieTime.push(reactionTime)
            };

            var ReactionResult = calcCertanty(reactionTime)

            l(ReactionResult)
            updatecards(answ, ReactionResult, CurrQstn);

            GethighScore(reactionTime);
            if(document.getElementById('Highscore').firstChild == true){removeHighscore()};
            //removeHighscore();
            uppdateHighscore();

            SaveReactionResult(ReactionResult, reactionTime)

            var keypresscount = 0
            endkeypressTrain(answ, prompts)
        } else {return}
    });
};*/


/**BACKUP OF OLD VERSIONS */

function shouldDecendOLD(){
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
    goal = document.getElementById(CurrHgh); // Gets element of highest card from id: 'TreeStructure' in the html
    l('shouldDecend1')
    l(CurrHgh)
    l(goal)
    test = CurrQstn
    var current = goal; //It to search from its goal
    test2 = current;
    var ascended = [current]; //Array of places visited
    test3 = ascended
    if(CurrQstn[1] != 4 || CurrQstn[1] != 5 || CurrQstn[1] != 6 || CurrQstn[1] != 7) {
        for(var a = 0; a <= 3; a++){
            l('shouldDecend2')
            l(current)
            current = current.parentElement.parentElement.firstChild
            test2 = current
            ascended.push(current)
            test3 = ascended
            if(current.id === CurrQstn) {
                l('shouldDecend3')
                return ascended[ascended.length - 2].id //The next question (state)
            } else if((current.id[0] + current.id[1]) == 'Q1') {
                l('shouldDecend4')
                return false
            };
        };
    }else {return 'lowest'};
    l('shouldDecend5')
};

function Strategy1OLD(){
    l('*********************************************************************************')
    l('Strategy1_1')
    l(CurrQstn)
    var answer = ''
    if(counter == 1){
        var coin = coinflip()
        if(coin == 1){answer = 'Q1_1'} else {answer = 'Q1_2'}
    } else {
        answer = shouldDecend();
    };   
    if(answer === false){
        l('Strategy1_2')
        var nextState = Ascend();
    } else if (answer === 'lowest'){
        l('Strategy1_3')
        if(counter < 41){
            l('Strategy1_startOver')
            var nextState = startOver();
        } else {
            l('Strategy1_Testtop')
            var nextState = Testtop();
        };
    } else {
        l('Strategy1_4')
        var nextState = answer;
    };
    CurrQstn = nextState
    l('Strategy1_5')
    l(CurrQstn)
    l('------------------------------------------------------------------------------')
    return nextState;
};

function SaveDataOld(){
    nmb = loadedData.lenght + 1 //Need to create loaded data
    var Data = {
        'Participant': 'Participant'.concat(toString(nmb)),
        'Read_Times' : IndReadTimes, 
        'Truth_Times' : IndTruthTime,
        'Lie_Times' : IndLieTime,
        'StrategySqnc': StrategySqnc, //need to create this
        'StrategyReward': StrategySqnc
    };
    submit(Data)
};


//https://docs.google.com/spreadsheets/d/1EHyVziI0R3JawR85Fkn3XIn5WpXbn_GjlHQxlRlxPnc/edit?usp=sharing
