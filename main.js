//get all keys
const keys = document.querySelectorAll(".key")

//play notes
function playNotes(event) {
    let audioKeyCode = getKeyCode(event)

    //typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    //if key exists
    const canFoundAnyKey = !key
    
    if(canFoundAnyKey) {
        return
    }

    //Add playing class
    addPlayingClass(key)
    //playaudio
    playAudio(audioKeyCode)
}
function addPlayingClass(key) {
    key.classList.add('playing')
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function getKeyCode() {
    //keyCode
    let keyCode
    const isKeyboard = event.type === 'keydown'
    if(isKeyboard) {
        keyCode = event.keyCode
    }else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function registerEvents() {
    //click with mouse
    keys.forEach( function(key) {
        key.addEventListener("click", playNotes)
        key.addEventListener("transitionend", removePlayingClass)
    })

    //keyboard type
    window.addEventListener("keydown", playNotes)
}

window.addEventListener('load', registerEvents)