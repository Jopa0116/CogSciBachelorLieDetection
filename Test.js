function keypressTest(response){
    // l('It got here5')
    if(response.code === 'KeyB' || response.code === 'KeyN'){
        // l('It got here6')
        if (response.code === 'KeyB') {
            // l('It got here6_1')
            var reactionTime = Date.now() - startTime;
            var qst = "Yes";  
        }
        else if (response.code === 'KeyN') {
            // l('It got here6_2')
            var reactionTime = Date.now() - startTime;
            var qst = "No";
        };
        testRTs.push(reactionTime)
        var ReactionResult = calcCertanty(reactionTime);
        l('It got here7')
        var AgentReactionPrompt = '';
        if(ReactionResult[0] === 'probR'){
            l('PROMPT')
            showElement('PROMPT')
            highscoreAdd = 15
            highScore = highScore - 15
            removeHighscore()
            uppdateHighscoreNEGATIVE()
            setTimeout(()=>{hideElement('PROMPT')}, 2000)
        } else if(ReactionResult[0] === 'probT' || ReactionResult[0] === 'probL'){
            l('It got here7_2')
            updatecards(qst, ReactionResult, CurrQstn);
            GethighScore(reactionTime)
            if(counter > 1){removeHighscore()};
            uppdateHighscore()
        };
        // l('It got here8')
        // l('It got here9')
        // l(qst)

        Test_Result.push(CurrHgh)
        Test_answers.push(qst)
        Test_prediction.push(ReactionResult[0])
        // l('It got here10')
        endkeypressTest(qst)
    }else{l('NOTHING')};
};

function updateTestPage(Question){
    addquestion(Question);
    addRedDot();
};

function mainTest(){
    if(counter == 0){setTimeout(()=>{document.addEventListener('keyup', keypressTest)}, 700)} // This was needeed to prevent a bug, unlikley reeaction time anyhow 
    // l('It got here')
    previusQstn = CurrQstn;
    counter += 1
    if (counter < 53){
        // l('It got here2')
        reactionTime = 0;
        QstnKey = strtg();
        CurrQstn = QstnKey; 
        Test_qstns.push(QstnKey)
        // l('It got here3')
        try{
            Question = document.getElementById(QstnKey).innerHTML
        } catch {mainTest()}
        updateTestPage(Question);
        startTime = Date.now();
        // l('It got here4')
    }
    else {
        // l('got here')
        document.removeEventListener('keyup', keypressTest)
        Test_HS.push(highScore)
        finalprediction(CurrHgh);
        chckIfSecond();

    };
};

function endkeypressTest(qst){
    if (qst === 'Yes' || qst === 'No'){
        removequestion();
        hideallRedDots();
        Question = ''
        randomQuestions = ''
        mainTest()
    };
};