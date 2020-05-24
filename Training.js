var prompts = createpromptsequence();

function addprompt(){
    /** */
    // l('Hello World')
    if(prompts[counter] === '1'){
        addquestion('Truth: ');
    } else {
        addquestion('False: ')
    };
};

function createpromptsequence(){
    /**Function to create randomized sequence of 25 truth prompts and 25 lie prompts to be used in the training scenario */
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


function addReadQSTN(Question){
    var nde = document.createElement('h2')
    nde.innerHTML = Question
    var place = document.getElementById("Read_test2");
    place.appendChild(nde);
};

function READmain() {
    if(counter == 0){setTimeout(()=>{document.addEventListener('keyup', keypressreadQSTN)}, 700)}
    counter += 1
    if (counter < allIDs.length){
        reactionTime = 0;
        QstnKey = allIDs[counter];
        Question = document.getElementById(QstnKey).innerHTML
        addReadQSTN(Question);
        startTime = Date.now();
    }
    else {
        l('---got here read---')
        document.removeEventListener('keyup', keypressreadQSTN)
        addReadQSTN('You are now finished, press to continue.')
        MAIN()
    }
};

function readEND() {
    var place = document.getElementById("Read_test2");
    var trash = place.firstChild
    place.removeChild(trash)
    Question = ''
    randomQuestions = ''
    READmain()
}

function keypressreadQSTN(response) {
    if(response.code === 'KeyB' || response.code === 'KeyN') {
        var readTime = Date.now() - startTime; 
        Training_IT.push(readTime)
        readEND()
    };
};

function keypressTrain(response){
    // l('keypressTrain')
    if(response.code === 'KeyB' || response.code === 'KeyN'){
        if (response.code === 'KeyB') {
            var reactionTime = Date.now() - startTime;
            var qst = "Yes";  
        }
        else if (response.code === 'KeyN') {
            var reactionTime = Date.now() - startTime;
            var qst = "No";
        };

        var ReactionResult = calcCertanty(reactionTime);

        if(ReactionResult[0] === 'probR'){
            l('PROMPT')
            showElement('PROMPT')
            highscoreAdd = 15
            highScore = highScore - 15
            removeHighscore()
            uppdateHighscoreNEGATIVE()
            setTimeout(()=>{hideElement('PROMPT')}, 2000)
        } else if(ReactionResult[0] === 'probT' || ReactionResult[0] === 'probL'){
            updatecards(qst, ReactionResult, CurrQstn);
            GethighScore(reactionTime)
            if(counter > 1){removeHighscore()};
            l('hereeeeeeee---------111111')
            uppdateHighscore()
        };

        SaveReactionResultTraining(reactionTime)
        
        Training_answers.push(qst);
        Training_Result.push(CurrHgh);
        Training_prediction.push(ReactionResult[0])
        endkeypressTrain(qst, prompts)
    }else{l('NOTHING')};
};

function updateTrainingPage(Question){
    // l('Here I AM')
    addprompt();
    addquestion(Question);
    addRedDot();
};

function mainTrain(){
    // l('ööööööööööööööööööööööööööööööööööööööööööööööööööööööö')
    // l('mainTrain1')
    // // l(CurrQstn)
    // if(counter == 0) {document.addEventListener('keyup', keypressTrain)};
    if(counter == 0){setTimeout(()=>{document.addEventListener('keyup', keypressTrain)}, 700)} // This was needeed to prevent a bug, unlikley reeaction time anyhow 
    previusQstn = CurrQstn;
    counter += 1
    // l(counter)
    if (counter < 53){
        reactionTime = 0;
        QstnKey = strtg();
        CurrQstn = QstnKey;
        Training_qustions.push(CurrQstn)
        // // l('mainTrain2')
        // // l(QstnKey)
        Question = document.getElementById(QstnKey).innerHTML
        updateTrainingPage(Question);
        startTime = Date.now();
        // // l('mainTrain3')
        // // l(CurrQstn)
    }
    else {
        l('got here')
        document.removeEventListener('keyup', keypressTrain)
        finalprediction(CurrHgh)
        Training_HS.push(highScore)
        reward = CalcRewardTraining()
        saveReward(reward)
        chckIfSecond();
    }
};

function endkeypressTrain(qst){
    // l('endkeypress-----1')
    if (qst === 'Yes' || qst === 'No'){
        // l('endkeypress-----2')
        removequestion();
        removequestion();
        hideallRedDots();
        Question = ''
        randomQuestions = ''
        // // l('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        mainTrain()
    };
};