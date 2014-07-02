$(document).on('ready', function() {


		var outerShell = $('<div class="outer-shell"></div>');
		var innerShell = $('<div class="inner-shell"></div>');
		var leftLabels = $('<div class="left-lables">PM</br></br></br></br></br> AUTO</div>');
		var clockScreen = $('<div class="clock-screen"></div>');
		var amPmIndicator = $('<div class="am-pm-indicator"></div>');
		var clockText = $('<div class="clock-text"></div>');
		var bottomAmLabel = $('<div class="bottom-am-label">AM</br>FM</div>');
		var bottomFmLabel = $('<div class="bottom-fm-label"></div>');
		var fmFreq = $('<ul id="fm"><li>53</li><li>60</li><li>70</li><li>90</li><li>110</li><li>140</li><li>170</li></ul>');
		var amFreq = $('<ul id="am"><li>88</li><li>92</li><li>96</li><li>102</li><li>106</li><li>108</li></ul>');

		$(".container").append(outerShell);
			outerShell.append(innerShell);
			innerShell.append(leftLabels);
			innerShell.append(clockScreen);
			clockScreen.append(amPmIndicator);
			clockScreen.append(clockText);
			innerShell.append(bottomAmLabel);
			innerShell.append(bottomFmLabel);
			bottomFmLabel.append(fmFreq);
			bottomFmLabel.append(amFreq);



setInterval(function(){
	var d = new Date();
	var lessTen = '0'

	if(d.getMinutes() <10){
	clockText.text(d.getHours() + ":" + "0" + d.getMinutes());

	}	

	else{
	clockText.text(d.getHours() + ":" + d.getMinutes());
		}

}, 1000);

		


  
});
