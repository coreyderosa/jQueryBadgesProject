$(function() {
  var myBadgesURI = 'https://www.codeschool.com/users/gowenburnett.json'
  $.ajax({
    url: myBadgesURI,
    dataType: 'jsonp',
    success: function(response){
      console.log("Success!  You made you first freakin' AJAX call!");
      console.log("Full AJAX response: ",  response);
      console.log("Title of a course: ", response.courses.completed[3].title);
      var completedCourse = (response.courses.completed);
      console.log("Practice: " + completedCourse.length);

      for(var i = 0; i < completedCourse.length; i++){
        //console.log("for loop course title: " + completedCourse[i].title);

        var titleCompletedCourse = completedCourse[i].title

        //creates each div
        var divElement = document.createElement("div"); 

        //add class="course" to each div
        divElement.className = "course"; 
        
        //grab title from AJAX call
        var titleText = document.createTextNode(titleCompletedCourse);
        //console.log(titleText);

        //id="badges" variable
        var badgesElement = document.getElementById("badges");

        //add divs to id="badges" div
        badgesElement.appendChild(divElement);  
        
        //creates each h3
        var hThreeElement = document.createElement("h3");

        //adds h3 element to each div
        divElement.appendChild(hThreeElement);

        //adds title to h3 element
        hThreeElement.appendChild(titleText);

        //creates img element
        var imageElement = document.createElement("img");

        //add img to class="course" divs
        divElement.appendChild(imageElement);

        //src = response.badge
        var badgeImageURL = response.courses.completed[i].badge;
        console.log(badgeImageURL); //returns badge image url

        //set src = badge image URL
        imageElement.setAttribute("src", badgeImageURL);

        //create a element
        var linkElement = document.createElement("a");

        //adds 'a' element to class="course" div
        divElement.appendChild(linkElement);
        var courseURL = completedCourse[i].url;

        //adds attributes to 'a' element
        linkElement.setAttribute("href", courseURL);
        linkElement.setAttribute("target", "_blank");

        //add button classes to buttons
        linkElement.className = "btn btn-primary";
        
        //adds text to buttons
        linkElement.innerHTML = "See Course";
        
       }
    }
  })
    
    // your code will go here

});

