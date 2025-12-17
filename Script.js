
const dropdowns = document.querySelectorAll('.nav-item.dropdown');

dropdowns.forEach(drop => {
  drop.addEventListener('click', function (e) {
    
    // Agar click kisi Link (<a> tag) par hua hai jo dropdown ke andar hai
    if (e.target.tagName === 'A' && e.target.classList.contains('dropdown-item')) {
        // To kuch mat roko, page par jaane do.
        return; 
    }

    // Sirf tab roko jab main Toggle button dabaya ho
    if (window.innerWidth <= 768) {
      // Agar click Main Toggle par hai tabhi preventDefault karo
      if(e.target.classList.contains('dropdown-toggle')){
          e.preventDefault();
          this.classList.toggle('active');
      }
    }
  });
});