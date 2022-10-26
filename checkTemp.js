function checkTemp (T){
 if (T <= 20) return -1;
 else if(21 <= T && T <= 40) return 1;
 else return 0;
 }
console.log(checkTemp(30));
console.log(checkTemp(100));
console.log(checkTemp(1));
//katsetus
 let T = prompt('sisesta temp');
checkTemp();
