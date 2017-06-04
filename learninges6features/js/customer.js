import { ObjectFormatter } from './formatUtils';

const COL_SEPARATOR = ",";
//this will help not serialize the order object
const ORDER_SYMBOL = Symbol("Order symbol");

class Customer {
    constructor(id, name, address, credit, status) {
        //destructuring
        [this.id, this.name, this.address, this.credit, this.status] = arguments;
        //this.orders = [];
        this[ORDER_SYMBOL] = [];
    }

    format() {
        //template strings
        //let formattedMessage = `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`;

        let formattedMessage = ObjectFormatter.format(this).toUpperCase();
        return formattedMessage;
    }

    //static
    static createCustomer(csvString) {
        let customer = null;

        if(csvString) {
            let splittedCsvString = csvString.split(COL_SEPARATOR);

            //rest parameters
            customer = new Customer(...splittedCsvString);
        }
        return customer;
    }

    //static
    addOrder(order) {
        if(order) {
            //this.orders.push(order);
            this[ORDER_SYMBOL].push(order);
        }
    }

    getOrder() {
        //return this.orders;
        return this[ORDER_SYMBOL];
    }

    *[Symbol.iterator]() {
        //for (let order of this.orders) {
        for (let order of this[ORDER_SYMBOL])
            yield order;
        }
}

export { Customer };