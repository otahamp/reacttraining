const ODD_INDEX = 2;
const ODD_INDEX_MATCH = 0;

class ValueProvider {
    constructor() {
        this.values = arguments;
    }
    getValues() {
        let filteredValues = [];
        for (let index in this.values) {
            if (index % ODD_INDEX === ODD_INDEX_MATCH) {
                filteredValues.push(this.values[index]);
            }
        }
        return filteredValues;
    }
}

export { ValueProvider };