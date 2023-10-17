////////////////1-misol/////////////
// function ortaQiymat(a,b,c) {
//    return (a+b+c)/3; 
// }
// let orta=ortaQiymat(4,8,6);
// console.log(orta);
///////////////2-Misol////////////
// function kvYigindisi(a,b) {
//     return a**2+b**2;
// }
// let x=kvYigindisi(2,3);
// console.log(x);
/////////////////3-Misol///////////////
// const pi=3.14;
// function Yuza(l) {
//     let r=l/(2*pi);
//     let s=pi*(r**2);
//     console.log("rariusi="+r);
//     return ("yuzasi="+s);
// }
// console.log(Yuza(24));
////////////4-Misol////////////////
// const pi=3.14;
// function Diametr(s) {
//     //s=pi*(r**2);
//     let r=Math.sqrt(s/pi);
//     console.log("Doiraning radiusi="+r);
//     let d=2*r;
//     return ("Doiraning diametri="+d);
// }
// console.log(Diametr(+prompt()));
//////////////5-Misol///////////////
// function Kilobayt(bayt) {
//    let kilobyt=bayt/1024;
//    return ("Fayl hajmi kilobaytda= " +kilobyt); 
// }
// console.log(Kilobayt(+prompt()));
///////////////6-Misol///////////////////
// function son(a,b) {
//     let natija =Math.floor(a/b);
//         return natija;
//     }
//     let sonlar=son(15,2);
//     console.log(sonlar);
///////////////7-Misol//////////////////////////
// function son(a) {
//     let bir=a%10;
//     let on=Math.floor(a/10);
//     let natija=(bir*bir)+(on*on);
//     return natija;
// }
// console.log("raqamlari kv yig'indisi:"+son(+prompt()));
/////////////////////8-Misol////////////////////
// function son(a) {
//     let birlik=a%10;
//     let onlik=Math.floor(a/10);
//     let natija=birlik*10+onlik;
//     return natija;
// }
// console.log("raqmlari joyini almashtirishdan hosil bo'lgan son:"+son(+prompt()));
/////////////////////9-Misol////////////////
// function yuzlarXonasi(a) {
//     let son=Math.floor(a/100);
//     return son;
// }
// console.log("Berilgan sonning yuzlar xonasidagi raqami:"+yuzlarXonasi(+prompt()));
//////////////////////10-Misol///////////////
// function yuzlar(a) {
//     let birlar=a%10;
//     let onlar=(Math.floor(a/10))%10;
//     let yuzlik=Math.floor(a/100);
//     let natija=birlar+onlar+yuzlik;
//     return natija;
    
// }
// console.log("Berilgan uch xonali sonning raqamlari yig'indisi:"+yuzlar(+prompt()));
///////////11-Misol///////////////////////
// function yuzlar(a) {
//         let birlik=a%10;
//         let onlik=(Math.floor(a/10))%10;
//         let yuzlik=Math.floor(a/100);
//         let natija=birlik*100+onlik*10+yuzlik;
//         return natija ;
//       }
//       console.log("Berilgan uch xonali sonning raqamlari almashishidan hosil bo'lgan son :" + yuzlar(+prompt()));
////////////////////12-Misol/////////////////
// function son(a) {
//    let birlik=a%10;
//    let onlik=(Math.floor(a/10))%10;
//    let yuzlik=Math.floor(a/100);
//    let natija=onlik*100+birlik*10+yuzlik;
//    return natija; 
// }
// console.log("Chapdagi birinchi raqamini oxiriga yozishdan hosil bo'lgan son:"+son(+prompt()));
////////////////13-Misol////////////////////
// function son(a) {
//             let birlik=a%10;
//             let onlik=(Math.floor(a/10))%10;
//             let yuzlik=Math.floor(a/100);
//             let natija=birlik*100+yuzlik*10+onlik
//             return natija ;
//           }
//           console.log("O'ngdan birinchi raqamni boshiga yozishdan hosil bo'lgan hosil bo'lgan son:"+son(+prompt()));
//           /////////////14-Misol////////////////////
        //   function son(a) {
        //     let birlik=a%10;
        //     let onlik=(Math.floor(a/10))%10;
        //     let yuzlik=Math.floor(a/100);
        //     let natija=onlik*100+yuzlik*10+birlik;
        //     return natija ;
        //   } 
        //   console.log("O'nlik xonasi bilan yuzlik xonasidagi sonni almashtirishdan hosil bo'lgan son:"+son(+prompt()));
          ////////////15-Misol//////////////////
//             function son(a) {
//     let birlar =a%10;
//     let onlar =(Math.floor(a/10))%10;
//     let yuzlar =(Math.floor(a/100))%10;
//     let minglar =Math.floor(a/1000);
//     let natija=birlar*1000+onlar*100+yuzlar*10+minglar;
//     return natija ;
//   }
//   console.log("4 xonali sonning raqamlarini teskari yozilgan son: "+son(+prompt()));
////////////////16-Misol////////////////////////////
// function son(q) {
//     if (q>999) {
//         let birlar =q%10;
//         let onlar =(Math.floor(q/10))%10;
//         let yuzlar =(Math.floor(q/100))%10;
//         let minglar =Math.floor(q/1000);
        
//         return `Berilgan sonning minglar xonasi:${minglar} yuzlar xonasi:${yuzlar } o'nlar xonasi ${onlar} birlar xonasi ${birlar}`;
//     }     
//          }
//          console.log(son(+prompt()));  
/////////////17-Misol/////////////////////////
    //  function sekund(n) {
    //     let min=Math.floor(n/60);
    //     return min;
    //     }
    // console.log("Kun boshidan boshlab minut o'tdi="+sekund(+prompt()));
/////////18-Misol//////////////////////////
// function  sekund(n) {
//     let soat=Math.floor(n/3600);
//     let min=Math.floor((n-(soat*3600))/60);
//     let sek=n-((soat*3600)+(min*60));
//     let natija=(`${soat} soat ${min} minut ${sek} sekund o'tdi`)
//     return natija;
// }
// console.log(sekund(+prompt()));

    