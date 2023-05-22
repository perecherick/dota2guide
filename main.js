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


function getItemImageSourcesArray (hero_name) {

  if (hero_name == 'ALCHEMIST')
    return [
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
  else if (hero_name == 'AXE')
    return [
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
    ]
  else if (hero_name == 'EARTHSHAKER')
    return [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/invis_sword.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png"
    ]
  else if (hero_name == 'FACELESS VOID')
    return [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/maelstrom_lg.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mask_of_madness.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png"
    ]
  else if (hero_name == 'MONKEY KING')
    return [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/maelstrom_lg.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/echo_sabre_lg.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/harpoon.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png"
    ]
  else if (hero_name == 'PHANTOM ASSASSIN')
    return [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png"
    ]
  else if (hero_name == 'PHANTOM LANCER')
    return [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/heart.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png"
    ]
    else if (hero_name == 'TEMPLAR ASSASSIN')
    return [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lesser_crit.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hurricane_pike.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/swift_blink.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/moon_shard.png",
    ]
  else if (hero_name == 'INVOKER')
    return [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hand_of_midas.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/witch_blade.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/orchid.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png"
    ]
  else if (hero_name == 'LICH')
    return [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aeon_disk.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png"
    ]
  else if (hero_name == 'ORACLE')
    return [
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
    ]
  else if (hero_name == 'RUBICK')
    return [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aether_lens.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png"
    ]
  else if (hero_name == 'IO')
    return [
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
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/heavens_halberd_lg.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/aeon_disk.png"
    ]
  else if (hero_name == 'MIRANA')
    return [
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/urn_of_shadows.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/cyclone.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/spirit_vessel.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/hoodwink/aghanims_shard.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ghost.png",
      "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png"
    ]
  else if (hero_name == 'WINDRANGER')
    return [
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/maelstrom_lg.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/dragon_lance.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/diffusal_blade.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/skadi.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/gungir.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hurricane_pike.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sphere.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
    "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/ultimate_scepter.png"
    ]
  else return [];
}

$('back').onclick = function() {
  var heroDescription = document.getElementById("hero_description");
  heroDescription.textContent = "";

  var recomendetItemsDiv = document.getElementById("recomendet_items");
  recomendetItemsDiv.innerHTML = "";

  $('full_hero').classList.add('full_hero_invisible');
  $('full_hero').classList.remove('full_hero_visible');
}