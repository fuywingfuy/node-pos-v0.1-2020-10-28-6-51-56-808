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
