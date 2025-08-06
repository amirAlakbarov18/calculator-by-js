(function() {
    const btns = document.querySelectorAll('.btn');    
    const screen = document.querySelector('.screen');    
    const btnEqual = document.querySelector('.btn-equal');    
    const btnClear = document.querySelector('.btn-clear'); 
    const btnPow = document.querySelector('.btn-pow'); 
    const btnFactorial = document.querySelector('.btn-factorial'); 
    
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let number = btn.getAttribute('data-num')
            screen.value += number;
        });
    });
    
    btnClear.addEventListener('click', function() {
        screen.value = '';
    });

    btnEqual.addEventListener('click', function() {
        if(screen.value === ''){
            screen.value = 'Please Enter a Value';
        } else {
            screen.value = eval(screen.value);
        }
    });

    btnPow.addEventListener('click', function() {
        let pow = parseInt(screen.value);
        screen.value = pow * pow;
    });

    btnFactorial.addEventListener('click', function() {
        let isNumber = isNaN(screen.value);
        if(isNumber){
            alert('Please enter only number');
        } else {
            screen.value = factorial(screen.value);
        }
    });

    function factorial(x) {
        let fak = 1;
        while(x > 0) {
            fak *= x;
            x--;
        }
        return fak;
    }
})();