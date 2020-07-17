// Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

class DatePro {
    
    constructor(dateAsString, inputDateFormat='DD.MM.YYYY'){
        let dayRegex;
        let monthRegex;
        let yearRegex;
        if (inputDateFormat.includes('D')) { 
            dayRegex = RegExp(/D+/g).exec(inputDateFormat);
            this.day = dateAsString.slice(dayRegex.index, dayRegex.index + dayRegex[0].length);
        }
        if (inputDateFormat.includes('M')) { 
            monthRegex = RegExp(/M+/g).exec(inputDateFormat);
            this.month = dateAsString.slice(monthRegex.index, monthRegex.index + monthRegex[0].length);
        }
        if (inputDateFormat.includes('Y')) {
            yearRegex = RegExp(/Y+/g).exec(inputDateFormat);
            this.year = dateAsString.slice(yearRegex.index, yearRegex.index + yearRegex[0].length);
        } else {
            this.year = new Date().getFullYear();
        }
    }

    format(outputStringFormat='DD.MM.YYYY'){

        if (this.day) { 
            this.day = String(this.day).padStart(2, '0');
            outputStringFormat = outputStringFormat.replace(/D+/g, this.day);
        }
        if (this.month) { 
            this.month = String(this.month).padStart(2, '0');
            outputStringFormat = outputStringFormat.replace(/M+/g, this.month);
        }
        if (this.year) { 
            this.year = String(this.year).padStart(4, '20');
            outputStringFormat = outputStringFormat.replace(/Y+/g, this.year);
        }
        return outputStringFormat;
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
