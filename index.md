<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<!--meta http-equiv="X-UA-Compatible" content="IE=edge"/-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js"></script>
<title>Exjobb Web</title>
<style id="applicationStylesheet" type="text/css">
	.mediaViewInfo {
		--web-view-name: Exjobb Web;
		--web-view-id: Exjobb_Web;
		--web-scale-on-resize: true;
		--web-enable-deep-linking: true;
	}
	:root {
		--web-view-ids: Exjobb_Web;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		border: none;
	}
	body {
		position: absolute;
		width: 70%;
		height: 100%;
		background-color: rgba(199,199,199,1);
		left: 2%;
	}

	p {
		font-family: Times New Roman;
		font-size: 130%
	};

	#IntroductionP1 {
		position: absolute;
		width: 50%;
		height: 50%;
	}

	#Exjobb_Web {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(199,199,199,1);
		overflow: hidden;
		--web-view-name: Exjobb Web;
		--web-view-id: Exjobb_Web;
		--web-scale-on-resize: true;
		--web-enable-deep-linking: true;
	}
	#Questions_here {
		position: absolute;
		right: 5%;
		top: 17%;
		overflow: visible;
		width: 40%;
		height: 10%;
		text-align: center;
		font-family: Times New Roman;
		font-style: normal;
		font-weight: normal;
		font-size: 200%;
		color: rgba(0,0,0,1);
	}
	#Highscore {
		position: absolute;
		left: 5%;
		bottom: 10%;
		overflow: visible;
		width: 10%;
		white-space: nowrap;
		text-align: center;
		font-family: Times New Roman;
		font-style: normal;
		font-weight: normal;
		font-size: 75px;
		color: rgba(0,0,0,1);
	}
	#_Score {
		position: absolute;
		left: 26%;
		bottom: 15%;
		overflow: visible;
		width: 10%;
		white-space: nowrap;
		text-align: center;
		font-family: Times New Roman;
		font-style: normal;
		font-weight: normal;
		font-size: 45px;
		color: rgba(0,0,0,1);
	}
	.tree {
		display: none;
	};

	iframe {
		width: 0 ;
		height: 0;
		border: 0;
		display:none;
	};

