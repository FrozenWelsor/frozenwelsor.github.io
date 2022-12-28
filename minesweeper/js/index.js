let container = document.querySelector(`.container`)
let gameover = document.querySelector(`.gameover`)
function main(evt){
    let node = evt.target
    if (node.classList.contains(`item_closed`)){
        node.classList.toggle(`item_closed`)
    }
    if ( node.classList.contains(`item_bomb`)) {
        gameover.innerHTML = `Вы проиграли!`
    }
    if (gameover.innerHTML == `Вы проиграли!`) {
        container.removeEventListener(`click`, main)
    }
}
container.addEventListener(`click`, main)