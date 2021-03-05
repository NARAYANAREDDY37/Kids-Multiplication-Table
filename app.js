//math table

let numberEl = document.querySelector('#req-number');
numberEl.addEventListener('keyup', function(){
  let theValue = Number(numberEl.value);
  document.querySelector('#number').innerText = theValue;
  calculate();
});

let multiplierEl = document.querySelector('#multiplier');
multiplierEl.addEventListener('input', function(){
  let theSlider = Number(multiplierEl.value);
  document.querySelector('#multiple').innerText = theSlider;
  calculate();
});

let calculate = () => {
  let theNumber = Number(document.querySelector('#number').innerText);
  let theMultiplier = Number(document.querySelector('#multiple').innerText);
  let mathResult = theNumber * theMultiplier;
  document.querySelector('#result').innerText = mathResult;
}