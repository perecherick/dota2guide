var $=function(id){
	return document.getElementById(id);
}

const linkStart = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/";

$('change_items').onclick = function() { 
  changeChangeScrollButtonStatus(this); 
  changeHeroItemsSet();
 }

 function changeChangeScrollButtonStatus (el) { 
  setTimeout(() => { 
    
   if (el.classList.contains('active')) 
    el.classList.remove('active'); 
   else el.classList.add('active'); 
  
  },); 
 }
 
 $("change_to_hero").onclick = function() {
     $("allheroes").style.display = "block";
     $("allitems").style.display = "none";
 }

$("change_to_items").onclick = function() {
    $("allheroes").style.display = "none";
    $("allitems").style.display = "block";
}

let arrow = $("button");
let menu = $("side_menu");
let shadow = $("shadow");
let theme = $("theme");
let line1 = $("line_1")
let line2 = $("line_2")
let line3 = $("line_3")
let changeHero = $("change_to_hero");
let changeItems = $("change_to_items");
let th2 = document.getElementsByClassName("h2");
let first_layer = document.getElementsByClassName("first_layer");
let second_layer = document.getElementsByClassName("second_layer");
let third_layer = document.getElementsByClassName("third_layer");
let fourth_layer = document.getElementsByClassName("fourth_layer");
let animationTimeout;

arrow.onclick = function() {
  if (arrow.classList.contains("passive")) {
    shadow.style.display = "block";
    animationTimeout = setTimeout(function() {
      menu.classList.add("side_menu_animation_right");
      menu.classList.remove("side_menu_animation_left");
      arrow.classList.remove("passive");
      arrow.classList.add("clicked");
      menu.style.display = "block";
      shadow.classList.add("animation_on");
      shadow.classList.remove("animation_off");
      shadow.style.zIndex = "101";
    }, 1);
  } else {
    menu.classList.add("side_menu_animation_left");
    menu.classList.remove("side_menu_animation_right");
    arrow.classList.add("passive");
    arrow.classList.remove("clicked");
    shadow.classList.remove("animation_on");
    animationTimeout = setTimeout(function() {
      shadow.style.zIndex = "0";
      shadow.classList.add("animation_off");
      shadow.style.display = "none";
    }, 300);
  }
}

shadow.onclick = function() {
  arrow.click();
}

