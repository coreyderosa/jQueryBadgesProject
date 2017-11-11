$(function() {
  var myBadgesURI = 'https://www.codeschool.com/users/gowenburnett.json'
  $.ajax({
    url: myBadgesURI,
    dataType: 'jsonp',
    success: function(response){
      console.log("Success!  You made you first freakin' AJAX call!");
      console.log("Full AJAX response: " + response);
      console.log("Title of a course: " + response.courses.completed[3].title);
      var completedCourse = (response.courses.completed);
      console.log("Practice: " + completedCourse.length);

      for(var i = 0; i < completedCourse.length; i++){
        console.log("for loop course title: " + completedCourse[i].title);

        titleCompletedCourse = completedCourse[i].title

        var divElement = document.createElement("div"); //creates each div
        divElement.className = "course"; //add class="course" to each div
        var badgeClassList = document.getElementById("badges").classList;
        
        console.log("Badge Class list: " + badgeClassList);

        var titleText = document.createTextNode(titleCompletedCourse);
        console.log(titleText);
        divElement.appendChild(titleText);

        document.getElementById("badges").appendChild(divElement);  
      }
    }
  })
    
    // your code will go here

});

