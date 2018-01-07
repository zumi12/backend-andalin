/**
 * PelajaranController
 *
 * @description :: Server-side logic for managing pelajarans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


assignUser : function (req, res, next){
	var objParam = req.body;
		User.findOne({id:objParam.userId}).exec(function(err, user){
			console.info("masuk user")
			if(err){
				return res.serverError({error:err});
			}else{

				if(user.role != "mahasiswa"){
					return res.notFound({error : "harus role mahasiswa"})
				}

				Pelajaran.findOne({id:objParam.pelajaranId}).exec(function(err, pelajaranFound){
								console.info("masuk pelajaran")
						if(!pelajaranFound){
							return res.serverError({error:err});
						}
						pelajaranFound.owners.add(user);
						pelajaranFound.save(function(err){
							if(err){
								return res.serverError({error:err});
							}else{
								console.info(objParam)
								var pembayaranObj = {biaya:objParam.biaya, ispaid: "no", owner: user, pelajaran:pelajaranFound }
								Pembayaran.create(pembayaranObj).exec(function(err, byr){
									console.info(err);
									if(err){
										return res.serverError({error:err});
									}
									byr.owner = user;
									byr.pelajaran = pelajaranFound;
									return res.json({data:byr});
								})
							}
						});
				});
			}
		});
}


	
};

