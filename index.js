$(document).ready(function(){

    $(".saveBtn").on("click",function(){
        //console.log("It works");
        
     let time = $(this).parent().attr("id");
     let value = $(this).siblings(".description").val();

      localStorage.setItem(time,value);

     
        $(".notification").show(function(){
          setTimeout(hide, 5000);

          function hide() {
            $(".notification").hide();;
          }


          
        })
      
        
        console.log(value);
    });


    function hourUpdate(){
      let currentHour = moment().hours();

      $(".time-block").each(function(){
        let blockHour = parseInt($(this).attr("id").split("-")[1]);

         if(blockHour < currentHour){
          $(".time-block").addClass("present");
         }else if(blockHour === currentHour){
          $(".time-block").addClass("present");
          $(".time-block").removeClass("future");
         } else{
          $(".time-block").removeClass("present");
          $(".time-block").removeClass("future");
          $(".time-block").addClass("future");
         }
     })
        
    };
    
    hourUpdate();

    let interval = setInterval(hourUpdate, 15000);

   

   $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
    
  })


