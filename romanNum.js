/*
  convert provided number into roman numeral;
  the number will only go up to 4000
  I - 1, V - 5, X - 10
  L - 50, C - 100, D - 500
  M - 1000
*/
const i = 'I';
const v = 'V';
const x = 'X';
const l = 'L';
const c = 'C';
const d = 'D';
const m = 'M';

function romanConverter(num){
    const thousands = Math.floor(num/1000); 
    //number of thousands in the num
  
    num = num - (thousands*1000);
    const hundreds = Math.floor(num /100);
    //number of hundreds in the num
  
    num = num - (hundreds*100);
    const tens = Math.floor(num / 10);
  
    num = num - (tens*10); //value in ones slot
  
    let thRoman = '';
    if(thousands <=4){
        thRoman = m.repeat(thousands);
    }
  
    let hundRoman = '';
    if(hundreds ==5){
        hundRoman = d;
    }else if(hundreds == 9){
        hundRoman = c+m;
    }else if(hundreds == 4){
        hundRoman = c+d;
    }else if(hundreds <= 3){
        hundRoman = c.repeat(hundreds);
    }else if(hundreds >5 && hundreds <9){
        hundRoman = d+(c.repeat(hundreds-5));
    }
  
    let tenRoman = '';
    if(tens ==5){
        tenRoman = l;
    }else if(tens == 9){
        tenRoman =x+c;
    }else if(tens == 4){
        tenRoman = x+l;
    }else if(tens <= 3){
        tenRoman = x.repeat(tens);
    }else if(tens >5 && tens <9){
        tenRoman = l+(x.repeat(tens-5));
    }
  
    let oneRoman = '';
    if(num ==5){
        oneRoman = v;
    }else if(num==9){
        oneRoman = i+x;
    }else if(num==4){
        oneRoman = i+v;
    }else if(num<=3){
        oneRoman=i.repeat(num)
    }else if(num>5&&num<9){
        oneRoman = v+(i.repeat(num-5));
    }
  
    let romanStr = thRoman+hundRoman+tenRoman+oneRoman;
    return romanStr;
}

const num1 = 3652;
const num2 = 5;
const num3 = 17;
console.log(romanConverter(num1), romanConverter(num2), romanConverter(num3));