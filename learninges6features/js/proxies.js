function processOrder(order) {
    console.log('Order processing started..');
    console.log('Order data:' + JSON.stringify(order));

    if(order.amount >= 1000) {
        console.log('Order status : Processed');
    } else {
        console.log('Order status: On Hold');
    }
    return true;
}

function doWork(orderId) {
    let order = {
        id: orderId,
        date: new Date(),
        amount: 2300
    };
    processOrder(order);
}

Array.prototype.isExist = function (item) {
  let status = false;
    if(item) {
        for (let index in this) {
            if(this[index] === item) {
                status = true;
                break;
            }
        }
    }
    return status;
};

processOrder = new Proxy(processOrder, {
    ///target - original function
    // , currentHandler - is object it wil be used when we want to proxy a object
    // , args - argument to the functions.
    apply: function (target, currentHandler, args) {
        let alreadyProcessedOrder = ['O001','O002','O003'];
        console.log('Proxying started...');

        let orderId = args[0].id;

        if(alreadyProcessedOrder.isExist(orderId)) {
            console.log(orderId + ': Order Processing already completed...');
            return true;
        } else {
            console.log('Order Processing was not completed earlier...');
            let status = target(...args);
            return status;
        }
    }
});


doWork('O007');