</style>
</head>
<body>
	<!--iframe id="spreadsheet" src="https://docs.google.com/spreadsheets/d/1EHyVziI0R3JawR85Fkn3XIn5WpXbn_GjlHQxlRlxPnc/edit?usp=sharing"></!--iframe-->
	<div id='IntroductionP1'>
		<h1>Intro to the study</h1><br>
		<p>Hello and thank you for your participation in this study.</p><br>
		<p>Firstly you need to know that you are participating in this 
			study on a voluntary basis. You are within your full rights 
			at any moment. You do this by simply closing the window.
			If you where to do this none of the data collected at that 
			point will be included into the study. No identifying information
			about you will be collected.
		</p><br>
		<p>In this study you will be playing a game with a software 
			agent which is trying to find a playing card that has been shown to 
			you. It will do this by asking you yes or no questions about the features of 
			the card you saw. Next there will be details on if you should participate 
			in this study or not.
		</p><br><br>
	</div>
	<div id='IntroductionP2'>
		<h1>Your task</h1><br>
		<p>Your taks will be to attempt to decieve the software agent which
			is trying to figure out which card you where shown. After reading
			all of the instructions you will be shown a card. The computer will be unawere of which. But will
			try to figure out which by asking yes and no questions about the cards. Your job is to
			try to hide which card you saw by switching between answering the truth and lying. You answer by
			pressing the "N" and "M" keys on your keyboard. "N" is yes and "M" is no. 
			This will be displayed on the screen. You will during the study participate in 2 scenarios. A test and a training
			scenario. Note that theese will be slightly different and listen to the following instuctions.
	</div>
	<div id='Scenario'><h1 id='shwn_trng'></h1><h1 id='shwn_tst'></h1></div>
	<div id='TrainingScenario'></div>
	<div id='yes_no_bottons'></div>
	<div id='drawn_card'></div>
	<div id="Exjobb_Web">
		<div id="Questions_here"></div>
		<div id="Highscore"></div>
		<div id="_Score"></div>
		<div id="SVG_Tree">
			<svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="544" height="539" viewBox="0 0 544 539">
				<defs>
				  <style>
					.cls-1, .cls-4 {
					  fill: none;
					}
			  
					.cls-1, .cls-2 {
					  stroke: #707070;
					}
			  
					.cls-2 {
					  fill: #fff;
					}
			  
					.cls-3 {
					  stroke: none;
					}
				  </style>
				</defs>
				<line id="Line_1" data-name="Line 1" class="cls-1" x1="100" transform="translate(200.5 180.5)"/>
				<line id="Line_3" data-name="Line 3" class="cls-1" x1="103" y2="129" transform="translate(120.5 178.5)"/>
				<line id="Line_4" data-name="Line 4" class="cls-1" y2="129" transform="translate(223.5 178.5)"/>
				<line id="Line_5" data-name="Line 5" class="cls-1" y2="129" transform="translate(318.5 178.5)"/>
				<line id="Line_6" data-name="Line 6" class="cls-1" x2="92" y2="129" transform="translate(318.5 178.5)"/>
				<g id="Ellipse_2" data-name="Ellipse 2" class="cls-2" transform="translate(201 154)">
				  <circle class="cls-3" cx="24.5" cy="24.5" r="24.5"/>
				  <circle class="cls-4" cx="24.5" cy="24.5" r="24"/>
				  <circle id="Red_Q1_1" class="cls-9" cx="24.5" cy="24.5" r="19" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_3" data-name="Ellipse 3" class="cls-2" transform="translate(289 154)">
				  <circle class="cls-3" cx="24.5" cy="24.5" r="24.5"/>
				  <circle class="cls-4" cx="24.5" cy="24.5" r="24"/>
				  <circle id="Red_Q1_2" class="cls-9" cx="24.5" cy="24.5" r="19" fill="#cf3d3d"/>
				</g>
				<line id="Line_9" data-name="Line 9" class="cls-1" x1="106" y2="126" transform="translate(14.5 332.5)"/>
				<line id="Line_10" data-name="Line 10" class="cls-1" x1="72" y2="126" transform="translate(48.5 332.5)"/>
				<line id="Line_13" data-name="Line 13" class="cls-1" x1="43" y2="126" transform="translate(180.5 332.5)"/>
				<line id="Line_14" data-name="Line 14" class="cls-1" x1="6" y2="126" transform="translate(217.5 332.5)"/>
				<line id="Line_17" data-name="Line 17" class="cls-1" x2="106" y2="126" transform="translate(423.5 331.5)"/>
				<line id="Line_18" data-name="Line 18" class="cls-1" x2="72" y2="126" transform="translate(423.5 331.5)"/>
				<line id="Line_21" data-name="Line 21" class="cls-1" x2="43" y2="126" transform="translate(320.5 331.5)"/>
				<line id="Line_22" data-name="Line 22" class="cls-1" x2="6" y2="126" transform="translate(320.5 331.5)"/>
				<g id="Ellipse_4" data-name="Ellipse 4" class="cls-2" transform="translate(96 308)">
				  <circle class="cls-3" cx="24.5" cy="24.5" r="24.5"/>
				  <circle class="cls-4" cx="24.5" cy="24.5" r="24"/>
				  <circle id="Red_Q3_1" class="cls-9" cx="24.5" cy="24.5" r="19" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_5" data-name="Ellipse 5" class="cls-2" transform="translate(199 308)">
				  <circle class="cls-3" cx="24.5" cy="24.5" r="24.5"/>
				  <circle class="cls-4" cx="24.5" cy="24.5" r="24"/>
				  <circle id="Red_Q3_2" class="cls-9" cx="24.5" cy="24.5" r="19" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_6" data-name="Ellipse 6" class="cls-2" transform="translate(294 308)">
				  <circle class="cls-3" cx="24.5" cy="24.5" r="24.5"/>
				  <circle class="cls-4" cx="24.5" cy="24.5" r="24"/>
				  <circle id="Red_Q3_3" class="cls-9" cx="24.5" cy="24.5" r="19" fill="#cf3d3d"/>
			  
				</g>
				<g id="Ellipse_7" data-name="Ellipse 7" class="cls-2" transform="translate(386 308)">
				  <circle class="cls-3" cx="24.5" cy="24.5" r="24.5"/>
				  <circle class="cls-4" cx="24.5" cy="24.5" r="24"/>
				  <circle id="Red_Q3_4" class="cls-9" cx="24.5" cy="24.5" r="19" fill="#cf3d3d"/>
			  
				</g>
				<line id="Line_23" data-name="Line 23" class="cls-1" x1="7" y2="41" transform="translate(7.5 472.5)"/>
				<line id="Line_24" data-name="Line 24" class="cls-1" x1="7" y2="41" transform="translate(7.5 472.5)"/>
				<line id="Line_25" data-name="Line 25" class="cls-1" x2="7" y2="41" transform="translate(14.5 472.5)"/>
				<line id="Line_26" data-name="Line 26" class="cls-1" x1="7" y2="41" transform="translate(44.5 472.5)"/>
				<line id="Line_27" data-name="Line 27" class="cls-1" x2="7" y2="41" transform="translate(51.5 472.5)"/>
				<line id="Line_28" data-name="Line 28" class="cls-1" x1="7" y2="41" transform="translate(172.5 472.5)"/>
				<line id="Line_29" data-name="Line 29" class="cls-1" x2="7" y2="41" transform="translate(179.5 472.5)"/>
				<line id="Line_30" data-name="Line 30" class="cls-1" x1="7" y2="41" transform="translate(211.5 472.5)"/>
				<line id="Line_31" data-name="Line 31" class="cls-1" x2="7" y2="41" transform="translate(218.5 472.5)"/>
				<line id="Line_32" data-name="Line 32" class="cls-1" x1="7" y2="41" transform="translate(7.5 472.5)"/>
				<line id="Line_33" data-name="Line 33" class="cls-1" x1="7" y2="41" transform="translate(7.5 472.5)"/>
				<line id="Line_34" data-name="Line 34" class="cls-1" x2="7" y2="41" transform="translate(14.5 472.5)"/>
				<line id="Line_35" data-name="Line 35" class="cls-1" x1="7" y2="41" transform="translate(44.5 472.5)"/>
				<line id="Line_36" data-name="Line 36" class="cls-1" x2="7" y2="41" transform="translate(51.5 472.5)"/>
				<line id="Line_37" data-name="Line 37" class="cls-1" x1="7" y2="41" transform="translate(172.5 472.5)"/>
				<line id="Line_38" data-name="Line 38" class="cls-1" x2="7" y2="41" transform="translate(179.5 472.5)"/>
				<line id="Line_39" data-name="Line 39" class="cls-1" x1="7" y2="41" transform="translate(211.5 472.5)"/>
				<line id="Line_40" data-name="Line 40" class="cls-1" x2="7" y2="41" transform="translate(218.5 472.5)"/>
				<line id="Line_41" data-name="Line 41" class="cls-1" x1="7" y2="41" transform="translate(320.5 472.5)"/>
				<line id="Line_42" data-name="Line 42" class="cls-1" x1="7" y2="41" transform="translate(320.5 472.5)"/>
				<line id="Line_43" data-name="Line 43" class="cls-1" x2="7" y2="41" transform="translate(327.5 472.5)"/>
				<line id="Line_44" data-name="Line 44" class="cls-1" x1="7" y2="41" transform="translate(357.5 472.5)"/>
				<line id="Line_45" data-name="Line 45" class="cls-1" x2="7" y2="41" transform="translate(364.5 472.5)"/>
				<line id="Line_46" data-name="Line 46" class="cls-1" x1="7" y2="41" transform="translate(485.5 472.5)"/>
				<line id="Line_47" data-name="Line 47" class="cls-1" x2="7" y2="41" transform="translate(492.5 472.5)"/>
				<line id="Line_48" data-name="Line 48" class="cls-1" x1="7" y2="41" transform="translate(524.5 472.5)"/>
				<line id="Line_49" data-name="Line 49" class="cls-1" x2="7" y2="41" transform="translate(531.5 472.5)"/>
				<g id="Ellipse_10" data-name="Ellipse 10" class="cls-2" transform="translate(0 458)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_1a" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
			  
				</g>
				<g id="Ellipse_11" data-name="Ellipse 11" class="cls-2" transform="translate(37 458)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_2a" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
			  
				</g>
				<g id="Ellipse_14" data-name="Ellipse 14" class="cls-2" transform="translate(166 458)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_1b" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
			  
				</g>
				<g id="Ellipse_15" data-name="Ellipse 15" class="cls-2" transform="translate(204 458)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_2b" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_18" data-name="Ellipse 18" class="cls-2" transform="translate(312 457)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_1c" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_19" data-name="Ellipse 19" class="cls-2" transform="translate(350 457)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_2c" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_22" data-name="Ellipse 22" class="cls-2" transform="translate(479 457)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_1d" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
				</g>
				<g id="Ellipse_23" data-name="Ellipse 23" class="cls-2" transform="translate(516 457)">
				  <circle class="cls-3" cx="14" cy="14" r="14"/>
				  <circle class="cls-4" cx="14" cy="14" r="13.5"/>
				  <circle id="Red_Q2_2d" class="cls-9" cx="14" cy="14" r="9" fill="#cf3d3d"/>
				</g>
				<g id="Rectangle_3" data-name="Rectangle 3" class="cls-2" transform="translate(0 507)">
				  <rect class="cls-3" width="544" height="25"/>
				  <rect class="cls-4" x="0.5" y="0.5" width="543" height="26"/>
				  <rect id="Red_rect" class="cls-9" x="46" y="8" width="450" height="10" fill="#cf3d3d"/>
				</g>
			  </svg>
		</div>
		<div id="SVG_Yes"></div>
		<div id="SVG_No"></div>
	</div>
