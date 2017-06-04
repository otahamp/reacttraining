var customer = new InternetCustomer(1, "Pranati", "Delhi, NCR", 1200, true, "https://blogs.msdn.com/nwt");
console.log(customer.format());
console.log(customer instanceof Customer);
console.log(customer instanceof InternetCustomer);