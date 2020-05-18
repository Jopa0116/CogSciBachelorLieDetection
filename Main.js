function MAIN(press){
    document.addEventListener('keyup', MAIN)
    // l('MAIN----')
    if(press.code === 'KeyN' && keypresscount === 0){
        hideElement('IntroductionP1');
        hideElement('IntroductionP2');
        var flip = 0 //coinflip();
        if(flip === 1){
            var scenario = document.getElementById('shwn_tst');
            scenario.innerHTML = 'You will begin with the test scenario';
            beganwith = 'Test'; 
        }else{ 
            var scenario = document.getElementById('shwn_trng');
            scenario.innerHTML = 'You will begin with the training scenario';
            beganwith = 'Training'
        };
        keypresscount = 1

    } else if(press.code === 'KeyN' && keypresscount === 1){
        hideElement('Scenario');
        var elmnt = document.createElement('h1')
        if(beganwith == 'Training') {elmnt.innerHTML = questionCard[TrainingDraw]}
        else {elmnt.innerHTML = questionCard[TestDraw]}
        document.getElementById('drawn_card').appendChild(elmnt)
        keypresscount = 2

    } else if (press.code === 'KeyN' && keypresscount === 2 && beganwith === 'Training'){
        hideElement('drawn_card'); //Graphics.js
        document.removeEventListener('keyup', MAIN, false);
        showElement('Exjobb_Web');
        if(beganwith === 'Training')
        mainTrain(); //Training.js
        keypresscount = 3

    } else if (press.code === 'KeyN' && keypresscount === 2 && beganwith === 'Test'){
        l('TEST');
        keypresscount = 3

    } else if(press.code === 'KeyN' && keypresscount === 3){
        Finished
        data = gatherData()
        l(data)
        submit(data)

    } else {l('NOOOO')}
};