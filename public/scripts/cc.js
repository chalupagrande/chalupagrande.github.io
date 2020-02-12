cheatCode(['ArrowUp',
          'ArrowUp',
          'ArrowDown',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'ArrowLeft',
          'ArrowRight',
          'b',
          'a'], draw, 3000, correct, incorrect)

var fps = 1;
var animation;
//callback function when code is complete
function draw() {
    setTimeout(function() {
        animation = requestAnimationFrame(draw);
        document.body.style.backgroundColor = 'hsl('+Math.floor(Math.random()*255)+', 50%, 50%)'
    }, 1000 / fps);
}

var lis = Array.prototype.slice.call(document.querySelectorAll('li'))
var count = 0

//function to run when you click a correct key
function correct(){
  console.log('correct')
  // lis[count].style.opacity = 0
  count+=1
}

//function to run when you click an incorrect key
function incorrect(){
  // lis.forEach(function(el){
  //   el.style.opacity = 1
  // })
  console.log()
  count = 0
  window.cancelAnimationFrame(animation)
}

/* Cheat Code
  Set a cheat code to excute when it is entered
  Parameters:
    code: [] of keys
    cb: function to call when the code is entered
    interval: # of miliseconds to type the code

*/
function cheatCode(code, cb, lag, correct, incorrect){
  var watch = {
    count: 0,
    index: 0,
    timerInterval: null,
    stopperInterval: null,
    lag: lag || 3000
  }

  document.addEventListener('keydown', function(e){
    if(e.key == code[watch.index]){
      if(!watch.timerInterval){ watch.timerInterval = timer()}
      if(!watch.stopperInterval){ watch.stopperInterval = stopper()}
      watch.index += 1
      if(correct) correct()
      if(watch.index >= code.length){
        cb()
        reset()
      }
    } else {
      reset()
      if(incorrect) incorrect()
    }
  })

  function timer(){
    return setInterval(function(){
      watch.count += 20
    }, 20)
  }
  function stopper(){
    return setInterval(function(){
      if(watch.count >= watch.lag){
        reset()
      }
    }, watch.lag)
  }
  function reset(){
    clearInterval(watch.timerInterval)
    clearInterval(watch.stopperInterval)
    watch.timerInterval = null
    watch.stopperInterval = null
    watch.index = 0
    watch.count = 0
  }
}
