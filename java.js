


document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  
  window.addEventListener("scroll", () => {
    
    if (window.scrollY > 60) {
      
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
