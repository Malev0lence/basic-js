const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.subArr.length
  },

  subArr : [],

  addLink(value) {
      
      this.subArr.push(`( ${value} )`);
      return this;
  },

  removeLink(position) {
      try {
          if ((position > this.subArr.length - 1) || (position <= 0)) throw new Error('Wrong position number')
          this.subArr.splice(position - 1, 1);
          return this
      } catch (e) {
          throw new Error('Invalid remove position');
      }
      
  },

  reverseChain() {
      this.subArr.reverse();
      return this;
  },

  finishChain() {
      let res;
      res = this.subArr.join('~~');
      res = res.replace('( 3 )~~( 2 )~~( 1 )~~', '')
      this.subArr = [];

      return res;
     
  },

};

module.exports = chainMaker;
