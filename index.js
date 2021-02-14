"use strict"

/*console.log("This is my first time, onegai shimasu~");

var nama = "a";
var int = 10;
var ris = true;

var bebas = function() {
    console.log(ris);
};

bebas();

var baru = function(ris_dev) {
    console.log(ris_dev);
};

baru(10*10);*/

/*
var hargaVibe = 275000;
var totalHarga = 0;

var pajak = function(){
    pajak = hargaVibe * 10/100;
    return pajak;
};

//pajak(hargaVibe)

totalHarga = hargaVibe + pajak(hargaVibe);
console.log(totalHarga);

calculator = 275000 + 27500;
console.log(calculator);
*/

/*
const hitungHargaDanPajak = function(harga, pajak) {
	pajak = pajak / 100;
    //console.log(harga)
    totalPajak = harga * pajak;
    //console.log(totalPajak);
    totalHarga = harga + totalPajak;
    //console.log(totalHarga);
    return totalHarga;
};

console.log(hitungHargaDanPajak(275000, 10)); // output di keluarin
console.log(hitungHargaDanPajak(50000, 5)); // output nya gaada di log

//const gantengz = hitungHargaDanPajak(?);
//console.log(gantengz);
*/

/*
const daftarAngka = function (n){
    for ( let i = 1 ; i <= n ; i = i + 1) {
        console.log(i);
    };
};

daftarAngka(15);
daftarAngka(20);
*/

/*
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
*/

//array = [1, 2, 3];
//array.push(4);

/*
const daftarAngka = function (n){
    let array = [];
    for (let i = 1; i < n; i = i + 1){
        array.push(i);
    };
    console.log(array);
};

daftarAngka(15);
*/

var fizzBuzz = function(n) {
    const array = [];
    for (let i = 1; i <= n; i = i + 1){
        if (i % 3 === 0 && i % 5 !== 0){
            //if (i % 5 !== 0){
                array.push("Fizz");         
            //}
        }
        else if (i % 5 === 0 && i % 3 !== 0){
            //if (i % 3 !== 0){
            array.push("Buzz");         
            //}
        }
        else if (i % 5 === 0 && i % 3 === 0){
            array.push("FizzBuzz");         
        }
        else {
            array.push(i.toString());
        };
    };
    console.log(array);
    return array;    
};

fizzBuzz(15)
