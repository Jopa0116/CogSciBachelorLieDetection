function addquestion(Question){
    var place = document.getElementById("Questions_here");
    var q = document.createTextNode(Question);
    place.appendChild(q);
};

function addRedDot(){
    // l((CurrQstn[0] + CurrQstn[1]) == 'Q2')
    var Q_unknown = CurrQstn[0] + CurrQstn[1];
    if ((Q_unknown == 'Q1') || (Q_unknown == 'Q2') || (Q_unknown == 'Q3')) {
        var b = 'Red_' + CurrQstn;
        // l('----whoooo---------')
        // l('Red_' + CurrQstn)
    } else {var b = 'Red_rect'};
    $('#' + b).attr('visibility', 'visible');
};

function changePosition(element, Bottom, Right){
    var elm = document.getElementById(element).firstChild;
    elm.style.bottom = Bottom;
    elm.style.right = Right;
};

function changeSize(element, Width, Hight){
    var elm = document.getElementById(element).firstChild;
    elm.style.width = Width;
    elm.style.height = Hight;
};

function hideallRedDots(){
    // l('hide--------')
    // l(document.getElementsByClassName('cls-9'))
    $('.cls-9').attr('visibility', 'hidden');
};

function hideElement(elementID){
    var game = document.getElementById(elementID);
    game.style.display = 'none'
};

function removequestion(){
    var place = document.getElementById("Questions_here");
    var trash = place.firstChild
    while(trash){
        place.removeChild(trash)
        trash = place.firstChild
    };
};

function showElement(elementID){
    var game = document.getElementById(elementID);
    game.style.display = 'initial'
};