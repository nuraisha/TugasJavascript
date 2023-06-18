
function akar(x) {
    if (x<0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x%2!=0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        console.log(Math.sqrt(x));
    }
}

akar(-1);


