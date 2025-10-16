function addRecommendation() {
  // Get the name and message of the new recommendation
  let nameInput = document.getElementById("name_input");
  let recommendation = document.getElementById("new_recommendation");
  
  // Check if both fields have values
  if (nameInput.value != null && nameInput.value.trim() != "" && 
      recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    // Call showPopup here
    showPopup(true);

    // Create a new 'recommendation' element with name and message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>" + 
                       "<br><strong>- " + nameInput.value + "</strong>";
    
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset both input fields
    nameInput.value = "";
    recommendation.value = "";
  } else {
    // Show alert if fields are empty
    alert("Please fill in both your name and recommendation message.");
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

// Add event listeners to maintain focus on input fields
document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name_input');
  const messageInput = document.getElementById('new_recommendation');
  
  // Force focus to stay on click
  nameInput.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.focus();
  });
  
  messageInput.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.focus();
  });
  
  // Prevent focus loss
  nameInput.addEventListener('blur', function(e) {
    // Small delay to refocus if clicked again quickly
    setTimeout(() => {
      if (document.activeElement !== this && document.activeElement !== messageInput) {
        // Only refocus if user didn't click elsewhere intentionally
      }
    }, 10);
  });
  
  messageInput.addEventListener('blur', function(e) {
    setTimeout(() => {
      if (document.activeElement !== this && document.activeElement !== nameInput) {
        // Only refocus if user didn't click elsewhere intentionally
      }
    }, 10);
  });
});
