const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, `A`, `B`, `C`, `D`, `E`, `F`]
const button = document.getElementById(`button`)
let firstBox = document.getElementById(`first-color-box`)
let firstCode = document.getElementById(`first-hex-code`)
let secondBox = document.getElementById(`second-color-box`)
let secondCode = document.getElementById(`second-hex-code`)
let thirdBox = document.getElementById(`third-color-box`)
let thirdCode = document.getElementById(`third-hex-code`)

function genRanNum(){
    let randomNum = Math.floor(Math.random() * 16)
    return randomNum
}

button.addEventListener(`click`, function(){
    let hexFirst = `#`
    for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
        let ranHex = hex[genRanNum()]
        hexFirst += ranHex
    }
    firstBox.style.backgroundColor = hexFirst
    firstCode.innerText = hexFirst

    let hexSecond = `#`
    for(let mySecondLoop = 0; mySecondLoop<6; mySecondLoop++){
        let ranHex = hex[genRanNum()]
        hexSecond += ranHex
    }
    secondBox.style.backgroundColor = hexSecond
    secondCode.innerText = hexSecond

    let hexThird = `#`
    for(let myThirdLoop = 0; myThirdLoop<6; myThirdLoop++){
        let ranHex = hex[genRanNum()]
        hexThird += ranHex
    }
    thirdBox.style.backgroundColor = hexThird
    thirdCode.innerText = hexThird
})