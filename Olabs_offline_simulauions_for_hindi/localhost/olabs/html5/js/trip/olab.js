(function ($) {
    /* ------------------------------------
         Enable and Disable Pointer
         $(<selector>).pointerDisable()
        eg : $("#id").pointerDisable();
    ----------------------------------------*/

    $.fn.pointerDisable = function () {
        this.css({ "pointer-events": "none" });
        return this;
    };
    $.fn.pointerEnable = function () {
        this.css({ "pointer-events": "" });
        this.css({ "cursor": "pointer" });
        return this;
    };

    /*------------  Enable and Disable Pointer END --------*/




    /* ------------------------------------------------------------
         Rotation animation for the element
         $(<selector>).rotateIt(<angle>,<time in milli seconds>)
        eg : $("#id").rotateIt(90,1000);
    ------------------------------------------------------------*/
    $.fn.rotateIt = function (deg, time, callback) {
        this.animate({ deg: deg },
            {
                duration: time,
                step: function (now) {
                    $(this).css({ transform: 'rotate(' + now + 'deg)' });
                }
            }, function () {
                if (typeof callback === 'function') {
                    return callback()
                }
            });
        return this;
    };

    /*--------  Rotation animation for the element  END ------------*/



    /* ------------------------------------------------------------
           Shake animation in X-Axis  for the element
           $(<selector>).shakeX()
          eg : $("#id").shakeX();
      ------------------------------------------------------------*/
    $.fn.shakeX = function (currentXposition, shakeValue, duration, count) {
        var div = this
        var left1 = currentXposition - shakeValue;
        var left2 = currentXposition + shakeValue
        count = count * 2;
        if (count != 0 || count != "undefined") {
            var xx = 0;
            var interval = setInterval(function () {
                console.log({ xx: xx, count: count });
                if (xx == 0) {
                    xx++;
                    div.animate({
                        left: left1 + "%"
                    }, duration);
                } else if (xx == 1) {
                    xx++;
                    div.animate({
                        left: currentXposition + "%"
                    }, duration);
                } else if (xx == 2) {
                    xx++;
                    div.animate({
                        left: left2 + "%"
                    }, duration);
                    xx = 0;
                }
                count--;
                if (count == 0) {
                    clearInterval(interval);
                }
            }, duration)
        } else {
            console.error(this + " Please provide a count shakeX(currentXPosition,shakeValue,duration,Count)")
        }



        this.animate
        return this;
    };
    /* ----  Shake animation in X-Axis for the element END----------------------*/






    /* ------------------------------------------------------------
            Shake animation Arc shaped : mainly for testubes
            $(<selector>).shakeArc(<deg>,<duratiin>,<count>)
           eg : $("#id").shakeArc(10,100,10);
       ------------------------------------------------------------*/

    $.fn.shakeArc = function (deg, duration, count, callback) {
        var $selector = this;
        if (count == 0 || count == "undefined") {
            count = 1;
        }
        if (duration == 0 || duration == "undefined") {
            duration = 100;
        }
        console.log({ duration: duration, count: count })
        count = count * 3;
        var totalTime = duration * count

        var variable = true;
        var interval = setInterval(function () {
            variable = !variable;
            if (variable) {
                $selector.rotateIt(deg);
            } else {
                $selector.rotateIt(-deg);
            }
            count--;
            if (count == 0) {
                $selector.rotateIt(0);
                clearInterval(interval);
            }
        }, duration);

        setTimeout(function () {
            console.log("hiii " + totalTime)
            if (typeof callback === 'function') {
                return callback()
            }

        }, totalTime);

        return this;
    }

    /* -------Shake animation Arc shaped : mainly for testubes ---------*/






    $.fn.frameAnimate = function (speed, times, callback) {
        var div = this
        var length = div.children().length

        var i = 0;

        if (speed <= 100 || speed == "undefined") {
            speed = 100;
        }
        if (times <= 0 || times == "undefined") {
            times = 1;
        }
        if (length > 0) {
            div.children().eq(0).show()
            console.log("0 show");

            var interval = setInterval(function () {
                div.children().eq(i).hide()
                console.log(i + " hide");
                i++;
                if (i >= length) {
                    times--;

                    i = 0;
                }


                if (times == 0) {
                    clearInterval(interval);
                    if (typeof callback === 'function') {
                        return callback()
                    }
                } else {
                    div.children().eq(i).show()
                    console.log(i + " show");
                }


            }, speed);

        } else {
            console.error(this + " having no children");
        }
        return this;
    }

}(jQuery));