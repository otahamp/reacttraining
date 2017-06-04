import { ValueAnalyser } from './valueanalyser';
let analyser = new ValueAnalyser(1,2,3,4,5,6);
let analyzedValues = analyser.getValues()

console.log(analyzedValues);