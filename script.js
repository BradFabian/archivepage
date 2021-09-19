const openTab = (event, tabName) => {
    let i, tabContent, tabLinks, tabLocation;
    tabLocation =  document.getElementById(tabName);
    tabContent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    
  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  

  tabLocation.style.display = "block";
  event.currentTarget.className += " active";

}

openTab()