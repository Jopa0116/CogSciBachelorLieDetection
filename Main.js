keypresscount = 0

function MAIN(press){
    document.addEventListener('keyup', MAIN)
    // l('MAIN----')
    // l(press.code === 'KeyB')
    // keypresscount = 8
    // hideElement('Intro')
    if(press.code === 'KeyB' && keypresscount === 0){
        hideElement('Intro')
        var flip = coinflip();
        if(flip === 1){
            var scenario = document.getElementById('shwn_tst');
            scenario.innerHTML = 'You will begin with the test scenario';
            beganwith = 'Test'; 
            // l('beganwidth--Test')
        }else if (flip === 0) { 
            var scenario = document.getElementById('shwn_trng');
            scenario.innerHTML = 'You will begin with the training scenario';
            beganwith = 'Training'
            // l('beganwidth--Training')
        };
        Began.push(beganwith)
        keypresscount = 1

    } else if(press.code === 'KeyB' && keypresscount === 1){
        hideElement('Scenario');
        // showElement('MAIN');
        var elmnt = document.createElement('object')
        elmnt.type = 'image/svg+xml'
        elmnt.id = 'THE_CARD'
        elmnt.style.float = 'left'
        if(beganwith == 'Training') {elmnt.data = TrainingDraw.concat('.SVG')}
        else {elmnt.data = TestDraw.concat('.SVG')}
        document.getElementById('drawn_card').appendChild(elmnt)
        keypresscount = 2

    } else if (press.code === 'KeyB' && keypresscount === 2 && beganwith === 'Training'){
        hideElement('drawn_card'); //Graphics.js
        document.removeEventListener('keyup', MAIN, false);
        showElement('Exjobb_Web');
        keypresscount = 3
        mainTrain(); //Training.js

    } else if (press.code === 'KeyB' && keypresscount === 2 && beganwith === 'Test'){
        hideElement('drawn_card'); //Graphics.js
        document.removeEventListener('keyup', MAIN, false);
        showElement('Exjobb_Web');
        keypresscount = 3
        mainTest(); //Training.js
    
    }else if ((press.code === 'KeyB' || press.code === 'KeyN') && keypresscount === 3){
        removeHighscore()
        // l(keypresscount)
        hideElement('Exjobb_Web')
        showElement('Scenario')
        if(beganwith == 'Training'){
            hideElement('drawn_card');
            document.getElementById('Scenario').removeChild(document.getElementById('shwn_trng'))
            var scenario = document.getElementById('shwn_tst');
            scenario.innerHTML = 'You will now do the test scenario';
            keypresscount = 4
        }else{ 
            hideElement('drawn_card');
            document.getElementById('Scenario').removeChild(document.getElementById('shwn_tst'))
            var scenario = document.getElementById('shwn_trng');
            scenario.innerHTML = 'You will now do the training scenario';
            keypresscount = 4
        };
    }else if (press.code === 'KeyB' && keypresscount === 4){
        pathBeliefes = {
            '' : -1000,
            'Q4_1': 0,
            'Q4_2': 0,
            'Q4_3': 0,
            'Q4_4': 0,
            'Q4_5': 0,
            'Q4_6': 0,
            'Q4_7': 0,
            'Q4_8': 0,
            'Q4_9': 0,
            'Q4_10': 0,
            'Q4_11': 0,
            'Q4_12': 0,
            'Q4_13': 0,
            'Q5_1': 0,
            'Q5_2': 0,
            'Q5_3': 0,
            'Q5_4': 0,
            'Q5_5': 0,
            'Q5_6': 0,
            'Q5_7': 0,
            'Q5_8': 0,
            'Q5_9': 0,
            'Q5_10': 0,
            'Q5_11': 0,
            'Q5_12': 0,
            'Q5_13': 0,
            'Q6_1': 0,
            'Q6_2': 0,
            'Q6_3': 0,
            'Q6_4': 0,
            'Q6_5': 0,
            'Q6_6': 0,
            'Q6_7': 0,
            'Q6_8': 0,
            'Q6_9': 0,
            'Q6_10': 0,
            'Q6_11': 0,
            'Q6_12': 0,
            'Q6_13': 0,
            'Q7_1': 0,
            'Q7_2': 0,
            'Q7_3': 0,
            'Q7_4': 0,
            'Q7_5': 0,
            'Q7_6': 0,
            'Q7_7': 0,
            'Q7_8': 0,
            'Q7_9': 0,
            'Q7_10': 0,
            'Q7_11': 0,
            'Q7_12': 0,
            'Q7_13': 0,
        };
        cardsBelief = {
            '' : -1000,
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
        highScore = 0;
        reactionTime = 0;
        startTime = 0;
        counter = 0;
        previusQstn = ''; 
        CurrQstn = '';
        CurrHgh = '';
        BlackMean = 0;
        RedMean = 0;
        DiomondMean = 0;
        HeartsMean = 0;
        SpadesMean = 0;
        cloverMean = 0;
        NmbMean = 0;
        SpecialMean = 0;
        D_NmbMean = 0;
        D_SpecialMean = 0;
        H_NmbMean = 0;
        H_SpecialMean = 0;
        S_NmbMean = 0;
        S_SpecialMean = 0;
        C_NmbMean = 0;
        C_SpecialMean = 0;
        // l(keypresscount)
        hideElement('Scenario');
        document.getElementById('drawn_card').removeChild(document.getElementById('THE_CARD'))
        showElement('drawn_card');
        var elmnt = document.createElement('object')
        elmnt.type = 'image/svg+xml'
        elmnt.id = 'THE_CARD'
        if(beganwith == 'Test') {elmnt.data = TrainingDraw.concat('.SVG')}
        else {elmnt.data = TestDraw.concat('.SVG')}
        document.getElementById('drawn_card').appendChild(elmnt)
        keypresscount = 5;
    } else if (press.code === 'KeyB' && keypresscount === 5 && beganwith === 'Test'){
        l('2Training')
        hideElement('drawn_card'); //Graphics.js
        document.removeEventListener('keyup', MAIN, false);
        showElement('Exjobb_Web');
        mainTrain(); //Training.js
        keypresscount = 6
    } else if (press.code === 'KeyB' && keypresscount === 5 && beganwith === 'Training'){
        l('2Test')
        hideElement('drawn_card'); //Graphics.js
        document.removeEventListener('keyup', MAIN, false);
        showElement('Exjobb_Web');
        mainTest(); //Test.js
        keypresscount = 6
    } else if (press.code === 'KeyB' && keypresscount === 6){
        counter = 0;
        hideElement('drawn_card');
        document.getElementById('drawn_card').removeChild(document.getElementById('THE_CARD'))
        showElement('ReadTime');
        keypresscount = 7;
    } else if (press.code === 'KeyB' && keypresscount === 7){
        document.removeEventListener('keyup', MAIN, false)
        hideElement('ReadTime');
        keypresscount = 8;
        READmain()
    } else if (press.code === 'KeyB' && keypresscount === 8){
        hideElement('ReadTime');
        hideElement('Intro')
        hideElement('drawn_card');
        hideElement('Scenario')
        hideElement('Read_test')
        showElement('FormFinal')
    } else {console.log('NOOOO')}
};

function END() {
    l('Finished')
    hideElement('FormFinal')
    getFormData()
    data = gatherData()
    l(data)
    submit(data)
};