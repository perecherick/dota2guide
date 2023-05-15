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

for(let element of document.getElementsByClassName('hero_universal'))
  element.onclick = function(){
    detail_img.src = this.src;
    full_hero.classList.add('full_hero_visible');
}

function back(){
  $('full_hero').classList.add('full_hero_invisible');
  $('full_hero').classList.remove('full_hero_visible');
}

let heroStrengths = document.querySelectorAll('.hero_strength');
let heroAgility = document.querySelectorAll('.hero_agility');
let heroIntelegense = document.querySelectorAll('.hero_intelegense');
let heroUniversal = document.querySelectorAll('.hero_universal');

heroStrengths.forEach(function(heroStrength) {
  heroStrength.addEventListener('click', function() {
    $('hero_name').innerText = heroStrength.nextElementSibling.innerText;
  });
});

heroAgility.forEach(function(heroAgility) {
  heroAgility.addEventListener('click', function() {
    $('hero_name').innerText = heroAgility.nextElementSibling.innerText;
  });
});

heroIntelegense.forEach(function(heroIntelegense) {
  heroIntelegense.addEventListener('click', function() {
    $('hero_name').innerText = heroIntelegense.nextElementSibling.innerText;
  });
});

heroUniversal.forEach(function(heroUniversal) {
  heroUniversal.addEventListener('click', function() {
    $('hero_name').innerText = heroUniversal.nextElementSibling.innerText;
  });
});

function addTextToDescription() {
  var heroDescription = document.getElementById("hero_description");
  heroDescription.innerHTML = 'Алхимик - герой 1 позиции, который выигрывает за счёт перевеса в золоте, артефактах и опыте. Имеет врождённую способность, которая позволяет ему получать больше золота с убийства крипов и рун богатства. Поскольку его ультимейт уменьшает базовое время атаки, на него хорошо смотряться артефакты, которые дают ему скорость атаки, такие как:"Moon Shard, Assault Cuirass, Butterfly". Assault cuirass особенно хороша, ведь она даёт алхимику всё, что ему нужно, а именно скорость атаки и урон(урон потому что аура от Assault cuirass уменьшает броню врагам и вражеским постройкам)';
}

function addRecommendedItems() {
  var recomendetItemsDiv = document.getElementById("recomendet_items");

  var imageSources = [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/rapier.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png"
  ];

  for (var i = 0; i < imageSources.length; i++) {
      var newImage = document.createElement("img");
      newImage.src = imageSources[i];
      newImage.alt = "Image " + (i + 1);
      newImage.id = "a";
      recomendetItemsDiv.appendChild(newImage);
  }
}

function clearContent() {
  var heroDescription = document.getElementById("hero_description");
  heroDescription.textContent = "";

  var recomendetItemsDiv = document.getElementById("recomendet_items");
  recomendetItemsDiv.innerHTML = "";
}