
document.getElementById('ok').addEventListener('click',function(e){
    
    alert('ok')
  
}
)
document.getElementById('cancel').addEventListener('click',function(e){
    
    alert('cancel')
  
}
)

document.getElementById('no').addEventListener('click',function(e){
    
    alert('no')
  
}
)


  
 function showCoords(e){
    console.log("event is fired on "+e.currentTarget.id+" X="+e.x+" Y="+e.y+
    " offsetX="+e.offsetX+" offsetY="+e.offsetY+" clientX="+e.clientX+" clienty="+e.clientY+
    " screenX="+e.screenX+" screenY="+e.screenY);
 }

 function clearCoor() {
   console.log()
  }