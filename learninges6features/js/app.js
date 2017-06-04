/*import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';
import { Order } from './order';
import { DataProcessor } from './arrowfunctions';

let customer = new InternetCustomer(1,'Pranati', "Delhi NCR", 1200, true, 'http://blogs.msdn.com/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);
//console.log(customer instanceof Customer);

let customerCSVString = '2,Ria,Delhi,34930,true';
let anotherCustomer = Customer.createCustomer(customerCSVString);

let customerCSVString2 = '3,Another,Delhi,34930,true';
let anotherCustomer2 = InternetCustomer.createCustomer(customerCSVString2);

console.log(anotherCustomer.format());
console.log(anotherCustomer2.format());


//DAY 2

customer.addOrder(new Order(1, new Date()), 1200);
customer.addOrder(new Order(2, new Date()), 2000);
customer.addOrder(new Order(3, new Date()), 1000);
customer.addOrder(new Order(4, new Date()), 30000);

console.info('Iterating Customer Order using customer.getOrder()...');
for(let order of customer.getOrder()) {
    console.log(order.toString());
}

console.info('Iterating Customer Order Directly...');
for(let order of customer) {
    console.info(order.toString());
}
//This will print customer and order because it is getting serialized
// User Symbol for orders to not serialize it.
console.log(JSON.stringify(customer));


//DAY 2 arrow functions
let dataProcessor = new DataProcessor();
let result = dataProcessor.process(
    (a,b) => a +b,
    function (a,b) {
        return a-b;
    },
    (a,b)=> {
        console.log('Arrow function is the block...');
        return a * b;
    }
);
console.log('Output:', result());

import { HeavyWorker, HeavyWorker2 } from './withoutpromise';
//DAY 2 without promises
let worker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();


//Multiple async Operation but sequentially...
// UI wait time is more in this scenario...
worker1.doHeavyWork(10,
    (result) => {
        console.log('Worker1 completed without promise...' + JSON.stringify(result));

        worker2.doHeavyWork(300, (result) => {
            console.log('Worker2 completed without promise...' + JSON.stringify(result));
        });
    });

//Multiple async Operation but parallely...

import { HeavyWorker as PromiseWorker1, HeavyWorker2 as PromiseWorker2 } from './withpromise';
//impoer * as PromiseWorkers from './withpromise';
//DAY 2 with promises
let heavyWorker1 = new PromiseWorker1(); //PromiseWorkers.HeavyWorker()
let heavyWorker2 = new PromiseWorker2(); //PromiseWorkers.HeavyWorker2()

let input = 200;

Promise.all(
    [
        heavyWorker1.process(100),
        heavyWorker2.process(200)
    ]
).then(
    data => console.log('Both successfully completed with promise...' + JSON.stringify(data)),
    error=> console.log('One of the worker failed promise...' + JSON.stringify(error))
);

import './enhancedobjectliterals';
*/
import './proxies';