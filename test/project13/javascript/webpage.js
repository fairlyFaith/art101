function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
 
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
 
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var activeDropdown = null;
  
  for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      if (activeDropdown && activeDropdown !== this) {
        activeDropdown.classList.remove("active");
        activeDropdown.nextElementSibling.style.display = "none";
      }
  
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
  
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
  
      activeDropdown = this;
    });
  }
  
  // Get all the link elements
var links = document.querySelectorAll(".myLink");

// Add event listeners to the links
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var target = this.getAttribute("data-target");
    
    // Hide all button containers
    var buttonContainers = document.querySelectorAll("[data-button-container]");
    buttonContainers.forEach(function(container) {
      container.classList.add("hidden");
    });
    
    // Show the relevant button container
    var targetContainer = document.getElementById(target);
    if (targetContainer) {
      targetContainer.classList.remove("hidden");
    }
  });
});


$(document).ready(function() {
  // Open the pop-up when the button is clicked
  $('.popupButton').click(function() {
    var target = $(this).data('target');
    $('#' + target).fadeIn();
    $('.overlay').fadeIn();
  });

  // Close the pop-up when the close button is clicked
  $('.closeButton').click(function() {
    $('.overlay').fadeOut();
    $('.popup').fadeOut();
  });
});

function filter() {
  document.getElementById("mchenry-library").style.opacity = 1;
  document.getElementById("mchenry-library").disabled = false;
  document.getElementById("porter-study").style.opacity = 1;
  document.getElementById("porter-study").disabled = false;
  document.getElementById("se-library").style.opacity = 1;
  document.getElementById("se-library").disabled = false;
  document.getElementById("stevenson-library").style.opacity = 1;
  document.getElementById("stevenson-library").disabled = false;
  document.getElementById("namaste-lounge").style.opacity = 1;
  document.getElementById("namaste-lounge").disabled = false;
  document.getElementById("tf-commons").style.opacity = 1;
  document.getElementById("tf-commons").disabled = false;
 
  var lively = document.getElementById("lively");
  var moderate = document.getElementById("moderate");
  var quiet = document.getElementById("quiet");
  var yes = document.getElementById("yes");
  var no = document.getElementById("no");
  var inside = document.getElementById("inside");
  var outside = document.getElementById("outside");
  var both = document.getElementById("both");

  if (moderate.checked == true && yes.checked == true && both.checked == true) {
    document.getElementById("porter-study").style.opacity = 0;
    document.getElementById("porter-study").disabled = true;
    document.getElementById("se-library").style.opacity = 0;
    document.getElementById("se-library").disabled = true;
    document.getElementById("stevenson-library").style.opacity = 0;
    document.getElementById("stevenson-library").disabled = true;
    return;
  }
  else if (quiet.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById("mchenry-library").style.opacity = 0;
    document.getElementById("mchenry-library").disabled = true;
    document.getElementById("se-library").style.opacity = 0;
    document.getElementById("se-library").disabled = true;
    document.getElementById("namaste-lounge").style.opacity = 0;
    document.getElementById("namaste-lounge").disabled = true;
    document.getElementById("tf-commons").style.opacity = 0;
    document.getElementById("tf-commons").disabled = true;
    return;
  }
  else if (lively.checked == true && yes.checked == true && inside.checked == true) {
    document.getElementById("mchenry-library").style.opacity = 0;
    document.getElementById("mchenry-library").disabled = true;
    document.getElementById("porter-study").style.opacity = 0;
    document.getElementById("porter-study").disabled = true;
    document.getElementById("stevenson-library").style.opacity = 0;
    document.getElementById("stevenson-library").disabled = true;
    document.getElementById("namaste-lounge").style.opacity = 0;
    document.getElementById("namaste-lounge").disabled = true;
    document.getElementById("tf-commons").style.opacity = 0;
    document.getElementById("tf-commons").disabled = true;
    return;
  }
  else {
    return;
  }
}

function reset() {
  document.getElementById("mchenry-library").style.opacity = 1;
  document.getElementById("mchenry-library").disabled = false;
  document.getElementById("porter-study").style.opacity = 1;
  document.getElementById("porter-study").disabled = false;
  document.getElementById("se-library").style.opacity = 1;
  document.getElementById("se-library").disabled = false;
  document.getElementById("stevenson-library").style.opacity = 1;
  document.getElementById("stevenson-library").disabled = false;
  document.getElementById("namaste-lounge").style.opacity = 1;
  document.getElementById("namaste-lounge").disabled = false;
  document.getElementById("tf-commons").style.opacity = 1;
  document.getElementById("tf-commons").disabled = false;
  return;
}


const sidebarLinks = document.getElementsByClassName('sidebar-link');
const buttons = document.getElementsByClassName('hidden-button');
let currentButton = null;

Array.from(sidebarLinks).forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const targetButtonId = link.getAttribute('data-target');
    const targetButton = document.getElementById(targetButtonId);

    if (currentButton !== targetButton) {
      if (currentButton) {
        currentButton.style.display = 'none';
      }
      targetButton.style.display = 'block';
      currentButton = targetButton;
    }
  });
});






let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;
