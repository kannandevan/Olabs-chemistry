var drag, drag1, drag2, drag3;
var drag4, drag5, drag6, drag7;
var drag8, drag9, drag10,drag11;
var drag12, drag13, drag14, drag15;
var drag16, drag17, drag18, drag19;
var drag20, drag21, drag22;

var help; 
//helpCount = 0;
var helpMsg;
var theInference;

var ImageArrayRotate = ["../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0001.png",
  "../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0002.png",
  "../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0003.png",
  "../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0004.png",
  "../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0005.png",
  "../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0006.png",
  "../CHE/ANC/To_prepare_aniline_yellow/images/RotateAni/Rotate0007.png"]



$(window).on('load',function() {
  ImageInitLoad(ImageArrayRotate, "rotateAni", "rotateId", "newrotateAni");
});

$(document).ready(function () {
  gt = new Gettext({ 'domain': 'messages' });
  document.getElementById("expName").innerHTML = gt.gettext("Preparation of Aniline yellow");
  $('#olabmenuBar li:first-child a').html(gt.gettext("HELP"));
  
  
  $('#reset').html(gt.gettext("Reset"));
    $('#resetfig2').html(gt.gettext("Reset"));
      $('#resetfig3').html(gt.gettext("Reset"));


  helpMsg = [gt.gettext('Drag and drop the dropper containing<br>10 mL HCl into the measuring cylinder'),
    gt.gettext('Drag and drop the measuring cylinder<br> into beaker containing water'),
    gt.gettext('Drag and drop the dropper<br> containing 4.5 mL aniline<br> into the measuring cylinder'),
    gt.gettext('Drag and drop the measuring cylinder<br> into the beaker containing HCl and water'),
    gt.gettext('Click the glass rod<br> inside the beaker to stir<br> and get a clear solution'),
    gt.gettext('Drag and drop the beaker<br> into the ice bath'),
    gt.gettext('Drag and drop <br>the thermometer<br> into ice bath'),
    gt.gettext('Click on the Inference button'), 
    gt.gettext('Click on the Next button'),
    gt.gettext('Drag and drop the butter paper containing<br>4g sodium nitrite powder in the beaker'),
    gt.gettext('Click on the glass rod placed<br> in the beaker to stir constantly'),
    gt.gettext('Drag and drop the beaker into ice bath'),
    gt.gettext('Drag and drop the Mixture solution<br>(HCl and aniline with water) into the beaker<br> containing sodium nitrite solution'),
    gt.gettext('Drag and drop glass rod into<br> the solution beaker to stir'),
    gt.gettext('Drag and drop the dropper containing<br> 4 mL aniline into the measuring cylinder'),
    gt.gettext('Drag and drop the measuring<br> cylinder into empty beaker'),
    gt.gettext('Drag and drop the dropper containing<br> 4 mL HCl into the measuring cylinder'),
    gt.gettext('Drag and drop the measuring<br> cylinder into the aniline beaker'),
    gt.gettext('Drag benzene diazonium chloride<br> solution from 5 <sup>o</sup>C ice bath and drop<br> it in the HCl and aniline beaker'),
    gt.gettext('Drag and drop glass rod<br> into the solution beaker for<br> stirring to get a yellow color'),
    gt.gettext('Drag and drop the beaker<br> containing solution<br> into the ice bath'),
    gt.gettext('Click on the Inference button'),   
    gt.gettext('Click on the Next button'),
    gt.gettext('Drag and drop folded paper into the funnel'),
    gt.gettext('Drag and drop the beaker containing<br> crude sample into the funnel to filter it'),
    gt.gettext('Drag and drop the paper containing<br> the dry compound into the beaker'),
    gt.gettext('Drag and drop CCl<sub>4</sub> dropper into the<br> beaker containing the crude sample'),
    gt.gettext('Drag and drop the end-closed<br> capillary into the beaker'), 
    gt.gettext('Switch ON the <br>melting point apparatus'),
    gt.gettext('Switch ON the Rapid <br>heat to the melting<br> point apparatus'), 
    gt.gettext('Drag and drop the capillary tube<br> into the melting point apparatus'),
    gt.gettext('Drag and drop the thermometer<br> into the melting point apparatus'), 
    gt.gettext('Click variable heat into the<br> melting point apparatus'),
    gt.gettext('Click the yellow light glass view<br> into the melting point apparatus'),
    gt.gettext('Click on the Inference button'),   
    gt.gettext('Click on the Reset button to do the experiment again')];

  theInference = [gt.gettext('The HCl and aniline beaker in the ice bath is at 5 <sup>o</sup>C.'),
    gt.gettext('Solution get yellow color<br> Ar-N=N-NH-Ar → Ar-N=N-Ar-NH<sub>2</sub>'),
    gt.gettext('120<sup>o</sup>C to 130<sup>o</sup>C: Melting yellow liquid at<br> this temperature; see in zoom view.')];

      $('[data-translate]').html(function (index, originalHtml) {
        console.log(originalHtml);
        return gt.gettext(originalHtml);
  });

	$('[data-translate-value]').val(function (index, originalHtml) {
		console.log(originalHtml)
		return gt.gettext(originalHtml);
	});

  help = 0;
  removeTrip();
  hclDrop();

  figure2();
  figure3();

  $("#reset,#resetfig2,#resetfig3").click(function () {
    window.location.reload();
  });
});

