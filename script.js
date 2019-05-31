$(function() {
    var idCount= 1;

    // HOUR VALIDATE FUNCTION
    var hourValidate = function(){
        var newFromHourId = "#from-hours-"+(idCount);
        var newToHourId = "#to-hours-"+(idCount);

        console.log("New From Hour Id "+newFromHourId);
        console.log("New To Hour Id "+ newToHourId);
        
        // VALIDATES WHEN FROM HOUR IS CHANGED
        $(newFromHourId).change(function(){
            var fromHours = parseInt($(newFromHourId+' option:selected').val(),10);
            var toHours = parseInt($(newToHourId+' option:selected').val(),10); 
            var newFromHours = fromHours+1;
            $(newToHourId+" option[value="+newFromHours+"]").attr("selected",true);

            $(newToHourId+ " option").each(function(){
                if($(this).val() < fromHours){
                    $(this).prop('disabled',true);
                }
                else{
                    $(this).prop('disabled',false);
                }
            });   
        });
    };

    // MINUTE VALIDATE FUNCTION
    var minValidate = function(){
        var newFromHourId = "#from-hours-"+(idCount);
        var newToHourId = "#to-hours-"+(idCount);
        var newFromMinId = "#from-mins-"+(idCount);
        var newToMinId = "#to-mins-"+(idCount);

        // VALIDATES WHEN TO HOUR OR FROM MIN IS CHANGED
        var changeSelector = newToHourId+", "+ newFromHourId + ", "+newFromMinId;
        console.log(changeSelector);
        $(changeSelector).change(function(){
        
            var fromHours = parseInt($(newFromHourId+' option:selected').val(),10);
            var toHours = parseInt($(newToHourId+' option:selected').val(),10);
            var fromMins = parseInt($(newFromMinId+' option:selected').val(),10);
            var toMins = parseInt($(newToMinId+' option:selected').val(),10);
           

            $(newToMinId+ " option").each(function(){
            
                if(fromHours == toHours){
                    console.log("Equal Block");
                    if($(this).val() <= fromMins){
                        $(this).prop('disabled',true);
                        console.log("----------------------------");
                        console.log(toMins)
                        toMins = fromMins+5;
                        console.log("after addition"+toMins);
                        $(newToMinId+" option[value="+toMins+"]").attr("selected",true);
                        
                    }
                    else{
                        $(this).prop('disabled',false);
                    }
                }
                else if(fromHours < toHours){
                    console.log("Greater Block");
                    $(this).prop('disabled',false);
                }
            });
        });
        
    };


    // ON CLICK ON ADD BUTTON
    $(".add-btn").click(function(){
        var currentDay = $(this).data('day');
        var fromDay = ".from-"+currentDay;
        var toDay = ".to-"+$(this).data('day');
    
        console.log("SLOT ADDED FOR: "+fromDay); 
        console.log("SLOT ADDED FOR: "+toDay);       
    
        $(fromDay).append(
            '<div class="from-content">'+
                '<div class="col-sm-1">' +
                '<h6>HOURS</h6>'+
                '<select class="from-hours '+currentDay+'-from-hours '+currentDay+'" id="from-hours-'+idCount+'">' +
                '<option value="10">10</option>' +
                '<option value="11">11</option>'+
                '<option value="12">12</option>'+
                '<option value="13">13</option>' +
                '<option value="14">14</option>' +
                '<option value="15">15</option>'+
                '<option value="16">16</option>'+
                '<option value="17">17</option>'+
                '</select>'+
                '</div>'+    
            
                '<div class="col-sm-1">'+
                '<h6>MINS</h6>'+
                '<select class="from-mins '+currentDay+'-from-mins '+currentDay+'" id="from-mins-'+idCount+'">'+
                '<option value="5">5</option>'+
                '<option value="10">10</option>'+
                '<option value="15">15</option>'+
                '<option value="20">20</option>'+
                '<option value="25">25</option>'+
                '<option value="30">30</option>'+
                '<option value="35">35</option>'+
                '<option value="40">40</option>'+
                '<option value="45">45</option>'+
                '<option value="50">50</option>'+
                '<option value="55">55</option>'+
                '</select>'+
                '</div>'+
            '</div>'
            );


        $(toDay).append(
            '<div class="to-content">'+
                '<div class="col-sm-1">' +
                '<h6>HOURS</h6>'+
                '<select class="to-hours '+currentDay+'-to-hours '+currentDay+'" id="to-hours-'+idCount+'">' +
                '<option value="10">10</option>' +
                '<option value="11">11</option>'+
                '<option value="12">12</option>'+
                '<option value="13">13</option>' +
                '<option value="14">14</option>' +
                '<option value="15">15</option>'+
                '<option value="16">16</option>'+
                '<option value="17">17</option>'+
                '</select>'+
                '</div>'+    
            
                '<div class="col-sm-1">'+
                '<h6>MINS</h6>'+
                '<select class="to-mins '+currentDay+'-to-mins '+currentDay+'" id="to-mins-'+idCount+'">'+
                '<option value="5">5</option>'+
                '<option value="10">10</option>'+
                '<option value="15">15</option>'+
                '<option value="20">20</option>'+
                '<option value="25">25</option>'+
                '<option value="30">30</option>'+
                '<option value="35">35</option>'+
                '<option value="40">40</option>'+
                '<option value="45">45</option>'+
                '<option value="50">50</option>'+
                '<option value="55">55</option>'+
                '</select>'+
                '</div>'+
            '</div>'
            );  
        
        hourValidate();
        minValidate();
        idCount++; 

    });

    function getAndAddData(day){
    h
        var day = day
        var mondayfromhours = [];
        var mondayfrommins =[];
        var mondaytohours =[];
        var mondaytomins =[];
        $(".monday-from-hours").each(function() {
            var response=$(this).val();
            mondayfromhours.push(response);
        });

        $(".monday-from-mins").each(function() {
            var response=$(this).val();
            mondayfrommins.push(response);
        });

        $(".monday-to-hours").each(function() {
            var response=$(this).val();
            mondaytohours.push(response);
        });

        $(".monday-to-mins").each(function() {
            var response=$(this).val();
            mondaytomins.push(response);
        });
    

        for(let i =0; i<mondayfromhours.length; i++){

            var arrayfromhours = mondayfromhours[i];
            var arrayfrommins = mondayfrommins[i];
            var arraytohours = mondaytohours[i];
            var arraytomins = mondaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            
            if(i == mondayfromhours.length-1){
                $(".monday-data").append(slottext + "");
            }
            else{
                $(".monday-data").append(slottext + " , ");
            }

        }

    }


    $(".submit-btn").click(function(){
        $(".monday-data,.tuesday-data, .wednesday-data,  .thursday-data, .friday-data, .saturday-data, .sunday-data").html("");



        // MONDAY
        var mondayfromhours =[];
        var mondayfrommins =[];
        var mondaytohours =[];
        var mondaytomins =[];
        $(".monday-from-hours").each(function() {
            var response=$(this).val();
            mondayfromhours.push(response);
        });

        $(".monday-from-mins").each(function() {
            var response=$(this).val();
            mondayfrommins.push(response);
        });

        $(".monday-to-hours").each(function() {
            var response=$(this).val();
            mondaytohours.push(response);
        });

        $(".monday-to-mins").each(function() {
            var response=$(this).val();
            mondaytomins.push(response);
        });
    

        for(let i =0; i<mondayfromhours.length; i++){

            var arrayfromhours = mondayfromhours[i];
            var arrayfrommins = mondayfrommins[i];
            var arraytohours = mondaytohours[i];
            var arraytomins = mondaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            
            if(i == mondayfromhours.length-1){
                $(".monday-data").append(slottext + "");
            }
            else{
                $(".monday-data").append(slottext + " , ");
            }

        }

        // TUESDAY
        var tuesdayfromhours =[];
        var tuesdayfrommins =[];
        var tuesdaytohours =[];
        var tuesdaytomins =[];

        $(".tuesday-from-hours").each(function() {
            var response=$(this).val();
            tuesdayfromhours.push(response);
        });

        $(".tuesday-from-mins").each(function() {
            var response=$(this).val();
            tuesdayfrommins.push(response);
        });

        $(".tuesday-to-hours").each(function() {
            var response=$(this).val();
            tuesdaytohours.push(response);
        });

        $(".tuesday-to-mins").each(function() {
            var response=$(this).val();
            tuesdaytomins.push(response);
        });
    

        for(let i =0; i<tuesdayfromhours.length; i++){

            var arrayfromhours = tuesdayfromhours[i];
            var arrayfrommins = tuesdayfrommins[i];
            var arraytohours = tuesdaytohours[i];
            var arraytomins = tuesdaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            $(".tuesday-data").append(slottext + " , ");
        }


        // WEDNESDAY
        var wednesdayfromhours =[];
        var wednesdayfrommins =[];
        var wednesdaytohours =[];
        var wednesdaytomins =[];

        $(".wednesday-from-hours").each(function() {
            var response=$(this).val();
            wednesdayfromhours.push(response);
        });

        $(".wednesday-from-mins").each(function() {
            var response=$(this).val();
            wednesdayfrommins.push(response);
        });

        $(".wednesday-to-hours").each(function() {
            var response=$(this).val();
            wednesdaytohours.push(response);
        });

        $(".wednesday-to-mins").each(function() {
            var response=$(this).val();
            wednesdaytomins.push(response);
        });
    

        for(let i =0; i<wednesdayfromhours.length; i++){

            var arrayfromhours = wednesdayfromhours[i];
            var arrayfrommins = wednesdayfrommins[i];
            var arraytohours = wednesdaytohours[i];
            var arraytomins = wednesdaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            $(".wednesday-data").append(slottext + " , ");
        }


        // THURSDAY
        var thursdayfromhours =[];
        var thursdayfrommins =[];
        var thursdaytohours =[];
        var thursdaytomins =[];

        $(".thursday-from-hours").each(function() {
            var response=$(this).val();
            thursdayfromhours.push(response);
        });

        $(".thursday-from-mins").each(function() {
            var response=$(this).val();
            thursdayfrommins.push(response);
        });

        $(".thursday-to-hours").each(function() {
            var response=$(this).val();
            thursdaytohours.push(response);
        });

        $(".thursday-to-mins").each(function() {
            var response=$(this).val();
            thursdaytomins.push(response);
        });
    

        for(let i =0; i<thursdayfromhours.length; i++){

            var arrayfromhours = thursdayfromhours[i];
            var arrayfrommins = thursdayfrommins[i];
            var arraytohours = thursdaytohours[i];
            var arraytomins = thursdaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            $(".thursday-data").append(slottext + " , ");
        }




         // FRIDAY
         var fridayfromhours =[];
         var fridayfrommins =[];
         var fridaytohours =[];
         var fridaytomins =[];
 
         $(".friday-from-hours").each(function() {
             var response=$(this).val();
             fridayfromhours.push(response);
         });
 
         $(".friday-from-mins").each(function() {
             var response=$(this).val();
             fridayfrommins.push(response);
         });
 
         $(".friday-to-hours").each(function() {
             var response=$(this).val();
             fridaytohours.push(response);
         });
 
         $(".friday-to-mins").each(function() {
             var response=$(this).val();
             fridaytomins.push(response);
         });
     
 
        for(let i =0; i<fridayfromhours.length; i++){

            var arrayfromhours = fridayfromhours[i];
            var arrayfrommins = fridayfrommins[i];
            var arraytohours = fridaytohours[i];
            var arraytomins = fridaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            $(".friday-data").append(slottext + " , ");
        }


        // saturday
        var saturdayfromhours =[];
        var saturdayfrommins =[];
        var saturdaytohours =[];
        var saturdaytomins =[];

        $(".saturday-from-hours").each(function() {
            var response=$(this).val();
            saturdayfromhours.push(response);
        });

        $(".saturday-from-mins").each(function() {
            var response=$(this).val();
            saturdayfrommins.push(response);
        });

        $(".saturday-to-hours").each(function() {
            var response=$(this).val();
            saturdaytohours.push(response);
        });

        $(".saturday-to-mins").each(function() {
            var response=$(this).val();
            saturdaytomins.push(response);
        });
    

       for(let i =0; i<saturdayfromhours.length; i++){

           var arrayfromhours = saturdayfromhours[i];
           var arrayfrommins = saturdayfrommins[i];
           var arraytohours = saturdaytohours[i];
           var arraytomins = saturdaytomins[i];

           var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
           $(".saturday-data").append(slottext + ", ");
       }


       // sunday
       var sundayfromhours =[];
       var sundayfrommins =[];
       var sundaytohours =[];
       var sundaytomins =[];

       $(".sunday-from-hours").each(function() {
           var response=$(this).val();
           sundayfromhours.push(response);
       });

       $(".sunday-from-mins").each(function() {
           var response=$(this).val();
           sundayfrommins.push(response);
       });

       $(".sunday-to-hours").each(function() {
           var response=$(this).val();
           sundaytohours.push(response);
       });

       $(".sunday-to-mins").each(function() {
           var response=$(this).val();
           sundaytomins.push(response);
       });
   

      for(let i =0; i<sundayfromhours.length; i++){

          var arrayfromhours = sundayfromhours[i];
          var arrayfrommins = sundayfrommins[i];
          var arraytohours = sundaytohours[i];
          var arraytomins = sundaytomins[i];

          var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
          $(".sunday-data").append(slottext + " , ");
      }


    });
        
}); // DOCUMENT READY

