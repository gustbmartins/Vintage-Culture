function somPlay (playAudio) {
    document.querySelector(playAudio).play()
}


const teclasPlay = document.querySelectorAll("#btnPlay")


for (let contador = 0; contador<teclasPlay.length; contador ++) {
    const music = teclasPlay[contador].classList[2]
    const musicPlay = "#som_" + music
    console.log(musicPlay)
    

    teclasPlay[contador].onclick = function () {
        somPlay(musicPlay)
        
    }
    
}


function somPause (pauseAudio) {
    document.querySelector(pauseAudio).pause()
}

const teclasPause = document.querySelectorAll("#btnPause")

for (let contador = 0; contador<teclasPause.length; contador ++) {
    const music = teclasPause[contador].classList[2]
    const musicPlay = "#som_" + music
    console.log(musicPlay)
    

    teclasPause[contador].onclick = function () {
        somPause(musicPlay)
        
    }
    
}

