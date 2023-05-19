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

function uploadHeroDescription (hero_name) {

  if (hero_name == 'ALCHEMIST')
    $("hero_description").innerHTML = 'Алхимик - герой 1 позиции, который выигрывает за счёт перевеса в золоте, артефактах и опыте. Имеет врождённую способность, которая позволяет ему получать больше золота с убийства крипов и рун богатства. Поскольку его ультимейт уменьшает базовое время атаки, на него хорошо смотряться артефакты, которые дают ему скорость атаки, такие как:"Moon Shard, Assault Cuirass, Butterfly". Assault cuirass особенно хороша, ведь она даёт алхимику всё, что ему нужно, а именно скорость атаки и урон(урон потому что аура от Assault cuirass уменьшает броню врагам и вражеским постройкам)';
  else if (hero_name == 'AXE')
    $("hero_description").innerHTML = 'Акс - герой 3 позиции, разчитаный на иннициацию. Изначально имеет не так много брони, что компенсируется его 1 способностью, которая при активации даёт много брони и заставляет врагов поблизости атаковать его. Хорошо работает в комбинации с 3 пассивной способностью, которая заставляет акса крутится, тем самым наносить чистый урон врагам в небольшом радиусе. Хорошо подходят ему blink dagger, blade mail, phase boots, vanguard(на линию). Его ультимейт позволяет мгновенно убить цель при определённом количестве здоровья врага.';
  else if (hero_name == 'EARTHSHAKER')
    $("hero_description").innerHTML = 'Шейкер(Earthshaker) - герой как и поддержки, так может быть и мидером. Герой иннициации, который так-же может разделить противников друг от друга. 1 способность создаёт разлом, который блокирует проход всем. Если вы купите аганим шард, вы сможете ходить по этому разлому. 2 Способность усилит вашу следующую атаку. 3 пассивная способность оглушит всех врагом в небольшом радиусе, когда вы примените одну из способностей. Ультимативная способность наносит урон в большом радиусе в зависимости от того, сколько существ было в радиусе ультимейта. Хорошо смотрится против героев, которые либо создают иллюзии, либо героев, которые призывают своих существ.';
  else if (hero_name == 'PHANTOM ASSASSIN')
    $("hero_description").innerHTML = 'Фантомка(Phantom assasSin) - кор герой с ближним типом атаки, который зависит от предметов. Легко может убивать саппортов без предметов на защиту. Её основная цель - быстро найти и так-же быстро убить цель в средине игры. Есть 2 стиля игры: 1 это делать больше упор на убийстве крипов, а 2 - делать упор на убийства врагов. 1 способность, кинжал, позволяет нанести урон на расстоянии и замедлить цель. Урон зависит от урона атак героя. 2 способность позволяет "прыгнуть на врага", получая доп. скорость атаки и ванпиризм от атак. 3 способность позволяет уклонится от атак пассивно, и при активации стать невидимым. Невидимость расскрывается от вражескив героев, вражеских зданий и рошана. Нельзя увидеть даже если поставить sentry ward. Ультимейт - пассивная способность, которая позволяет герою нанести критический урон при атаке.';
  else if (hero_name == 'PHANTOM LANCER')
    $("hero_description").innerHTML = 'Лансер - кор герой. Его основная сила в его иллюзиях. 1 способность - герой бросает копьё, нанося урон, замедляя его и призывая возле цели иллюзию. Улучшается Aghanims scepter. Копьё отскакивает, нанося такой-же урон и призываю такую-же иллюзию. 2 способность позволяет лансеру пропасть с карты на секунду, затем вернуться с 2 иллюзиями. Первая иллюзия получает в 5 раз больше урона и наносит 80% урон от атак лансера, а вторая иллюзия не наносит урон от атак, но получает столько же урона, сколько и основной герой. Если до применения этой способности уже были ваши иллюзии, они так-же появятся рядом с вами. 3 способность позволяет совершить рывок на врага, при этом увеличивая ловкость героя. Ультимейт - пассивная способность, которая при атаке имеет шанс призвать иллюзию героя. Атаки иллюзий тоже могут призвать иллюзии, но с меньшим шансом. Улучшается aghanims shard: позволяет применить эту способность, чтобы призвать иллюзию, а самому герою стать невидимым. ';
  else if (hero_name == 'INVOKER')
    $("hero_description").innerHTML = 'Инвокер - мидер, один из сложнейших героев в доте. Имеет больше всего способностей в игре. Имеет 3 сферы, и может призвать эти 3 сферы. Сферы могут быть одинаковыми и каждый будет давать вам бонусы. 1 способность - Quas. Сфера, которая за каждый уровень прокачки даёт +2 к силе, когда сфера актина даёт доп. к регенирации хп. 2 способность - Wex. за каждый уровень прокачки даёт +2 к ловкости. Когда сфера активна даёт бонус к скорости передвижения. 3 способность - Exort. Даёт +2 к интеллекту за каждый уровень способности. Когда сфера активна даёт доп. урон от атак. Ультимейт при нажатии дарует новую способность, в зависимости от того, какие сферы сейчас активны. Всего есть 10 способностей. Есть 2 основных стиля игры: через 1 и 2 способности или через 3 способность. Играть через 1 и 2 способности требует большей концентрации.';
  else if (hero_name == 'LICH')
    $("hero_description").innerHTML = 'Лич - герой поддержки. 1 способность наносит урон врагу и замедляет его. 2 способность - щит, который можно применить на союзное существо, постройку и героя, чтобы цель получала меньше урона от атак на 50%, так-же раз в секунду замедляет врагов. 3 способность притягивает врагов, запрещая ему передвигаться, атаковать, применять способности и предметы. Ультиейт - выпускает большой "чайник", который наносит огромный урон, отскакивает во врагов, увеличивая урон за каждый отскок, замедляет их. Хорошо работает в комбинации с aghanims shard, который дарует новую способность: ICE SPIRE. Позволяет поставить огромную ледяную постройку, которая замедляет в большом радиусе, так-же ультимейт может отскочить на эту способность.';
  else if (hero_name == 'ORACLE')
    $("hero_description").innerHTML = 'Оракл - герой поддержки, который хилит своих союзников. 1 способность снимает негативные эффекты с союзников и положительные эффекты с врагов, накладывая оцепенение в радиусе(оцепенение не действует на союзников). 2 способность даёт союзникам 100% сопротивлении магии, а врагам запрещает атаковать. 3 способность наносит урон, и постепенно восстанавливает здоровье, примечание: суммарное восстановление здоровья больше, чем нанесённый им урон, так что используйте на врагов всегда в комбинации с 1 способностью. Ультимейт откладывает любой урон и любое лечение на 7/8.5/10 секунд в зависимости от уровня ультимейта. Спустя это время оно нанесёт урон, но восстановит здоровье вдвое больше, чем это было-бы без применения ультимейта. Так-же развеивает негативные эффекты.';
  else if (hero_name == 'RUBICK')
    $("hero_description").innerHTML = 'Рубик - герой поддержки, сила которого зависит от противников, а точнее от их способностей. Сборка может менятся в зависимости от героев врага. 1 способность позволяет поднять врага и бросить через определённое время в выбранную точку. Враги в небольшом радиусе так-же получат оглушение от приземление союзника. 2 способность наносит урон и уменьшает урон от атак у цели и врагов, на которых перескочила эта способность. 3 способность пассивно увеличивает дальность применения заклинаний и урон от заклинаний. Ультимейт позволяет украсть последнюю применённую способность врага. Некоторые способности врага невозможно украсть.';
  else if (hero_name == 'IO')
    $("hero_description").innerHTML = 'Ио(висп) - герой поддержки, который связывается с союзником, лечит и усиливает его. 1 способность позволяет ускорить вас и союзника в связке, так-же вы будете передватать всё восстановленное вами хп и ману союзника. 2 способность поможет вам фармить и наносить урон врагам. 3 способность ускоряет вашу скорость атаки и скорость атаки союзника, а так-же даёт доп. урон от заклинаний. Ультимейт позволяет вам и связанному с вами союзником переместиться на любую точку карты с задержкой. Спустя 12 секунд вы возвращаетесь на начальную точку.';
  else if (hero_name == 'MIRANA')
    $("hero_description").innerHTML = 'Мирана - герой поддержки, который ходит по всем линиям, помогая убить противников. 1 способность призывает звёзды, которые падают на всех существ в большом радиусе вокруг Мираны, а существу, который был ближе всего к Миране, упадёт 2 звезды. 2 способность - стрела. Мирана выпускает большую стрелу, которая если попадёт в крипа, сразу убьёт его(не убивает древних крипов, рошана и существ по типу медведя Lone Druid, големов Warlock и т.д.). При попадании во врага наносит урон и оглушает в зависимости от дальности полёта стрелы. 3 способность позволяет миране быстро переместится на небольшое расстояние и перепрыгнуть возвышенности. При покупке aghanims shard даёт 1 дополнительный заряд к 3 способности. Ультимейт делает союзных героев невидимыми, что позволяет как и спасти союзника, так и неожиданно на врагов.';
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