</body>

<!--div id="QuestionData" >
	<input type="hidden" name="Q1" id="Q1_1"  value="Was the color of your card red?" readonly>
	<input type="hidden" name="Q1" id="Q1_2"  value="Was the color of your card black?" readonly>

	<input type="hidden" name="Q2" id="Q2_1"  value="Was your card a numbered card?" readonly>
	<input type="hidden" name="Q2" id="Q2_2"  value="Was your card a special card?" readonly>

	<input type="hidden" name="Q3" id="Q3_1"  value="Was the suit of your card diomonds?" readonly>
	<input type="hidden" name="Q3" id="Q3_2"  value="Was the suit of your card hearts?" readonly>
	<input type="hidden" name="Q3" id="Q3_3"  value="Was the suit of your card spades?" readonly>
	<input type="hidden" name="Q3" id="Q3_4"  value="Was the suit of your card clover?" readonly>

	<input type="hidden" name="Q4" id="Q4_1"  value="Was your card the Ace of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_2"  value="Was your card the 2 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_3"  value="Was your card the 3 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_4"  value="Was your card the 4 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_5"  value="Was your card the 5 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_6"  value="Was your card the 6 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_7"  value="Was your card the 7 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_8"  value="Was your card the 8 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_9"  value="Was your card the 9 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_10"  value="Was your card the 10 of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_11"  value="Was your card the Jack of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_12"  value="Was your card the Queen of diomonds?" readonly>
	<input type="hidden" name="Q4" id="Q4_13"  value="Was your card the King of diomonds?" readonly>
	
	<input type="hidden" name="Q5" id="Q5_1"  value="Was your card the Ace of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_2"  value="Was your card the 2 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_3"  value="Was your card the 3 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_4"  value="Was your card the 4 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_5"  value="Was your card the 5 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_6"  value="Was your card the 6 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_7"  value="Was your card the 7 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_8"  value="Was your card the 8 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_9"  value="Was your card the 9 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_10"  value="Was your card the 10 of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_11"  value="Was your card the Jack of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_12"  value="Was your card the Queen of hearts?" readonly>
	<input type="hidden" name="Q5" id="Q5_13"  value="Was your card the King of hearts?" readonly>

	<input type="hidden" name="Q6" id="Q6_1"  value="Was your card the Ace of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_2"  value="Was your card the 2 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_3"  value="Was your card the 3 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_4"  value="Was your card the 4 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_5"  value="Was your card the 5 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_6"  value="Was your card the 6 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_7"  value="Was your card the 7 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_8"  value="Was your card the 8 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_9"  value="Was your card the 9 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_10"  value="Was your card the 10 of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_11"  value="Was your card the Jack of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_12"  value="Was your card the Queen of spades?" readonly>
	<input type="hidden" name="Q6" id="Q6_13"  value="Was your card the King of spades?" readonly>

	<input type="hidden" name="Q7" id="Q7_1"  value="Was your card the Ace of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_2"  value="Was your card the 2 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_3"  value="Was your card the 3 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_4"  value="Was your card the 4 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_5"  value="Was your card the 5 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_6"  value="Was your card the 6 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_7"  value="Was your card the 7 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_8"  value="Was your card the 8 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_9"  value="Was your card the 9 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_10"  value="Was your card the 10 of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_11"  value="Was your card the Jack of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_12"  value="Was your card the Queen of clover?" readonly>
	<input type="hidden" name="Q7" id="Q7_13"  value="Was your card the King of clover?" readonly>
