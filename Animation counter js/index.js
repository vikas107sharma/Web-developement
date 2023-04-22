let myNum = document.querySelectorAll(".count");

let speed = 200;

myNum.forEach(function (num) {
  let target = num.dataset.count;
  let counter = +num.innerText;

  let mySpeed = Math.floor(target / speed);

  const updateNumber = () => {
    counter += mySpeed;
    num.innerText = counter;
    if (counter < target) {
      setTimeout(() => {
        updateNumber();
      }, 5);
    }
  };
  updateNumber();
});
