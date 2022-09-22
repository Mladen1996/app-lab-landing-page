
  var x = document.getElementById("mobile-menu");
  var nav= document.getElementById("main-menu");
  var content=document.getElementsByTagName('body')[0];
  var mobileicon=document.getElementById("mobile-icon");
  var acc = document.getElementsByClassName("accordion");
  var i;
 

  x.onclick=function(){
    if (nav.className === "active") {
      nav.style.display="none";
      nav.classList.remove("active");
      content.style.overflow="initial";
      mobileicon.setAttribute("src", "images/mobile-menu.png");
    } else {
      nav.style.display="block";
      nav.classList.add("active");
      content.style.overflow="hidden";
      mobileicon.setAttribute("src", "images/cancel.png");
    }

    
  }

 
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.children[1];
      /*if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }*/
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
  
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-arrow',
      prevEl: '.prev-arrow',
    },
  
  });

  

  
