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


    // ON CLICK OF ADD BUTTON
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
        
        var fromhoursdata = eval(new String(day+"fromhours"));  // mondayfromhours 
        fromhoursdata = [];  // empty array for from hours
        console.log(fromhoursdata);

        var fromminsdata = eval(new String(day+"frommins"));
        fromminsdata = [];
        console.log(fromminsdata);

        var tohoursdata = eval(new String(day+"tohours"));
        tohoursdata = [];
        console.log(tohoursdata);


        var tominsdata = eval(new String(day+"tomins"));
        tominsdata = [];
        console.log(tominsdata);
       
        // JQUERY SELECTORS
        var dayfromhours = "."+day+"-from-hours";
        var dayfrommins = "."+day+"-from-mins";
        var daytohours = "."+day+"-to-hours";
        var daytomins = "."+day+"-to-mins";

        $(dayfromhours).each(function() {
            var response=$(this).val();
            fromhoursdata.push(response);
        });

        $(dayfrommins).each(function() {
            var response=$(this).val();
            fromminsdata.push(response);
        });

        $(daytohours).each(function() {
            var response=$(this).val();
            tohoursdata.push(response);
        });

        $(daytomins).each(function() {
            var response=$(this).val();
            tominsdata.push(response);
        });
        
        // append selectors
        var appendToDay = "."+day+"-data";

        for(let i =0; i<fromhoursdata.length; i++){
            console.log(appendToDay);

            var arrayfromhours = fromhoursdata[i];
            var arrayfrommins = fromminsdata[i];
            var arraytohours = tohoursdata[i];
            var arraytomins = tominsdata[i];

            var slottext = arrayfromhours+":"+arrayfrommins+"-"+arraytohours+":"+arraytomins;
            console.log(slottext);
            if(i == fromhoursdata.length-1){
                $(appendToDay).append(slottext + "");
            }
            else{
                $(appendToDay).append(slottext + " , ");
            }

        }

    };

    
    // ON CLICK OF SUBMIT BUTTON
    $(".submit-btn").click(function(){

        $(".monday-data,.tuesday-data, .wednesday-data,  .thursday-data, .friday-data, .saturday-data, .sunday-data").html("");

        // ARRAY FOR TOTAL DAYS
        var days = ["monday","tuesday", "wednesday","thursday","friday","saturday","sunday"];
        // CALLING FUNCTION FOR ALL DAY OF WEEK
        for(let i = 0; i<days.length; i++){
            var currentDay = days[i];
            getAndAddData(currentDay);
        }

    });
        
}); // DOCUMENT READY

