function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  
  const img = document.querySelector("#profile img")

  //substituira imagem

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Avatar-light.png.png")
    
  } else {
    // se tiver sem o modo light mode,manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png.png")
  }

 
  
}