theme.onclick = function() {
  let sunUrl = "sun.png";
  let moonUrl = "moon.png";
  if(document.body.classList.contains("black")){
    document.body.classList.remove("black");
    document.body.classList.add("white");
    menu.style.backgroundColor = "#fff";
    line1.style.backgroundColor = "#181818";
    line2.style.backgroundColor = "#181818";
    line3.style.backgroundColor = "#181818";
    changeHero.style.backgroundColor = "#fff";
    changeHero.style.color = "#000";
    changeItems.style.backgroundColor = "#fff";
    changeItems.style.color = "#000";
    $("info_s").style.color = "#000";
    $("info_a").style.color = "#000";
    $("info_i").style.color = "#000";
    $("info_u").style.color = "#000";
    fullHero.style.backgroundColor = "#27262e";
    full_hero.style.backgroundColor = "#fff";
    $("hero_description").style.color = "#000";
    $("hero_name").style.color = "#000";
    for (i = 0; i < th2.length; i++){
      th2[i].style.color = "#000";
    }
    for (let a = 0; a < first_layer.length; a++) {
      first_layer[a].style.backgroundColor = "#D5D6CF";
    }
    for (let b = 0; b < second_layer.length; b++) {
      second_layer[b].style.backgroundImage = "linear-gradient(to top, rgb(214, 214, 214), #e5e6e7)";
    }
    for (let c = 0; c < third_layer.length; c++) {
      third_layer[c].style.backgroundColor = "#D5D6CF";
    }
    for (let d = 0; d < fourth_layer.length; d++) {
      fourth_layer[d].style.backgroundImage = "linear-gradient(to top, rgb(214, 214, 214), #e5e6e7)";
    }    
    theme.src = moonUrl;
  } else {
    document.body.classList.remove("white");
    document.body.classList.add("black");
    menu.style.backgroundColor = "#181818";
    line1.style.backgroundColor = "#fff";
    line2.style.backgroundColor = "#fff";
    line3.style.backgroundColor = "#fff";
    changeHero.style.backgroundColor = "#181818";
    changeHero.style.color = "#fff";
    changeItems.style.backgroundColor = "#181818";
    changeItems.style.color = "#fff";
    $("info_s").style.color = "#fff";
    $("info_a").style.color = "#fff";
    $("info_i").style.color = "#fff";
    $("info_u").style.color = "#fff";
    fullHero.style.backgroundColor = "#fff";
    full_hero.style.backgroundColor = "#27262e";
    $("hero_description").style.color = "#fff";
    $("hero_name").style.color = "#fff";
    for (i = 0; i < th2.length; i++){
      th2[i].style.color = "#fff";
    }
    for (let e = 0; e < first_layer.length; e++) {
      first_layer[e].style.backgroundColor = "#2a2930";
    }
    for (let f = 0; f < second_layer.length; f++) {
      second_layer[f].style.backgroundImage = "linear-gradient(to top, rgb(41, 41, 41), #1a1919)";
    }
    for (let g = 0; g < third_layer.length; g++) {
      third_layer[g].style.backgroundColor = "#2a2930";
    }
    for (let z = 0; z < fourth_layer.length; z++) {
      fourth_layer[z].style.backgroundImage = "linear-gradient(to top, rgb(41, 41, 41), #1a1919)";
    }    
    theme.src = sunUrl;
  }
}
 
const detail_img = $('detail');
const full_hero = $('full_hero');
const skill = $('skill');

function changeHeroItemsSet () {
  if(document.getElementsByClassName('recomended_items')[0].style.display == "none"){
    document.getElementsByClassName('recomended_items')[0].style.display = "grid";
    document.getElementsByClassName('recomended_items_2')[0].style.display = "none";
    $('change_items').innerText = "Основная сборка";
  }
  else{
    document.getElementsByClassName('recomended_items')[0].style.display = "none";
    document.getElementsByClassName('recomended_items_2')[0].style.display = "grid";
    $('change_items').innerText = "Альтернативная сборка";
  }
}


/* $("skill").onclick = function() {
  let skill_link = event.target.getAttribute("skill");
  
  uploadHeroDescription(skill_link);
  } */
  
let heroes = document.getElementsByClassName('hero');

for (let el of heroes)
el.onclick = function() {
  
  let hero_name = this.nextElementSibling.innerText;

  // upload data
  uploadHeroDescription(hero_name);
  uploadHeroItems(
    getItemImageSourcesArray(hero_name),
    $("recomended_items").getElementsByClassName("hero_item_container")
  );
  uploadHeroItems(
    getItemImageSourcesArray2(hero_name),
    $("recomended_items_2").getElementsByClassName("hero_item_container")
  );
  uploadHeroSkillBuild(hero_name);
  detail_img.src = this.src;
  $('hero_name').innerText = hero_name;

  // set up draging on line button
  fullHero.addEventListener('mousedown', function(e) {
    startDragging(e);
  });
  fullHero.addEventListener('mousedown', function(e) {
    startDragging(e);
  });
  
  $("hero_description").innerText = uploadHeroDescription(hero_name);

  // show window
  full_hero.classList.add('full_hero_visible');
  full_hero.classList.remove('full_hero_invisible');
  
  // set up listeners on the skill images
  setUpClickOnHeroSkills($("skill_build").getElementsByClassName("added_skills"));
} 

