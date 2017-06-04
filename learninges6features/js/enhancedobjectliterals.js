const SUCCESS = 'SUCCESS';
let [id, name] = [10, 'Gaurav'];
let licenseKey = 'LIC856213';

class Client {
    format() {
        return this.id + ', ' + this.name;
    }
}

let client = {
    id, name, [`_Prop${licenseKey}`]:100,
    work() {
        return SUCCESS;
    },
    __proto__: new Client()
};

console.log(client instanceof Client);
console.log(client.format());
console.log(client.work());
console.log(client._PropLIC856213);