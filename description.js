function uploadHeroDescription (hero_name) {

    if (hero_name == 'ALCHEMIST')
      $("hero_description").innerHTML = 'Алхимик - герой 1 позиции, который выигрывает за счёт перевеса в золоте, артефактах и опыте. Имеет врождённую способность, которая позволяет ему получать больше золота с убийства крипов и рун богатства. Поскольку его ультимейт уменьшает базовое время атаки, на него хорошо смотряться артефакты, которые дают ему скорость атаки, такие как:"Moon Shard, Assault Cuirass, Butterfly". Assault cuirass особенно хороша, ведь она даёт алхимику всё, что ему нужно, а именно скорость атаки и урон(урон потому что аура от Assault cuirass уменьшает броню врагам и вражеским постройкам)';
    else if (hero_name == 'AXE')
      $("hero_description").innerHTML = 'Акс - герой 3 позиции, разчитаный на иннициацию. Изначально имеет не так много брони, что компенсируется его 1 способностью, которая при активации даёт много брони и заставляет врагов поблизости атаковать его. Хорошо работает в комбинации с 3 пассивной способностью, которая заставляет акса крутится, тем самым наносить чистый урон врагам в небольшом радиусе. Хорошо подходят ему blink dagger, blade mail, phase boots, vanguard(на линию). Его ультимейт позволяет мгновенно убить цель при определённом количестве здоровья врага.';
    else if (hero_name == 'EARTHSHAKER')
      $("hero_description").innerHTML = 'Шейкер - герой как и поддержки, так может быть и мидером. Герой иннициации, который так-же может разделить противников друг от друга. 1 способность создаёт разлом, который блокирует проход всем. Если вы купите аганим шард, вы сможете ходить по этому разлому. 2 Способность усилит вашу следующую атаку. 3 пассивная способность оглушит всех врагом в небольшом радиусе, когда вы примените одну из способностей. Ультимативная способность наносит урон в большом радиусе в зависимости от того, сколько существ было в радиусе ультимейта. Хорошо смотрится против героев, которые либо создают иллюзии, либо героев, которые призывают своих существ.';
    else if (hero_name == 'LEGION COMMANDER')
      $("hero_description").innerHTML = 'Легионка - герой 3 позиции, разчитаная на иннициацию в саппортов либо тонких кор-героев. 1 способность выпускает стрелы вокруг героя в большом радиусе, нанося урон в зависимости, сколько существ находится в этом радиусе. Так-же увиличивает скорость атаки. Можно применять во-время дуели. 2 способность применяет на цель сильное развеивание, увеличивает скорость передвижения и регенирацию здоровья. 3 пассивная способность позволяет нанести атаку в ответ на вражескую атаку с дополнительным лайфстилом. Атака наносится моментально. Эта атака может сработать не только на вашего обидчика. Ультимейт - герой вызывает на дуель вражеского героя. Победитель получает дополнительный урон от атак. Если применить дуель на иллюзию, урон не добавится. Если в дуели побеждаете вы, на вас применится ваша 2 способность автоматически.';
    else if (hero_name == 'FACELESS VOID')
      $("hero_description").innerHTML = 'Войд - кор герой, который очень зависит от команды и коммуникации. Из-за его способностей одновременно и простой и сложный герой. Так-же из-за своих способностей может подстраиватся под опредлённых союзных и вражеских героев. 1 способность перемещает героя в выбранную точку, и восстанавливает здоровье, которое он потерял в последние 2 секунды. Является лечением, так-что может усиливатся предметами, по типу sange. 2 способность замедляет врагов и перезарядку их способностей. Способность вражеского героя не может до конца обновится под действием этой способности. Замедление зависит от того, сколько способностей применил вражеский герой до этого. 3 способность позволяет оглушить врага атакой, и нанести дополнительный магический урон. Ультимейн - большая сфера_ где останавливается для всех существ, кроме самого войда и подконтрольных им существ. Останавливает перезарядку всех способностей и предметов, и так-же не позволяет закончится 2 способности, но только если враг находится под этой сферой. Не действует на курьеров.';
    else if (hero_name == 'MONKEY KING')
      $("hero_description").innerHTML = 'МК - герой как и кор, так и мид позиции. Агрессивный кор, который не особо нуждается в золоте. Но так-же может играть как жадный кор, зависит от вражеских и союзных героев. 1 способность наносит увеличенный урон по линии. 2 способность позволяет запрыгнуть на дерево и спрыгнуть с него, нанеся урон в области и замедля врагов. Замедление и урон зависят от того, насколько долго герой подготавливал прыжок. Спрыгнуть так-же можно и просто начать идти куда-либо, но урона и замедления не будут. Если срубить дерево, на котором сидит мк, он оглушится на длительное время. 3 пассивная способность позволяет через 4(3 с талантом) удара усилить следующие 4 атаки и добавить к ним ванпиризм. Так-же работает с 1 способностью. Ультимейт призывает арену, в которой находятся его клоны. Клоны наносят полный урон героя, только некоторые предметы могут сработать пассивно у этих копий. Копии нельза никак убить. Копии не атакуют врагов, которые находятся вне арены, даже если подойти к копиям впритык. Если герой выйдет из арены, она тут-же исчезнет.';
    else if (hero_name == 'PHANTOM ASSASSIN')
      $("hero_description").innerHTML = 'Фантомка - кор герой с ближним типом атаки, который зависит от предметов. Легко может убивать саппортов без предметов на защиту. Её основная цель - быстро найти и так-же быстро убить цель в средине игры. Есть 2 стиля игры: 1 это делать больше упор на убийстве крипов, а 2 - делать упор на убийства врагов. 1 способность, кинжал, позволяет нанести урон на расстоянии и замедлить цель. Урон зависит от урона атак героя. 2 способность позволяет "прыгнуть на врага", получая доп. скорость атаки и ванпиризм от атак. 3 способность позволяет уклонится от атак пассивно, и при активации стать невидимым. Невидимость расскрывается от вражескив героев, вражеских зданий и рошана. Нельзя увидеть даже если поставить sentry ward. Ультимейт - пассивная способность, которая позволяет герою нанести критический урон при атаке.';
    else if (hero_name == 'PHANTOM LANCER')
      $("hero_description").innerHTML = 'Лансер - кор герой. Его основная сила в его иллюзиях. 1 способность - герой бросает копьё, нанося урон, замедляя его и призывая возле цели иллюзию. Улучшается Aghanims scepter. Копьё отскакивает, нанося такой-же урон и призываю такую-же иллюзию. 2 способность позволяет лансеру пропасть с карты на секунду, затем вернуться с 2 иллюзиями. Первая иллюзия получает в 5 раз больше урона и наносит 80% урон от атак лансера, а вторая иллюзия не наносит урон от атак, но получает столько же урона, сколько и основной герой. Если до применения этой способности уже были ваши иллюзии, они так-же появятся рядом с вами. 3 способность позволяет совершить рывок на врага, при этом увеличивая ловкость героя. Ультимейт - пассивная способность, которая при атаке имеет шанс призвать иллюзию героя. Атаки иллюзий тоже могут призвать иллюзии, но с меньшим шансом. Улучшается aghanims shard: позволяет применить эту способность, чтобы призвать иллюзию, а самому герою стать невидимым. ';
    else if (hero_name == 'TEMPLAR ASSASSIN')
      $("hero_description").innerHTML = 'Темпларка - зачастую мидер, основной стиль игры - прыгнуть за спину врагам и убить саппортов за короткий промежуток времени. 1 способность - герой создает щит, который поглощает весь входящий урон, а также дает ей дополнительный урон для следующей атаки. Эти эффекты действуют ограниченное число раз и считаются раздельно. 2 способность делает героя невидимым, усиливая следующую атаку, которая снизит броню врага. Если двинутся, невидимость пропадёт а следующая атака не усилится. 3 способность увеличивает дальность атаки и даёт возможность наносить урон врагам, которые находятся сзади от цели, которую ыы атакуете. Урон уменьшается за каждого врага на 5%. Ультимейт - герой ставит невидимою ловушку, которую можно активировать, чтобы нанести урон в небольшой области и замедлить врагов. Замедление и урон зависят от того, насколько близко вы были к ловушке. Улучшаение от aghanims shard: взрыв так-же накладывает безмолвие. Улучшаение от aghanims scepter: позволяет телепортироваться на ловушку. После телепортации на ловушку, она взрывется. Телепортирование не сбивает эффекты от 2 способности.';
    else if (hero_name == 'INVOKER')
      $("hero_description").innerHTML = 'Инвокер - мидер, один из сложнейших героев в доте. Имеет больше всего способностей в игре. Имеет 3 сферы, и может призвать эти 3 сферы. Сферы могут быть одинаковыми и каждый будет давать вам бонусы. 1 способность - Quas. Сфера, которая за каждый уровень прокачки даёт +2 к силе, когда сфера актина даёт доп. к регенирации хп. 2 способность - Wex. за каждый уровень прокачки даёт +2 к ловкости. Когда сфера активна даёт бонус к скорости передвижения. 3 способность - Exort. Даёт +2 к интеллекту за каждый уровень способности. Когда сфера активна даёт доп. урон от атак. Ультимейт при нажатии дарует новую способность, в зависимости от того, какие сферы сейчас активны. Всего есть 10 способностей. Есть 2 основных стиля игры: через 1 и 2 способности или через 3 способность. Играть через 1 и 2 способности требует большей концентрации.';
    else if (hero_name == 'LICH')
      $("hero_description").innerHTML = 'Лич - герой поддержки. 1 способность наносит урон врагу и замедляет его. 2 способность - щит, который можно применить на союзное существо, постройку и героя, чтобы цель получала меньше урона от атак на 50%, так-же раз в секунду замедляет врагов. 3 способность притягивает врагов, запрещая ему передвигаться, атаковать, применять способности и предметы. Ультиейт - выпускает большой "чайник", который наносит огромный урон, отскакивает во врагов, увеличивая урон за каждый отскок, замедляет их. Хорошо работает в комбинации с aghanims shard, который дарует новую способность: ICE SPIRE. Позволяет поставить огромную ледяную постройку, которая замедляет в большом радиусе, так-же ультимейт может отскочить на эту способность.';
    else if (hero_name == 'ORACLE')
      $("hero_description").innerHTML = 'Оракл - герой поддержки, который хилит своих союзников. 1 способность снимает негативные эффекты с союзников и положительные эффекты с врагов, накладывая оцепенение в радиусе(оцепенение не действует на союзников). 2 способность даёт союзникам 100% сопротивлении магии, а врагам запрещает атаковать. 3 способность наносит урон, и постепенно восстанавливает здоровье, примечание: суммарное восстановление здоровья больше, чем нанесённый им урон, так что используйте на врагов всегда в комбинации с 1 способностью. Ультимейт откладывает любой урон и любое лечение на 7/8.5/10 секунд в зависимости от уровня ультимейта. Спустя это время оно нанесёт урон, но восстановит здоровье вдвое больше, чем это было-бы без применения ультимейта. Так-же развеивает негативные эффекты.';
    else if (hero_name == 'RUBICK')
      $("hero_description").innerHTML = 'Рубик - герой поддержки, сила которого зависит от противников, а точнее от их способностей. Сборка может менятся в зависимости от героев врага. 1 способность позволяет поднять врага и бросить через определённое время в выбранную точку. Враги в небольшом радиусе так-же получат оглушение от приземление союзника. 2 способность наносит урон и уменьшает урон от атак у цели и врагов, на которых перескочила эта способность. 3 способность пассивно увеличивает дальность применения заклинаний и урон от заклинаний. Ультимейт позволяет украсть последнюю применённую способность врага. Некоторые способности врага невозможно украсть.';
    else if (hero_name == 'IO')
      $("hero_description").innerHTML = 'Висп - герой поддержки, который связывается с союзником, лечит и усиливает его. 1 способность позволяет ускорить вас и союзника в связке, так-же вы будете передватать всё восстановленное вами хп и ману союзника. 2 способность поможет вам фармить и наносить урон врагам. 3 способность ускоряет вашу скорость атаки и скорость атаки союзника, а так-же даёт доп. урон от заклинаний. Ультимейт позволяет вам и связанному с вами союзником переместиться на любую точку карты с задержкой. Спустя 12 секунд вы возвращаетесь на начальную точку.';
    else if (hero_name == 'MIRANA')
      $("hero_description").innerHTML = 'Мирана - герой поддержки, который ходит по всем линиям, помогая убить противников. 1 способность призывает звёзды, которые падают на всех существ в большом радиусе вокруг Мираны, а существу, который был ближе всего к Миране, упадёт 2 звезды. 2 способность - стрела. Мирана выпускает большую стрелу, которая если попадёт в крипа, сразу убьёт его(не убивает древних крипов, рошана и существ по типу медведя Lone Druid, големов Warlock и т.д.). При попадании во врага наносит урон и оглушает в зависимости от дальности полёта стрелы. 3 способность позволяет миране быстро переместится на небольшое расстояние и перепрыгнуть возвышенности. При покупке aghanims shard даёт 1 дополнительный заряд к 3 способности. Ультимейт делает союзных героев невидимыми, что позволяет как и спасти союзника, так и неожиданно на врагов.';
    else if (hero_name == 'WINDRANGER')
      $("hero_description").innerHTML = 'Врка - мид герой. Быстро убивает нужную цель в драке. Сильна на ранней стадии за счёт 2 способности, а в средине или лейт стадии игры из-за своего ультимейта. 1 способность позволяет оглушить цель на короткий промежуток, если рядом не было дерева или вражеского существа/героя, если же рядом был кто-то, оглушится не только цель, но и тот, кто стоял позади цели. 2 способность выпускает стрелу после короткой подготовки, которая наносит много урона и проходит сквозь других существ. Проходя через каждое существо уменьшает урон. 3 способность ускоряет героя и позволяет уклонятся от всех атак героев. Ультимейт позволяет атаковать выбраную цель с сильно увеличенной скоростью атаки, но теряя урон';
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
    else if (hero_name == 'LEGION COMMANDER')
      return [
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/desolator.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/crimson_guard.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/basher.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/silver_edge.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/greater_crit.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/nullifier.png",
        "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/items/overwhelming_blink_lg.png"

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