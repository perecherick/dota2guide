function change() {
    const hero = document.getElementById('hero');
    const item = document.getElementById('item');
  
    if (hero.classList.contains('high_z')) {
      hero.classList.remove('high_z');
      hero.classList.add('low_z');
      item.classList.remove('low_z');
      item.classList.add('high_z');
      document.getElementById("allheroes").style.opacity="0";
      document.getElementById("allitems").style.opacity="1";
      document.getElementById("allheroes").style.zIndex="0";
    } else {
      hero.classList.remove('low_z');
      hero.classList.add('high_z');
      item.classList.remove('high_z');
      item.classList.add('low_z');
      document.getElementById("allheroes").style.opacity="1";
      document.getElementById("allitems").style.opacity="0";
      document.getElementById("allheroes").style.zIndex="1";
    }
  }