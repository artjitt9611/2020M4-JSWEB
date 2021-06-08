
/*document.getElementById('ok').addEventListener('click', function (e) {

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
*/

var margins = 20;
var OkElement = document.getElementById('ok')
OkElement.addEventListener('mousedown',function(){
    margins = margins+25
    document.getElementById('cancel').style.marginLeft = `${margins}px`
    document.getElementById('cancel').style.marginRight = `${margins}px`
    document.getElementById('no').style.marginLeft = `${margins}px`
    document.getElementById('no').style.marginRight = `${margins}px`

})


var count = 0;
document.getElementById('no').addEventListener('dblclick',function(e){ 
     count++;
     if(count == 1){
      OkElement.innerHTML = `Ok`
     }else if(count == 2){
        OkElement.innerHTML= `วิชานี้`
     }else if(count == 3){
        OkElement.innerHTML = `ง่าย`
     } else if(count == 4){
       OkElement.innerHTML = `จริงๆนะ`    
    
     }else{
         OkElement.innerHTML = `ok`
         count = 0
     }
                        
})


document.getElementById('cancel').addEventListener('mousemove', function (e) {
    if (e.shiftKey) {
        console.log('x =' + e.clientX + 'y = ' + e.clientY)
    }

}
)


/*var cancelElement = document.getElementById('cancel')
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



var borderTick = 100
document.getElementById('cancel').style.border = `${borderTick}px soild  white`
*/
