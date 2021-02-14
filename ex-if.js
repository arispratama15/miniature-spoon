const angkaGanjil = function (n){
    for ( let i = 0; i <= n; i = i + 1){
        if (i % 2 === 1){ // biasain equal itu sama dengan pake 3 kali  
            //return i;
            console.log(i);
        };
    };
};

const angkaGenap = function (n){
    for ( let i = 0; i <= n; i = i + 1)
        if (i % 2 === 0){
            //return i;
            console.log (i);
        }
};

angkaGanjil(11);
angkaGenap(12);
