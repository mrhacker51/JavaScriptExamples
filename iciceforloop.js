function sayiüret(üstsayi = 51) { // Fonksiyon tanımladım
    return Math.ceil(Math.random() * üstsayi) // fonksiyonun döndürecegi deger
}


for (var i = 1; i <= 8; i++) {  // döngü başlangıcı
    console.log(i + " . Kolon") // kolonları ekrana yazdır
    for (var j = 1; j <= 6; j++) { // içeri for döngüsü
        console.log(sayiüret()) // yukarıdaki fonksiyonu döngünün içerisinde çagırıp ekrana yazdır
    }
}
