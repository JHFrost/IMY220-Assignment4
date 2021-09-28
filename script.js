$(document).ready(() => {

    /*------------------ This is the start for the name----------------------- */
    $('button:first').on('click', function(){
        if ($('button:first').html()=="Update"){
            let NewName;
            $('button:first').html('Edit');
            NewName = $('#NameInput').val();
            $('span:first').html(NewName);
            $('b:first').show();
            $('span:first').show();
            $('#NameInput').remove(); 
        }
        else{
            $('button:first').html('Update');
            let CurrentName;
            $('b:first').hide();
            CurrentName = $('span:first').text();
            $('span:first').hide();
            $('<input type="text" id="NameInput" class="col-8" name="NameInput" value="'+CurrentName+'">', {html: 'Begin'}).prependTo('.details:first');
        }
    });
    /*--------------This is the end for the name ------------------------*/


    /*------------------ This is the start for the surname----------------------- */
    $('button:eq(1)').on('click', function(){
        if ($('button:eq(1)').html()=="Update"){
            let NewSurname;
            $('button:eq(1)').html('Edit');
            NewSurname = $('#SurnameInput').val();
            $('span:eq(1)').html(NewSurname);
            $('b:eq(1)').show();
            $('span:eq(1)').show();
            $('#SurnameInput').remove(); 
        }
        else{
            $('button:eq(1)').html('Update');
            let CurrentSurname;
            $('b:eq(1)').hide();
            CurrentSurname = $('span:eq(1)').text();
            $('span:eq(1)').hide();
            $('<input type="text" id="SurnameInput" class="col-8" name="SurnameInput" value="'+CurrentSurname+'">', {html: 'Begin'}).prependTo('.details:eq(1)');
        }
    });
    /*--------------This is the end for the surname ------------------------*/


    /*------------------ This is the start for the email----------------------- */
    $('button:eq(2)').on('click', function(){
        if ($('button:eq(2)').html()=="Update"){
            let NewEmail;
            $('button:eq(2)').html('Edit');
            NewEmail = $('#EmailInput').val();
            $('span:eq(2)').html(NewEmail);
            $('b:eq(2)').show();
            $('span:eq(2)').show();
            $('#EmailInput').remove(); 
        }
        else{
            $('button:eq(2)').html('Update');
            let CurrentEmail;
            $('b:eq(2)').hide();
            CurrentEmail = $('span:eq(2)').text();
            $('span:eq(2)').hide();
            $('<input type="email" id="EmailInput" class="col-8" name="EmailInput" value="'+CurrentEmail+'">', {html: 'Begin'}).prependTo('.details:eq(2)');
        }
    });
    /*--------------This is the end for the email ------------------------*/


    /*----------------- This is the start for the date ----------------------*/
    $('button:last').on('click', function(){
        if ($('button:last').html()=="Update"){
            let NewBirth;
            $('button:last').html('Edit');
            NewBirth = $('#BirthDay').val();

            var Months = new Array();
            Months[0] = "January";
            Months[1] = "February";
            Months[2] = "March";
            Months[3] = "April";
            Months[4] = "May";
            Months[5] = "June";
            Months[6] = "July";
            Months[7] = "August";
            Months[8] = "September";
            Months[9] = "October";
            Months[10] = "November";
            Months[11] = "December";

            let TempDate = new Date(NewBirth);
            let NewMonth = Months[TempDate.getMonth()];

            NewBirth = NewBirth.split("-");

            let OutputDate = NewBirth[2] + " " + NewMonth + " " + NewBirth[0];


            $('span:last').html(OutputDate);
            $('b:last').show();
            $('span:last').show();
            $('#BirthDay').remove(); 
        }
        else{
            $('button:last').html('Update');
            let CurrentBirth;
            $('b:last').hide();
            CurrentBirth = $('span:last').text();
            $('span:last').hide();
            $('<input type="date" id="BirthDay" name="BirthDay" value="'+CurrentBirth+'">', {html: 'Begin'}).prependTo('.details:last');
        }
    });
    /*-------------------------- This is the end for the date --------------------------*/
});