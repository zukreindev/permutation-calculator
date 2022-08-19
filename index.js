const readline = require('readline');

const chalk = require("chalk")
/
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Permutasyon(n, r) {
	return faktör(n) / (faktör(n - r));
}
// faktör hesaplama n = eleman sayısı 

function faktör(n) {
	var a = 2,
	faktör = 1;
	for (var zukrein = 1; zukrein < n; zukrein++) {
		faktör = (faktör * a++);
	}
	return faktör;
}




rl.question(chalk.gray("Lütfen Bir Eleman sayısı giriniz \n"), function(n) {
  if(!n) {
        console.log((chalk.bgRed`\nEleman Sayısı Girmediğinizden Dolayı İşlem Yapamam.`));
        rl.close();
}
  if(isNaN(n)){
        console.log(chalk.bgRed(`\nHarf veya Özel Karakter Kullanmayınız.`))
        rl.close();
}
  if(n=="0"){
    console.log((chalk.bgRed`\nEleman sayısı 0 veya 0'dan küçük olamaz.`))
        rl.close();
}
  if(n<0){
  console.log((chalk.bgRed`\nEleman sayısı 0 veya 0'dan küçük olamaz.`))
      rl.close();
}  
//Seçim sayımızın Belirlendiği kısım
rl.question(chalk.gray("Lütfen Bir Seçim sayısı giriniz \n"), function(r) {
  if(!r) {
  //Bir Seçim Sayısı Girilmezse return verdiği kısım
    console.log((chalk.bgRed`\nSeçim Sayısı Girmediğinizden Dolayı İşlem Yapamam.`));
    rl.close();
}
  if(isNaN(r)){
 //Seçim sayısı harfmi sayımı ayırt edildiği kısım
    console.log((chalk.bgRed`\nHarf veya Özel Karakter Kullanmayınız.`))
    rl.close();
}
if(r==="0"){
  console.log(chalk.bgRed(`\nSeçim sayısı 0 veya 0'dan küçük olamaz.`))
      rl.close();
}
if(r<0){
console.log(chalk.bgRed(`\nSeçim sayısı 0 veya 0'dan küçük olamaz.`))
    rl.close();
}
    
        console.log("Girdiğiniz Sayıların Permutasyonu :")
        console.log(chalk.bgGreen(Permutasyon(n, r)))
        rl.close();
        
    });
});

rl.on("close", function() {
    process.exit(0);
});


