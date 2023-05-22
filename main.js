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



let heroes = document.getElementsByClassName('hero');

for (let el of heroes)
  el.onclick = function() {

    let hero_name = this.nextElementSibling.innerText;

    detail_img.src = this.src;
    $('hero_name').innerText = hero_name;
    full_hero.classList.add('full_hero_visible');

    uploadHeroDescription(hero_name);
    uploadHeroItems(hero_name);
}

function uploadHeroItems (hero_name) {
  let imageSources = getItemImageSourcesArray(hero_name);

  for (let i = 0; i < imageSources.length; i++) {

      let img = document.createElement("img");
      img.src = imageSources[i];
      img.alt = `Image ${i + 1}`;
      img.classList.add("added_items");
      $("recomendet_items").appendChild(img);
  }
} 

$('back').onclick = function() {
  var heroDescription = document.getElementById("hero_description");
  heroDescription.textContent = "";

  var recomendetItemsDiv = document.getElementById("recomendet_items");
  recomendetItemsDiv.innerHTML = "";

  $('full_hero').classList.add('full_hero_invisible');
  $('full_hero').classList.remove('full_hero_visible');
}