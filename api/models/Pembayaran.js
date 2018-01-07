/**
 * Pembayaran.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	biaya:{
  		type:"float"
  	},
  	ispaid:{
  		type: "string"
  	},

  	owner:{
  		model: "user"
  	},

  	pelajaran: {
  		model: "pelajaran"
  	}
  	/*owners: {
      collection: 'user',
      via: 'Pembayaran',
      dominant: true
    },
    pembayarans: {//salah ieu yay,sa, malaenhya model pembayaran boga collectiona ngarana pembayaran oge? langsung weh meh mmpersingkat waktu
      collection: 'user',
      via: 'Pembayaran',
      dominant: true
    }
*/
  }
};

