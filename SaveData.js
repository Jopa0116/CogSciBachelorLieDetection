const URL = 'https://script.google.com/macros/s/AKfycbx6PMkhl5-4LzMo3Hyu4TJaW0cmIDymLGLaHVRbHiCHT5ugTpM/exec'

Began = [beganwith]
Test_cardDraw = [TestDraw]
Training_cardDraw = [TrainingDraw]
// Test_answers = []
// Test_qstns = []
Training_answers =  [] // Training.js/keypressTrain()
Training_qstn = []
// Training_read = []
Training_TT = []
Training_LT = []
Training_IT = []
// Test_TT = []
// Test_LT = []
// Test_Result = []
Training_Result = []
Training_HS = []
Training_belifes = []
// Test_HS = []
// NewStrtgWheights = []


var Save = {};

function SaveReactionResultTraining(ReaktionResult, reactionTime){
    Training_belifes.push(ReaktionResult[0])
    if (ReaktionResult[0] === 'probT'){
        Training_TT.push(reactionTime)
    } else if (ReaktionResult[0] === 'probL'){
        Training_LT.push(reactionTime)
    } else {Training_IT.push(reactionTime)}
};

function gatherData(){
    Save.Began = Began
    Save.Test_cardDraw = Test_cardDraw
    Save.Training_cardDraw = Training_cardDraw
    // Save.Test_answers = Test_answers
    // Save.Test_qstns = Test_qstns
    Save.Training_answers = Training_answers
    Save.Training_qstn = Training_qstn
    // Save.Training_read = Training_read
    Save.Training_TT = Training_TT
    Save.Training_LT = Training_LT
    Save.Training_IT = Training_IT
    // Save.Test_TT = Test_LT
    // Save.Test_LT = Test_LT
    // Save.Test_Result = Test_Result
    Save.Training_Result = Training_Result
    Save.Training_HS = Training_HS
    // Save.Test_HS = Test_HS
    // Save.NewStrtgWheights = NewStrtgWheights
};

function submit(data) {
    const url = URL  //`${URL}?${new URLSearchParams(data).toString()}`
    console.log(url)
    fetch(url,
    { method: 'POST', 
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then( result => console.log(result) )
}

// function submit(data) {
//     //var toSend = new URLSearchParams(data).toString()
//     const url = `${URL}?${new URLSearchParams(data).toString()}'
//     console.log(URL)
//     fetch(URL,
//     {method: 'GET', 
//     mode: 'no-cors', 
//     headers: {"Content-type": "application/json; charset=UTF-8"}, //application/x-www-form-urlencoded;
//     body: JSON.stringify(data)
//     })
//     .then( result => console.log(result) )
// }