// Asal Sayi Uygulaması

if (asalsayi(6)){
    console.log("Asal Sayidir");
}
else {
    console.log("Asal Sayi Degildir");
}


function asalsayi(number){
    var result = true;
    for (var i = 2; i < number-1; i++){
        if (number%i == 0){
            result = false;
            i = number;
        }
    }
    return result; 
}
