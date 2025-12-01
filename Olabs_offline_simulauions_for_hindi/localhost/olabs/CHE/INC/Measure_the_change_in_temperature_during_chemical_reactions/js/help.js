// JavaScript Document
var sceneFlag;
var tripFlag = false;
$(document).ready(function() {
    $('#olabmenuBar li:first-child a').html("HELP");
$('#olabmenuBar li:first-child a').bind('click',function(){
    tripFlag = true;
   

if(pg==0&&hlp==0){
    {
        var trip = new Trip([
        {
                sel : $('.controlsText'),
                position : 'n',
                content : firstpage_hlp[0],
                expose : false,
                delay : 4000
             },
            ]);
        
        }
}
else if(pg==0&&hlp==1){
    {
        var trip = new Trip([
            {
                sel : $('.beaker-1'),
                position : 'n',
                content : firstpage_hlp[1],
                expose : false,
                delay : 4000
            },
            ]);
        
        }
}
else if(pg==0&&hlp==2){
    {
        var trip = new Trip([
            {
                sel : $('.tare_Button'),
                position : 'w',
                content : firstpage_hlp[2],
                expose : false,
                delay : 4000
            },
            ]);
        
        }
}
else if(pg==0&&hlp==3){
    {
        var trip = new Trip([
            {
                    sel : $('.bottle-cap'),
                    position : 'n',
                    content : firstpage_hlp[3],
                    expose : false,
                    delay : 4000
                },
            ]);
        
        }
}
else if(pg==0&&hlp==4){
    {
        var trip = new Trip([
            {
                sel : $('.spatula-1'),
                position : 'n',
                content : firstpage_hlp[4],
                expose : false,
                delay : 4000
                },
            ]);
        
        }
}
else if(pg==0&&hlp==5){
    {
        var trip = new Trip([
            {
                sel : $('.beaker-1'),
                position : 'n',
                content : firstpage_hlp[5],
                expose : false,
                delay : 4000
                },
            ]);
        
        }
}
else if(pg==0&&hlp==6){
    {
        var trip = new Trip([
            {
                sel : $('#Beaker-4Img'),
                position : 'n',
                content : firstpage_hlp[6],
                expose : false,
                delay : 4000
                },
            ]);
        
        }
}
else if(pg==0&&hlp==7){
    {
        var trip = new Trip([
            {
                sel : $('.glass_rod'),
                position : 'n',
                content : firstpage_hlp[7],
                expose : false,
                delay : 4000
                },
            ]);
        
        }
}
else if(pg==0&&hlp==8){
    {
        var trip = new Trip([
            {
                sel : $('#solution2'),
                position : 'n',
                content : firstpage_hlp[0],
                expose : false,
                delay : 4000
                },
            ]);
        
        }
}
else if(pg==0&&hlp==9){
    {
        var trip = new Trip([

            {
                sel : $('#btn_Nxt'),
                position : 'w',
                content : nextbuttonMsg,
                expose : false,
                delay : 4000
                },
            
            ]);
        
        }
}
else if(pg==0&&hlp==10){
    {
        var trip = new Trip([

            {
                sel : $('#btn_Nxt2'),
                position : 'w',
                content : nextbuttonMsg,
                expose : false,
                delay : 4000
                },
            
            ]);
        
        }
}







else if(pg==1&&hlp==0){
  
    {
        var trip = new Trip([
            {
                sel : $('.bgColorDiv'),
                position : 'n',
                content : SecondPage_hlp[0],
                expose : false,
                delay : 4000
                },
            
            ]);
        
        }
}
else if(pg==1&&hlp==1){
   
  
    {
        var trip = new Trip([
            {
                sel : $('.SecondPagebeaker-5'),
                position : 'n',
                content : SecondPage_hlp[1],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}
else if(pg==1&&hlp==2){
   
  
    {
        var trip = new Trip([
            {
                sel : $('#rowa2'),
                position : 'n',
                content : SecondPage_hlp[0],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}
else if(pg==1&&hlp==3){
   
  
    {
        var trip = new Trip([
            {
                sel : $('.glassBottleCap'),
                position : 'n',
                content : SecondPage_hlp[2],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}
else if(pg==1&&hlp==4){
   
  
    {
        var trip = new Trip([
            {
                sel : $('.SecondPagebeaker-4'),
                position : 'n',
                content : SecondPage_hlp[3],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}
else if(pg==2&&hlp==1){
   
 
    {
        var trip = new Trip([   
            {
                sel : $('#theThermometerdiv'),
                position : 'n',
                content : thirdPage_hlp[0],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}else if(pg==2&&hlp==2){
   
 
    {
        var trip = new Trip([   
            {
                sel : $('.FullThermo_meter'),
                position : 'n',
                content : thirdPage_hlp[1],
                expose : false,
                delay : 4000

                
                },
                // {
                //     sel : $('.FullThermo_meter'),
                //     position : 'n',
                //     content : thirdPage_hlp[2],
                //     expose : false,
                //     delay : 4000
    
                    
                //     },
            
            ]);
        
        }
}


// Thermoclick
else if(pg==2&&hlp==87){
   

    {
        var trip = new Trip([   

                {
                    sel : $('.FullThermo_meter'),
                    position : 'n',
                    content : thirdPage_hlp[2],
                    expose : false,
                    delay : 4000
    
                    
                    },
            
            ]);
        
        }
}

// ends
else if(pg==2&&hlp==3){
  
 
    {
        var trip = new Trip([   
            {
                sel : $('.ThirdPagebeaker-1'),
                position : 'n',
                content : thirdPage_hlp[3],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}  
else if(pg==2&&hlp==4){
    
  
     {
         var trip = new Trip([   
             {
                 sel : $('.FullThermo_meter'),
                 position : 'n',
                 content : thirdPage_hlp[0],
                 expose : false,
                 delay : 4000
 
                 
                 },
             
             ]);
         
         }
 }  
 else if(pg==2&&hlp==5){
    
     {
         var trip = new Trip([   
             {
                 sel : $('.FullThermo_meter'),
                 position : 'n',
                 content : thirdPage_hlpHydrohelp,
                 expose : false,
                 delay : 4000
 
                 
                 },
             
             ]);
         
         }
 }  
  
else if(pg==2&&hlp==7){
    
    {
        var trip = new Trip([   
            {
                sel : $('.ThirdpageGlassrod'),
                position : 'n',
                content : thirdPage_hlp[5],
                expose : false,
                delay : 4000

                
                },
            
            ]);
        
        }
}
else if(pg==2&&hlp==8){
    
    {
        var trip = new Trip([   
            {
                sel : $('.FullThermo_meter'),
                position : 'n',
                content : thirdPage_hlpHydrohelp,
                expose : false,
                delay : 4000


                
                },
                // {
                //     sel : $('.FullThermo_meter'),
                //     position : 'n',
                //     content : thirdPage_hlp[1],
                //     expose : false,
                //     delay : 4000
    
                    
                //     },
            
            ]);
        
        }
}
else if(pg==2&&hlp==9){
    
    {
        var trip = new Trip([   
            {
                sel : $('.ThirdPagebeaker-3'),
                position : 'n',
                content : thirdPage_hlp[6],
                expose : false,
                delay : 4000


                
                },
            
            ]);
        
        }
}
else if(pg==2&&hlp==10){
   
    {
        var trip = new Trip([   
            {
                sel : $('.FullThermo_meter'),
                position : 'n',
                content : thirdPage_hlpBariumhelp,
                expose : false,
                delay : 4000


                
                },

            
            ]);
        
        }
}

else if(pg==2&&hlp==12){

    {
        var trip = new Trip([   
            {
                sel : $('.ThirdpageGlassrod'),
                position : 'n',
                content : thirdPage_hlp[8],
                expose : false,
                delay : 4000


                
                },
            
            ]);
        
        }
}
else if(pg==2&&hlp==13){

    {
        var trip = new Trip([   
            {
                sel : $('.FullThermo_meter'),
                position : 'n',
                content : thirdPage_hlpBariumhelp,
                expose : false,
                delay : 4000


                
                },
                
            
            ]);
        
        }
}
else if(pg==4&&hlp==1){

    {
        var trip = new Trip([   
            {
                sel : $('#helpdiv'),
               
                content : help_repeate[0],
                expose : false,
                delay : 4000


                
                },
                
            
            ]);
        
        }
}

else if(pg==9&&hlp==9){

    {
        var trip = new Trip([   
            {
                sel : $('#ResetWindow'),
                position : 'e',
                content : theFinalhelpmsg,
                expose : false,
                delay : 4000


                
                },
                
            
            ]);
        
        }
}

else if(pg==2&&hlp==88){

    {
        var trip = new Trip([   
            {
                sel : $('#the_inferenceButton'),
                position : 'e',
                content : Infrenceclick,
                expose : false,
                delay : 4000


                
                },
                
            
            ]);
        
        }
}
    trip.start(); 
    window.trip = trip;
    });


$('#the_inferenceButton').bind('click',function(){
    $("#temperatureVal").hide();

        if(infs==1){ 
            var trip = new Trip([
            {
                sel : $('.thirdpage-inference'),
                position : 'e',
                content : inference_msg[0],
                expose : false,
                delay : 5000
                },
                
            ], {
            onTripStart : function() {
            },
            onTripEnd : function() {
            },
            onTripStop : function() {
            },
            backToTopWhenEnded : true,
            delay : 2000
            });

            pg = 2;
            hlp = 2;

            }
            else if(infs==2){
                
            {
            
                var trip = new Trip([
        
                {
                    sel : $('.thirdpage-inference'),
                    position : 'e',
                    content : inference_msg[1],
                    expose : false,
                    delay : 4000
                    },
                ], {
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

                pg = 9;
                hlp = 9;
            }
           
    
        trip.start(); 
        window.trip = trip;
        });

    


});






