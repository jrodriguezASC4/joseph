var country;

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      const photo = data.results[0].picture.large;
      const State = data.results[0].location.state;
      var country = data.results[0].nat;
      var addressStreet = data.results[0].location.street;
      var addressCity = data.results[0].location.city;
      var IDType = data.results[0].id.name;
      var IDvalue = data.results[0].id.value;
      var zipCode = data.results[0].location.postcode;

      // Get the date of birth & split it up by month, day, and year

            const DOB = data.results[0].dob;
            const birthMonthNum = DOB.split("-")[1]; 
            const birthDayNum = DOB.split("")[2]; 
            const birthYearNum = DOB.split("-")[0]; 

      console.log(birthDayNum, birthMonthNum, birthYearNum);

            // var str = "John M Peters";
            // var fname = str.split(" ")[0];
            // var mname = str.split(" ")[1];
            // var lname = str.split(" ")[2];

      // Capitalize the first letter of the first name.
        function cap(firstName) {
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
        }

      // Capitalize the first letter of the last name.
        function cap(lastName) {
        return lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }

        // Capitalize the first letter of the State.
        function cap(State) {
        return State.charAt(0).toUpperCase() + State.slice(1);
        }

    $("body").append("<h2>You are now <u>" + "    " + cap(firstName) + " " + cap(lastName) + "</u></h2>")

    // Displays the person's picture

     $('<img/>', {
    src: photo,
    width: 300,
    // height: 500
    }).appendTo($('body'))

    // $("body").append("<h2>" + photo + "</h2>");
   
    // $("body").append("<img src=photo>");


    $("body").append("<p1><br>You live in <b>" + cap(State) + "</b></p1>") 
     

    $("body").append("<b1><br><br>Your birthday is on <b>" + birthMonthNum + "/" + birthDayNum + "/" + birthYearNum + "</b>.</b1>")

  

  $.ajax({

 url: 'https://restcountries.eu/rest/v2/alpha?codes=' + country,
  dataType: 'json',
success: function(data){
  var flagImg = data[0].flag

   $('<img />', {
    src: flagImg,
    width: 300,
    // height: 500
    }).appendTo($('body'))

       $("body").append("<h2>" + country + "</h2>");
       $("body").append("<p1><br>Street: <b>" + addressStreet + "</b></p1>") 
       $("body").append("<p1><br>City: <b>" + addressCity + "</b></p1>") 
       $("body").append("<p1><br>Zip/Post Code: <b>" + zipCode + "</b></p1>") 
       $("body").append("<p1><br>Identity type: <b>" + IDType + "</b></p1>") 
       $("body").append("<p1><br>Identity (in numbers): <b>" + IDvalue + "</b></p1>") 


}
});
  
}});