function hclDrop() {
  $("#dropperWithHCLLiq").draggable({ containment: "#bg" },
    {
      revert: function () {
        if (!drag) {
          return true
        }
      }
    });
  $("#cyldropHCLAnil").droppable({
    accept: "#dropperWithHCLLiq",
    drop: function () {
      drag = true;
      $("#dropperWithHCLLiq").css({ top: 25 + '%', left: 57.1 + '%' });
      setTimeout(function () {
        drag = false;
      }, 100)

      for (i = 0; i < 3; i++) {
        $("#drop1").show();
        $("#drop1").animate({ top: 290 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#drop1").animate({ top: 198 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#drop1").hide();
        }, 800)
        $("#waterInJarDropbeak").fadeIn();
        $("#dropperLiquidHCL").fadeOut();
        setTimeout(function () {
          $("#dropperWithHCLLiq").animate({ top: 39 + '%', left: 71.8 + '%' });
          setTimeout(function () {
            $("#dropperLiquidHCL").fadeIn();
          }, 500);
          $("#dropperWithHCLLiq").css('pointer-events', 'none');
        }, 1000);
      }
      setTimeout(function () {
        help = 1;
        removeTrip();
        $("#cylinderwaterInJar").css('cursor', 'pointer');
        $("#cylinderwaterInJar").draggable({ containment: "#bg" },
          {
            revert: function () {
              if (!drag1) {
                return true
              }
            }
          });
        $("#beakcyldropHCLAnil").droppable({
          accept: "#cylinderwaterInJar",
          drop: function () {
            drag1 = true;
            $("#cylinderwaterInJar").css({ top: 30 + '%', left: 50 + '%' });

            $("#cylinderwaterInJar").css('pointer-events', 'none');
            setTimeout(function () {
              drag1 = false;
            }, 100)
            $('#cylinderwaterInJar').animate({ deg: -90 },
              {
                duration: 2500,
                step: function (now) {
                  $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
              });
            $("#waterInJarDropbeak").delay(500).fadeOut(500);
            $("#hclV").fadeIn();
            $("#hclV").delay(500).fadeOut(1000);

            setTimeout(function () {
              for (i = 0; i < 3; i++) {
                $("#pourline").show();
                $("#pourline").animate({ top: 60 + '%', opacity: "1" }, 300, 'linear');
                $("#pourline").animate({ top: 40 + '%', opacity: "0" }, 0, 'linear');
                $("#pourline").animate({ top: 40 + '%', opacity: "0" }, 0, 'linear');
                $("#pourline").animate({ opacity: "0" }, 0, 'linear');
                $("#waterInJar").delay(500).fadeOut(1000);
                $("#waterInJarHCL").delay(500).fadeIn(1000);
                $('#cylinderwaterInJar').animate({ deg: 0 },
                  {
                    duration: 1500,
                    step: function (now) {
                      $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                  });
                $('#cylinderwaterInJar').animate({ top: 61 + '%', left: 58.3 + '%' });
                $("#cylinderwaterInJar").css('pointer-events', 'none');
                setTimeout(function () {
                  $("#cylinderwaterInJar").hide();
                  $("#cylinderwaterInJarAnil,#cylinderDropBeakAnil").show();
                  help = 2;
                  removeTrip();
                  anilineDrop();
                }, 3500)
              }
            }, 1000)
          }
        })
      }, 2000)
    }
  })
}
function anilineDrop() {

  $("#dropperWithAniliLiq").css('cursor', 'pointer');
  $("#dropperWithAniliLiq").draggable({ containment: "#bg" },
    {
      revert: function () {
        if (!drag) {
          return true
        }
      }
    });
  $("#cyldropHCLAnil").droppable({
    accept: "#dropperWithAniliLiq",
    drop: function () {
      drag = true;
      $("#dropperWithAniliLiq").css({ top: 25 + '%', left: 57.5 + '%' });
      setTimeout(function () {
        drag = false;
      }, 100)

      for (i = 0; i < 3; i++) {
        $("#dropA").show();
        $("#dropA").animate({ top: 290 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#dropA").animate({ top: 200 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#dropA").hide();
        }, 800)
        $("#waterInJarDropbeakAnil").fadeIn();
        $("#dropperLiquidAniline").fadeOut();
        setTimeout(function () {
          $("#dropperWithAniliLiq").animate({ top: 39 + '%', left: 84.5 + '%' });

          setTimeout(function () {
            $("#dropperLiquidAniline").fadeIn();
          }, 500);
          $("#dropperWithAniliLiq").css('pointer-events', 'none');
        }, 1000);
      }
      setTimeout(function () {
        help = 3;
        removeTrip();
        $("#cylinderwaterInJarAnil").css('cursor', 'pointer');
        $("#cylinderwaterInJarAnil").draggable({ containment: "#bg" },
          {
            revert: function () {
              if (!drag1) {
                return true
              }
            }
          });
        $("#beakcyldropHCLAnil").droppable({
          accept: "#cylinderwaterInJarAnil",
          drop: function () {
            drag1 = true;
            $("#cylinderwaterInJarAnil").css({ top: 30 + '%', left: 50 + '%' });
            $("#cylinderwaterInJarAnil").css('pointer-events', 'none');
            setTimeout(function () {
              drag1 = false;
            }, 100)
            $('#cylinderwaterInJarAnil').animate({ deg: -90 },
              {
                duration: 2500,
                step: function (now) {
                  $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
              });
            $("#waterInJarDropbeakAnil").delay(500).fadeOut(500);
            $("#anilV").fadeIn();
            $("#anilV").delay(500).fadeOut(1000);
            setTimeout(function () {
              for (j = 0; j < 4; j++) {
                $("#pourlineA").show();
                $("#pourlineA").animate({ top: 60 + '%', opacity: "1" }, 300, 'linear');
                $("#pourlineA").animate({ top: 40 + '%', opacity: "0" }, 0, 'linear');
                $("#pourlineA").animate({ top: 40 + '%', opacity: "0" }, 0, 'linear');
                $("#pourlineA").animate({ opacity: "0" }, 0, 'linear');

                $("#waterInJarHCL").delay(500).fadeOut(1000);
                $("#waterInJarAni").delay(500).fadeIn(1000);

                $('#cylinderwaterInJarAnil').animate({ deg: 0 },
                  {
                    duration: 1500,
                    step: function (now) {
                      $(this).css({ transform: 'rotate(' + now + 'deg)' });
                    }
                  });
                $('#cylinderwaterInJarAnil').animate({ top: 61 + '%', left: 57.4 + '%' });
                $("#cylinderwaterInJarAnil").css('pointer-events', 'none');
                $("#beakcyldropHCLAnil").hide();
                setTimeout(function () {
                  help = 4;
                  removeTrip();
                  $("#glasstube").css('cursor', 'pointer');
                  $("#glasstube").click(function () {
                    $("#glasstube").css({ left: 12 + 'px', top: -25 + 'px', transform: 'rotate(' + 0 + 'deg)' });
                    rodanimate();
                    $("#waterInJarAni").delay(2000).fadeOut(2000);
                    $("#waterInJarClr").delay(2000).fadeIn(2000);
                    setTimeout(function () {
                      $("#glasstube").hide();
                    }, 4000)
                    setTimeout(function () {
                      help = 5;
                      removeTrip();
                      beakerIceBath();
                    }, 3200)
                  });
                }, 3500)
              }
            }, 1000)
          }
        })
      }, 2000);
    }
  })
}
function beakerIceBath() {
  setTimeout(function () {
    $("#beakerwithHA").css('cursor', 'pointer');
    $("#beakerwithHA ").draggable({ containment: "#bg" },
      {
        revert: function () {
          if (!drag2) {
            return true
          }
        }
      });
    $("#beakcyldropHCLAnilineIce").droppable({
      accept: "#beakerwithHA",
      drop: function () {
        drag2 = true;
        $("#beakerwithHA").css({ top: 51 + '%', left: 8 + '%' });
        $("#beakerwithHA").css('pointer-events', 'none');
        help = 6;
        removeTrip();
        thermometer();
        setTimeout(function () {
          drag2 = false;
        }, 100)
      }
    })
  }, 2500)
}
function thermometer() {
  $("#thermometerH").show();
  $("#thermometerH").css('cursor', 'pointer');
  $("#thermometerH").draggable({ containment: "#bg" },
    {
      revert: function () {
        if (!drag3) {
          return true
        }
      }
    });
  $("#beakcyldropHCLAnilineIce").droppable({
    accept: "#thermometerH",
    drop: function () {
      drag3 = true;
      $("#thermometer").show();
      $("#thermometerH").hide();
      $("#thermometer").css({ top: 44 + '%', height: 31 + '%', left: 15 + '%', transform: 'rotate(' + 25 + 'deg)' });
      $("#thermometer").css('pointer-events', 'none');
      setTimeout(function () {
        drag3 = false;
      }, 100)
      help = 7;
      removeTrip();
      inference();
    }
  })
}

function butterPaperSodi() {
  $("#butterpaperly").hide();
  $("#butterpapsodiumnit").css('cursor', 'pointer');
  $("#butterpapsodiumnit").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag4) {
          return true
        }
      }
    });
  $("#sodiumnitdrop").droppable({
    accept: "#butterpapsodiumnit",
    drop: function () {
      drag4 = true;
      $("#butterpaperly").show();
      $("#butterpaperly").css({ top: 49 + '%', height: 10 + '%', width: 10 + '%', left: 40 + '%', transform: 'rotate(' + 358 + 'deg)' });
      $("#butterpapsodiumnit").hide();
      setTimeout(function () {
        $("#butterpaperly").hide();
        $("#salt").hide();
        $("#butterpapsodiumnit").css({ top: 49 + '%', height: 10 + '%', width: 10 + '%', left: 40 + '%' }).show();
        $("#saltinbeak").fadeIn();
        setTimeout(function () {
          $("#butterpapsodiumnit").animate({ top: 85 + '%', left: 46 + '%' });
        }, 500)
      }, 800)
      help = 10;
      removeTrip();
      $("#glasstubefig2").css('cursor', 'pointer');
      $("#glasstubefig2").click(function () {
        $("#glasstubefig2").css({ left: 12 + 'px', top: -25 + 'px', transform: 'rotate(' + 0 + 'deg)' });
        rodanimatefig2();
        $("#saltinbeak").delay(2500).fadeOut(2500);
        setTimeout(function () {
          $("#glasstubefig2").hide();
          sodiumnitbeakdrop()
        }, 4500)
        $("#butterpapsodiumnit").css('pointer-events', 'none');
        help = 11;
        removeTrip();
      });
      setTimeout(function () {
        drag4 = false;
      }, 100)
      for (k = 0; k < 2; k++) {
        $("#powderpour").show();
        $("#powderpour").animate({ top: 215 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#powderpour").animate({ top: 198 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#salt").fadeOut();
          $("#powderpour").fadeOut();
          $("#sodiumnitdrop").hide();
        }, 800)
      }
    }
  })
}
function sodiumnitbeakdrop() {
  $("#beakcyldropsolIce").show();
  $("#beakWat").css('cursor', 'pointer');
  $("#beakWat").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag5) {
          return true
        }
      }
    });
  $("#beakcyldropsolIce").droppable({
    accept: "#beakWat",
    drop: function () {
      drag5 = true;
      $("#beakWat").css({ top: 52 + '%', left: 17.5 + '%' });
      $("#beakWat").css('pointer-events', 'none');
      $("#Note").show();
      setTimeout(function () {
        drag5 = false;
      }, 100)
      help = 12;
      removeTrip();
      setTimeout(function () {
        tabledrop();
      }, 500)
    }
  })
}
function tabledrop() {
  $("#beakcyldropsolIce").hide();
  $("#icebeakerwithsol").css('cursor', 'pointer');
  $("#icebeakerwithsol").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag6) {
          return true
        }
      }, drag: function () { $("#Note").hide(); }
    });
  $("#sodibeakdropice").droppable({
    accept: "#icebeakerwithsol",
    drop: function () {
      drag6 = true;
      $("#icebeakerwithsol").css({ top: 24 + '%', left: 10 + '%', transform: 'rotate(' + 90 + 'deg)' });
      $("#icebeakerwithsol").css('pointer-events', 'none');
      setTimeout(function () {
        drag6 = false;
      }, 100)
      $("#waterInJarClrFig2").fadeOut(500);
      $("#anilLeftV").fadeIn(500);
      for (l = 0; l < 3; l++) {
        $("#dropfig2").show();
        $("#dropfig2").animate({ top: 120 + "px", opacity: "0.7", direction: "up" }, 300, 'linear');
        $("#dropfig2").animate({ top: 172 + "px", opacity: "0.7", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#dropfig2").hide();
          $("#anilLeftV").fadeOut(500);
          $("#beakerDisWat1").fadeOut(500);
          $("#Anilinesolicebek").fadeIn(500);
          setTimeout(function () {
            $("#icebeakerwithsol").animate({ top: 64 + '%', left: 33 + '%' });
            $("#icebeakerwithsol").css({ transform: 'rotate(' + 0 + 'deg)' }).show();
          }, 500)
          help = 13;
          removeTrip();
          glasstubeAni();
        }, 1000)
      }
    }
  })
}
function glasstubeAni() {
  $("#sodibeakdropice").hide();
  $("#glasstubeforstand").css('cursor', 'pointer');
  $("#glasstubeforstand").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag7) {
          return true
        }
      }
    });
  $("#glasstubedrop").droppable({
    accept: "#glasstubeforstand",
    drop: function () {
      drag7 = true;
      $("#glasstubeforstand").css({ top: -112 + '%', left: -509 + '%', height: 137 + '%' });
      $("#glasstubeforstand").css('pointer-events', 'none');
      setTimeout(function () {
        drag7 = false;
      }, 100)
      rodanimateicebeak();
      $("#glasstubeforstand").animate({ top: -49 + '%', left: 46 + '%' });
      setTimeout(function () {
        $("#Anilinesolicebek").delay(500).fadeOut(1500);
        $("#Note2").show();
        $("#bdcsol").delay(500).fadeIn(1500);
      }, 500)
      setTimeout(function () {
        help = 14;
        removeTrip();
        Anildropfi2();
      }, 5500)
    }
  })
}
function Anildropfi2() {
  $("#dropperWithAniliLiqfi2").css('cursor', 'pointer');
  $("#dropperWithAniliLiqfi2").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag8) {
          return true
        }
      }, drag: function () { $("#Note2").hide(); }
    });
  $("#cyldropHCLAnilfig2").droppable({
    accept: "#dropperWithAniliLiqfi2",
    drop: function () {
      drag8 = true;
      $("#dropperWithAniliLiqfi2").css({ top: 35 + '%', left: 58.4 + '%' });
      $("#dropperWithAniliLiqfi2").css('pointer-events', 'none');
      setTimeout(function () {
        drag8 = false;
      }, 100)
      for (q = 0; q < 4; q++) {
        $("#dropAfig2").show();
        $("#dropAfig2").animate({ top: 290 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#dropAfig2").animate({ top: 198 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#dropAfig2").hide();
        }, 800)
        $("#dropperLiquidAnilinefig2").fadeOut();
        setTimeout(function () {
          $("#waterInJarDropbeakAnilfig2").fadeIn();
        }, 200);
        setTimeout(function () {
          $("#dropperWithAniliLiqfi2").animate({ top: 54 + '%', left: 66.7 + '%' });
          $("#dropperLiquidAnilinefig2").delay(500).fadeIn(500);
        }, 1000);
        $("#dropperWithAniliLiqfi2").css('pointer-events', 'none');
        setTimeout(function () {
          help = 15;
          removeTrip();
          anilcyldropbeak();
        }, 1000);
      }
    }
  })
}
function anilcyldropbeak() {
  $("#droperfig2").show();
  $("#cylinderwaterInJarAnilfig2").css('cursor', 'pointer');
  $("#cylinderwaterInJarAnilfig2").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag9) {
          return true
        }
      }
    });
  $("#droperfig2").droppable({
    accept: "#cylinderwaterInJarAnilfig2",
    drop: function () {
      drag9 = true;
      $("#cylinderwaterInJarAnilfig2").css({ top: 40 + '%', left: 45 + '%' });
      $("#cylinderwaterInJarAnilfig2").css('pointer-events', 'none');
      setTimeout(function () {
        drag9 = false;
      }, 100)
      $('#cylinderwaterInJarAnilfig2').animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        });
      $("#anilVfig2").fadeIn();
      $("#waterInJarDropbeakAnilfig2").delay(500).fadeOut(500);
      setTimeout(function () {
        for (o = 0; o < 4; o++) {
          $("#dropAfig2beak").show();
          $("#dropAfig2beak").animate({ top: 249 + "px", opacity: "1", direction: "up" }, 300, 'linear');
          $("#dropAfig2beak").animate({ top: 194 + "px", opacity: "1", direction: "down" }, 0, 'linear');
          setTimeout(function () {
            $("#dropAfig2beak").hide();
          }, 800)
          $("#anilVfig2").delay(400).fadeOut(500);
          $("#Anilinesolfig2beak").fadeIn();
          $('#cylinderwaterInJarAnilfig2').animate({ deg: 0 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            });
          $('#cylinderwaterInJarAnilfig2').animate({ top: 61 + '%', left: 58.4 + '%' });
          $("#cylinderwaterInJarAnilfig2").css('pointer-events', 'none');
          setTimeout(function () {
            $("#cylinderwaterInJarAnilfig2").hide();
          }, 2500)
          setTimeout(function () {
            $("#cylinderwaterInJarHclfig2").show();
          }, 2500)
        }
      }, 1000)
      setTimeout(function () {
        help = 16;
        removeTrip();
        hcldropfi2();
      }, 2800)
    }
  })
}
function hcldropfi2() {
  $("#dropperWithHclLiqfi2").css('cursor', 'pointer');
  $("#dropperWithHclLiqfi2").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag10) {
          return true
        }
      }
    });
  $("#cyldropHCLAnilfig2").droppable({
    accept: "#dropperWithHclLiqfi2",
    drop: function () {
      drag10 = true;
      $("#dropperWithHclLiqfi2").css({ top: 35 + '%', left: 58 + '%' });
      $("#dropperWithHclLiqfi2").css('pointer-events', 'none');
      setTimeout(function () {
        drag10 = false;
      }, 100)
      for (p = 0; p < 4; p++) {
        $("#dropHclfig2").show();
        $("#dropHclfig2").animate({ top: 287 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#dropHclfig2").animate({ top: 200 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#dropHclfig2").hide();
        }, 500)
        $("#dropperLiquidHclfig2").fadeOut();
        setTimeout(function () {
          $("#cylinderDropHclfig2").fadeIn();
        }, 200);
        setTimeout(function () {
          $("#dropperWithHclLiqfi2").animate({ top: 54 + '%', left: 76.3 + '%' });
          $("#dropperLiquidHclfig2").delay(500).fadeIn(500);
        }, 1000);
        $("#dropperWithHclLiqfi2").css('pointer-events', 'none');
        setTimeout(function () {
          help = 17;
          removeTrip();
          hclcyldropbeak();
        }, 1000);
      }
    }
  })
}
function hclcyldropbeak() {
  $("#cylinderwaterInJarHclfig2").css('cursor', 'pointer');
  $("#cylinderwaterInJarHclfig2").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag11) {
          return true
        }
      }
    });
  $("#droperfig2").droppable({
    accept: "#cylinderwaterInJarHclfig2",
    drop: function () {
      drag11 = true;
      $("#cylinderwaterInJarHclfig2").css({ top: 40 + '%', left: 45 + '%' });
      $("#cylinderwaterInJarHclfig2").css('pointer-events', 'none');
      setTimeout(function () {
        drag11 = false;
      }, 100)
      $('#cylinderwaterInJarHclfig2').animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        });
      $("#hclVfig2").fadeIn();
      $("#cylinderDropHclfig2").delay(500).fadeOut(500);
      setTimeout(function () {
        for (o = 0; o < 4; o++) {
          $("#dropHclfig2beak").show();
          $("#dropHclfig2beak").animate({ top: 247 + "px", opacity: "1", direction: "up" }, 300, 'linear');
          $("#dropHclfig2beak").animate({ top: 194 + "px", opacity: "1", direction: "down" }, 0, 'linear');
          setTimeout(function () {
            $("#dropHclfig2beak").hide();
          }, 800)
          $("#hclVfig2,#Anilinesolfig2beak").delay(400).fadeOut(500);
          $("#waterInJarDropbeakHclfig2").fadeIn();
          $('#cylinderwaterInJarHclfig2').animate({ deg: 0 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            });
          $('#cylinderwaterInJarHclfig2').animate({ top: 61 + '%', left: 58.4 + '%' });
          $("#cylinderwaterInJarHclfig2").css('pointer-events', 'none');
          setTimeout(function () {
            help = 18;
            removeTrip();
            iceBenSol();
          }, 2000)
        }
      }, 1000)
    }
  })
}
function iceBenSol() {
  $("#beakWat").css('pointer-events', '');
  $("#beakWat").css('cursor', 'pointer');
  $("#beakWat").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag12) {
          return true
        }
      }
    });
  $("#droperfig2").droppable({
    accept: "#beakWat",
    drop: function () {
      drag12 = true;
      $("#beakWat").css({ top: 37 + '%', left: 27 + '%' });
      $("#beakWat").css('pointer-events', 'none');
      setTimeout(function () {
        drag12 = false;
      }, 100)
      $('#beakWat').animate({ deg: 90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        });
      $("#benSolVerti").fadeIn();
      $("#bdcsol").delay(500).fadeOut(500);
      setTimeout(function () {
        for (o = 0; o < 4; o++) {
          $("#dropbenfig2beak").show();
          $("#dropbenfig2beak").animate({ top: 247 + "px", opacity: "1", direction: "up" }, 300, 'linear');
          $("#dropbenfig2beak").animate({ top: 194 + "px", opacity: "1", direction: "down" }, 0, 'linear');
          setTimeout(function () {
            $("#dropbenfig2beak").hide();
          }, 800)
          $("#benSolVerti,#waterInJarDropbeakHclfig2").delay(400).fadeOut();
          $("#bdcsolbeak").fadeIn();
          $('#beakWat').animate({ deg: 0 },
            {
              duration: 1500,
              step: function (now) {
                $(this).css({ transform: 'rotate(' + now + 'deg)' });
              }
            });
          $('#beakWat').animate({ top: 63 + '%', left: 46.4 + '%' });
          $("#beakWat").css('pointer-events', 'none');
        }
        setTimeout(function () {
          help = 19;
          removeTrip();
          glasstubeBenSol();
        }, 2000)
      }, 1000)
    }
  })
}
function glasstubeBenSol() {
  $("#glasstubeforstand").hide();
  $("#glasstubeforstandBen").show();
  $("#glasstubeforstandBen").css('cursor', 'pointer');
  $("#glasstubeforstandBen").draggable({ containment: "#bg1" },
    {
      revert: function () {
        if (!drag13) {
          return true
        }
      }
    });
  $("#droperfig2").droppable({
    accept: "#glasstubeforstandBen",
    drop: function () {
      drag13 = true;
      $("#glasstubeforstandBen").css({ top: -39 + '%', left: -393 + '%', height: 137 + '%' });
      $("#glasstubeforstandBen").css('pointer-events', 'none');
      setTimeout(function () {
        drag13 = false;
      }, 100)
      rodanimateBenbeak();
      $("#glasstubeforstandBen").animate({ top: -49 + '%', left: 46 + '%' });
      setTimeout(function () {
        $("#Yellowsolfig2beak").delay(800).fadeIn(1500);
        $("#bdcsolbeak").delay(1000).fadeOut(1000);
      }, 500)
      $("#beakcyldropsolIce").show();
      setTimeout(function () {
        help = 20;
        removeTrip();
        $("#icebeakerwithsol").css('pointer-events', '');
        $("#icebeakerwithsol").css('cursor', 'pointer');
        $("#icebeakerwithsol").draggable({ containment: "#bg1" },
          {
            revert: function () {
              if (!drag14) {
                return true
              }
            }
          });
        $("#beakcyldropsolIce").droppable({
          accept: "#icebeakerwithsol",
          drop: function () {
            drag14 = true;
            $("#icebeakerwithsol").css({ top: 51 + '%', left: 12 + '%' });
            $("#icebeakerwithsol").css('pointer-events', 'none');
            setTimeout(function () {
              drag14 = false;
            }, 100)
            help = 21;
            removeTrip();
            inferencefig2();
          }
        })
      }, 5000)
    }
  })
}

