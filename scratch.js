const nlp = require('./src/index')
let txt = require('./scripts/test/speed/_sotu-text.js')
// nlp.verbose(true)
// nlp.extend(require('./plugins/numbers/src'))
// nlp.extend(require('./plugins/scan/src'))

// nlp(`okay, do not use reverse psychology`).debug()
// nlp(`April, June, and September`).debug()
// let doc = nlp(`so good`).debug()
// console.log(doc.list[0].cache)

let str = `Why do they front?`
let doc = nlp.tokenize(str) //.join()
let m = doc.match('do they') //.match('asf')
console.log(m.list[0].cache)
// m.match('asdfasf')
// doc.match('do they').tag('asf')
// doc.tag('cool')
// doc.match('do')
console.log('done')
// doc.debug()
// t.equal(doc.length, 1, 'one phrase')
// console.log('pre')
// doc = doc.splitOn('we ever')
// console.log('post')
// t.equal(doc.length, 3, 'three phrases now')