function uploadHeroItems (imageSources, itemContainers) {

  for (let a = 0; a < imageSources.length; a++)
    for(let b = 0; b < imageSources[a].length; b++){
      let img = document.createElement("img");
      img.src = linkStart + imageSources[a][b];
      img.classList.add("added_items");
      itemContainers[a].appendChild(img);
    }
}

function uploadHeroSkillBuild (hero_name){ // скилл билд
  let imageSkills = getSkillsImageSourcesArray(hero_name);
  for(let imgsrc of imageSkills)
    $("skill_build").insertAdjacentHTML("beforeend", `
      <img src="${linkStart + imgsrc}" class="added_skills" skill_name="${getSkillName(imgsrc)}">
    `);
}

function getSkillName(imgSrc) {
  var finalName = [];
  var allowCopy = false;

  for (let i = imgSrc.length - 1; i >= 0; i--) {

    if (imgSrc[i] == ".") {
      allowCopy = !allowCopy;
      continue;
    } else if (imgSrc[i] == "/") break;

    if (allowCopy) {
      finalName[finalName.length] = imgSrc[i];
    }
  }
  
  finalName.reverse();
  return finalName.join('');
}

function setUpClickOnHeroSkills(skillEls) {

  for (let i = 0; i < skillEls.length - 1; i++) {
    skillEls[i].onclick = function () {
      openSkillInfoWindow(this);
    }
  }
}

function openSkillInfoWindow(skillEl) {
  // upload img загрузка текста описания скила
  $("skill_img").src = skillEl.src;

  // upload description
  $("skill_description").innerText = uploadSkillDescription(skillEl.getAttribute("skill_name"));
  $("skill_name").innerHTML = uploadSkillName(skillEl.getAttribute("skill_name"));

  // show window
  $("skill_info_window").classList.add('skill_details_visible');
  $("skill_info_window").classList.remove('skill_details');
}

$('drag').onclick = function() {
  var heroDescription = $("hero_description");
  heroDescription.textContent = "";
  
  $("skill_build").innerHTML = "";
  
  let itemContainers = $("recomended_items").getElementsByClassName("hero_item_container");
  for(let i = 0; i < itemContainers.length; i++){
    itemContainers[i].innerHTML = "";
  }
  let itemContainers2 = $("recomended_items_2").getElementsByClassName("hero_item_container");
  for(let j = 0; j < itemContainers2.length; j++){
    itemContainers2[j].innerHTML = "";
  }
  
  $('full_hero').style.top = "100%"; 
  
  $('full_hero').classList.add('full_hero_invisible');

  setTimeout(() => {
    $('full_hero').classList.remove('full_hero_visible');
    $('full_hero').style.top = "0"; 
  }, 300);
}

let fullHero = $('drag');
let divfullHero = $('full_hero');
let startY = 15;
let isDragging = false;
let newTop = 0;

function startDragging(e) {
  if (e.target.id === 'drag') {
    isDragging = true;
    startY = e.clientY || e.touches[0].clientY;
    fullHero.style.cursor = 'grabbing';
    document.addEventListener('mousemove', dragElement);
    document.addEventListener('touchmove', dragElement);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
  }
}


function stopDragging() {
  isDragging = false;
  fullHero.style.cursor = 'grab';
  divfullHero.classList.add("full_hero_transition");
  
  if (newTop >= Number(divfullHero.clientHeight) * 0.5){
    $('drag').click();
  } else {
    divfullHero.style.top = "0";
  }
  
  // Удаляем обработчики событий, чтобы перестать перетаскивать элемент
  document.removeEventListener('mousemove', dragElement);
  document.removeEventListener('touchmove', dragElement);
  document.removeEventListener('mouseup', stopDragging);
  document.removeEventListener('touchend', stopDragging);
  setTimeout(()=>{
    divfullHero.classList.remove("full_hero_transition");
  },300);
}