function paper() {
  $("#butterpaperflat").css('cursor', 'pointer');
  $("#butterpaperflat").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag16) {
          return true
        }
      }
    });
  $("#funnelDrop").droppable({
    accept: "#butterpaperflat",
    drop: function () {
      drag16 = true;
      $("#butterpaperflat").css({ top: 46 + '%', left: 20.5 + '%', transform: 'rotate(' + 360 + 'deg)' });
      $("#butterpaperflat").css('pointer-events', 'none');
      setTimeout(function () {
        drag16 = false;
      }, 100)
      help = 24;
      removeTrip();
      yelloSolDropFunl();

    }
  })
}
function yelloSolDropFunl() {
  $("#yellowSol").css('cursor', 'pointer');
  $("#yellowSol").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag17) {
          return true
        }
      }
    });
  $("#funnelDrop").droppable({
    accept: "#yellowSol",
    drop: function () {
      drag17 = true;
      $("#yellowSol").css({ top: 8 + '%', width: 14 + '%', height: 30 + '%', left: 23 + '%' });
      $("#yellowSol").css('pointer-events', 'none');
      setTimeout(function () {
        drag17 = false;
      }, 100)
      $('#yellowSol').animate({ deg: -90 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        });
      $("#yellowFig2").delay(200).fadeOut(1000);
      $("#anilVfig3").delay(200).fadeIn(800);
      setTimeout(function () {
        for (o = 0; o < 4; o++) {
          $("#yellowpour").show();
          $("#yellowpour").animate({ top: 132 + "px", opacity: "1", direction: "up" }, 300, 'linear');
          $("#yellowpour").animate({ top: 111 + "px", opacity: "1", direction: "down" }, 0, 'linear');
          setTimeout(function () {
            $("#anilVfig3").fadeOut();
            $("#yellowpour").hide();
            $("#butterpaperflat").hide();
            $("#butterpaperflatyellow").show();
          }, 800)
        }
      }, 1000)
      $('#yellowSol').animate({ deg: 0 },
        {
          duration: 1500,
          step: function (now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        });
      $('#yellowSol').animate({ top: 54 + '%', left: 33 + '%' });
      $("#yellowSol").css('pointer-events', 'none');
      setTimeout(function () {
        help = 25;
        removeTrip();
        flatYellowPaper();
      }, 4500)
    }
  })
}
function flatYellowPaper() {
  $("#butterpaperflatyellow").animate({ top: 87 + '%', left: 42 + '%' });
  setTimeout(function () {
    $("#butterpaperflatyellow").hide();
  }, 500)
  setTimeout(function () {
    $("#butterpaperYellow").show();
  }, 500)
  yellowPowder();
}
function yellowPowder() {
  $("butterpaperYelloly").hide();
  $("#butterpaperYellow").css('cursor', 'pointer');
  $("#butterpaperYellow").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag18) {
          return true
        }
      }
    });
  $("#beakerDrop").droppable({
    accept: "#butterpaperYellow",
    drop: function () {
      drag18 = true;
      $("#butterpaperYelloly").show();
      $("#butterpaperYelloly").css({ top: 35 + '%', left: 40 + '%' });
      $("#butterpaperYellow").hide();

      setTimeout(function () {
        $("#paperlyyellow").hide();
        $("#yellowsamp,#butterpaperlyyellow").hide();
        $("#butterpaperYellow").show();
        $("#butterpaperYellow").css({ top: 30 + '%', left: 40 + '%' }).show();
        setTimeout(function () {
          $("#butterpaperYellow").animate({ top: 85 + '%', left: 46 + '%' });
          $("#butterpaperYellow").css('pointer-events', 'none');
        }, 500)
      }, 800)
      setTimeout(function () {
        drag18 = false;
      }, 100)
      for (k = 0; k < 4; k++) {
        $("#yellowpowderpour").show();
        $("#yellowpowderpour").animate({ top: 200 + "px", opacity: "1", direction: "up" }, 300, 'linear');
        $("#yellowpowderpour").animate({ top: 155 + "px", opacity: "1", direction: "down" }, 0, 'linear');
        setTimeout(function () {
          $("#yellowsampinbeak").fadeIn();
          $("#yellowpowderpour").hide();
        }, 800)
        setTimeout(function () {
          help = 26;
          removeTrip();
          ccldrop();
        }, 1200)
      }
    }
  });
}
function ccldrop() {
  $("#funnelDrop").hide();
  $("#dropperWithCclLiq").css('cursor', 'pointer');
  $("#dropperWithCclLiq").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag20) {
          return true
        }
      }
    });
  $("#beakerDrop").droppable({
    accept: "#dropperWithCclLiq",
    drop: function () {
      drag20 = true;
      $("#dropperWithCclLiq").css({ top: 22 + '%', left: 36.7 + '%' });
      $("#dropperWithCclLiq").css('pointer-events', 'none');
      setTimeout(function () {
        drag20 = false;
      }, 100)
      for (p = 0; p < 5; p++) {
        $("#dropcclbeak").show();
        $("#dropcclbeak").animate({ top: 72 + "%", opacity: "1", direction: "up" }, 300, 'linear');
        $("#dropcclbeak").animate({ top: 53 + "%", opacity: "1", direction: "down" }, 0, 'linear');
        $("#dropperLiquidCCL").fadeOut();

        setTimeout(function () {
          $("#dropcclbeak").hide();
          $("#dropperWithCclLiq").animate({ top: 34 + '%', left: 5 + '%' });
          $("#Note3").show();
          $("#yellowsampinbeak").fadeOut(2000);
          $("#halfAnilineCcl").fadeIn(2000);
          setTimeout(function () {
            $("#yellowsampinbeak").fadeIn(2000);
            $("#halfAnilineCcl").fadeOut(2000);
          }, 500)
          setTimeout(function () {
            $("#dropperLiquidCCL").fadeIn();
          }, 500)
        }, 500)
      }
      help = 27;
      removeTrip();
      capTube();
    }
  });
}
function capTube() {
  $("#tube").css('cursor', 'pointer');
  $("#tube").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag19) {
          return true
        }
      }, drag: function () { $("#Note3").hide(); }
    });
  $("#capbeakerDrop").droppable({
    accept: "#tube",
    drop: function () {
      drag19 = true;
      $("#tube").css({ top: -15 + '%', left: -86 + '%' });
      $("#tube").css('pointer-events', 'none');
      setTimeout(function () {
        drag19 = false;
      }, 100)
      tubeanimateBenbeak();
      setTimeout(function () {
        $("#tube").hide();
        $("#tubewithyello").show();
      }, 5000)
      setTimeout(function () {
        $("#tubewithyello").css({ top: 62 + '%', left: 58.5 + '%' });
      }, 6000)
      setTimeout(function () {
        help = 28;
        removeTrip();
        meltingPointAppartus();
      }, 6000)
    }
  });
}
function meltingPointAppartus() {
  $("#switchOff").css('cursor', 'pointer');
  $("#switchOff").click(function () {
    $("#switchOff").hide();
    $("#switchOn").show();
    $("#glassLight").show();
    $("#lightOff").hide();
    $("#lightOn").show();
    help = 29;
    removeTrip();
    $("#rapidSwitchOff").css('cursor', 'pointer');
    $("#rapidSwitchOff").click(function () {
      $("#rapidSwitchOff").hide();
      $("#rapidSwitchOn").show();
      help = 30;
      removeTrip();
      $("#tubewithyello").css('cursor', 'pointer');
      $("#tubewithyello").draggable({ containment: "#bg2" },
        {
          revert: function () {
            if (!drag21) {
              return true
            }
          }
        });
      $("#meltingPointAprDiv").droppable({
        accept: "#tubewithyello",
        drop: function () {
          drag21 = true;
          $("#tubewithyello").css({ top: 24 + '%', left: 82.5 + '%' });
          $("#tubewithyello").css('pointer-events', 'none');
          setTimeout(function () {
            drag21 = false;
          }, 100)
          help = 31;
          removeTrip();
          termo();
        }
      });
    });
  });
}
function termo() {
  $("#thermometerHfig3").css('cursor', 'pointer');
  $("#thermometerHfig3").draggable({ containment: "#bg2" },
    {
      revert: function () {
        if (!drag22) {
          return true
        }
      }
    });
  $("#meltingPointAprDiv").droppable({
    accept: "#thermometerHfig3",
    drop: function () {
      drag22 = true;
      $("#thermometerHfig3").css({ top: 25 + '%', left: 75.5 + '%', transform: 'rotate(' + -85 + 'deg)' });
      $("#thermometerHfig3").css('pointer-events', 'none');
      setTimeout(function () {
        drag22 = false;
      }, 100)
      help = 32;
      removeTrip();
      $("#Rotate").css('cursor', 'pointer');
      $("#Rotate").click(function () {
        $("#Rotate").hide();
        $(".rotateAni").show();
        ImageAnimationOneTime("newrotateAni", "rotateId", ImageArrayRotate, -20, 0);
        $("#Rotate5").show();
        $("#thermometerHfig3").hide();
        $("#termo125").show();
        help = 33;
        removeTrip();
        setTimeout(function () {
          $("#glassLight").css('cursor', 'pointer');
          $("#glassLight").click(function () {
            $("#zoom").show();
            $('#glassLight').css('pointer-events', '');
            inferencefig3();
          });
        }, 500)
      });
    }
  });
}
function inference() {
  $("#inference").show();
  // removeTrip();
  $("#inference").css('cursor', 'pointer');
  // removeTrip();
  $("#inference").click(function () {
    // removeTrip();
    setTimeout(function () {
      $("#nextFigure2").fadeIn(300);
      help = 8;
      removeTrip();
    }, 3500)
  });
}
function inferencefig2() {
  $("#inferencefig2").show();
  // removeTrip();
  $("#inferencefig2").css('cursor', 'pointer');
  // removeTrip();
  $("#inferencefig2").click(function () {
    // removeTrip();
    setTimeout(function () {
      $("#nextFigure3").fadeIn(300);
      help = 22;
      removeTrip();
    }, 3500)
  });
}
function inferencefig3() {
  help = 34;
  // removeTrip();
  $("#inferencefig3").show();
  // removeTrip();
  $("#inferencefig3").css('cursor', 'pointer');
  removeTrip();
  $("#inferencefig3").click(function () {
    help = 35;
    // removeTrip();
  });
}

