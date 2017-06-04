import { ObjectFormatter } from './formatUtils'

class Order {
    constructor (id, date, amount) {
        [this.id, this.date, this.amount] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this).toUpperCase();
    }
}
export { Order };