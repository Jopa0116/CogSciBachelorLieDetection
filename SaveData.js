const URL = 'https://script.google.com/macros/s/AKfycbx6PMkhl5-4LzMo3Hyu4TJaW0cmIDymLGLaHVRbHiCHT5ugTpM/exec'

Began = []
RewardsOBJ = { 'finalpredictionReward': 0, 'NmbCorrectPrdctnRwrd': 0, 'DiffMeanRwrd': 0 }
Strategy1_reward = []
Strategy2_reward = []
Strategy3_reward = []
Strategy4_reward = []

Age = []
OtherFormDATA = []

//TRAINING
Training_cardDraw = [TrainingDraw]
Training_answers =  [] // Training.js/keypressTrain()
Training_qstn = []
// Training_read = []
Training_TT = []
Training_LT = []
Training_IT = []
Training_Result = []
Training_HS = []
Training_belifes = []
Training_prediction = []

// NewStrtgWheights = []

//TEST
Test_cardDraw = [TestDraw]
Test_answers = []
Test_qstns = []
Test_Result = []
Test_HS = []
Test_prediction = []


function getFormData(){
    Age.push(document.getElementById('fAge').value)
    var ele = document.getElementsByTagName('input'); 
    var radio = ''
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                radio += ele[i].name + " Value: " + ele[i].value; 
                OtherFormDATA.push(radio);
            }
        }
    }
    OtherFormDATA.push(document.getElementById('strtgF2').value)        
    OtherFormDATA.push(document.getElementById('Comments').value)           
}

function testResult(){
    if(CurrHgh != TestDraw) { return ['fail'] } else { return ['success'] };
};

function saveReward(reward) {
    if(strtg.name == 'Strategy1') { Strategy1_reward.push(reward) }
    else if(strtg.name == 'Strategy2') { Strategy2_reward.push(reward) } 
    else if(strtg.name == 'Strategy3') { Strategy3_reward.push(reward) } 
    else if(strtg.name == 'Strategy4') { Strategy4_reward.push(reward) } 
};

function SaveReactionResultTraining(reactionTime){
    if (prompts[counter] === '1'){
        Training_TT.push(reactionTime)
    } else if (prompts[counter] === '2'){
        Training_LT.push(reactionTime)
    };
};

function gatherData(){
    Save = {};

    Save.Began = Began
    Save.RewardsOBJ = [JSON.stringify(RewardsOBJ)]
    Save.Strategy = [getSTRTG()]
    Save.Age = Age
    Save.OtherFormDATA = OtherFormDATA

    Save.Test_cardDraw = Test_cardDraw
    Save.Training_cardDraw = Training_cardDraw
    Save.Training_answers = Training_answers
    Save.Training_qstn = Training_qstn
    Save.Training_TT = Training_TT
    Save.Training_LT = Training_LT
    Save.Training_read = Training_IT
    Save.Training_Result = Training_Result
    Save.Training_HS = Training_HS
    Save.Training_prediction = Training_prediction

    Save.Test_cardDraw = Test_cardDraw
    Save.Test_answers = Test_answers
    Save.Test_qstns = Test_qstns
    Save.Test_Result = Test_Result
    Save.Test_HS = Test_HS
    Save.Test_prediction = Test_prediction

    Save.Strategy1_reward = Strategy1_reward
    Save.Strategy2_reward = Strategy2_reward
    Save.Strategy3_reward = Strategy3_reward
    Save.Strategy4_reward = Strategy4_reward   
    // Save.

    return Save
};

function submit(data) {
    const url = URL
    console.log(data)
    d = new URLSearchParams(data)   //.toString()
    j = d.toString()
    // l(j)
    fetch(url, { 
    method: 'POST', 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    body: j
    })
    .then( result => {console.log(result.text())
    })
    .catch(err => {
        // l('Return')
        // l(err)
    })
};

function getSTRTG() {
    Strategy = strtg.name // toString()
    return Strategy
};