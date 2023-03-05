var $=function(id){
	return document.getElementById(id);
}

function change() {
    const hero = document.getElementById('hero');
    const item = document.getElementById('item');
  
    if (hero.classList.contains('high_z')) {
      hero.classList.remove('high_z');
      hero.classList.add('low_z');
      item.classList.remove('low_z');
      item.classList.add('high_z');
      document.getElementById("allheroes").style.display="none";
      document.getElementById("allitems").style.display="block";
    } else {
      hero.classList.remove('low_z');
      hero.classList.add('high_z');
      item.classList.remove('high_z');
      item.classList.add('low_z');
      document.getElementById("allheroes").style.display="block";
      document.getElementById("allitems").style.display="none";
  }
}

const detail_img = $('detail');
const full_hero = $('full_hero');

for(let element of document.getElementsByClassName('hero_strength'))
  element.onclick = function(){
    detail_img.src = this.src;
    full_hero.classList.add('full_hero_visible');
}

for(let element of document.getElementsByClassName('hero_agility'))
  element.onclick = function(){
    detail_img.src = this.src;
    full_hero.classList.add('full_hero_visible');
}

for(let element of document.getElementsByClassName('hero_intelegense'))
  element.onclick = function(){
    detail_img.src = this.src;
    full_hero.classList.add('full_hero_visible');
}

function hide(){
  $('full_hero').classList.add('full_hero_invisible');
  $('full_hero').classList.remove('full_hero_visible');
}

let heroStrengths = document.querySelectorAll('.hero_strength');

heroStrengths.forEach(function(heroStrength) {
  heroStrength.addEventListener('click', function() {
    $('hero_name').innerText = heroStrength.nextElementSibling.innerText;
  });
});
