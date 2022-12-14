{// Dark Mode
  const dark = document.getElementById("dark")
  const body = document.getElementById("body")


  dark.addEventListener("click", (eo) => {

    body.classList.toggle("dark")


  })
}

{// Footer Date
const element = document.getElementById("footerDate");
element.innerHTML = new Date().getFullYear();
}