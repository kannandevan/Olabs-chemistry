var trip;
var tripClickFlag = false;
$(document).ready(function () {
  $("#olabmenuBar li:first-child a").html("HELP");
  $("#olabmenuBar li:first-child").bind("click", function () {
    tripClickFlag = true;
    if (iconSelect == 0 && helpcount == 1) {
      //alert(1)
      trip = new Trip([
        {
          sel: $("#spatula2"),
          position: "n",
          content: helpMsg[0],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#cork"),
          position: "n",
          content: helpMsg[1],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#thistlFunnel"),
          position: "n",
          content: helpMsg[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube"),
          position: "n",
          content: helpMsg[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#dropper"),
          position: "n",
          content: helpMsg[4],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#jar"),
          position: "n",
          content: helpMsg[5],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        //    {
        //     sel : $('#roundbottomflask'),
        //     position : 'n',
        //     content : helpMsg[7],
        //     expose : false,
        //     delay : 5000
        //    },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 2) {
      //alert(2)
      var trip = new Trip([
        {
          sel: $("#cork"),
          position: "n",
          content: helpMsg[1],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#thistlFunnel"),
          position: "n",
          content: helpMsg[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube"),
          position: "n",
          content: helpMsg[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#dropper"),
          position: "n",
          content: helpMsg[4],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#jar"),
          position: "n",
          content: helpMsg[5],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burner"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        // {
        //  sel : $('#roundbottomflask'),
        //  position : 'n',
        //  content : helpMsg[7],
        //  expose : false,
        //  delay : 5000
        // },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 3) {
      //alert(3)
      var trip = new Trip([
        {
          sel: $("#thistlFunnel"),
          position: "n",
          content: helpMsg[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube"),
          position: "n",
          content: helpMsg[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#dropper"),
          position: "n",
          content: helpMsg[4],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#jar"),
          position: "n",
          content: helpMsg[5],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burner"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        // {
        //  sel : $('#roundbottomflask'),
        //  position : 'n',
        //  content : helpMsg[7],
        //  expose : false,
        //  delay : 5000
        // },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 4) {
      //alert(4)
      var trip = new Trip([
        {
          sel: $("#glassTube"),
          position: "n",
          content: helpMsg[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#dropper"),
          position: "n",
          content: helpMsg[4],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#jar"),
          position: "n",
          content: helpMsg[5],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burner"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        // {
        //  sel : $('#roundbottomflask'),
        //  position : 'n',
        //  content : helpMsg[7],
        //  expose : false,
        //  delay : 5000
        // },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 5) {
      //alert(5)
      var trip = new Trip([
        {
          sel: $("#dropper"),
          position: "n",
          content: helpMsg[4],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#jar"),
          position: "n",
          content: helpMsg[5],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burner"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        // {
        //  sel : $('#roundbottomflask'),
        //  position : 'n',
        //  content : helpMsg[7],
        //  expose : false,
        //  delay : 5000
        // },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 6) {
      //alert(6)
      var trip = new Trip([
        {
          sel: $("#jar"),
          position: "n",
          content: helpMsg[5],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burner"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        // {
        //  sel : $('#roundbottomflask'),
        //  position : 'n',
        //  content : helpMsg[7],
        //  expose : false,
        //  delay : 5000
        // },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 7) {
      //alert(7)
      // if (helpcountc == 1) {
      var trip = new Trip([
        {
          sel: $("#burner"),
          position: "s",
          content: helpMsg[6],
          expose: false,
          delay: 5000,
        },
        // {
        //  sel : $('#roundbottomflask'),
        //  position : 'n',
        //  content : helpMsg[7],
        //  expose : false,
        //  delay : 5000
        // },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 8) {
      //alert(8)
      var trip = new Trip([
        // {
        //      sel : $('#roundbottomflask'),
        //      position : 'n',
        //      content : helpMsg[7],
        //      expose : false,
        //      delay : 5000
        //  },
        {
          sel: $("#burnerOn"),
          position: "n",
          content: helpMsg[8],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#next_btn"),
          position: "w",
          content: helpMsg[9],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 9) {
      //alert(9)
      var trip = new Trip([
        {
          sel: $("#inference"),
          position: "e",
          content: helpMsg[10],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (iconSelect == 0 && helpcount == 10) {
      //alert(10)
      if (iconSelect == 0 && helpcountc == 1) {
        //alert(11)
        if (isDropboxClicked == true) {
          //alert("DropboxTestClicked is true  DropboxTest");
          var trip = new Trip([
            {
              sel: $("#DropboxTest"),
              position: "n",
              content: gt.gettext("Select the Physical property"),
              expose: false,
              delay: 5000,
            },
          ]);
          trip.start();
          window.trip = trip;
        } else {
          var trip = new Trip([
            {
              sel: $("#inferenceForColor"),
              position: "n",
              content: helpMsgc[0],
              expose: false,
              delay: 5000,
            },
          ]);
          trip.start();
          window.trip = trip;
        }
      } else {
        var trip = new Trip([
          {
            sel: $("#next_btn"),
            position: "w",
            content: helpMsg[9],
            expose: false,
            delay: 5000,
          },
        ]);
        trip.start();
        window.trip = trip;
      }
    } else if (helpcount1 == 0 && iconSelect == 1 && helpX == 1) {
      // page: solubility
      //alert(11.1)
      trip = new Trip([
        {
          sel: $("#gasjar"),
          position: "n",
          content: helpMsg2[0],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#gasJarTop"),
          position: "s",
          content: helpMsg2[1],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (helpcount1 == 1 && iconSelect == 1 && helpX == 1) {
      //alert(12)

      trip = new Trip([
        {
          sel: $("#gasJarTop"),
          position: "s",
          content: helpMsg2[1],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (help_last_info == 1) {
      trip = new Trip([
        {
          sel: $("#inferenceForSolubility"),
          position: "s",
          content: gt.gettext("Click on the inferance button"),
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (help_last_info == 2) {
      trip = new Trip([
        {
          sel: $("#next_btn2"),
          position: "s",
          content: gt.gettext("Click on Next button to continue"),
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (helpcount2 == 0) {
      //alert(13)
      //Acidic/Basic  next_btn2
      trip = new Trip([
        {
          sel: $("#redLitmus"),
          position: "n",
          content: helpMsg3[0],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#inferenceForAcid2"),
          position: "n",
          content: gt.gettext("Click on the Inference button"),
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 0 && helpX == 2 && helpcount2 == 0) {
      //Acidic/Basic
      //alert(14)
      trip = new Trip([
        {
          sel: $("#redLitmus"),
          position: "n",
          content: helpMsg3[0],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 0 && helpX == 2 && helpcount2 == 1) {
      //alert(inferenceForAcid2V + "  inferenceForAcid2V")
      if (inferenceForAcid2V == 1) {
        //alert(155)

        trip = new Trip([
          {
            sel: $("#inferenceForAcid"),
            position: "n",
            content: gt.gettext("Click on the Inference button"),
            expose: false,
            delay: 5000,
          },
        ]);
        trip.start();
        window.trip = trip;
      } else {
        //alert(15)
        trip = new Trip([
          {
            sel: $("#blueLitmus"),
            position: "n",
            content: helpMsg3[1],
            expose: false,
            delay: 5000,
          },
        ]);
        trip.start();
        window.trip = trip;
      }
    } else if (inferenceForAcid2Varia == 1) {
      //alert(1555)
      trip = new Trip([
        {
          sel: $("#inferenceForAcid2"),
          position: "n",
          content: gt.gettext("Click on the Inference button"),
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 1 && helpX == 2 && helpcount3 == 0) {
      // KMnO4
      //alert(16)
      trip = new Trip([
        {
          sel: $("#dropper2Div"),
          position: "n",
          content: helpMsg4[0],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#dropper3Div"),
          position: "n",
          content: helpMsg4[1],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube4"),
          position: "n",
          content: helpMsg4[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff4"),
          position: "n",
          content: helpMsg4[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn4"),
          position: "n",
          content: helpMsg4[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 1 && helpX == 2 && helpcount3 == 1) {
      //alert(17)
      trip = new Trip([
        {
          sel: $("#dropper3Div"),
          position: "n",
          content: helpMsg4[1],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube4"),
          position: "n",
          content: helpMsg4[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff4"),
          position: "n",
          content: helpMsg4[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn4"),
          position: "n",
          content: helpMsg4[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 1 && helpX == 2 && helpcount3 == 2) {
      //alert(18)
      trip = new Trip([
        {
          sel: $("#glassTube4"),
          position: "n",
          content: helpMsg4[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff4"),
          position: "n",
          content: helpMsg4[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn4"),
          position: "n",
          content: helpMsg4[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 1 && helpX == 2 && helpcount3 == 3) {
      //alert(19)
      if (inferenceForPage4V == 1) {
        //alert(inferenceForPage4V + "  inferenceForPage4V")
        trip = new Trip([
          {
            sel: $("#inferenceForPage4"),
            position: "n",
            content: gt.gettext("Click on the Inference button"),
            expose: false,
            delay: 5000,
          },
          {
            sel: $("#burnerOn4"),
            position: "n",
            content: helpMsg4[4],
            expose: false,
            delay: 5000,
          },
        ]);
        trip.start();
        window.trip = trip;
      } else {
        trip = new Trip([
          {
            sel: $("#burnerOff4"),
            position: "n",
            content: helpMsg4[3],
            expose: false,
            delay: 5000,
          },
          {
            sel: $("#burnerOn4"),
            position: "n",
            content: helpMsg4[4],
            expose: false,
            delay: 5000,
          },
        ]);
        trip.start();
        window.trip = trip;
      }
    } else if (testIndex1 == 1 && helpX == 2 && helpcount3 == 4) {
      //alert(inferenceForPage4V + "  inferenceForPage4V")
      // if (inferenceForPage4V == 1) {
      // 	//alert(inferenceForPage4V + "  inferenceForPage4V")
      // 	trip = new Trip([
      // 		{
      // 			sel: $('#inferenceForPage4'),
      // 			position: 'n',
      // 			content: "inferenceForPage4",
      // 			expose: false,
      // 			delay: 5000
      // 		},
      // 		{
      // 			sel: $('#burnerOn4'),
      // 			position: 'n',
      // 			content: helpMsg4[4],
      // 			expose: false,
      // 			delay: 5000
      // 		}
      // 	]);
      // 	trip.start();
      // 	window.trip = trip;
      // } else {
      //alert(21)
      trip = new Trip([
        {
          sel: $("#burnerOn4"),
          position: "n",
          content: helpMsg4[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
      // }
    } else if (inferenceForPage4V == 1) {
      //alert(inferenceForPage4V + "  inferenceForPage4V")
      trip = new Trip([
        {
          sel: $("#inferenceForPage4"),
          position: "n",
          content: gt.gettext("Click on the Inference button"),
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn4"),
          position: "n",
          content: helpMsg4[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 2 && helpX == 2 && helpcount4 == 0) {
      // Pottasium dichromate
      //alert(222)
      trip = new Trip([
        {
          sel: $("#orangeDropperDiv"),
          position: "n",
          content: helpMsg5[0],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#dropper5Div"),
          position: "n",
          content: helpMsg5[1],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube5"),
          position: "n",
          content: helpMsg5[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff5"),
          position: "n",
          content: helpMsg5[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn5"),
          position: "n",
          content: helpMsg5[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 2 && helpX == 2 && helpcount4 == 1) {
      //alert(22)
      trip = new Trip([
        {
          sel: $("#dropper5Div"),
          position: "n",
          content: helpMsg5[1],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#glassTube5"),
          position: "n",
          content: helpMsg5[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff5"),
          position: "n",
          content: helpMsg5[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn5"),
          position: "n",
          content: helpMsg5[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 2 && helpX == 2 && helpcount4 == 2) {
      //alert(23)
      trip = new Trip([
        {
          sel: $("#glassTube5"),
          position: "n",
          content: helpMsg5[2],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOff5"),
          position: "n",
          content: helpMsg5[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn5"),
          position: "n",
          content: helpMsg5[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 2 && helpX == 2 && helpcount4 == 3) {
      //alert(24)
      trip = new Trip([
        {
          sel: $("#burnerOff5"),
          position: "n",
          content: helpMsg5[3],
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn5"),
          position: "n",
          content: helpMsg5[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    } else if (testIndex1 == 2 && helpX == 2 && helpcount4 == 4) {
      //alert(25)
      trip = new Trip([
        {
          sel: $("#burnerOn5"),
          position: "n",
          content: helpMsg5[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
      //alert(inferenceForPage5V + "  inferenceForPage5V")
    } else if (inferenceForPage5V == 1) {
      //alert(inferenceForPage5V + "  inferenceForPage5V")
      trip = new Trip([
        {
          sel: $("#inferenceForPage5"),
          position: "n",
          content: gt.gettext("Click on the Inference button"),
          expose: false,
          delay: 5000,
        },
        {
          sel: $("#burnerOn5"),
          position: "n",
          content: helpMsg4[4],
          expose: false,
          delay: 5000,
        },
      ]);
      trip.start();
      window.trip = trip;
    }
  });

  $("#inference").bind("click", function () {
    //alert("inference")
    helpcount = 10;
    trip = new Trip([
      {
        sel: $("#inference"),
        position: "e",
        content: inferenceText,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });

  $("#inferenceForColor").bind("click", function () {
    //alert("inferenceForColor")
    trip = new Trip([
      {
        sel: $("#inferenceForColor"),
        position: "e",
        content: inferenceForColorText,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });

  $("#inferenceForSolubility").bind("click", function () {
    //alert("inferenceForSolubility")
    trip = new Trip([
      {
        sel: $("#inferenceForSolubility"),
        position: "e",
        content: inferenceForSolubilityText,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });

  $("#inferenceForAcid").bind("click", function () {
    inferenceForAcid2V = 11;
    //alert("inferenceForAcid")
    trip = new Trip([
      {
        sel: $("#inferenceForAcid"),
        position: "e",
        content: inferenceForAcidText,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });

  $("#inferenceForAcid2").bind("click", function () {
    //alert("inferenceForAcid2")
    trip = new Trip([
      {
        sel: $("#inferenceForAcid2"),
        position: "e",
        content: inferenceForAcid2Text,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });

  $("#inferenceForPage4").bind("click", function () {
    //alert("inferenceForPage4")
    trip = new Trip([
      {
        sel: $("#inferenceForPage4"),
        position: "e",
        content: inferenceForPage4Text,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });

  $("#inferenceForPage5").bind("click", function () {
    //alert("inferenceForPage5")
    trip = new Trip([
      {
        sel: $("#inferenceForPage5"),
        position: "e",
        content: inferenceForPage5Text,
        expose: false,
        delay: 5000,
      },
    ]);

    trip.start();
    window.trip = trip;
  });
});
