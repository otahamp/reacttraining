function InternetCustomer(id, name, address, credit, status, blogUrl) {
    Customer.apply(this, arguments);
    this.blogUrl = blogUrl;
}

InternetCustomer.prototype = new Customer();
InternetCustomer.prototype.constructor = InternetCustomer;

InternetCustomer.prototype.format = function () {
    var formattedMessage = Customer.prototype.format.call(this) + ', ' + this.blogUrl;
    return formattedMessage.toUpperCase();
};