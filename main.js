window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  //verificar de a seção passou dalinha
  //quais dads vou verificar
  
  //o topo da seção
  const sectionTop = section.offsetTop
  //a altura da seção
  const sectionHeigt = section.offsetHeight
  
  //o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

 // console.log ('O topo daseção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)


  //verificar se a base está abaixo da linha alvo
  //quais dads vou precisar?
  
  //a seção termina onde?
  const sectionEndAt = sectionTop + sectionHeigt

  //o final da seção passou da linha alvo?
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //limites da seção
 const sectionBounderies = 
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
 // o sinal ! serve para transformar o buliano q era falso em verdadeiro, se eleera falso será tansformado em verdadeiro
                  
          
  const sectionId = section.getAttribute('id')       
  const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)


  menuElement.classList.remove('active')
  if (sectionBounderies) {
    menuElement.classList.add('active')
  }
}









function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header,
#services .cards,
#about,
#about header,
#about .content`)
