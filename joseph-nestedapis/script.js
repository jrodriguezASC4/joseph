var country;

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      const firstName = data.results[0].name.first;
      const lastName = data.results[0].name.last;
      const photo = data.results[0].picture.large;
      var country = data.results[0].nat;

      // Capitalize the first letter of the first name.
        function cap(firstName) {
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
        }

      // Capitalize the first letter of the last name.
        function cap(lastName) {
        return lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }

    $("body").append("<h3>" + cap(firstName) + " " + cap(lastName) + "</h3>")

    // Displays the person's picture

     $('<img />', {
    src: photo,
    width: 300,
    // height: 500
    }).appendTo($('body'))
  
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
}
});
  
}});
