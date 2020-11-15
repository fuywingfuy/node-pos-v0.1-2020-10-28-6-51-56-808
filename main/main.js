module.exports = function main(data) {
    console.log(printReceipt(data)); 
    return printReceipt(data);
    //return 'Hello World'
};

function printReceipt(data) {
    const NumberSales = data.reduce((accumulator, currentValue) => {
        if(currentValue.Name in accumulator) {
            accumulator[currentValue.Name]++;
        }
        else {
            accumulator[currentValue.Name] = 1;
        }
        return accumulator;
    }, {});

    function filterByName(object, name) {
        return object.filter(element => element.Name == name);
    };

    let texthead = '***<store earning no money>Receipt ***\n';
    let textbody = '';
    let total = 0;
    for(i = 0; i < Object.keys(NumberSales).length; i++) {
        let output =  filterByName(data, Object.keys(NumberSales)[i])[0];
        let subTotal = Object.values(NumberSales)[i] * output.Price;
        let wordBefore = ' ';
        if(output.Name == 'Battery') {
            output.Unit = '';
            wordBefore = '';
            wordAfter = '';
        }
        else {
            wordAfter = 's';
        }
        textbody += 'Name: ' + Object.keys(NumberSales)[i] + ', ' + 'Quantity: ' + Object.values(NumberSales)[i] + wordBefore + output.Unit 
                 + wordAfter +', ' + 'Unit price: ' +  output.Price.toFixed(2) + ' (yuan), ' + 'Subtotal: ' + subTotal.toFixed(2) + ' (yuan)\n';
        total += subTotal;   
    }
    let texttail = '----------------------\n' + 'Total: ' + total.toFixed(2) + ' (yuan)\n' + '**********************\n';
    let text = texthead + textbody + texttail;
    return text;
};
// console.log(printReceipt(data)); 



// module.exports = function main(data) {
//     console.log(printReceipt(data)); 
//     //return "Hello World!";
//     //return printReceipt(data);
//     return  '***<store earning no money>Receipt ***\n' +
//     'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)\n' +
//     'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
//     'Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
//     '----------------------\n' +
//     'Total: 23.00 (yuan)\n' +
//     '**********************\n';
// };


// function printReceipt(data) {
//     var myObject = new Object();
//     var numberList = [];
//     var numberCocaCola = 0;
//     var numberSprite = 0;
//     var numberBattery = 0;

//     for(let i = 0; i <  Object.keys(data).length; i++) {
//         if(data[i].Name == 'Coca-Cola') {
//             myObject["Coca-Cola"] = data[i].Price;
//             numberCocaCola++;
//         }
//         if(data[i].Name == 'Sprite') {
//             myObject["Sprite"] = data[i].Price;
//             numberSprite++;
//         }
//         if(data[i].Name == 'Battery') {
//             myObject["Battery"] = data[i].Price;
//             numberBattery++;
//         }
//     }     
//     numberList.push(numberCocaCola);  
//     numberList.push(numberSprite);  
//     numberList.push(numberBattery);  

//     let texthead = '***<store earning no money>Receipt ***\n';
//     let textbody = '';
//     let total = 0;
//     for(let j = 0; j < Object.keys(myObject).length; j++) {
//         let Subtotal =  numberList[j] * Object.values(myObject)[j];    
//         textbody += "Name: " + Object.keys(myObject)[j] + ", " + "Quantity: " + numberList[j] + " bottles, " + "Unit price: "
//                  +  Object.values(myObject)[j].toFixed(2) + " (yuan), "  + "Subtotal: " + Subtotal.toFixed(2) + " (yuan)\n";      
//         total +=  Subtotal;             
//     }
//     let texttail = '----------------------\n' + 'Total: ' + total + ' (yuan)\n' + '**********************\n';
//     let text = texthead + textbody + texttail;
//     return text;
// }



