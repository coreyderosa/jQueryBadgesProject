$(function() {
  var myBadgesURI = 'https://www.codeschool.com/users/gowenburnett.json'
  $.ajax({
    url: myBadgesURI,
    dataType: 'jsonp',
    success: function(response){
      console.log("Success!  You made you first freakin' AJAX call!");
      console.log("Derp!  You made you first freakin' AJAX call!");
      console.log(response);
      console.log(response);
    }
  })
    
    // your code will go here

});
