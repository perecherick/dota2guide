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

function change() {
    const hero = $('hero');
    const item = $('item');
  
    if (hero.classList.contains('high_z')) {
      hero.classList.remove('high_z');
      hero.classList.add('low_z');
      item.classList.remove('low_z');
      item.classList.add('high_z');
      $("allheroes").style.display="none";
      $("allitems").style.display="block";
    } else {
      hero.classList.remove('low_z');
      hero.classList.add('high_z');
      item.classList.remove('high_z');
      item.classList.add('low_z');
      $("allheroes").style.display="block";
      $("allitems").style.display="none";
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
    uploadHeroItems(hero_name);
    uploadHeroItems2(hero_name);
    uploadHeroSkillBuild(hero_name);
    detail_img.src = this.src;
    $('hero_name').innerText = hero_name;
    
    // show window
    full_hero.classList.add('full_hero_visible');
    full_hero.classList.remove('full_hero_invisible');
    
    // set up listeners on the skill images
    setUpClickOnHeroSkills($("skill_build").getElementsByClassName("added_skills"));
}



function uploadHeroItems (hero_name) {
  let imageSources = getItemImageSourcesArray(hero_name);
  let itemContainers = $("recomended_items").getElementsByClassName("hero_item_container");
  
  for (let a = 0; a < imageSources.length; a++) {
    for(let b = 0; b < imageSources[a].length; b++){
      let img = document.createElement("img");
      img.src = linkStart + imageSources[a][b];
      img.classList.add("added_items");
      itemContainers[a].appendChild(img);
    }
  }
} 

function uploadHeroItems2 (hero_name) {
  let imageSources2 = getItemImageSourcesArray2(hero_name);
  let itemContainers2 = $("recomended_items_2").getElementsByClassName("hero_item_container");
  
  for (let a = 0; a < imageSources2.length; a++) {
    for(let b = 0; b < imageSources2[a].length; b++){
      let img = document.createElement("img");
      img.src = linkStart + imageSources2[a][b];
      img.classList.add("added_items");
      itemContainers2[a].appendChild(img);
    }
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
  // upload img
  $("skill_img").src = skillEl.src;

  // upload description
  $("skill_description").innerText = uploadSkillDescription(skillEl.getAttribute("skill_name"));

  // show window
  $("skill_info_window").classList.add('skill_deatils_visible');
  $("skill_info_window").classList.remove('skill_deatils');
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

fullHero.addEventListener('mousedown', startDragging);
fullHero.addEventListener('touchstart', startDragging);

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