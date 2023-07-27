function uploadHeroDescription (hero_name) {
    if (hero_name == 'ALCHEMIST')
      $("hero_description").innerHTML = 'Алхимик - герой 1 позиции, который выигрывает за счёт перевеса в золоте, артефактах и опыте. Имеет врождённую способность, которая позволяет ему получать больше золота с убийства крипов и рун богатства. Поскольку его ультимейт уменьшает базовое время атаки, на него хорошо смотряться артефакты, которые дают ему скорость атаки, такие как:"Moon Shard, Assault Cuirass, Butterfly". Assault cuirass особенно хороша, ведь она даёт алхимику всё, что ему нужно, а именно скорость атаки и урон(урон потому что аура от Assault cuirass уменьшает броню врагам и вражеским постройкам) Таланты: 10 уровень: +1 к снижению брони от Acid spray, 15 уровень: Acid spray даёт броню союзников, 20 уровень: -0.1сек. от интервала атак у Chemical Rage, 25 уровень: +50 к скорости перед. от Chemical rage.' ;
    else if (hero_name == 'AXE')
      $("hero_description").innerHTML = 'Акс - герой 3 позиции, разчитаный на иннициацию. Изначально имеет не так много брони, что компенсируется его 1 способностью, которая при активации даёт много брони и заставляет врагов поблизости атаковать его. Хорошо работает в комбинации с 3 пассивной способностью, которая заставляет акса крутится, тем самым наносить чистый урон врагам в небольшом радиусе. Хорошо подходят ему blink dagger, blade mail, phase boots, vanguard(на линию). Его ультимейт позволяет мгновенно убить цель при определённом количестве здоровья врага. Таланты: 10 уровень: +8 к броне от Berserker`s Call, 15 уровень: +30 к урону от Counter helix, 20 уровень: +150 к урону от Culling blade, 25 уровень: +100 к радиусу Berserker`s call';
    else if (hero_name == 'BRISTLEBACK')
      $('hero_description').innerHTML = 'Брист - герой 3 позиции, есть 2 стиля игры: впитывать в себя весь урон, либо через урон с руки(кор позиция). Сейчас эффективней играть через танка. Пик силы - средина игры. Не стоит затягивать на нём игру. 1 способность герой выпускает слизь, которая замедляет скорость передвижения и уменьшает броню. 2 способность герой выпускает иголки, которые наносят урон. Жертвы получают доп. урон за каждое попадание иглами за последние 14 сек. 3 пассивная способность - герой получает меньше урона со спины и боков, и если герой получает урон в спину равный 225, он выпускает иглы от 2 способности. Если барьер превышает больше чем двоной урон барьера(225), он выпускает столько игл, сколько превысил барьер(получил 450 урона в спину - выпускает 2 иглы, 675 урона - 3 иглы и т.д.) Ультимейт - пассивная способность, которая увеличивает урон и скорость применения за каждую применённую способность. Таланты: 10 уровень: +1.5 маны в секунду, 15 уровень: +8%/4% снижению урона сзади/сбоку от Bristleback, 20 уровень: +20 к доп. урону от Quill Spray, 25 уровень: +12% к ванпиризму заклинаниями.';
    else if (hero_name == 'CENTAUR WARRUNNER')
      $('hero_description').innerHTML = 'Кентавр - герой 3 позиции, который расчитан на получение урона и покупки аур и предметов, помогающие кор героям. Подезен на всех стадиях игры. 1 способность оглушает врагов неподалёку от героя. 2 способность наносит урон как и врагу в небольшом радиусе, так и самому герою. Урон зависит от силы кентавра. Улучшается aghanim`s shard: за каждое попадание по вражеским героям увеличивает силу кентавра на 10%(максимум до 50%). 3 пассивная способность наносит урон, когда кентавра атакуют. Урон зависит от силы кентавра. Ультимейт - кентавр и его союзники перемещаются с максимльной скоростью, получая возможность проходить сквозь врагов. Есл наступить на врага, он получит урон в зависимости от силы кентавра и сильно замедлится. Таланты: 10 уровень: +5 здоровья в секунду, 15 уровень: +15 к силе, 20 уровень: -25сек. перезарядки Stampede, 25 уровень: Retaliate становится аурой.';
    else if (hero_name == 'EARTHSHAKER')
      $("hero_description").innerHTML = 'Шейкер - герой как и поддержки, так может быть и мидером. Герой иннициации, который так-же может разделить противников друг от друга. 1 способность создаёт разлом, который блокирует проход всем. Если вы купите аганим шард, вы сможете ходить по этому разлому. 2 Способность усилит вашу следующую атаку. 3 пассивная способность оглушит всех врагом в небольшом радиусе, когда вы примените одну из способностей. Ультимативная способность наносит урон в большом радиусе в зависимости от того, сколько существ было в радиусе ультимейта. Хорошо смотрится против героев, которые либо создают иллюзии, либо героев, которые призывают своих существ. Таланты: 10 уровень: +40 к базовому урону, 15 уровень: +50% к доп. урону от Enchanted totem, 20 уровень: +50к урону от эха у Echo Slam, 25 уровень: +200 к радиусу Aftershock';
    else if (hero_name == 'LEGION COMMANDER')
      $("hero_description").innerHTML = 'Легионка - герой 3 позиции, разчитаная на иннициацию в саппортов либо в кор-героев, у которых мало хп. 1 способность выпускает стрелы вокруг героя в большом радиусе, нанося урон в зависимости, сколько существ находится в этом радиусе. Так-же увиличивает скорость атаки. Можно применять во-время дуели. 2 способность применяет на цель сильное развеивание, увеличивает скорость передвижения и регенирацию здоровья. 3 пассивная способность позволяет нанести атаку в ответ на вражескую атаку с дополнительным лайфстилом. Атака наносится моментально. Эта атака может сработать не только на вашего обидчика. Ультимейт - герой вызывает на дуель вражеского героя. Победитель получает дополнительный урон от атак. Если применить дуель на иллюзию, урон не добавится. Если в дуели побеждаете вы, на вас применится ваша 2 способность автоматически. Таланты: 10 уровень: +8 к дополнительному урону от Duel, 15 уровень: +60 к урону за героя от Ovewhelmling odds, 20 уровень: +12% к шансу контратаки у Moment of courage, 25 уровень: Press the attack даёт 1.5 сек. невоспр. к эффектам.';
    else if (hero_name == 'PUDGE')
      $("hero_description").innerHTML = 'Пудж - герой как и 3 позиции, так и 4. Имеет несколько стилей игры, а именно либо врыватьтся в гущу драки, впитывать урон и наносить его в ответ, либо всех спасать и цеплять сапортов. Основная сборка расчитана на 3 позицию пуджа, а альтернативная на 4 позицию. 1 способность - пудж бросает хук, который притягивает врагов и союзников к себе, так-же наносит урон врагам. 2 способность наносит вокруг пуджа и самому пуджу переодический урон, замедляя врагов. 3 способность увеличивает силу пуджа, если вокруг него умер вражеский герой. При активации этой способности блокирует немного урона. Ультимейт - пудж начинает есть врага. Урон зависит от количества силы пуджа. Таланты: 10 уровень: +4 к броне, 15 уровень: +8% к ванпиризму заклинаний, 20 уровень: +0.75 действия Dismember, 25 уровень: урон/лечение от Dismember умножаются на 1.8х';    
    else if(hero_name == 'TIDEHUNTER')
      $("hero_description").innerHTML = "Тайд - герой 3 позиции. Всегда играет как иннициатор. Вариативность сборок не большая. Его, конечно сожно собрать в кор героя через урон с 3 способности, но это зачастую плохая идея, по этому этой сборки тут не будет. 1 способность - тайд призывает водяной поток, который наносит урон, замедляет и снижает броню цели. 2 способность - пассивно уменьшает входящий урон от атак врагов и крипов, а так-же при получении в течении 7 секунд определённое количество урона от атак, сбрасывает множество негативных эфектов. 3 способность - тайд взмахивает своим якорем, нанося увеличненный урон вокруг себя и снижая урон от атак врагов. Ультимейт - тайд призывает щупальца в огромном радиусе, которые наносят небольшой урон и оглушают всех врагов. Таланты: 10 уровень: +50 к урону от Anchor smash, 15 уровень: +120 к урону Gush, 20 уровень: Anchor smash действует на постройки, 25 уровень: +0.8 сек. оглушения от Ravage.";
    else if (hero_name == 'DROW RANGER')
      $("hero_description").innerHTML = 'Дровка - кор герой, который зависит как и от уровня, так и от золота. Медленно получает золото, так-что вы должны чётко понимать, где и как вам нужно фармить. Так-же герой очень зависит от позиции, от чего всегда перемещается в драке. 1 Способность добавляет замедляющий эфект к атаке, нанося дополнительный урон. 2 способность отталкивает врагов, и запрещая им применять способности. 3 способность выпускает 4 волны по 4 стрелы с эфектом 1 способности, нанося только базовый урон, но увеличеный. Ультимейт - пассивная способность, которая даёт дровке и всем героям дальнего боя в большом радиусе доп. ловкость, которая зависит от ловкости дровки. Так-же есть шанс сделать усиленную атаку, которая игнорирует базовую броню и наносит доп. урон. Усиленой атакой невозможно промахнуться Союзникам даётся только половина ловкости. Если к дровке подойдёт вражеский герой на близкое расстояние, эфект пасивки пропадёт, пропадёт ловкость и перестанут попадаться усиленные атаки. Способность отключается даже если враг невидим. Таланты: 10 уровень: +15 к урону от frost arrow, 15 уровень: -8 секунд к перезарядки Multishot, 20 уровень: +25% к урону от Multishot, 25 уровень: +3 к числу волн от Multishot';
    else if (hero_name == 'FACELESS VOID')
      $("hero_description").innerHTML = 'Войд - кор герой, который очень зависит от команды и коммуникации. Из-за его способностей одновременно и простой и сложный герой. Так-же из-за своих способностей может подстраиватся под опредлённых союзных и вражеских героев. 1 способность перемещает героя в выбранную точку, и восстанавливает здоровье, которое он потерял в последние 2 секунды. Является лечением, так-что может усиливатся предметами, по типу sange. 2 способность замедляет врагов и перезарядку их способностей. Способность вражеского героя не может до конца обновится под действием этой способности. Замедление зависит от того, сколько способностей применил вражеский герой до этого. 3 способность позволяет оглушить врага атакой, и нанести дополнительный магический урон. Ультимейт - большая сфера где останавливается время для всех существ, кроме самого войда и подконтрольных им существ. Останавливает перезарядку всех способностей и предметов, и так-же не позволяет закончится 2 способности, но только если враг находится под этой сферой. Не действует на курьеров. Таланты: 10 уровень: +6 к урону в секунду от time dilation, 15 уровень: -1сек. перезарядки time walk, 20 уровень: +70 к уроту от time lock, 25 уровень: +20% к универсальному уклонению. Сначала нужно прокачать талант 15 уровня, а потом на 16 уровне уже качать таланты 10 уровня.';
    else if (hero_name == 'JUGGERNAUT')
      $("hero_description").innerHTML = 'Джагер - герой кор позиции. Основная задача - прыгнуть в спину врагам и либо убить их с помощью ультимейта, либо с помощью 1 способности и атак. 1 способность заставляет героя крутится, нанося магический урон вокруг героя, развеивая с него некоторые негативные эффекты и даёт ему невосприимчивость к эффектам и +80% сопротивлении к магии. 2 способность устанавливает передвигаемый вард, который хилит союзников в небольшом радиусе в % от их максимально количества хп. 3 пассивная способность позволяет герою наносить с небольшим шансом усилинные атаки. Ультимейт делает его неуязвимым, позволяет ему прыгать от врага к врагу, атакуя их. Так-же может атаковать и одну цель. Если цель умерла и больше ненакого перескочить, действие ультимейта заканчивается, и герой снова становится уязвимым. Длительность 3.5 секунды.';
    else if (hero_name == 'LUNA')
      $("hero_description").innerHTML = 'Луна - кор герой, который быстро зарабатывает золото, засчёт этого и сильнее в средине игры, чем другие герои. Так-же очень хорош в разрушений построек. В конце игры уже не такой сильный, как остальные герои, которые разчитаны на более позднюю игру, так-что не стоит тянуть за этого героя, иногда достаточно пару предметов, чтобы закончить игру. 1 способность луна выпускает во врага луч, который наносит урон и ьглушает цель. Улучшается с Aghanim`s shard: за каждый такой луч увеличивает урон от атак у героя. 2 способность атаки отскакивают, и каждый раз уменьшается урон. Отскоки так-же работают на постройки, в том числе и аванпосты. 3 способность пассивно увеличивает урон от атак и обзор ночью у луны. Ультимейт: выпускает вокруг луны лучи от 1 способности, но они не оглушают(с талантом на 25 уровне оглушают на 0.25 секунд) По одной цели может сработать не больше 5 лучей. Улучшается Aghanim`s scepter: можно применить на облать или на союзника, увеличивает количество лучей, скорость их срабатывания и убирает ограничения на кол-во лучей по одной цели. Таланты: 10 уровень: -8% снижения урона за отскок у moon glaives, 15 уровень: -2сек. перезарядки lucent beam, 20 уровень: 2 атаки по цели lucent beam, 25 уровень: лучи от eclipse оглушают на 0.25сек.';
    else if (hero_name == 'MEDUSA')
      $("hero_description").innerHTML = 'Медуза - кор герой, у которого мана так-же является эффективным хп. Чем дальше в лейт, тем сильнее становится медуза. 1 способность добавляет ещё 4 стрелы к атаке, но при этом каждая стрела наносит меньше урона от атак. С талантом на 25 уровне на стрелы от этой способности так-же будут работать модификаторы способностей. 2 способность выпускает маленькую змейку, которая отскакивет по крипам и врагам, с каждым разои наносит всё больше и больше урона. Так-же эта способность восстанавливет ману в зависимости от максимальной маны цели, но не забирает её у врагов. Улучшается Aghanim`s scepter и Aghanim`s shard. Aghanim`s shard: когда на медузу используют направленую способность, она выпускает во врага змею, которая не отскакивает в отсальных врагов. Aghanim`s scepter: змея так-же накладывает эффект от ультимейта, чем больше змея отскочила, тем больше она оглушит. 3 пассивная способность - щит медузы блокирует 98% урона, отнимая у медузы ману. Ультимейт - ускоряет героя, оглушая всех вражеских героев, которые на неё будут смотреть в течении 2-х сегунд. Окаменевшие враги будут получать меньше магического урона, но больше физического. Таланты: 10 уровень:  +15% к замедлению от Mystic snake, 15 уровень: +10% к урону от Split shot, 20 уровень: +2сек. к длительности Stone gaze, 25 уровень: Эффекты атаки действуют на все цели от Split shot';
    else if (hero_name == 'MONKEY KING')
      $("hero_description").innerHTML = 'МК - герой как и кор, так и мид позиции. Агрессивный кор, который не особо нуждается в золоте. Но так-же может играть как жадный кор, зависит от вражеских и союзных героев. 1 способность наносит увеличенный урон по линии. 2 способность позволяет запрыгнуть на дерево и спрыгнуть с него, нанеся урон в области и замедля врагов. Замедление и урон зависят от того, насколько долго герой подготавливал прыжок. Спрыгнуть так-же можно и просто начать идти куда-либо, но урона и замедления не будут. Если срубить дерево, на котором сидит мк, он оглушится на длительное время. 3 пассивная способность позволяет через 4(3 с талантом) удара усилить следующие 4 атаки и добавить к ним ванпиризм. Так-же работает с 1 способностью. Ультимейт призывает арену, в которой находятся его клоны. Клоны наносят полный урон героя, только некоторые предметы могут сработать пассивно у этих копий. Копии нельза никак убить. Копии не атакуют врагов, которые находятся вне арены, даже если подойти к копиям впритык. Если герой выйдет из арены, она тут-же исчезнет. Таланты: 10 уровень: +0.3сек. к оглушению от Boundless strike, 15 уровень: +450 к дальности пименения Tree dance, 20 уровень:  Primal Spring без перезарядки, 25 уровень: +1 круг солдат от Wukong`s Command, сначала прокачиваем талант 15 уровня, а потом на 16 уровне прокачиваем талант 10 уровня';
    else if (hero_name == 'MORPHLING')
      $("hero_description").innerHTML = 'Морф - лейт кор герой, который сильно зависит от реакции, позиционки и понимания игры. Основная сила героя в его атрибутах и манипуляция этими атрибутами. 1 способность герой превращается в волну и перемещается в выбраном направлении, нанося всем задетым врагам урон. С талантом герой может атаковать задетые цели. 2 способность делится на 2 части: 1 наносит урон в зависимости от ловкости героя, а 2 часть оглушает цель в зависимости от кол-во силы героя. при использовании одной из этой способности, противоположная способность уходит на перезарядку в 3 секунды. 3 способность позволяет увеличить один из атрибутов, потеряв противоположную. Изменяемые атрибуты это сила и ловкость. Ультимейт - герой превращается в другого рважеского героя, копируя все его способности, кроме ультимейта. Изменяет свои атрибуты в зависимости от цели ультимейта. Улучшение от Aghanim`s scepter: крадёт небольшую часть от основного атрибута у выбраной цели. У универсалов ворует все 3 атрибута(5% от силы, ловкости и интеллекта цели). Увеличивает длительность перемещения. Таланты: 10 уровень: +250 к дальности применения Waveform, 15 уровень: +16сек. действия Morph, 20 уровень: атаки во время Waveform, 25 уровень: -40% от перезарядки Waveform';
    else if (hero_name == 'PHANTOM ASSASSIN')
      $("hero_description").innerHTML = 'Фантомка - кор герой с ближним типом атаки, который зависит от предметов. Легко может убивать саппортов без предметов на защиту. Её основная цель - быстро найти и так-же быстро убить цель в средине игры. Есть 2 стиля игры: 1 это делать больше упор на убийстве крипов, а 2 - делать упор на убийства врагов. 1 способность, кинжал, позволяет нанести урон на расстоянии и замедлить цель. Урон зависит от урона атак героя. 2 способность позволяет "прыгнуть на врага", получая доп. скорость атаки и ванпиризм от атак. 3 способность позволяет уклонится от атак пассивно, и при активации стать невидимым. Невидимость расскрывается от вражескив героев, вражеских зданий и рошана. Нельзя увидеть даже если поставить sentry ward. Ультимейт - пассивная способность, которая позволяет герою нанести критический урон при атаке. Таланты: 10 уровень: -2сек. к перезарядке Stifling dagger, 15 уровень: +250 к дальности применения Phantom strike, 20 уровень: +20% к урону от атаки у Stifling dagger, 25 уровень: Stifling dagger по 3 целям';
    else if (hero_name == 'PHANTOM LANCER')
      $("hero_description").innerHTML = 'Лансер - кор герой. Его основная сила в его иллюзиях. 1 способность - герой бросает копьё, нанося урон, замедляя его и призывая возле цели иллюзию. Улучшается Aghanims scepter. Копьё отскакивает, нанося такой-же урон и призываю такую-же иллюзию. 2 способность позволяет лансеру пропасть с карты на секунду, затем вернуться с 2 иллюзиями. Первая иллюзия получает в 5 раз больше урона и наносит 80% урон от атак лансера, а вторая иллюзия не наносит урон от атак, но получает столько же урона, сколько и основной герой. Если до применения этой способности уже были ваши иллюзии, они так-же появятся рядом с вами. 3 способность позволяет совершить рывок на врага, при этом увеличивая ловкость героя. Ультимейт - пассивная способность, которая при атаке имеет шанс призвать иллюзию героя. Атаки иллюзий тоже могут призвать иллюзии, но с меньшим шансом. Улучшается aghanims shard: позволяет применить эту способность, чтобы призвать иллюзию, а самому герою стать невидимым. Таланты: 10 уровень: +50 к урону от Spirit lance, 15 уровень: -2сек. перезарядки Spirit lance, 20 уровень: +10% к урону иллюзий от Juxtapose, 25 уровень: шанс в 24% нанести атакой 200% урона';
    else if(hero_name == 'RAZOR')
      $("hero_description").innerHTML = 'Разор - довольно гибкий кор герой, есть много вариантов сборок, через урон с руки, быстрый снос вражеских строений или через танка. Сейчас он редко играется, особенно через танка. я бы рекомендовал играть через альтернативный билд, он мне нравится больше. 1 способность создаёт волну, которая замедляет задетых врагов. Замедление и урон срабатывают 2 раза: в начале и при возврате. 2 способность выкачивает урон у вражеского героя либо иллюзии. Если враг выбежит за радиус действия 2 способности, выкачивание урона прекратится. Герой бьёт во-время того, как выкачивает урон. 3 способность ускояет скорость передвижения разора пассивно. Ультимейт призывает шторм, который бьёт врагов, снижая их броню за каждый удар. Если применить рефрешер, будет 2 тучи, которые бьют по отдельности. Молнии от ультимейта бьют в приоритете того, у кого выкачивает урон разор. При покупке аганима эта туча может бить строение, и одновременно атаковать 2 цели. Таланты: 10 уровень: +14 к ловкости, 15 уровень: +5 урона в секунду от Static link, 20 уровень: -0.1сек. интервала разрядов Eye of the storm, 25 уровень: Static link крадёт скорость атаки';
    else if (hero_name == 'TEMPLAR ASSASSIN')
      $("hero_description").innerHTML = 'Темпларка - зачастую мидер, основной стиль игры - прыгнуть за спину врагам и убить саппортов за короткий промежуток времени. 1 способность - герой создает щит, который поглощает весь входящий урон, а также дает ей дополнительный урон для следующей атаки. Эти эффекты действуют ограниченное число раз и считаются раздельно. 2 способность делает героя невидимым, усиливая следующую атаку, которая снизит броню врага. Если двинутся, невидимость пропадёт а следующая атака не усилится. 3 способность увеличивает дальность атаки и даёт возможность наносить урон врагам, которые находятся сзади от цели, которую ыы атакуете. Урон уменьшается за каждого врага на 5%. Ультимейт - герой ставит невидимою ловушку, которую можно активировать, чтобы нанести урон в небольшой области и замедлить врагов. Замедление и урон зависят от того, насколько близко вы были к ловушке. Улучшаение от aghanims shard: взрыв так-же накладывает безмолвие. Улучшаение от aghanims scepter: позволяет телепортироваться на ловушку. После телепортации на ловушку, она взрывется. Телепортирование не сбивает эффекты от 2 способности. Таланты: 10 уровень: +25 к доп. урону от refraction, 15 уровень: refraction можно применять в оглушении, 20 уровень: Meld развеивает отрицательные эффекты, 25 уровень: +7 к числу эффектов refraction';
    else if (hero_name == 'INVOKER')
      $("hero_description").innerHTML = 'Инвокер - мидер, один из сложнейших героев в доте. Имеет больше всего способностей в игре. Имеет 3 сферы, и может призвать эти 3 сферы. Сферы могут быть одинаковыми и каждый будет давать вам бонусы. 1 способность - Quas. Сфера, которая за каждый уровень прокачки даёт +2 к силе, когда сфера актина даёт доп. к регенирации хп. 2 способность - Wex. за каждый уровень прокачки даёт +2 к ловкости. Когда сфера активна даёт бонус к скорости передвижения. 3 способность - Exort. Даёт +2 к интеллекту за каждый уровень способности. Когда сфера активна даёт доп. урон от атак. Ультимейт при нажатии дарует новую способность, в зависимости от того, какие сферы сейчас активны. Всего есть 10 способностей. Есть 2 основных стиля игры: через 1 и 2 способности или через 3 способность. Играть через 1 и 2 способности требует большей концентрации. Таланты: 10 уровень: -6сек. перезарядки tornado, 15 уровень: -8сек. перезарядки cold snap, 20 уровень: +2 к числу метеоритов от Chaos meteor, 25 уровень: Deafening blast вокруг героя.';
    else if (hero_name == 'LICH')
      $("hero_description").innerHTML = 'Лич - герой поддержки. 1 способность наносит урон врагу и замедляет его. 2 способность - щит, который можно применить на союзное существо, постройку и героя, чтобы цель получала меньше урона от атак на 50%, так-же раз в секунду замедляет врагов. 3 способность притягивает врагов, запрещая ему передвигаться, атаковать, применять способности и предметы. Ультиейт - выпускает большой "чайник", который наносит огромный урон, отскакивает во врагов, увеличивая урон за каждый отскок, замедляет их. Хорошо работает в комбинации с aghanims shard, который дарует новую способность: ICE SPIRE. Позволяет поставить огромную ледяную постройку, которая замедляет в большом радиусе, так-же ультимейт может отскочить на эту способность. Таланты: 10 уровень: +150 к радиусу и урону Frost blast, 15 уровень: +0.4сек. действия Sinister gaze, 20 уровень: +4сек. действия Frost Shield, 25 уровень: Неограниченное число отскоков у Chain Frost';
    else if (hero_name == 'LION')
      $("hero_description").innerHTML = 'Лион - герой поддержки, может как и инициировать, так и стоять сзади и применять способности. Имеет 2 стиля игры: через полную помощь команде, контроль и инициацию либо через магический урон. 1 способность лион создаёт колючки, которые наносят урон и оглушают врагов. 2 способность превращает выбраного врага в лягушку, от чего она не может ни бить, ни испольковать предметы и способности. 3 способность передаёт вражескую ману лиону, предачу маны можно прервать. Ультимейт - наносит выбраному врагу колосальный урон, и если враг умер в течении 3 секунд после применения на него ульты, лион усилит ультимейт, он будет наносить больше урона. Наносит урон с задержкой в 0.2 секунды, так-что урон можно избежать способностями по типу мисчифа мк и т.д. Таланты: 10 уровень: +65 к урону от Earth spike, 15 уровень: +70 к макс. здоровью за убийство от Finger of death, 20 уровень: +20 к урону за убийство у Finger of death, 25 уровень: hex применяется по области радиусом 250';
    else if (hero_name == 'MUERTA')
      $("hero_description").innerHTML = 'Муерта - кор герой, который силён за счёт предметов и опыта, но слабее чем некоторые герои в более поздней стадии игры, так-что не стоит особо затягивать с ней игру. 1 способность - муерта стреляет большим снарядом во врага или дерево, чтобы нанести урон, а отскочивший снарят не только нанесёт урон, но и испугает вражеского героя, который будет бежать в ту сторону, куда летела отскоченая пуля. 2 Способность муерта вызывает поле, в котором кружатся 4 духа в небольшом радиусе. Само поле будет замедлять передвижение и скорость атаки врагов, а духи будут наносить небольшой урон и обезмалвливать врагов. 3 способность позволяет с огромным шансом нанести ещё одну атаку в случайного врага(приоритетно стреляет в героев, затем в крипов или же здания). Поскольку дополнительная атака считается как способностью, ей можно восстановиться как и от Satanic, так и от Bloodstone. Ультимейт - муерта становится невосприимчива к атакам врага, наносит магический урон от атак и применяет нормальное развеивание. Таланты: 10 уровень: +80 урона от dead shot, 15 уровень: +35 к урону, 20 уровень: +20% к срабатыванию gunslinger, 25 уровень: +25% к сопротивлению магии';
    else if (hero_name == 'ORACLE')
      $("hero_description").innerHTML = 'Оракл - герой поддержки, который хилит своих союзников. 1 способность снимает негативные эффекты с союзников и положительные эффекты с врагов, накладывая оцепенение в радиусе(оцепенение не действует на союзников). 2 способность даёт союзникам 100% сопротивлении магии, а врагам запрещает атаковать. 3 способность наносит урон, и постепенно восстанавливает здоровье, примечание: суммарное восстановление здоровья больше, чем нанесённый им урон, так что используйте на врагов всегда в комбинации с 1 способностью. Ультимейт откладывает любой урон и любое лечение на 7/8.5/10 секунд в зависимости от уровня ультимейта. Спустя это время оно нанесёт урон, но восстановит здоровье вдвое больше, чем это было-бы без применения ультимейта. Так-же развеивает негативные эффекты. Таланты: 10 уровень:, 15 уровень:, 20 уровень:, 25 уровень:.';
    else if (hero_name == 'OUTWORLD DESTROYER')
    $("hero_description").innerHTML = "ОД - мидер с агрессивным стилем игры. Все его способности хорошо сынергируют и актуальны на всех стадиях игры. 1 Способность дополнительно наносит чистый урон от максимальной маны при атаке, тратя её. 2 способность делает цель неуязвимым и ворует у него ману. Под действием этой способности будет наносится урон от ультимейта. 3 способность при использовании одной из способностей восстановит большую долю от максимальной маны героя. Ультимейт наносит урон в большом радиусе. Урон зависит от разницы в мане.  На стадии лайнинга нужно постоянно прятать врага во 2 способность и пытаться бить его с помощью 1 способности. В независимости от выбранного айтембилда, всё-равно в конце игры у вас будет либо witch blade, либо revenant`s broach, а meteor hammer будет продан. Таланты: 10 уровень: +20 к скорости атаки, 15 уровень: +100 к дальности применения Astral Imprisonment, 20 уровень: +0.15 к множителю разницы в мане у Sanity`s Eclipse, 25 уровень: +2% к урону от текущей маны у Arcane orb.";
    else if (hero_name == 'RUBICK')
      $("hero_description").innerHTML = 'Рубик - герой поддержки, сила которого зависит от противников, а точнее от их способностей. Сборка может менятся в зависимости от героев врага. 1 способность позволяет поднять врага и бросить через определённое время в выбранную точку. Враги в небольшом радиусе так-же получат оглушение от приземление союзника. 2 способность наносит урон и уменьшает урон от атак у цели и врагов, на которых перескочила эта способность. 3 способность пассивно увеличивает дальность применения заклинаний и урон от заклинаний. Ультимейт позволяет украсть последнюю применённую способность врага. Некоторые способности врага невозможно украсть.';
    else if (hero_name == 'IO')
      $("hero_description").innerHTML = 'Висп - герой поддержки, который связывается с союзником, лечит и усиливает его. 1 способность позволяет ускорить вас и союзника в связке, так-же вы будете передватать всё восстановленное вами хп и ману союзника. 2 способность поможет вам фармить и наносить урон врагам. 3 способность ускоряет вашу скорость атаки и скорость атаки союзника, а так-же даёт доп. урон от заклинаний. Ультимейт позволяет вам и связанному с вами союзником переместиться на любую точку карты с задержкой. Спустя 12 секунд вы возвращаетесь на начальную точку. Таланты: 10 уровень: +15 к урону от атак у цели Teather, 15 уровень: +6% к доп. скорости передвижения от Teather, 20 уровень: -25сек. перезарядки Relocte, 25 уровень: атаки вместе с целью Teather.';
    else if (hero_name == 'MIRANA')
      $("hero_description").innerHTML = 'Мирана - герой поддержки, который ходит по всем линиям, помогая убить противников. 1 способность призывает звёзды, которые падают на всех существ в большом радиусе вокруг Мираны, а существу, который был ближе всего к Миране, упадёт 2 звезды. 2 способность - стрела. Мирана выпускает большую стрелу, которая если попадёт в крипа, сразу убьёт его(не убивает древних крипов, рошана и существ по типу медведя Lone Druid, големов Warlock и т.д.). При попадании во врага наносит урон и оглушает в зависимости от дальности полёта стрелы. 3 способность позволяет миране быстро переместится на небольшое расстояние и перепрыгнуть возвышенности. При покупке aghanims shard даёт 1 дополнительный заряд к 3 способности. Ультимейт делает союзных героев невидимыми, что позволяет как и спасти союзника, так и неожиданно на врагов. Таланты: 10 уровень: -2сек. перезарядки Sacred Arrow, 15 уровень: Moonlight Shadow даёт +20% к уклонению, 20 уровень: -20сек. перезарядки Moonlight shadow, 25 уровень: +2 стрелы у Sacred Arrow';
    else if (hero_name == 'WINDRANGER')
      $("hero_description").innerHTML = 'Врка - мид герой. Быстро убивает нужную цель в драке. Сильна на ранней стадии за счёт 2 способности, а в средине или лейт стадии игры из-за своего ультимейта. 1 способность позволяет оглушить цель на короткий промежуток, если рядом не было дерева или вражеского существа/героя, если же рядом был кто-то, оглушится не только цель, но и тот, кто стоял позади цели. 2 способность выпускает стрелу после короткой подготовки, которая наносит много урона и проходит сквозь других существ. Проходя через каждое существо уменьшает урон. 3 способность ускоряет героя и позволяет уклонятся от всех атак героев. Ультимейт позволяет атаковать выбраную цель с сильно увеличенной скоростью атаки, но теряя урон. Таланты: 10 уровень: -2сек. перезарядки Shackleshot, 15 уровень: -3сек. перезарядки Windrun, 20 уровень: -12% снижения урона Focus fire, 25 уровень: -20сек. перезарядки при убийстве жертвы Focus fire.';
  }