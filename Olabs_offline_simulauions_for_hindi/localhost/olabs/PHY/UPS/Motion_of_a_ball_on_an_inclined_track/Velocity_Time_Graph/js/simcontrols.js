var sceneFlag = 1;
var string1 = [];
var Firstaxis;
var secondaxix;
var thirdaxis;
var fourth;
var T1 = 0;
var T2 = 0;
var V1 = 0;
var V2 = 0;
var option = 0;
var p = 0;
var sceneFlag = 1;

window.onload = function () {

	gt = new Gettext({ 'domain': 'messages' });
	document.getElementById("expName").innerHTML = gt.gettext("Velocity-Time(s-t)Graph");

	var theShadowCoordinates = ['(32,135)', '(60, 122)', '(88, 108)', '(118,91)', '(143,78)', '(170,64)', '(198,48)', '(226,35)', '(252,21)', '(280,6)'];
	var a = 1;
	theHelp = [gt.gettext("Click on Show Axis"), gt.gettext("Select axis"), gt.gettext("Select the values"), gt.gettext("Click to draw line"), gt.gettext("Click to show co-ordinates"), gt.gettext("Click on Show Calculation after <br> Selecting correct answer"), gt.gettext("Click on Hide Calculation after <br> Selecting correct answer"), gt.gettext("Click to Show Distance"),gt.gettext("Click to Hide Distance")];
	theaxisShiw="Select Time and Velocity";
	
	
	theresthlpmsg = ("Click on Reset button<br> to run the test once again");
	var axis = [gt.gettext("Time in x-axis and velocity in y-axis "), gt.gettext("Velocity in x-axis and time in y-axis")]
	theInference = ("The velocity-time graph for the motion of the car in the <br> data is a straight line. This indicates that the car is moving<br> with a uniform acceleration.<br>The acceleration of the moving car (from the graph) = 2ms<sup>-2</sup><br>It is observed that the distance travelled by the car in<br> a given time intervals but at different instances are different.<br> This shows that the car is in accelerated motion.");
	var xpoints = [gt.gettext("5"), gt.gettext("10"), gt.gettext("15"), gt.gettext("20"), gt.gettext("25"), gt.gettext("30"), gt.gettext("35"), gt.gettext("40"), gt.gettext("45"), gt.gettext("50")];
	var ypoints = [gt.gettext("10"), gt.gettext("20"), gt.gettext("30"), gt.gettext("40"), gt.gettext("50"), gt.gettext("60"), gt.gettext("70"), gt.gettext("80"), gt.gettext("90"), gt.gettext("100")];
inferencehelp="Click on Inference button";
ResetOnce="Click on Reset button to run the test once again"
	var axises = [gt.gettext("Time(s)"), gt.gettext("Velocity(m/s-1)")]
	var coordinates = [];
	var SecondCoordinates = [];

	$("#axis1_0").text(ypoints[0]);
	$("#axis1_2").text(ypoints[1]);
	$("#axis1_3").text(ypoints[2]);
	$("#axis1_4").text(ypoints[3]);
	$("#axis1_5").text(ypoints[4]);
	$("#axis1_6").text(ypoints[5]);
	$("#axis1_7").text(ypoints[6]);
	$("#axis1_8").text(ypoints[7]);
	$("#axis1_9").text(ypoints[8]);
	$("#axis1_10").text(ypoints[9]);
	$("#axis1_11").text(ypoints[10]);


	$("#axis0_0").text("0");
	$("#axis0_1").text(xpoints[0]);
	$("#axis0_2").text(xpoints[1]);
	$("#axis0_3").text(xpoints[2]);
	$("#axis0_4").text(xpoints[3]);
	$("#axis0_5").text(xpoints[4]);
	$("#axis0_6").text(xpoints[5]);
	$("#axis0_7").text(xpoints[6]);
	$("#axis0_8").text(xpoints[7]);
	$("#axis0_9").text(xpoints[8]);
	$("#axis0_10").text(xpoints[9]);
	$("#axis0_11").text(xpoints[10]);

	$(document).ready(function () {

		//canvas
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

		$(".myCheckbox").click(function () {
			removeTrip()
			var dataId = $(this).data("id");

			// ********************Clear Canvas
			const context = canvas.getContext('2d');
			context.clearRect(0, 0, canvas.width, canvas.height);

			//*********************
			if ($(this).is(":checked")) {

				var i = 1;
				p++;
				var firstCoordinatesPoint = theShadowCoordinates[dataId - 2]
				// console.log(dataId)

				$(".graphPoint").each(function () {
					if ($(this).data("id") == dataId) {
						$(this).show();
					}
				})
				var coordval = $(this).val();
				// //fetching bracket values
				var numbers = coordval.substring(coordval.indexOf('(') + 1, coordval.indexOf(')'));
				var n1 = numbers.substring(0, coordval.indexOf(','))
				var n2 = numbers.substring(coordval.indexOf(','), numbers.length);
				n1 = parseInt(n1);
				n2 = parseInt(n2);
				var cVal = { x: n1, y: n2, id: $(this).attr('id') }
				coordinates.push(cVal);

				// // //fetching bracket values
				var numbers = firstCoordinatesPoint.substring(firstCoordinatesPoint.indexOf('(') + 1, firstCoordinatesPoint.indexOf(')'));
				var c1 = numbers.substring(0, firstCoordinatesPoint.indexOf(','))
				var c2 = numbers.substring(firstCoordinatesPoint.indexOf(','), numbers.length);
				c1 = parseInt(c1);
				c2 = parseInt(c2);

				var cVal2 = { x: c1, y: c2, id: $(this).attr('id') }
				SecondCoordinates.push(cVal2);


				$("#join_lines").css({ "pointer-events": "auto" })
				$("#join_lines").css({ "opacity": "1" })
				/////////////////////////end
			} else {

				p--;

				$(".graphPoint").each(function () {
					if ($(this).data("id") == dataId) {
						$(this).hide();
					}
				});
				var id = $(this).attr('id');
				coordinates = coordinates.filter(function (coordinate) { return coordinate.id != id });
				//
				//sedcond Coofinder
				SecondCoordinates = SecondCoordinates.filter(function (coordinate) { return coordinate.id != id }); //////////////////////////checkit

				//
			}
			// For the help part
			if (p > 1) {
				$(".content").animate({ scrollTop: '600px' });
				sceneFlag = 4;
				$("#join_lines").css({ "pointer-events": "auto" })
				$("#join_lines").css({ "opacity": "1" })

			}
			else {
				sceneFlag = 3;
				$("#join_lines").css({ "pointer-events": "none" })
				$("#join_lines").css({ "opacity": ".5" })

			}
			// Ends here

			var T1 = coordinates[0].x;
			var V1 = coordinates[0].y;
			var T2 = coordinates[1].x;
			var V2 = coordinates[1].y;

			///
			var FirstCoordinatesc1 = SecondCoordinates[0].x;
			var FirstCoordinatesc2 = SecondCoordinates[0].y;
			var SecondCoordinatesc1 = SecondCoordinates[1].x;
			var SecondCoordinatesc2 = SecondCoordinates[1].y;

			if (option == 0) {
				if (FirstCoordinatesc1 > SecondCoordinatesc1) {
					ctx.beginPath();
					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);//(5,10)
					ctx.lineTo(SecondCoordinatesc1, SecondCoordinatesc2);

					ctx.lineTo(SecondCoordinatesc1, 150);
					ctx.lineTo(FirstCoordinatesc1, 150);

					ctx.fillStyle = "red";
					ctx.fill();

					ctx.beginPath();
					ctx.setLineDash([5, 3])
					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);

					// End point (180,47)
					ctx.lineTo(6, FirstCoordinatesc2);
					ctx.moveTo(SecondCoordinatesc1, SecondCoordinatesc2);
					ctx.lineTo(6, SecondCoordinatesc2);

					ctx.lineWidth = .4;
					ctx.strokeStyle = "black"
					ctx.stroke();
				}
				else {
					ctx.beginPath();
					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);//(5,10)
					ctx.lineTo(SecondCoordinatesc1, SecondCoordinatesc2);

					ctx.lineTo(SecondCoordinatesc1, 150);
					ctx.lineTo(FirstCoordinatesc1, 150);


					ctx.fillStyle = "red";
					ctx.fill();


					ctx.beginPath();
					ctx.setLineDash([5, 3])

					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);

					// End point (180,47)
					ctx.lineTo(6, FirstCoordinatesc2);
					ctx.moveTo(SecondCoordinatesc1, SecondCoordinatesc2);
					ctx.lineTo(6, SecondCoordinatesc2);

					ctx.lineWidth = .4;
					ctx.strokeStyle = "black"
					ctx.stroke();
				}




			}
			else {
				if (FirstCoordinatesc1 < SecondCoordinatesc1) {
					ctx.beginPath();
					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);//(5,10)
					ctx.lineTo(SecondCoordinatesc1, SecondCoordinatesc2);

					ctx.lineTo(6, SecondCoordinatesc2);
					ctx.lineTo(6, FirstCoordinatesc2);
					ctx.fillStyle = "#adaba3";
					ctx.fill();


					//Line drawing

					ctx.beginPath();
					ctx.setLineDash([5, 3])

					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);

					// End point (180,47)
					ctx.lineTo(FirstCoordinatesc1, 150);
					ctx.moveTo(SecondCoordinatesc1, SecondCoordinatesc2);
					ctx.lineTo(SecondCoordinatesc1, 150);


					ctx.lineWidth = .4;
					ctx.strokeStyle = "black"
					ctx.stroke();
				}
				else {

					ctx.beginPath();
					ctx.moveTo(6, SecondCoordinatesc2);
					ctx.lineTo(SecondCoordinatesc1, SecondCoordinatesc2);//(5,10)
					ctx.lineTo(FirstCoordinatesc1, FirstCoordinatesc2);
					ctx.lineTo(6, FirstCoordinatesc2);
					ctx.fillStyle = "#adaba3";
					ctx.fill();



					ctx.beginPath();
					ctx.setLineDash([5, 3])

					ctx.moveTo(FirstCoordinatesc1, FirstCoordinatesc2);

					// End point (180,47)
					ctx.lineTo(FirstCoordinatesc1, 150);
					ctx.moveTo(SecondCoordinatesc1, SecondCoordinatesc2);
					ctx.lineTo(SecondCoordinatesc1, 150);
					ctx.lineWidth = .4;
					ctx.strokeStyle = "black"
					ctx.stroke();

				}

			}



			if (T2 < T1) {
				x = T2;
				T2 = T1;
				T1 = x;
			}
			if (V2 < V1) {
				y = V2;
				V2 = V1;
				V1 = y;
			}

			$("#The_T1Value").text(T1);
			$("#The_V1Value").text(V1);
			$("#The_V2Value").text(V2);
			$("#The_T2Value").text(T2);

			$("#TheSecond_T1Value").text(T1);
			$("#TheSecond_V1Value").text(V1);
			$("#TheSecond_V2Value").text(V2);
			$("#TheSecond_T2Value").text(T2);

			S = V1 * (T2 - T1) + .5 * (V2 - V1) * (T2 - T1);

			$("#ThelastequationT1").text(T1);
			$("#ThelastequationV1").text(V1);
			$("#ThelastequationV2").text(V2);
			$("#ThelastequationT2").text(T2);
			$(".secondV1").text(V1);
			$(".secondT2").text(T2);
			$(".secondT1").text(T1);
			$("#The_resultOfthe_Distance").text(S + "m");
		});

	})

	addintoDropDown2($('#TheScale'), axis)
	function addintoDropDown2(getId, valueSet) {//adding values to dropdown2		
		var selected2 = getId;
		$.each(valueSet, function (val, text) {

			selected2.append($('<option> </option>').val(val).html(text));
		});

	}


	$("#Show_lines").click(function () {

		$(this).prop('disabled', true)
		removeTrip()
		sceneFlag = 2;
		$("#TheScale").css({ "opacity": "1" });

		$("#TheScale").css({ "pointer-events": "auto" });

		$("#GraphLine").show();
		$("#Graphverticalline").show();

		$("#graphArrowTop").fadeIn();
		$("#graphArrowright").fadeIn();

		$("#Graphverticalline").animate({ height: 92 + "%" }, 400);
		$("#GraphHorizontal").show("blind", { direction: "right" }, 500);




		var coordval = $('#the5-10_coordinate').html()
		// //fetching bracket values
		var numbers = coordval.substring(coordval.indexOf('(') + 1, coordval.indexOf(')'));
		var n1 = numbers.substring(0, coordval.indexOf(','))
		var n2 = numbers.substring(coordval.indexOf(','), numbers.length);
		n1 = parseInt(n1);
		n2 = parseInt(n2);
		//end	

	})

	$("#TheScale").change(function () {
		sceneFlag = 3;

		option = ($(this).val())
		//the common changes
		binocularActivity($(this).val());

		$("#theY-axisTag").fadeIn();
		$("#thexasixTag").fadeIn();

		$("#TheScale").css({ "opacity": ".5" });
		$("#TheScale").css({ "pointer-events": "none" });



	});
	$("#TheScale").click(function () {
		$("#theY-axisTag").fadeIn();
		$("#thexasixTag").fadeIn();
		removeTrip()
		sceneFlag = 3;


		$("#TheScale").css({ "opacity": ".5" });
		$("#TheScale").css({ "pointer-events": "none" });

		$("#the_table").css({ "opacity": "1" })
		$("#the_table").css({ "pointer-events": "auto" })


	})

	$("#Show_calculations").click(function () {
		QuizCoreExecuter(3, "The product of velocity and time is", "Acceleration", "Displacement", "Power", '', "Displacement", 0, 4)

		$(this).hide();
		sceneFlag = 7;
		removeTrip()

		$("#TheFirstEquationOnScreen").show();
		$("#thefirstEquationPreview").show()

		$("#hide_calculations").show()
		$("#hide_calculations").css({ "opacity": ".5" })
		$("#hide_calculations").css({ "pointer-events": "none" })

	})

	$("#hide_calculations").click(function () {
		// sceneFlag=8;
		// removeTrip()
		sceneFlag = 8;
		removeTrip()

		//QuizCoreExecuter(3,"The product of velocity and time is","Power","Acceleration","Displacement",'',"Displacement",0,1)

		$(this).hide();


		$("#Show_calculations").show();
		$("#TheFirstEquationOnScreen").hide();
		$("#thefirstEquationPreview").hide()

		$("#the_table").css({ "opacity": "1" })
		$("#the_table").css({ "pointer-events": "auto" })



		// $(".myCheckbox").prop('checked', false);
		$("#myCanvas").show();
		$("#Show_calculations").css({ "opacity": ".5" })
		$("#Show_calculations").css({ "pointer-events": "none" })

		$("#Show_Distance").css({ "opacity": "1" })
		$("#Show_Distance").css({ "pointer-events": "auto" })
		$('#join_lines').removeAttr('id');




	})

	function binocularActivity(option) {
		if (option == 0) {


			$("#SecondScaleImage").hide();
			$("#FirstScaleImage").show();
			$("#thefirstEquationPreview").show();
			$("#theSecondEquationPreview").hide();

			$("#theXlabel").text(axises[0]);
			$("#theYlabel").text(axises[1]);



			$("#axis1_0").text(ypoints[0]);
			$("#axis1_2").text(ypoints[1]);
			$("#axis1_3").text(ypoints[2]);
			$("#axis1_4").text(ypoints[3]);
			$("#axis1_5").text(ypoints[4]);
			$("#axis1_6").text(ypoints[5]);
			$("#axis1_7").text(ypoints[6]);
			$("#axis1_8").text(ypoints[7]);
			$("#axis1_9").text(ypoints[8]);
			$("#axis1_10").text(ypoints[9]);
			$("#axis1_11").text(ypoints[10]);


			$("#axis0_0").text("0");
			$("#axis0_1").text(xpoints[0]);
			$("#axis0_2").text(xpoints[1]);
			$("#axis0_3").text(xpoints[2]);
			$("#axis0_4").text(xpoints[3]);
			$("#axis0_5").text(xpoints[4]);
			$("#axis0_6").text(xpoints[5]);
			$("#axis0_7").text(xpoints[6]);
			$("#axis0_8").text(xpoints[7]);
			$("#axis0_9").text(xpoints[8]);
			$("#axis0_10").text(xpoints[9]);
			$("#axis0_11").text(xpoints[10]);




			$("#the5-10_coordinate").text("(5,10)")
			$("#the10-20_coordinate").text("(10,20)")
			$("#the15-30_coordinate").text("(15,30)")
			$("#the20-40_coordinate").text("(20,40)")
			$("#the25-50_coordinate").text("(25,50)")
			$("#the30-60_coordinate").text("(30,60)")
			$("#the35-70_coordinate").text("(35,70)")
			$("#the40-80_coordinate").text("(40,80)")
			$("#the45-90_coordinate").text("(45,90)")
			$("#the50-100_coordinate").text("(50,100)")

		}
		else {
			$("#SecondScaleImage").hide();
			$("#SecondScaleImage").show();
			$("#FirstScaleImage").hide();
			$("#thefirstEquationPreview").hide();
			$("#theSecondEquationPreview").show();


			$("#theXlabel").text(axises[1]);
			$("#theYlabel").text(axises[0]);
			$("#axis0_0").text("0");

			$("#axis1_0").text(xpoints[0]);
			$("#axis1_2").text(xpoints[1]);
			$("#axis1_3").text(xpoints[2]);
			$("#axis1_4").text(xpoints[3]);
			$("#axis1_5").text(xpoints[4]);
			$("#axis1_6").text(xpoints[5]);
			$("#axis1_7").text(xpoints[6]);
			$("#axis1_8").text(xpoints[7]);
			$("#axis1_9").text(xpoints[8]);
			$("#axis1_10").text(xpoints[9]);
			$("#axis1_11").text(xpoints[10]);



			$("#axis0_1").text(ypoints[0]);
			$("#axis0_2").text(ypoints[1]);
			$("#axis0_3").text(ypoints[2]);
			$("#axis0_4").text(ypoints[3]);
			$("#axis0_5").text(ypoints[4]);
			$("#axis0_6").text(ypoints[5]);
			$("#axis0_7").text(ypoints[6]);
			$("#axis0_8").text(ypoints[7]);
			$("#axis0_9").text(ypoints[8]);
			$("#axis0_10").text(ypoints[9]);
			$("#axis0_11").text(ypoints[10]);

			$("#the5-10_coordinate").text("(10,5)")
			$("#the10-20_coordinate").text("(20,10)")
			$("#the15-30_coordinate").text("(30,15)")
			$("#the20-40_coordinate").text("(40,20)")
			$("#the25-50_coordinate").text("(50,25)")
			$("#the30-60_coordinate").text("(60,30)")
			$("#the35-70_coordinate").text("(70,35)")
			$("#the40-80_coordinate").text("(80,40)")
			$("#the45-90_coordinate").text("(90,45)")
			$("#the50-100_coordinate").text("(100,50)")



		}

	}

	$("#join_lines").click(function () {
		removeTrip()
		sceneFlag = 5;
		$("#the_joinGraphline").fadeIn();
		$("#the_table").css({ "opacity": ".5" })
		$("#the_table").css({ "pointer-events": "none" })

		$("#Show_cordinates").css({ "opacity": "1" })
		$("#Show_cordinates").css({ "pointer-events": "auto" })
		$("#join_lines").prop('disabled', true);
		$("#join_lines").css({ "opacity": ".5" })
		$("#join_lines").css({ "pointer-events": "auto" })
	})
	$("#Show_cordinates").click(function () {
		removeTrip()

		$("#thecoordinateElement").fadeIn();
		$("#showScale").fadeIn();

		sceneFlag = 6;
		$("#Show_cordinates").css({ "pointer-events": "none" })
		$("#Show_cordinates").css({ "opacity": ".5" })
		QuizCoreExecuter(1, "Identify the quantity defined as the ratio of the vertical change (change in y-axis) between two points on the graph, to the horizontal change (change in x-axis) between the same two points?", "Slope", "Curvature", "Tangent", '', "Slope", 0, 4)


	})
	$("#Show_Distance").click(function () {


		$(this).hide()
		removeTrip()
		sceneFlag=9;
		$("#showdistanceEquation").fadeIn()
		$("#Hide_Distance").show()

		$("#Hide_Distance").click(function () {
			$(this).hide()
		sceneFlag=10;
		removeTrip()

		

			$("#showdistanceEquation").fadeOut()
			$("#Show_Distance").show();
			// setTimeout(function () {
			// 	WarningMessage()
			// }, 3000);
			$("#theInference").show();


		})
	})

	$("#showscale").click(function () {
		if ($(this).is(":checked")) {

			$("#showScaleDiv").fadeIn()
		} else {

			$("#showScaleDiv").fadeOut()
		}
	});

	$("#theInference").click(function () {
		WarningMessage()
	})

};

function removeTrip() {
	if (tripFlag == true) {
		$('.trip-block').hide();
		trip.stop();
		tripFlag == false;
	}
}

function WarningMessage() {
	sceneFlag = 11;
	$("#theInference").show();
	$(".content").animate({ scrollTop: '600px' });
	var trip = new Trip([

		{
			sel: $('#InferenceMessage'),
			position: 'e',
			content: theInference,
			expose: false,
			delay: 8000

		},

	], {

		backToTopWhenEnded: true,
		delay: 2000
	});

	trip.start();
	window.trip = trip;

}


function reset() {

	window.location.reload();
}