function figure2() {
  $("#nextFigure2").click(function () {
    removeTrip();
    $("#figure1,#reset").hide();
    removeTrip();
    $("#canFigure2").show();
    $("#instrDiv").hide();
    $("#instrDivfig2,#resetfig2").show();
    help = 9;
    removeTrip();
    butterPaperSodi();
  });
}
function figure3() {

  $("#nextFigure3").click(function () {
    removeTrip();
    $("#figure2,#resetfig2").hide();
    removeTrip();
    $("#canFigure3").show();
    $("#instrDivfig2").hide();
    $("#instrDivfig3,#resetfig3").show();
    help = 23;
    removeTrip();
    paper();
  });
}
function rodanimate() {
  $("#glasstube").animate({ top: -25 + "px", left: 10 + "px" }, 600);
  $("#glasstube").animate({ top: -25 + "px", left: 52 + "px" }, 600);
}
function rodanimateicebeak() {
  for (n = 0; n < 5; n++) {
    $("#glasstubeforstand").animate({ top: -67 + "px", left: -358 + "px" }, 600);
    $("#glasstubeforstand").animate({ top: -67 + "px", left: -322 + "px" }, 600);
  }
}
function rodanimateBenbeak() {
  for (n = 0; n < 4; n++) {
    $("#glasstubeforstandBen").animate({ top: -26 + "px", left: -226 + "px" }, 600);
    $("#glasstubeforstandBen").animate({ top: -21 + "px", left: -264 + "px" }, 600);
  }
}
function rodanimatefig2() {
  for (m = 0; m < 3; m++) {
    $("#glasstubefig2").animate({ top: -25 + "px", left: 10 + "px" }, 600);
    $("#glasstubefig2").animate({ top: -25 + "px", left: 48 + "px" }, 600);
  }
}
function tubeanimateBenbeak() {
  for (q = 0; q < 3; q++) {
    $("#tube").animate({ top: -12 + "px" }, 800);
    $("#tube").animate({ top: -60 + "px" }, 800);
  }
}
function removeTrip() {
  if (tripClickFlag == true) {
    $('.trip-block').hide();
    trip.stop();
    tripClickFlag = false;
  }
}

