

function decimalToBinary(number){
    let remainder;
    let binary = 0;
    let i = 1;
    let temp_val = number;
    while(temp_val!=0) {
        remainder = temp_val%2;
        binary = binary + remainder*i;
        i = i*10;
        temp_val = parseInt(temp_val/2);
    }
    return binary
}

function decimalToOctal(number) {
    let remainder;
    let octal = 0;
    let i = 1;
    let temp_val = number;
    while(temp_val!=0) {
        remainder = temp_val%8;
        octal = octal + remainder*i;
        i = i*10;
        temp_val = parseInt(temp_val/8);
    }
    return octal
}  

function decimalToHex(number) {
    let hexcodes = {
        10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F"
    };
    let i = 1;
    let hex = "";

    while(number != 0){
        remainder = number % 16;
        number = parseInt(number / 16);
        if(remainder < 10){
            hex += str(remainder);
        }
        else{
            hex += hexcodes[remainder];
        }
    }
    return reverseString(hex);
}

function decimalToRoman(number) {
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        while ( number >= lookup[i] ) {
            roman += i;
            number -= lookup[i];
        }
    }
    return roman;
}

function reverseString(str) {
    return str;
}


function display() {
    let user_input = document.getElementById("decimal_value").value;
    let decimal = parseInt(user_input);

    let binaryEquivalent = decimalToBinary(decimal);
    document.getElementById("binary_value").value = binaryEquivalent;

    let octalEquivalent = decimalToOctal(decimal);
    document.getElementById("octal_value").value = octalEquivalent;

    let hexEquivalent = decimalToHex(decimal);
    document.getElementById("hex_value").value = hexEquivalent;

    let romanEquivalent = decimalToRoman(decimal);
    document.getElementById("roman_value").value = romanEquivalent;
}
