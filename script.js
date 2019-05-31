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
        var fromDay = ".from-"+$(this).data('day');
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


    $(".submit-btn").click(function(){
        console.log("****************************** VALUES ******************************");
        console.log("**********************************************************************");

        console.log("++++++++++++++++++ MONDAY +++++++++++++++++++++++");
        var mondayfromhours =[];
        var mondayfrommins =[];
        var mondaytohours =[];
        var mondaytomins =[];

        $(".monday-from-hours").each(function() {
            var response=$(this).val();

            mondayfromhours.push(response);
            console.log("Monday FROM hour array");
            console.log(mondayfromhours);
            
            $(".monday-from").append("Hours: "+response);
            console.log("Monday Appointment Slots: "+$(this).val());
        });

        $(".monday-from-mins").each(function() {
            var response=$(this).val();

            mondayfrommins.push(response);
            console.log("Monday FROM Mins array");
            console.log(mondayfrommins);
            
            $(".monday-from").append(" Mins: "+response);
            console.log("Monday Appointment Slots: "+$(this).val());
        });

        $(".monday-to-hours").each(function() {
            var response=$(this).val();

            mondaytohours.push(response);
            console.log("Monday TO HOURS array");
            console.log(mondaytohours);

            $(".monday-to").append("Hours: "+response);
            console.log("Monday Appointment Slots: "+$(this).val());
        });

        $(".monday-to-mins").each(function() {
            var response=$(this).val();

            mondaytomins.push(response);
            console.log("Monday TO HOURS array");
            console.log(mondaytomins);

            $(".monday-to").append(" Mins: "+response);
            console.log("Monday Appointment Slots: "+$(this).val());
        });
    
        console.log("MONDAY FROM HOURS");
        console.log(mondayfromhours);
        console.log("MONDAY FROM MINS");
        console.log(mondayfrommins);
        console.log("MONDAY TO HOURS");
        console.log(mondaytohours);
        console.log("MONDAY TO MINS");
        console.log(mondaytomins);

        for(let i =0; i<mondayfromhours.length; i++){

            var arrayfromhours = mondayfromhours[i];
            var arrayfrommins = mondayfrommins[i];
            var arraytohours = mondaytohours[i];
            var arraytomins = mondaytomins[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            $(".monday-data").append(slottext + " , ");

        }







        console.log("++++++++++++++++++++ TUESDAY +++++++++++++++++++++");
        $(".tuesday").each(function() {
            var response=$(this).val();
            $(".tuesday-data").append(response);
            console.log("Tuesday Appointment Slots: "+$(this).val());       
        });

        console.log("+++++++++++++++++++++++ WEDNESDAY ++++++++++++++++++");
        $(".wednesday").each(function() {
            var response=$(this).val();
            $(".wednesday-data").append(response);
            console.log("Wednesday Appointment Slots: "+$(this).val());    
        });

        console.log("+++++++++++++++++++++++ THURSDAY ++++++++++++++++++");
        $(".thursday").each(function() {
            var response=$(this).val();
            $(".thursday-data").append(response);
            console.log("Thursday Appointment Slots: "+$(this).val());    
        });

        console.log("++++++++++++++++++++++++ FRIDAY +++++++++++++++++");
        $(".friday").each(function() {
            var response=$(this).val();
            $(".friday-data").append(response);
            console.log("Friday Appointment Slots: "+$(this).val());  
        });

        console.log("+++++++++++++++++++++++ SATURDAY ++++++++++++++++++");
        $(".saturday").each(function() {
            var response=$(this).val();
            $(".saturday-data").append(response);
            console.log("Saturday Appointment Slots: "+$(this).val());
        });

        console.log("+++++++++++++++++++ SUNDAY ++++++++++++++++++++++");
        $(".sunday").each(function() {
            var response=$(this).val();
            $(".sunday-data").append(response);
            console.log("Sunday Appointment Slots: "+$(this).val());
        });


        console.log("****************************** VALUES ******************************");
        console.log("**********************************************************************");


    });
        
}); // DOCUMENT READY

