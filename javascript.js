
document.getElementById('ok').addEventListener('click', function (e) {

    let noElement = document.getElementById('no')
    if (noElement.classList.contains('toggleOn')) {
        noElement.classList.replace('toggleOn', 'toggleOff')
    } else if (noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff', 'toggleOn')
    } else {
        noElement.classList.add('toggleOn')
    }
    console.log(noElement)

}
)
document.getElementById('cancel').addEventListener('mousemove', function (e) {
    if (e.shiftKey) {
        console.log('x =' + e.clientX + 'y = ' + e.clientY)
    }

}
)

document.getElementById('no').addEventListener('click', function (e) {

    alert('no')

}
)

var borderTick = 100
document.getElementById('cancel').style.border = `${borderTick}px soild  white`

var cc = document.getElementById('container')

var cancelElement = document.getElementById('cancel')
cancelElement.addEventListener('mousemove', function (e) {
    cancelElement.innerHTML = `<div class = "container-col" >
    <div class ="flex-item">
    no1
    </div>
    <div classs ="flex-item">
    no2
    </div>
    </div>
    `
})

cancelElement.addEventListener('mouseleave',function(){
    cancelElement.innerHTML=`cancel`
})