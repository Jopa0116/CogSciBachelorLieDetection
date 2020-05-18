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
};

function endkeypressTest(qst){
    if (qst === 'Yes' || qst === 'No'){
        removequestion()
        Question = ''
        randomQuestions = ''
        mainTest()
    };
};
