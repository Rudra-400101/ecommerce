const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");


  bar.addEventListener("click", () => {
    nav.classList.add("actives");
  });


  close.addEventListener("click", () => {
    nav.classList.remove("actives");
  });






  