function dragElement(e) {
  if (!isDragging) return;
  let newY = 0;
  if(isMobileDevice()) newY = e.touches[0].clientY;
  else newY = e.clientY;
  const deltaY = newY - startY;
  const currentTop = parseInt(window.getComputedStyle(fullHero).top, 10);
  newTop = currentTop + deltaY;

  // Проверяем, если новая позиция y меньше нуля, устанавливаем y-координату равной нулю
//  console.log(newY); 
  if (newTop < 0) {
    divfullHero.style.top = "0";
  } else {
    divfullHero.style.top = newTop + "px";
  }

  // Проверяем, если див достиг отметки в 1000 пикселей по y-координате, выполняем функцию back
  if (newTop > Number(divfullHero.clientHeight) - 75) {
    $('drag').click();
    stopDragging();
  }
  

  // Используем preventDefault(), чтобы предотвратить прокрутку страницы при касании на мобильных устройствах
  e.preventDefault();  
}

// Проверяем, если пользователь зашел с мобильного устройства
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$('drag2').onclick = function() {
  var skillDescription = $("skill_description");
  var skillName = $("skill_name");
  skillDescription.textContent = "";
  skillName = "";
  
  $('skill_info_window').style.top = "100%"; 
  
  $('skill_info_window').classList.add('skill_details');

  setTimeout(() => {
    $('skill_info_window').classList.remove('skill_details_visible');
    $('skill_info_window').style.top = "0"; 
  }, 300);
}

let fullHero2 = $('skill_info_window');
let startY2 = 0;
let isDragging2 = false;
let newTop2 = 0;

fullHero2.addEventListener('mousedown', startDragging2);
fullHero2.addEventListener('touchstart', startDragging2);

fullHero2.addEventListener('mousedown', startDragging2);
fullHero2.addEventListener('touchstart', startDragging2);

function startDragging2(e) {
  if (e.target.classList.contains('drag')) {
    isDragging2 = true;
    startY2 = e.clientY || e.touches[0].clientY;
    e.target.style.cursor = 'grabbing';
    document.addEventListener('mousemove', dragElement2);
    document.addEventListener('touchmove', dragElement2);
    document.addEventListener('mouseup', stopDragging2);
    document.addEventListener('touchend', stopDragging2);
  }
}

function stopDragging2() {
  isDragging2 = false;
  $('drag2').style.cursor = 'grab';
  fullHero2.classList.add('full_skill_transition');
  
  if (newTop2 >= Number(fullHero2.clientHeight) * 0.5) {
    $('drag2').click();
  } else {
    fullHero2.style.top = "0";
  }
  
  // Удаляем обработчики событий, чтобы перестать перетаскивать элемент
  document.removeEventListener('mousemove', dragElement2);
  document.removeEventListener('touchmove', dragElement2);
  document.removeEventListener('mouseup', stopDragging2);
  document.removeEventListener('touchend', stopDragging2);
  setTimeout(()=>{
    fullHero2.classList.remove("full_skill_transition");
  },300);
}

function dragElement2(e) {
  if (!isDragging2) return;
  let newY2 = 0;
  if(isMobileDevice2()) newY2 = e.touches[0].clientY;
  else newY2 = e.clientY;
  const deltaY2 = newY2 - startY2;
  const currentTop2 = parseInt(window.getComputedStyle($("drag2")).top, 10)
  newTop2 = currentTop2 + deltaY2;

  // Проверяем, если новая позиция y меньше нуля, устанавливаем y-координату равной нулю
  if (newTop2 < 0) {
    fullHero2.style.top = "0";
  } else {
    fullHero2.style.top = newTop2 + "px";
  }

  // Проверяем, если див достиг конца экрана -75 по y-координате, выполняем функцию back
  if (newTop2 > Number(fullHero2.clientHeight) - 75) {
    $('drag2').click();
    stopDragging2();
  }
  

  // Используем preventDefault(), чтобы предотвратить прокрутку страницы при касании на мобильных устройствах
  e.preventDefault();  
}

function isMobileDevice2() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}