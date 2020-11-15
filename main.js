module.exports = function main() {
    console.log("Debug Info");
    //printReceipt(data);
    return "Hello World!";
};

function printReceipt(data) {
    var myObject = new Object();
    var numberList = [];
    var numberCocaCola = 0;
    var numberSprite = 0;
    var numberBattery = 0;

    for(let i = 0; i <  Object.keys(data).length; i++) {
        if(data[i].Name == 'Coca-Cola') {
            myObject["Coca-Cola"] = data[i].Price;
            numberCocaCola++;
        }
        if(data[i].Name == 'Sprite') {
            myObject["Sprite"] = data[i].Price;
            numberSprite++;
        }
        if(data[i].Name == 'Battery') {
            myObject["Battery"] = data[i].Price;
            numberBattery++;
        }
    }     
    numberList.push(numberCocaCola);  
    numberList.push(numberSprite);  
    numberList.push(numberBattery);  

    let texthead = '***<store earning no money>Receipt ***\n';
    let textbody = '';
    let total = 0;
    for(let j = 0; j < Object.keys(myObject).length; j++) {
        let Subtotal =  numberList[j] * Object.values(myObject)[j];    
        textbody += "Name: " + Object.keys(myObject)[j] + ", " + "Quantity: " + numberList[j] + " bottles, " + "Unit price: "
                 +  Object.values(myObject)[j].toFixed(2) + " (yuan), "  + "Subtotal: " + Subtotal.toFixed(2) + " (yuan)\n";      
        total +=  Subtotal;             
    }
    let texttail = '----------------------\n' + 'Total: ' + total + ' (yuan)\n' + '**********************\n';
    let text = texthead + textbody + texttail;
    return text;
}





