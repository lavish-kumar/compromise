'use strict';
//
const defaultMethods = {
  whitespace: true,
  case: true,
  numbers: true,
  punctuation: true,
  unicode: true
};

const methods = {

  /** make only one space between each word */
  whitespace: (r) => {
    r.list.forEach((ts) => {
      ts.terms.forEach((t, i) => {
        if (i > 0) {
          t.whitespace.before = ' ';
        }
        t.whitespace.after = '';
      });
    });
    return r;
  },

  /** make first-word titlecase, and people, places titlecase */
  case: (r) => {
    r.list.forEach((ts) => {
      ts.terms.forEach((t, i) => {
        if (i === 0 || t.tag.Person || t.tag.Place || t.tag.Organization) {
          t.text = t.info('titleCase');
        } else {
          t.text = t.text.toLowerCase();
        }
      });
    });
    return r;
  },

  /** turn 'five' to 5, and 'fifth' to 5th*/
  numbers: (r) => {
    return r.toNumber();
  },

  /** remove commas, semicolons - but keep sentence-ending punctuation*/
  punctuation: (r) => {
    r.list.forEach((ts) => {
      ts.terms.forEach((t, i) => {
        if (i < ts.terms.length - 1) {
          t.text = t.info('nopunctuation');
        }
      });
    });
    return r;
  }
};

const normalize = function(obj) {
  let result = this;
  obj = obj || defaultMethods;
  Object.keys(obj).forEach((k) => {
    if (obj[k] && methods[k]) {
      result = methods[k](result);
    }
  });
  return result;
};

module.exports = normalize;
