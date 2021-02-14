var nama = "a";
var int = 10;
var ris = true;

var bebas = function() {
    console.log(ris);
};

bebas();

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