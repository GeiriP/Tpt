function checkTemp (T){
 if (T <= 20) return -1;
 else if(21 <= T && T <= 40) return 1;
 else return 0;
 }
 
 console.log(checkTemp(12)) 
 console.log(checkTemp(35))
 console.log(checkTemp(54))
