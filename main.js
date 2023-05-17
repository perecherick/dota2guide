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
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/radiance.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/rapier.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/monkey_king_bar.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png"
  ];

  for (var i = 0; i < imageSources.length; i++) {
      var newImage = document.createElement("img");
      newImage.src = imageSources[i];
      newImage.alt = "Image " + (i + 1);
      newImage.id = "a";
      recomendetItemsDiv.appendChild(newImage);
  }
}

function addTextToDescription2() {
  var heroDescription = document.getElementById("hero_description");
  heroDescription.innerHTML = 'Акс - герой 3 позиции, разчитаный на иннициацию. Изначально имеет не так много брони, что компенсируется его 1 способностью, которая при активации даёт много брони и заставляет врагов поблизости атаковать его. Хорошо работает в комбинации с 3 пассивной способностью, которая заставляет акса крутится, тем самым наносить чистый урон врагам в небольшом радиусе. Хорошо подходят ему blink dagger, blade mail, phase boots, vanguard(на линию). Его ультимейт позволяет мгновенно убить цель при определённом количестве здоровья врага.';
}

function addRecommendedItems2() {
  var recomendetItemsDiv = document.getElementById("recomendet_items");

  var imageSources = [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/vanguard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/shivas_guard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crimson_guard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/overwhelming_blink_lg.png"
  ];

  for (var i = 0; i < imageSources.length; i++) {
      var newImage = document.createElement("img");
      newImage.src = imageSources[i];
      newImage.alt = "Image " + (i + 1);
      newImage.id = "a";
      recomendetItemsDiv.appendChild(newImage);
  }
}

function addTextToDescription79() {
var heroDescription = document.getElementById("hero_description");
  heroDescription.innerHTML = 'Оракл - герой поддержки, который хилит своих союзников. 1 способность снимает негативные эффекты с союзников и положительные эффекты с врагов, накладывая оцепенение в радиусе(оцепенение не действует на союзников). 2 способность даёт союзникам 100% сопротивлении магии, а врагам запрещает атаковать. 3 способность наносит урон, и постепенно восстанавливает здоровье, примечание: суммарное восстановление здоровья больше, чем нанесённый им урон, так что используйте на врагов всегда в комбинации с 1 способностью. Ультимейт откладывает любой урон и любое лечение на 7/8.5/10 секунд в зависимости от уровня ультимейта. Спустя это время оно нанесёт урон, но восстановит здоровье вдвое больше, чем это было-бы без применения ультимейта. Так-же развеивает негативные эффекты. ';
}

function addRecommendedItems79() {
  var recomendetItemsDiv = document.getElementById("recomendet_items");

  var imageSources = [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn_of_shadows.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/holy_locket.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mekansm.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/spirit_vessel.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png"
  ];

  for (var i = 0; i < imageSources.length; i++) {
      var newImage = document.createElement("img");
      newImage.src = imageSources[i];
      newImage.alt = "Image " + (i + 1);
      newImage.id = "a";
      recomendetItemsDiv.appendChild(newImage);
  }
}

function addTextToDescription106() {
  var heroDescription = document.getElementById("hero_description");
  heroDescription.innerHTML = 'Ио(висп) - герой поддержки, который связывается с союзником, лечит и усиливает его. 1 способность позволяет ускорить вас и союзника в связке, так-же вы будете передватать всё восстановленное вами хп и ману союзника. 2 способность поможет вам фармить и наносить урон врагам. 3 способность ускоряет вашу скорость атаки и скорость атаки союзника, а так-же даёт доп. урон от заклинаний. Ультимейт позволяет вам и связанному с вами союзником переместиться на любую точку карты с задержкой. Спустя 12 секунд вы возвращаетесь на начальную точку.';
}

function addRecommendedItems106() {
  var recomendetItemsDiv = document.getElementById("recomendet_items");

  var imageSources = [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mekansm.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/holy_locket.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn_of_shadows.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/spirit_vessel.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pipe.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/guardian_greaves.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/pavise.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heavens_halberd_lg.png"
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