function ImageInitLoad(ANIMATIONImageArray, ANIMATIONDivName, ANIMATIONImageIdName, ANIMATIONImageClassName) {
  for (var ANIMATIONForloop = 0; ANIMATIONForloop < ANIMATIONImageArray.length - 1; ANIMATIONForloop++) {
    var $tempx2 = $("<img src='" + ANIMATIONImageArray[ANIMATIONForloop] + "'/>").attr({ id: ANIMATIONImageIdName + ANIMATIONForloop, class: ANIMATIONImageClassName, display: "none" });
    $("#" + ANIMATIONDivName).append($tempx2);
  }
}
function ImageAnimationOneTime(ANIMATIONImageClassName, ANIMATIONImageIdName, ANIMATIONImageArray, ANIMATIONSpeed, ANIMATIONTimes) {
  var GlobalVariable = 0;
  var ANIMATIONTimesReached = 0;
  var CLEARImageAnimation = setInterval(function () {
    $('#' + ANIMATIONImageIdName + (GlobalVariable - 1)).css({ 'display': 'none' });
    $('#' + ANIMATIONImageIdName + GlobalVariable).css({ 'display': 'block' });
    GlobalVariable++;
    if (GlobalVariable == ANIMATIONImageArray.length - 1) {
      $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
      $('#' + ANIMATIONImageIdName + (0)).css({ 'display': 'block' });
      if (ANIMATIONTimesReached >= ANIMATIONTimes) {
        $('.' + ANIMATIONImageClassName).css({ 'display': 'none' });
        CLEARImageAnimation.clearIntervel();
      }
      else {
        GlobalVariable = 0;
        ANIMATIONTimesReached++;
      }
    }
  }, ANIMATIONSpeed);
}
