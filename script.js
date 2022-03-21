const aboutLi = document.querySelector('.about')
const cosmeticsLi = document.querySelector('.cosmetics')
const priceListLi = document.querySelector('.priceList')
const portfolioLi = document.querySelector('.portfolio')
const reservationLi = document.querySelector('.reservation')
const logo = document.querySelector('.logo')

const reservationBtn = document.querySelector('.numberBtn')

const arrowToTopBtn = document.querySelector('.arrow')






 
const  moveToAbout =()=>{
    window.scrollTo({
        top:716,
        behavior: "smooth"
    })
}

const moveToCosmetics =()=>{
    window.scrollTo({
        top:1275,
        behavior:"smooth"
    })
}

const moveToPriceList =()=>{
    window.scrollTo({
        top:1950,
        behavior:"smooth"
    })
}

const moveToPortfolio =()=>{
    window.scrollTo({
        top:2490,
        behavior:"smooth"
    })
}

const moveToFooter =()=>{
    window.scrollTo({
        top:5000,
        behavior:"smooth"
    })

    setTimeout(moveBtn, 1500)
}


const moveToTop =()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
    
}

const moveBtn =()=>{
    reservationBtn.style.transform = "translateY(-95%)"
}
// const addShowClass =()=>{
//     arrowToTopBtn.classList.add('show')
// }

aboutLi.addEventListener('click', moveToAbout)

cosmeticsLi.addEventListener('click', moveToCosmetics)

priceListLi.addEventListener('click',moveToPriceList)

portfolioLi.addEventListener('click',moveToPortfolio)

reservationLi.addEventListener('click', moveToFooter)

arrowToTopBtn.addEventListener('click', moveToTop)

reservationBtn.addEventListener('click', moveBtn)

logo.addEventListener('click', moveToTop)

