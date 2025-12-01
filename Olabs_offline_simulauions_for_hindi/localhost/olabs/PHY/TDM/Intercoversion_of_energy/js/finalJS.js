var forcepDrag1; var forcepDrag2; var forcepDrag3;
var ricePest; var wheatPest; var chickpeaPest;
function final(){
  removeTrip();
  $("#forceps").css('cursor', 'pointer');
  $("#drop1").css({ 'display': 'block' });
  $("#forceps").draggable({ containment: "#bg" },  //dragging forceps to Beaker A
  {
    revert: function () {
      if (!forcepDrag1) {
        setTimeout(function () {
          $("#forceps").css({ top: 71 + '%', left: 11 + '%', height: 19 + '%', width: 20 + '%' })
        },600);
        return true
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#drop1").droppable({  //dropping on cont.A
    accept: "#forceps",
    drop: function () {
      help=20;
      forcepDrag1 = true;
      $("#forceps").css({ top: 8 + '%', left: 20 + '%', width: 15 + '%' })
      $("#forceps").css({ 'display': 'none' });
      $("#forcepRice").css({ 'display': 'block' });
      $("#forcepRice").animate({ top: -10 + '%' }, function () {
        $("#forcepRice").animate({ top: 23 + '%',left: 21 + '%' },'linear');
      })
      setTimeout(function(){
        $("#forcepRice,#drop1").css({ 'display': 'none' });
        setTimeout(function(){
          $("#forcepRicePest").css({ 'display': 'block' });
          setTimeout(function(){
            $("#forcepRicePest").animate({ top: 2 + '%',left: 16 + '%' }, function () {
              $("#forcepRicePest").animate({ top: -50 + '%',left: 16 + '%' },'linear');
              $("#forcepRicePest").css('cursor', 'pointer');
              $("#drop4").css({ 'display': 'block' });
              $("#forcepRicePest").draggable({containment: "#bg" },  //dragging forceps with rice pest to water slide
              {  
                revert: function () {
                  if (!ricePest) {
                    setTimeout(function () {
                      $("#forcepRicePest").css({ top: -50 + '%', left: 16 + '%', height: 51 + '%', width: 73 + '%' })
                    },600);
                    return true
                  }
                },
                drag: function () {
                  removeTrip();
                }
              });
              $("#drop4").droppable({  //dropping on cont.A
                accept: "#forcepRicePest",
                drop: function () {
                  help=21;
                  ricePest = true;
                  $("#forcepRicePest").css({ top: 104 + '%', left: 316 + '%'})
                  $("#forcepRicePest").css({ 'display': 'none' });
                  $("#forcepAfrRice,#pest1gls").css({ 'display': 'block' });
                  $("#forcepAfrRice").animate({ top: 73 + '%', left: 7 + '%', width: 19 + '%',height: 20 + '%'});
                  $("#lens").css('cursor', 'pointer');
                  $("#lens").click(function(){
                    help=22;
                    removeTrip();
                    $("#lens").css('cursor', 'default');
                    $("#glassDiv,#forcepAfrRice,#lens,#scn3Bkr1Div,#scn3Bkr2Div,#scn3Bkr3Div").css({ 'display': 'none' });
                    $("#ZoomPest1").css({ 'display': 'block' });
                    $("#ZoomPest1").css('cursor', 'pointer');
                    $("#ZoomPest1").click(function(){
                      help=23;
                      removeTrip();
                      $("#lens").off("click");
                      $("#pest1gls,#ZoomPest1").css({ 'display': 'none' });
                      $("#glassDiv,#forcepAfrRice,#lens,#scn3Bkr1Div,#scn3Bkr2Div,#scn3Bkr3Div").css({ 'display': 'block' });
                      secBkr()
                    });
                  });
                }
              })
            })
          },30)
        },50)
      },1000)
    }
  })
} 
function secBkr(){
  removeTrip();
  $("#forcepAfrRice").css({'cursor':'pointer'});
  $("#drop2").css({ 'display': 'block' });
  $("#forcepAfrRice").draggable({containment: "#bg" },  //dragging forceps to Beaker B
  {  
    revert: function () {
      if (!forcepDrag2) {
        setTimeout(function () {
          $("#forcepAfrRice").css({ top: 71 + '%', left: 11 + '%', height: 19 + '%', width: 20 + '%' })
        },600);
        return true
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#drop2").droppable({  //dropping on cont.A
    accept: "#forcepAfrRice",
    drop: function () {
      help=24;
      forcepDrag2 = true;
      $("#forcepAfrRice").css({ top: 3 + '%', left: 48 + '%', width: 15 + '%' })
      $("#forcepAfrRice").css({ 'display': 'none' });
      $("#forcepWheat").css({ 'display': 'block' });
      $("#forcepWheat").animate({ top: -3 + '%',left: 18 +'%' }, function () {
        $("#forcepWheat").animate({ top: 24 + '%',left: 18 + '%' },'linear');
        setTimeout(function(){
          $("#forcepWheat,#drop2").css({ 'display': 'none' });
          $("#forcepWheatPest").css({ 'display': 'block' });
          setTimeout(function(){
            $("#forcepWheatPest").animate({ top: 3 + '%',left: 16 + '%' }, function () {
              $("#forcepWheatPest").animate({ top: -46 + '%',left: 16 + '%' },'linear');
              $("#forcepWheatPest").css('cursor', 'pointer');
              $("#forcepWheatPest").draggable({ containment: "#bg" }, //dragging forceps with wheat pest to water slide
              { 
                revert: function () {
                  if (!wheatPest) {
                    setTimeout(function () {
                      $("#forcepWheatPest").css({ top: -50 + '%', left: 16 + '%', height: 51 + '%', width: 73 + '%' })
                    },600);
                    return true
                  }
                },
                drag: function () {
                  removeTrip();
                }
              });
              $("#drop4").droppable({  //dropping on waterslide
                accept: "#forcepWheatPest",
                drop: function () {
                  help=25;
                  wheatPest = true;
                  $("#forcepWheatPest").css({ top: 100 + '%', left: 194 + '%'})
                  $("#forcepWheatPest").css({ 'display': 'none' });
                  $("#forcepAfrWheat,#pest2gls").css({ 'display': 'block' });
                  $("#forcepAfrWheat").animate({ top: 73 + '%', left: 7 + '%', width: 19 + '%',height: 20 + '%'});
                  $("#lens").css({'cursor':'pointer'});
                  $("#lens").on("click");
                  $("#lens").click(function(){
                    help=26;
                    removeTrip();
                    $("#lens").css('cursor', 'default');
                    $("#glassDiv,#forcepAfrWheat,#lens,#scn3Bkr1Div,#scn3Bkr2Div,#scn3Bkr3Div").css({ 'display': 'none' });
                    $("#ZoomPest2").css({ 'display': 'block' });
                    $("#ZoomPest2").css('cursor', 'pointer');
                    $("#ZoomPest2").click(function(){
                      help=27;
                      removeTrip();
                      $("#lens").off("click");
                      $("#pest2gls,#ZoomPest2").css({ 'display': 'none' });
                      $("#glassDiv,#forcepAfrWheat,#lens,#scn3Bkr1Div,#scn3Bkr2Div,#scn3Bkr3Div").css({ 'display': 'block' });
                      thrdBkr()
                    });
                  });
                }
              })
            })
          },500);
        },1000);
      })
    }
  })
}

function thrdBkr(){
  removeTrip();
  $("#forcepAfrWheat").css({'cursor':'pointer'});
  $("#drop3").css({ 'display': 'block' });
  $("#forcepAfrWheat").draggable({ containment: "#bg" }, //dragging forceps to Beaker C
  {
    revert: function () {
      if (!forcepDrag3) {
        setTimeout(function () {
          $("#forcepAfrWheat").css({ top: 71 + '%', left: 11 + '%', height: 19 + '%', width: 20 + '%' })
        },600);
        return true
      }
    },
    drag: function () {
      removeTrip();
    }
  });
  $("#drop3").droppable({  //dropping on cont.C
    accept: "#forcepAfrWheat",
    drop: function () {
      help=28;
      forcepDrag3 = true;
      $("#forcepAfrWheat").css({ top: 4 + '%', left: 71 + '%', width: 15 + '%' })
      $("#forcepAfrWheat").css({ 'display': 'none' });
      $("#forcepChickpea").css({ 'display': 'block' });
      $("#forcepChickpea").animate({ top: -9 + '%',left: 18 +'%' }, function () {
        $("#forcepChickpea").animate({ top: 23 + '%',left: 18 + '%' },'linear');
        setTimeout(function(){
          $("#forcepChickpea,#drop3").css({ 'display': 'none' });
          $("#forcepChickpeaPest").css({ 'display': 'block' });
          setTimeout(function(){
            $("#forcepChickpeaPest").animate({ top: 5 + '%',left: 16 + '%' }, function () {
              $("#forcepChickpeaPest").animate({ top: -49 + '%',left: 16 + '%' },'linear');
              $("#forcepChickpeaPest").css('cursor', 'pointer');
              $("#forcepChickpeaPest").draggable({ containment: "#bg" },  //dragging forceps with chickpea pest to water slide
              {
                revert: function () {
                  if (!chickpeaPest) {
                    setTimeout(function () {
                      $("#forcepChickpeaPest").css({ top: -50 + '%', left: 16 + '%', height: 51 + '%', width: 73 + '%' })
                    },600);
                    return true
                  }
                },
                drag: function () {
                  removeTrip();
                }
              });
              $("#drop4").droppable({  //dropping on waterslide
                accept: "#forcepChickpeaPest",
                drop: function () {
                  help=29;
                  chickpeaPest = true;
                  $("#forcepChickpeaPest").css({ top: 100 + '%', left: 76 + '%'})
                  $("#forcepChickpeaPest").css({ 'display': 'none' });
                  $("#forcepAfrCp,#pest3gls").css({ 'display': 'block' });
                  $("#forcepAfrCp").animate({ top: 73 + '%', left: 7 + '%', width: 19 + '%',height: 20 + '%'});
                  $("#lens").css({'cursor':'pointer'});
                  $("#lens").on("click");
                  $("#lens").click(function(){
                    help=30;
                    removeTrip();
                    $("#lens").css('cursor', 'default');
                    $("#glassDiv,#forcepAfrCp,#lens,#scn3Bkr1Div,#scn3Bkr2Div,#scn3Bkr3Div").css({ 'display': 'none' });
                    $("#ZoomPest3").css({ 'display': 'block' });
                    $("#ZoomPest3").css('cursor', 'pointer');
                    $("#ZoomPest3").click(function(){
                      help=31;
                      removeTrip();
                      $("#lens").off("click");
                      $("#pest3gls,#ZoomPest3").css({ 'display': 'none' });
                      $("#glassDiv,#forcepAfrCp,#lens,#scn3Bkr1Div,#scn3Bkr2Div,#scn3Bkr3Div,#noteDiv").css({ 'display': 'block' });
                    });
                  })
                }
              })
            })
          },500)
        },1000);
      })
    }
  })
}