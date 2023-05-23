
let num = 0;

//First method
/*
const inc = document.getElementById('increase');
const dec = document.getElementById('decrease');
const res = document.getElementById('reset');
const count = document.getElementById('count');
res.addEventListener('click', function () {
    num = 0;
    count.textContent = num;
})

inc.addEventListener('click', function () {
    num += 1;
    count.textContent = num;
})

dec.addEventListener('click', function () {
    num -= 1;
    count.textContent = num;
})
*/

//Second method
const btns = document.querySelectorAll('.btn');
const count = document.getElementById('count');

btns.forEach(function (btn) {
    console.log(btn);
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            num--;
        } else if (styles.contains('increase')) {
            num++;
        } else {
            num = 0
        }
        count.textContent = num;
    })

});


