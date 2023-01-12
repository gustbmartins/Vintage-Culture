let buttonPlay = document.querySelectorAll("#btnPlay")
function somPlay (playAudio) {
    document.getElementById(playAudio).play()
    
}

for (let i = 0; i < buttonPlay.length; i++){

let music = buttonPlay[i].classList[2]
let musicPlay = `som_${music}`

buttonPlay[i].onclick = function () {
    somPlay(musicPlay)
}


}


let buttonPause = document.querySelectorAll("#btnPause")
function somPause (pauseAudio) {
    document.getElementById(pauseAudio).pause()
    
}

for (let i = 0; i < buttonPause.length; i++){

    let music = buttonPause[i].classList[2]
    let musicPause = `som_${music}`
   
    buttonPause[i].onclick = function () {
        somPause(musicPause)
    }
    
    
    }

 
    let buttonStop = document.querySelectorAll("#btnStop")
    function somStop (stopAudio) {
        document.getElementById(stopAudio).pause()
        document.getElementById(stopAudio).currentTime = 0
    }
    
    for (let i = 0; i < buttonStop.length; i++){
    
        let music = buttonStop[i].classList[2]
        let musicStop = `som_${music}`
       
        buttonStop[i].onclick = function () {
            somStop(musicStop)
        }
        
        
        }
    











