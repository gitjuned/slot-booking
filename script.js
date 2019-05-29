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
            var fromHours = $(newFromHourId+' option:selected').val();
            var toHours = $(newToHourId+' option:selected').val();
    
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
    
        console.log(fromDay); 
        console.log(toDay);       
    
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
        $(".monday").each(function() {
            console.log("Monday Appointment Slots: "+$(this).val());
        });
    });
        
}); // DOCUMENT READY

