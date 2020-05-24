// if(localStorage.getItem('testReadTime')!=true){localStorage.setItem('testReadTime', [500])};
// if(localStorage.getItem('testTruthTime')!=true){localStorage.setItem('testTruthTime', [1000])};
// if(localStorage.getItem('testLieTime')!=true){localStorage.setItem('testLieTime', [1400])};

var testReadTime = [2808,2399,1840,1632,1664,1119,1600,1456,1183,2640,1744,1632,1360,1600,1456,1071,1152,1120,1008,1264,1472,1216,1216,1184,1184,1184,1103,1056,1216,1040,1056,1040,992,1072,1072,1039,1056,1088,1200,960,1104,992,1088,1056,1040,1008,992,1024,880,992,928,975,1168,1280,1136,960,1120,752,720,816,752,800,752,864,720] //[532, 423, 1023, 976]//localStorage.getItem('testReadTime')//[0532, 0423, 1023, 0976];
var testTruthTime = [4799,5773,5420,2892,5356,3420,23021,6252,3181,3724,3469,1947,1787,2750,3115,11710,3341,2829,1532,1837,2429,1165,3565,1757,8365]//[1000, 1243, 1212, 1111]//localStorage.getItem('testTruthTime')//[1000, 1243, 1212, 1111];
var testLieTime = [3799,7308,4300,3901,2926,3022,2604,7901,5484,1930,2056,1788,4989,4572,2380,2061,3613,2492,2125,1020,2045,3292,812,1966] //[2211, 2345, 2432, 2255]//localStorage.getItem('testLieTime')//[2211, 2345, 2432, 2255];
// if (window.localStorage.length !== 5){
    // window.localStorage.setItem('ReadTime', testReadTime);
    // window.localStorage.setItem('TruthTime', testTruthTime);
    // window.localStorage.setItem('LieTime', testLieTime);
    // window.localStorage.setItem('IndLieTime', []);
    // window.localStorage.setItem('IndTruthTime', []);
// };
// The above is a placholder

var cardsBelief = {
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

var highScore = 0;
var highscoreAdd = 0;
var reactionTime = 0;
var startTime = 0;
var counter = 0;

var previusQstn = ''; 
var CurrQstn = '';
var CurrHgh = '';
var keypresscount = 0;

var beganwith = '';                                   //Defined in the MAIN() function in the Main.js file

var BlackMean = 0;
var RedMean = 0;
var DiomondMean = 0;
var HeartsMean = 0;
var SpadesMean = 0;
var cloverMean = 0;
var NmbMean = 0;
var SpecialMean = 0;
var D_NmbMean = 0;
var D_SpecialMean = 0;
var H_NmbMean = 0;
var H_SpecialMean = 0;
var S_NmbMean = 0;
var S_SpecialMean = 0;
var C_NmbMean = 0;
var C_SpecialMean = 0;

var pathBeliefes = {
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

var prediction = ''

var doneOne = false

// var dotplace = ''