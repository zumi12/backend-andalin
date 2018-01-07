/**
 * PembayaranController
 *
 * @description :: Server-side logic for managing pembayarans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	assignUser:function(req,res,next){
		let objParam = req.body;
		User.findOne({id:objParam.userId}).exec(function(err,users){
			if(pembayaran.biaya <= 0){
				return res.servererror({error:"belum lunas"})
			}
		})
}

};

