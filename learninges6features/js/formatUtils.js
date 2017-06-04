const DELIMETER =', ';
const NO_OF_TRAIL_CHAR=2;
const START_POS = 0;
class ObjectFormatter {
    static format(obj) {
        let formatterdMessage ='';
        //Iterator support
        if(obj) {
            for (let property in obj) {
                var validation = obj[property] &&
                    typeof obj[property] !== 'fucntion';

                if (validation) {
                    formatterdMessage += `${obj[property]}${DELIMETER}`;
                }
            }

            formatterdMessage = formatterdMessage.substr(START_POS, formatterdMessage.length - NO_OF_TRAIL_CHAR);
        }

        return formatterdMessage;
    }
}

export { ObjectFormatter };