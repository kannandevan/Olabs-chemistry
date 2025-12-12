// JavaScript Document

$(document).ready(function() {
		// $('#olabmenuBar li:first-child a').html("HELP");
	$('#simHelp').bind('click',function(){
		tripFlag = true;
		if(helpCount==0){
			// document.location.reload();
		var trip = new Trip([
		{
				sel : $('#theFirstwater_bootle'),
				position : 'w',
				content : firstHelpmsg,
				expose : false,
				delay : 3000
			},
		]);

		}
		else if(helpCount==1){
			var trip = new Trip([
			{
				sel : $('#theFirstDragabbletesttube_div'),
				position : 'n',
				content : ThirdHelpmsg,
				expose : false,
				delay : 4000
			}, 
			
			]);
		}
		else if(helpCount==2){
			// alert("2");
			var trip = new Trip([
			{
				sel : $('#firstPageKibbs-close'),
				position : 'n',
				content : fifthHelpmsg,
				expose : false,
				delay : 4000
			}, 

			],
			);
		}
		else if(helpCount==3){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#firstPageKibbs-open'),
				position : 'n',
				content : sixthHelpmsg,
				expose : false,
				delay : 4000
			}, 

			],
			);
		}
		else if(helpCount==4){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#firstPage_Dropper'),
				position : 'n',
				content : seventhHelpmsg,
				expose : false,
				delay : 4000
			}, 

			],
			);
		}
		else if(helpCount==5){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#theFirstDragabbletesttube_div'),
				position : 'n',
				content : ShakeMsg,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==6){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#firstPage_Dropper'),
				position : 'n',
				content : seventhHelpmsg,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==7){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#theFirstDragabbletesttube_div'),
				position : 'n',
				content : toAnothertestube,
				expose : false,
				delay : 4000
			}, 
			

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==8){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#FirstNext'),
				position : 'w',
				content : Common_Next,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==9){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#theFirstwater_bootle2'),
				position : 'w',
				content : firstHelpmsg,
				expose : false,
				delay : 4000
			}, 
			
		

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==10){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#theFirstSpatuladiv'),
				position : 'n',
				content : eighthHelpmsg,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==11){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#theFirstSpatuladiv'),
				position : 'n',
				content : ninethHelpmsg,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==12){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#secondPageTestube'),
				position : 'n',
				content : ShakeMsg,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==13){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#TheSecondNext'),
				position : 'w',
				content : Common_Next,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==14){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#firstFunnel'),
				position : 'n',
				content : Thelastscreenfirsthelp,
				expose : false,
				delay : 4000
			}, 
			

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==15){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#firstFilterpaper'),
				position : 'w',
				content : thelastscreenSecondhelp,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==16){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#Dragabbletesttube1'),
				position : 'n',
				content : toAnothertestubeScreen2,
				expose : false,
				delay : 4000
			}, 

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==17){
			// alert("3");
			var trip = new Trip([
			{
				sel : $('#theCommonDiv'),
				position : 'e',
				content : RepeateAllmsg,
				expose : false,
				delay : 4000
			}, 
			

			],
			{
				onTripStart : function() {
			},
				onTripEnd : function() {
			},
				onTripStop : function() {
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
		}
		else if(helpCount==18)
{
		var trip = new Trip([
			{
				sel : $('#simReset'),
				position : 's',
				content : theFinalhelpmsg,
				expose : false,
				delay : 4000
				},
				
			], {
			onTripStart : function() {
			console.log("onTripStart");
			},
			onTripEnd : function() {
			console.log("onTripEnd");
			},
			onTripStop : function() {
			console.log("onTripStop");
			},
			backToTopWhenEnded : true,
			delay : 2000
			});
			trip.start(); 
			window.trip = trip;
}

if(QuestionHelp==1){
	// alert("3");
	var trip = new Trip([
	{
		sel : $('#TheQuestioncommonHelp'),
		position : 'w',
		content : CommonQuestionHelp,
		expose : false,
		delay : 4000
	}, 
	]
	);
}

else if(QuestionHelp2==1){
	// alert("3");
	var trip = new Trip([
	{
		sel : $('#TheQuestioncommonHelp'),
		position : 'w',
		content : CommonQuestionHelp,
		expose : false,
		delay : 4000
	}, 
	],
	);
}
// //////////////
trip.start(); 
window.trip = trip;
});
});