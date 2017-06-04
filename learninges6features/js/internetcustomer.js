import {Customer} from './customer';
import { ObjectFormatter } from './formatUtils';

class InternetCustomer extends Customer {
    constructor(id, name, address, credit, status, blogUrl) {
        super(...arguments);
        this.blogUrl = blogUrl;
    }
    format() {
        let formattedMessage = ObjectFormatter.format(this).toUpperCase();
        return formattedMessage;
    }
}

export { InternetCustomer };