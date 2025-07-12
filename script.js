function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
   
   const img = document.querySelector ('#perfil img')
   
   if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/eu2.PNG') 
        img.setAttribute('alt', 'Foto da Vivi com cabelos longos de blusa branca e batom vermelho')
    } else {
        img.setAttribute('src', './assets/eu.PNG')
        img.setAttribute('alt','Foto da Vivi com cabelos longos de blusa preta')
    }
   
}