const sounds=['tum','maan', 'dill', 'dj','dhokha', 'kare']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
 btn.addEventListener('click',() =>{
    stopSongs()
    document.getElementsById(sound).play()
 })
    document.getElementsById('buttons').appendChild(btn)
})
function stopSongs(){
    sounds.forEach(sound =>{
        const song= document.getElementById(sound)

        song.pause()
        song.CurrentTime=0;
    })
}