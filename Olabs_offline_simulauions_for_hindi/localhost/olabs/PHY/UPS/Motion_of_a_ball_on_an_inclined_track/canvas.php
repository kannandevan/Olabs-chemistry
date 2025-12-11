<div id="mainDiv">
    
    <!-- <div id="clickButton2"></div> -->
    <img id="bg" src="<?php getSimPath(); ?>images/BG.png"/>
    <img id="inference" src="<?php getSimPath(); ?>images/Inference.png"/>
    <img id="inference2" src="<?php getSimPath(); ?>images/Inference.png"/>
    <input type="button" value="NEXT" id="next_btn" class="btn btn-primary">
      <div id="subDiv1">
        <img id="bendSurface" src="<?php getSimPath(); ?>images/bend.png"/>
        <div id="clickButton"></div>
        <div id="metronome">
          <img id="metrUnder" src="<?php getSimPath(); ?>images/METRONOME UNDER.png"/>
          <div id="needleDiv">
            <img id="metrNeedle" src="<?php getSimPath(); ?>images/NEEDLE.png"/>
            <img id="metrAdjust" src="<?php getSimPath(); ?>images/NEEDLE ADJUST.png"/>
          </div>
          <img id="metrTop" src="<?php getSimPath(); ?>images/METRONOME TOP.png"/>
        </div>
        <div id="ball" >
          <img id="ballShadow" src="<?php getSimPath(); ?>images/BALL SHADOW.png"/>
          <img id="yellowBall" src="<?php getSimPath(); ?>images/ball.png"/>          
        </div>
        <div id="label1Div">
            <img id="label" src="<?php getSimPath(); ?>images/BOARD2.png"/>
            <p class="nametag1">Metronome</p>
        </div>
        <audio id="metronomeSound"  preload="auto">
          <source src="<?php getSimPath(); ?>/Beep.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <img id="redMark2sec" src="<?php getSimPath(); ?>images/red.png"/>
        <img id="redMark4sec" src="<?php getSimPath(); ?>images/red.png"/>
        <img id="redMark6sec" src="<?php getSimPath(); ?>images/red.png"/>
        <img id="redMark8sec" src="<?php getSimPath(); ?>images/red.png"/>
        <img id="redMark0sec" src="<?php getSimPath(); ?>images/red.png"/>
        <div id="warning1">
          <img id="alert1" src="<?php getSimPath(); ?>images/alert.png"/>
          <p class="msg1">Please Click on the Red button on the metronome corresponding to its beep sound.</p>
        </div>
        <!-- <div id="timerDiv">
          <img id="timer3" src="<?php getSimPath(); ?>images/TIMER 3.png"/>
          <img id="timer2" src="<?php getSimPath(); ?>images/TIMER 2.png"/>
          <img id="timer1" src="<?php getSimPath(); ?>images/TIMER 1.png"/>
        </div> -->
        <div class="timer" id="timer"></div>
        <div class="scaleDiv">
          <img id="b1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="b11">0</p>
          <!-- <img id="s1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="b2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="b21">4</p>
          <!-- <img id="s4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="b3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="b31">16</p>
          <!-- <img id="s7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="b4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="b41">36</p>
          <!-- <img id="s11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="s14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="b5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="b51">64</p>
        </div>
    </div>

    <div id="subDiv3">
      <img id="bendSurface3" src="<?php getSimPath(); ?>images/bend.png"/>
      <div id="clickButton3"></div>
      <div id="metronome3"> 
        <img id="metrUnder40" src="<?php getSimPath(); ?>images/METRONOME UNDER.png"/>
        <div id="needleDiv40">
          <img id="metrNeedle40" src="<?php getSimPath(); ?>images/NEEDLE.png"/>
          <img id="metrAdjust40" src="<?php getSimPath(); ?>images/NEEDLE ADJUST.png"/>
        </div>
        <img id="metrTop40" src="<?php getSimPath(); ?>images/METRONOME TOP.png"/>
      </div>
      <img id="ball3" src="<?php getSimPath(); ?>images/ball.png"/>
      <div id="label3Div">
        <img id="label3" src="<?php getSimPath(); ?>images/BOARD2.png"/>
        <p class="nametag3">Metronome</p>
      </div>
      <audio id="metronomeSound3"  preload="auto">
        <source src="<?php getSimPath(); ?>/Metronome40Sec.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <img id="blackMark0sec" src="<?php getSimPath(); ?>images/black.png"/>
      <img id="blackMark06sec" src="<?php getSimPath(); ?>images/black.png"/>
      <img id="blackMark12sec" src="<?php getSimPath(); ?>images/black.png"/>
      <img id="blackMark18sec" src="<?php getSimPath(); ?>images/black.png"/>
      <img id="blackMark24sec" src="<?php getSimPath(); ?>images/black.png"/>
      <div id="warning3">
        <img id="alert3" src="<?php getSimPath(); ?>images/alert.png"/>
        <p class="msg3">Please Click on the Red button on the metronome corresponding to its beep sound.</p>
      </div>
      <div class="scaleDiv40">
          <img id="_40Big1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40reading1">0</p>
          <!-- <img id="_40Small1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Big2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40reading2">2.25</p>
          <!-- <img id="_40Small4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Big3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40reading3">9</p>
          <!-- <img id="_40Small7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Big4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40reading4">20.25</p>
          <!-- <img id="_40Small11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Small14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Big5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40reading5">36</p>
        </div>
    </div>

    <div id="subDiv4">
      <img id="bendSurface4" src="<?php getSimPath(); ?>images/bend.png"/>
      <div id="clickButton4"></div>
      <div id="metronome4">
        <img id="metrUnder50" src="<?php getSimPath(); ?>images/METRONOME UNDER.png"/>
          <div id="needleDiv50">
            <img id="metrNeedle50" src="<?php getSimPath(); ?>images/NEEDLE.png"/>
            <img id="metrAdjust50" src="<?php getSimPath(); ?>images/NEEDLE ADJUST.png"/>
          </div>
        <img id="metrTop50" src="<?php getSimPath(); ?>images/METRONOME TOP.png"/>
      </div>
      <img id="ball4" src="<?php getSimPath(); ?>images/ball.png"/>
      <div id="label4Div">
        <img id="label4" src="<?php getSimPath(); ?>images/BOARD2.png"/>
        <p class="nametag4">Metronome</p>
      </div>
      <audio id="metronomeSound4"  preload="auto">
        <source src="<?php getSimPath(); ?>/Metronome50Sec.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <img id="red2Mark0sec" src="<?php getSimPath(); ?>images/red.png"/>
      <img id="red2Mark5sec" src="<?php getSimPath(); ?>images/red.png"/>
      <img id="red2Mark1sec" src="<?php getSimPath(); ?>images/red.png"/>
      <img id="red2Mark15sec" src="<?php getSimPath(); ?>images/red.png"/>
      <img id="red2Mark2sec" src="<?php getSimPath(); ?>images/red.png"/>
      <div id="warning4">
        <img id="alert4" src="<?php getSimPath(); ?>images/alert.png"/>
        <p class="msg4">Please Click on the Red button on the metronome corresponding to its beep sound.</p>
      </div>
      <div class="scaleDiv50">
          <img id="_50Big1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50reading1">0</p>
          <!-- <img id="_50Small1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Big2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50reading2">1.44</p>
          <!-- <img id="_50Small4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Big3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50reading3">5.76</p>
          <!-- <img id="_50Small7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Big4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50reading4">12.96</p>
          <!-- <img id="_50Small11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Small14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Big5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50reading5">23.04</p>
        </div>
    </div>

    <div id="subDiv2">
      <img id="bendSurface2" src="<?php getSimPath(); ?>images/bend.png"/>
      <div id="clickButton2"></div>
      <div id="metronome2">
        <img id="metrUnder60" src="<?php getSimPath(); ?>images/METRONOME UNDER.png"/>
          <div id="needleDiv60">
            <img id="metrNeedle60" src="<?php getSimPath(); ?>images/NEEDLE.png"/>
            <img id="metrAdjust60" src="<?php getSimPath(); ?>images/NEEDLE ADJUST.png"/>
          </div>
        <img id="metrTop60" src="<?php getSimPath(); ?>images/METRONOME TOP.png"/>
      </div>
      <img id="ball2" src="<?php getSimPath(); ?>images/ball.png"/>
      <div id="label2Div">
        <img id="label2" src="<?php getSimPath(); ?>images/BOARD2.png"/>
        <p class="nametag2">Metronome</p>
      </div>
      <audio id="metronomeSound2"  preload="auto">
        <source src="<?php getSimPath(); ?>/Metronome60Sec.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <img id="greenMark0sec" src="<?php getSimPath(); ?>images/green.png"/>
      <img id="greenMark1sec" src="<?php getSimPath(); ?>images/green.png"/>
      <img id="greenMark2sec" src="<?php getSimPath(); ?>images/green.png"/>
      <img id="greenMark3sec" src="<?php getSimPath(); ?>images/green.png"/>
      <img id="greenMark4sec" src="<?php getSimPath(); ?>images/green.png"/>
      <div id="warning2">
        <img id="alert2" src="<?php getSimPath(); ?>images/alert.png"/>
        <p class="msg2">Please Click on the Red button on the metronome corresponding to its beep sound.</p>
      </div>
      <div class="scaleDiv60">
          <img id="_60Big1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60reading1">0</p>
          <!-- <img id="_60Small1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Big2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60reading2">1</p>
          <!-- <img id="_60Small4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Big3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60reading3">4</p>
          <!-- <img id="_60Small7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Big4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60reading4">9</p>
          <!-- <img id="_60Small11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Small14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Big5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60reading5">16</p>
        </div>
    </div>

  <!-- .......................................2nd Page(Light strobe).................................................. -->
  <div id="subDiv5">
    <img id="bendSurface5" src="<?php getSimPath(); ?>images/bend.png"/>
    <img id="ball5" src="<?php getSimPath(); ?>images/ball.png"/>
    <div id="buttonLight1"></div>
    <img id="strobeLight1On" src="<?php getSimPath(); ?>images/strobe-light-on.png"/>
    <img id="strobeLight1Off" src="<?php getSimPath(); ?>images/strobe-light-off.png"/>
    <div id="label5Div">
      <img id="label5" src="<?php getSimPath(); ?>images/BOARD2.png"/>
      <p class="nametag5">Strobe Light</p>
    </div>
    <div id="warning5">
      <img id="alert5" src="<?php getSimPath(); ?>images/alert.png"/>
      <p class="msg5">Please Click on the Red button on the Strobe light corresponding to light beam.</p>
    </div>
    <img id="Light30red0" src="<?php getSimPath(); ?>images/red.png"/>
    <img id="Light30red2" src="<?php getSimPath(); ?>images/red.png"/>
    <img id="Light30red4" src="<?php getSimPath(); ?>images/red.png"/>
    <img id="Light30red6" src="<?php getSimPath(); ?>images/red.png"/>
    <img id="Light30red8" src="<?php getSimPath(); ?>images/red.png"/>
    <div class="lightDiv30">
          <img id="_30Bigl1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_30readingr1">0</p>
          <!-- <img id="_30Smalls1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_30Bigl2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_30readingr2">4</p>
          <!-- <img id="_30Smalls4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_30Bigl3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_30readingr3">16</p>
          <!-- <img id="_30Smalls7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_30Bigl4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_30readingr4">36</p>
          <!-- <img id="_30Smalls11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_30Smalls14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_30Bigl5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_30readingr5">64</p>
        </div>
  </div>

  <div id="subDiv6">
    <div id="divForhelp1"></div>
    <img id="bendSurface6" src="<?php getSimPath(); ?>images/bend.png"/>
    <img id="ball6" src="<?php getSimPath(); ?>images/ball.png"/>
      <div id="buttonLight2"></div>
    <img id="strobeLight2On" src="<?php getSimPath(); ?>images/strobe-light-on.png"/>
    <img id="strobeLight2Off" src="<?php getSimPath(); ?>images/strobe-light-off.png"/>
    <div id="label6Div">
      <img id="label6" src="<?php getSimPath(); ?>images/BOARD2.png"/>
      <p class="nametag6">Strobe Light</p>
    </div>
    <div id="warning6">
      <img id="alert6" src="<?php getSimPath(); ?>images/alert.png"/>
      <p class="msg6">Please Click on the Red button on the Strobe light corresponding to light beam.</p>
    </div>
    <img id="Light40black0" src="<?php getSimPath(); ?>images/black.png"/>
    <img id="Light40black15" src="<?php getSimPath(); ?>images/black.png"/>
    <img id="Light40black3" src="<?php getSimPath(); ?>images/black.png"/>
    <img id="Light40black45" src="<?php getSimPath(); ?>images/black.png"/>
    <img id="Light40black6" src="<?php getSimPath(); ?>images/black.png"/>
    <div class="lightDiv40">
          <img id="_40Bigl1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40readingr1">0</p>
          <!-- <img id="_40Smalls1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Bigl2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40readingr2">2.5</p>
          <!-- <img id="_40Smalls4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Bigl3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40readingr3">9</p>
          <!-- <img id="_40Smalls7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Bigl4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40readingr4">20.25</p>
          <!-- <img id="_40Smalls11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_40Smalls14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_40Bigl5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_40readingr5">36</p>
        </div>
  </div>

  <div id="subDiv7">
  <div id="divForhelp2"></div>
    <img id="bendSurface7" src="<?php getSimPath(); ?>images/bend.png"/>
    <img id="ball7" src="<?php getSimPath(); ?>images/ball.png"/>
    <div id="buttonLight3"></div>
    <img id="strobeLight3On" src="<?php getSimPath(); ?>images/strobe-light-on.png"/>
    <img id="strobeLight3Off" src="<?php getSimPath(); ?>images/strobe-light-off.png"/>
    <div id="label7Div">
      <img id="label7" src="<?php getSimPath(); ?>images/BOARD2.png"/>
      <p class="nametag7">Strobe Light</p>
    </div>
    <div id="warning7">
      <img id="alert7" src="<?php getSimPath(); ?>images/alert.png"/>
      <p class="msg7">Please Click on the Red button on the Strobe light corresponding to light beam.</p>
    </div>
    <img id="Light50green0" src="<?php getSimPath(); ?>images/green.png"/>
    <img id="Light50green12" src="<?php getSimPath(); ?>images/green.png"/>
    <img id="Light50green24" src="<?php getSimPath(); ?>images/green.png"/>
    <img id="Light50green36" src="<?php getSimPath(); ?>images/green.png"/>
    <img id="Light50green48" src="<?php getSimPath(); ?>images/green.png"/>

    <div class="lightDiv50">
          <img id="_50Bigl1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50readingr1">0</p>
          <!-- <img id="_50Smalls1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Bigl2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50readingr2">1.44</p>
          <!-- <img id="_50Smalls4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Bigl3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50readingr3">5.76</p>
          <!-- <img id="_50Smalls7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Bigl4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50readingr4">12.96</p>
          <!-- <img id="_50Smalls11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_50Smalls14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_50Bigl5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_50readingr5">23.04</p>
        </div>
  </div>

  <div id="subDiv8">
  <div id="divForhelp3"></div>
    <img id="bendSurface8" src="<?php getSimPath(); ?>images/bend.png"/>
    <img id="ball8" src="<?php getSimPath(); ?>images/ball.png"/>
    <div id="buttonLight4"></div>
    <img id="strobeLight4On" src="<?php getSimPath(); ?>images/strobe-light-on.png"/>
    <img id="strobeLight4Off" src="<?php getSimPath(); ?>images/strobe-light-off.png"/>
    <div id="label8Div">
      <img id="label8" src="<?php getSimPath(); ?>images/BOARD2.png"/>
      <p class="nametag8">Strobe Light</p>
    </div>
    <div id="warning8">
      <img id="alert8" src="<?php getSimPath(); ?>images/alert.png"/>
      <p class="msg8">Please Click on the Red button on the Strobe light corresponding to light beam.</p>
    </div>
    <img id="Light60pink0" src="<?php getSimPath(); ?>images/pink.png"/>
    <img id="Light60pink1" src="<?php getSimPath(); ?>images/pink.png"/>
    <img id="Light60pink2" src="<?php getSimPath(); ?>images/pink.png"/>
    <img id="Light60pink3" src="<?php getSimPath(); ?>images/pink.png"/>
    <img id="Light60pink4" src="<?php getSimPath(); ?>images/pink.png"/>

    <div class="lightDiv60">
          <img id="_60Bigl1" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60readingr1">0</p>
          <!-- <img id="_60Smalls1" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls2" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls3" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Bigl2" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60readingr2">1</p>
          <!-- <img id="_60Smalls4" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls5" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls6" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Bigl3" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60readingr3">4</p>
          <!-- <img id="_60Smalls7" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls8" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls9" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls10" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Bigl4" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60readingr4">9</p>
          <!-- <img id="_60Smalls11" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls12" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls13" src="<?php getSimPath(); ?>images/LINE SMALL.png"/>
          <img id="_60Smalls14" src="<?php getSimPath(); ?>images/LINE SMALL.png"/> -->
          <img id="_60Bigl5" src="<?php getSimPath(); ?>images/LINE BIG.png"/>
          <p class="_60readingr5">16</p>
        </div>
  </div>



</div>