</div-->
<div id='TreeStructure' class="tree layer0">
	<div><p class="tree layer1" id="Q1_1"> Was the color of your card red?</p>
		<div><p class="tree layer2" id='Q3_1'> Was the suit of your card diomonds?</p>
			<div><p class="tree layer3" id='Q2_1a'> Was your card a numbered card?</p>
				<div><p class="tree layer4" id='Q4_2'> Was your card the 2 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_3'> Was your card the 3 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_4'> Was your card the 4 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_5'> Was your card the 5 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_6'> Was your card the 6 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_7'> Was your card the 7 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_8'> Was your card the 8 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_9'> Was your card the 9 of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_10'> Was your card the 10 of diomonds?</p></div>
			</div>
			<div><p class="tree layer3" id='Q2_2a'>Was your card a special card?</p>
				<div><p class="tree layer4" id='Q4_1'>Was your card the Ace of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_11'>Was your card the Jack of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_12'>Was your card the Queen of diomonds?</p></div>
				<div><p class="tree layer4" id='Q4_13'>Was your card the King of diomonds?</p></div>
			</div>
		</div>
		<div><p class="tree layer2" id='Q3_2'>Was the suit of your card hearts?</p>
			<div><p class="tree layer3" id='Q2_1b'>Was your card a numbered card?</p>
				<div><p class="tree layer4" id='Q5_2'>Was your card the 2 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_3'>Was your card the 3 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_4'>Was your card the 4 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_5'>Was your card the 5 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_6'>Was your card the 6 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_7'>Was your card the 7 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_8'>Was your card the 8 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_9'>Was your card the 9 of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_10'>Was your card the 10 of hearts?</p></div>
			</div>
			<div><p class="tree layer3" id='Q2_2b'>Was your card a special card?</p>
				<div><p class="tree layer4" id='Q5_1'>Was your card the Ace of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_11'>Was your card the Jack of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_12'>Was your card the Queen of hearts?</p></div>
				<div><p class="tree layer4" id='Q5_13'>Was your card the King of hearts?</p></div>
			</div>
		</div>
	</div>
	<div><p class="tree layer1" id='Q1_2'>Was the color of your card black?</p>
		<div><p class="tree layer2" id='Q3_3'>Was the suit of your card spades?</p>
			<div><p class="tree layer3" id='Q2_1c'>Was your card a numbered card?</p>
				<div><p class="tree layer4" id='Q6_2'>Was your card the 2 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_3'>Was your card the 3 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_4'>Was your card the 4 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_5'>Was your card the 5 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_6'>Was your card the 6 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_7'>Was your card the 7 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_8'>Was your card the 8 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_9'>Was your card the 9 of spades?</p></div>
				<div><p class="tree layer4" id='Q6_10'>Was your card the 10 of spades?</p></div>
			</div>
			<div><p class="tree layer3" id='Q2_2c'>Was your card a special card?</p>
				<div><p class="tree layer4" id='Q6_1'>Was your card the Ace of spades?</p></div>
				<div><p class="tree layer4" id='Q6_11'>Was your card the Jack of spades?</p></div>
				<div><p class="tree layer4" id='Q6_12'>Was your card the Queen of spades?</p></div>
				<div><p class="tree layer4" id='Q6_13'>Was your card the King of spades?</p></div>
			</div>
		</div>
		<div><p class="tree layer2" id='Q3_4'>Was the suit of your card clover?</p>
			<div><p class="tree layer3" id='Q2_1d'>Was your card a numbered card?</p>
				<div><p class="tree layer4" id='Q7_2'>Was your card the 2 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_3'>Was your card the 3 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_4'>Was your card the 4 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_5'>Was your card the 5 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_6'>Was your card the 6 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_7'>Was your card the 7 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_8'>Was your card the 8 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_9'>Was your card the 9 of clover?</p></div>
				<div><p class="tree layer4" id='Q7_10'>Was your card the 10 of clover?</p></div>
			</div>
			<div><p class="tree layer3" id='Q2_2d'>Was your card a special card?</p>
				<div><p class="tree layer4" id='Q7_1'>Was your card the Ace of clover?</p></div>
				<div><p class="tree layer4" id='Q7_11'>Was your card the Jack of clover?</p></div>
				<div><p class="tree layer4" id='Q7_12'>Was your card the Queen of clover?</p></div>
				<div><p class="tree layer4" id='Q7_13'>Was your card the King of clover?</p></div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Dubug.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/MathScrpt.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Constants.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Variables.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/SaveData.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Training.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/GeneralScripts.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Strategies.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Graphics.js"></script>
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/Main.js"></script>
<!--script type="text/javascript" src="Script.js"></script-->
<script type="text/javascript" src="https://jopa0116.github.io/pageTest/RunScripts.js"></script>
</html>
