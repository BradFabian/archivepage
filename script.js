const openTab = (event, tabName) => {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    
  tabLinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  console.log(tabName)

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";

}

openTab()