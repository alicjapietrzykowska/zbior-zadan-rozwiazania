// Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

class DatePro {
    
    constructor(dateAsString, inputDateFormat='DD.MM.YYYY'){
        this.dateAsString = dateAsString;
        this.inputDateFormat = inputDateFormat;
        if (inputDateFormat.includes('D')) this.day = this.getValue('D');
        if (inputDateFormat.includes('M')) this.month = this.getValue('M');
        if (inputDateFormat.includes('Y')) this.year = this.getValue('Y');
        else this.year = String(new Date().getFullYear());
    }

    getValue(dateSymbol) {
        const regex = new RegExp(`${dateSymbol}+`, 'g');
        const symbolRegex = regex.exec(this.inputDateFormat);
        return this.dateAsString.slice(symbolRegex.index, symbolRegex.index + symbolRegex[0].length);
    }

    format(outputStringFormat='DD.MM.YYYY'){
        let formattedDate = outputStringFormat;
        if (this.day) { 
            this.day = this.day.padStart(2, '0');
            formattedDate = formattedDate.replace(/D+/g, this.day);
        }
        if (this.month) { 
            this.month = this.month.padStart(2, '0');
            formattedDate = formattedDate.replace(/M+/g, this.month);
        }
        if (this.year) { 
            this.year = this.year.padStart(4, '20');
            formattedDate = formattedDate.replace(/Y+/g, this.year);
        }
        
        return formattedDate;
    }
}


// to powinno zadziałać:

const date1 = '23.03'
const formatDate1 = 'DD.MM'
const instance1 = new DatePro(date1, formatDate1)


const date2 = '03/23/20'
const formatDate2 = 'MM/DD/YY'
const instance2 = new DatePro(date2, formatDate2)


const date3 = '20-03-20'
const formatDate3 = 'DD-MM-YYYY'
const instance3 = new DatePro(date3, formatDate3)


instance1.format() // '23.03.2020'
instance2.format() // '23.03.2020'
instance3.format() // '23.03.2020'


module.exports = DatePro;
