const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');




let currentActive = 1;
//function for the button to go to the next when you click it
next.addEventListener('click',() => {
  currentActive++;

if (currentActive > circles.length) {
  currentActive = circles.lengthl;
  }

  update()
});

//function for the button to go back to the last one when you click it
prev.addEventListener('click',() => {
  currentActive--;

if (currentActive < 1 ) {
  currentActive = 1;
  }
     update()
});
 
function update() {

  circles.forEach((circle, ind) => {
    if(ind < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  
  console.log((actives.length ) / (circles.length ) * 100);
  progress.style.width =(actives.length -1) / (circles.length -1) * 100 + '%';
  console.log(actives.length);
  console.log(circles.length);

  if (currentActive === 1 ){
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled= false;
    next.disabled= false;
  }
}




