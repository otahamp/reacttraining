import { ValueProvider } from './valueprovider';

class ValueAnalyser extends ValueProvider {
    constructor() {
        super(...arguments)
    }
    getValues() {
        let processedValues = super.getValues();
        return processedValues.map(item => item * item);
    }
}
export { ValueAnalyser };