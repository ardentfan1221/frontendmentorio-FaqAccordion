const icons = document.querySelectorAll('.question')
const ans = document.querySelectorAll('.qnaswers')
const imgs = document.querySelectorAll('.icon-img')
const paras = document.querySelectorAll('.bold')

for(let i=0; i<icons.length; i++) {
    icons[i].addEventListener('click', ()=> {
        showchecked()
        ans[i].classList.toggle('hidden')
        imgs[i].classList.toggle('rotated')
        paras[i].classList.toggle('not-bold')
    })
}

function showchecked() {
    for(let i=0; i<icons.length; i++) {
        ans[i].classList.add('hidden')
        imgs[i].classList.remove('rotated')
        paras[i].classList.remove('not-bold')
    }
}

