var tripClickFlag=false;
$(document).ready(function() {
	gt = new Gettext({ 'domain': 'messages' });
	$('#olabmenuBar li:first-child').bind('click',function(){
		// console.log(helpCount)
		console.log(infovariable, helpCount)

		removeTrip();
		tripClickFlag=true;
		if ((infovariable==1)&&(helpCount==0))
		{ 
			trip = new Trip([
			{
				sel : $('#soap2'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#filter_paper'),
				position : 'n',
				content :helpMsg[1] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_Jar_icon1'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#watch_glass_shadow'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_Jar'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#rod'),
				position : 'n',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			
			]);
		}
		else if((infovariable==1)&&(helpCount==1))
		{
			trip = new Trip([
			{
				sel : $('#filter_paper'),
				position : 'n',
				content :helpMsg[1] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_Jar_icon1'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#watch_glass_shadow'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_Jar'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#rod'),
				position : 'n',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		else if((infovariable==1)&&(helpCount==7))
		{
			trip = new Trip([
			{
				sel : $('#NextFrameButton'),
				position : 'w',
				content :helpMsg[12] ,
				expose : false,
				delay : 6000
			},
			]);
		}
		else if((infovariable==1)&&(helpCount==2))
		{
			trip = new Trip([
			{
				sel : $('#Measuring_Jar_icon1'),
				position : 'w',
				content :helpMsg[2] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#watch_glass_shadow'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_Jar'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#rod'),
				position : 'n',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		else if((infovariable==1)&&(helpCount==3))
		{
			trip = new Trip([
			{
				sel : $('#watch_glass_shadow'),
				position : 'n',
				content :helpMsg[3] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#Measuring_Jar'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#rod'),
				position : 'n',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		else if((infovariable==1)&&(helpCount==4))
		{
			trip = new Trip([
			{
				sel : $('#Measuring_Jar'),
				position : 'n',
				content :helpMsg[4] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#rod'),
				position : 'n',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		else if((infovariable==1)&&(helpCount==5))
		{
			trip = new Trip([
			{
				sel : $('#rod'),
				position : 'n',
				content :helpMsg[5] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		else if((infovariable==1)&&(helpCount==6))
		{
			trip = new Trip([
			{
				sel : $('#soap2'),
				position : 'e',
				content : helpMsg[0],
				expose : false,
				delay : 6000
			}
			]);
		}
		if ((infovariable==2)&&(helpCount1==0))
		{
			trip = new Trip([
			{
				sel : $('#solution2'),
				position : 'e',
				content : helpMsg[6],
				expose : false,
				delay : 6000
			},
			{
				sel : $('#dropper'),
				position : 'n',
				content :helpMsg[7] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content :helpMsg[8] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		if ((infovariable==2)&&(helpCount1==1))
		{
			trip = new Trip([
			{
				sel : $('#dropper'),
				position : 'n',
				content :helpMsg[7] ,
				expose : false,
				delay : 6000
			},
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content :helpMsg[8] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		if ((infovariable==2)&&(helpCount1==2))
		{
			trip = new Trip([
			{
				sel : $('#dropperWrapper'),
				position : 'w',
				content :helpMsg[8] ,
				expose : false,
				delay : 6000
			}
			]);
		}
		if ((infovariable==2)&&(helpCount1==3))
		{
			trip = new Trip([
			{
				sel : $('#solution2'),
				position : 'e',
				content : helpMsg[6],
				expose : false,
				delay : 6000
			}
			]);
		}
		 if((infovariable==2)&&(helpCount1==4))
		{
			trip = new Trip([
			{
				sel : $('#solution_next_button'),
				position : 'w',
				content :helpMsg[12] ,
				expose : false,
				delay : 6000
			},
			]);
		}
		if ((infovariable==3)&&(helpCount2==0)&&(tempForDragAndDropHelp==0))
		{
			// alert("a")
			if(newTaskVariable == 0)
			{
				// alert("hi-0")
				trip = new Trip([{
					sel : $('#testtubeADiv'),
					position : 'e',
					content : helpMsg[9],
					expose : false,
					delay : 6000
				}
				]);
			}
			else
			{
				// alert("hi-1")
			}
			
		}
		else if ((infovariable==3)&&(helpCount2==1))
		{
			if(newTaskVariable == 0)
			{
				// alert("hi-0")
				trip = new Trip([{
					sel : $('#testtubeADiv'),
					position : 'e',
					content : helpMsg[9],
					expose : false,
					delay : 6000
				}
				]);
			}
			else
			{
				trip = new Trip([
					{
					sel : $('#testtubeADiv'),
					position : 'e',
					content :helpMsg[10] ,
					expose : false,
					delay : 6000
				}
				]);
			}
			
			if(tempForDragAndDropHelp == 1)
			{
				// alert("b1")
				if(newTaskVariable == 0)
				{
					trip = new Trip([
						{
						sel : $('#testtubeBDiv'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
					]);
				}
				else
				{
					trip = new Trip([
						
					{
						sel : $('#testtubeBDiv'),
						position : 'e',
						content :helpMsg[10] ,
						expose : false,
						delay : 6000
					}
					]);
				}
				
			}
			if(tempForDragAndDropHelp == 2)
			{
				if(newTaskVariable == 0)
				{
					
				trip = new Trip([
					{
					sel : $('#testtubeCDiv'),
					position : 'e',
					content : helpMsg[9],
					expose : false,
					delay : 6000
				}
				]);
				}
				else
				{
					
				trip = new Trip([
					
				{
					sel : $('#testtubeCDiv'),
					position : 'e',
					content :helpMsg[10] ,
					expose : false,
					delay : 6000
				}
				]);
				}
			}
			if(tempForDragAndDropHelp == 3)
			{
				if(newTaskVariable == 0)
				{
					trip = new Trip([
						{
						sel : $('#testtubeDDiv'),
						position : 'e',
						content : helpMsg[9],
						expose : false,
						delay : 6000
					}
					]);
				}
				else
				{
					trip = new Trip([
						
					{
						sel : $('#testtubeDDiv'),
						position : 'e',
						content :helpMsg[10] ,
						expose : false,
						delay : 6000
					}
					]);
				}
				
			}
			if((tempForDragAndDropHelp == 5)&&(infovariable==3)&&(helpCount2==1))
			{
				// alert("b3")
				if(Inference_flag == 0)
				{
					trip = new Trip([
						{
							sel : $('#Inference'),
							position : 'n',
							content :gt.gettext('Click on the inference button') ,
							expose : false,
							delay : 6000
						}
						]);
				}
				else
				{
					trip = new Trip([
						{
							sel : $('#reset'),
							position : 'n',
							content :helpMsg[11] ,
							expose : false,
							delay : 6000
						}
						]);
				}
				
			}
			if((tempForDragAndDropHelp == 4)&&(infovariable==3)&&(helpCount2==1))
			{
				trip = new Trip([
					{
						sel : $('#testtubeADiv'),
						position : 'e',
						content :helpMsg[10] ,
						expose : false,
						delay : 6000
					},
					{
						sel : $('#reset'),
						position : 'n',
						content :helpMsg[11] ,
						expose : false,
						delay : 6000
					}
					]);
			}
		}
			trip.start(); 
			window.trip = trip;			
	});	
$('#Inference').bind('click',function(){
	removeTrip()
	Inference_flag = 1;
				trip = new Trip([{
					sel : $('#Inference'),
					position : 'e',
					content : inferenceMsg[0],
					expose : false,
					delay : 6000
				}]);
		
			trip.start();
				window.trip = trip;				
		
});
});

//*--Function to remove help tooltip---
function removeTrip()
	{
		var trip = new Trip([
			{
				sel : $('#mainDiv'),
				position : 's',
				content : "",
				expose : true,
				delay : 0
			}
		]);
		trip.start();
		$('.trip-block').remove();
		trip.stop();
	}
	function ResponsiveHelpMessage(elementId,elementClass,positionParam,message,exposeFlag,delayValue)
	{
		var finalElementName;
		if(elementId=="null")
			finalElementName=elementClass
		else
			finalElementName=elementId;
		setTimeout(function()
		{    
			removeTrip()
			setTimeout(function()
			{
				var trip = new Trip([
					{
						sel : $(finalElementName),
						position : positionParam,
						content : message,
						expose : exposeFlag,
						delay : delayValue
					}
				]);
				trip.start();
				window.trip = trip;
				$(".trip-block ").css({display:"block"})
			})
		})
	}