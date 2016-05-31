var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	BrandModel = mongoose.model('Brand');

module.exports = function(app) {
	app.use('/brand', router);
};

/* Create new Brand
==============================================================================*/
router.route('/create')
	.post(function(req, res) {
		console.log(req.body);
		var brand = new BrandModel(req.body);
		brand.save(function(err) {
			if (err) return next(err);
			res.send(brand);
		});
	});

/* Update Brand
==============================================================================*/
router.route('/update')
	.post(function(req, res) {
		console.log(req.body);
		BrandModel.findById(req.body._id, function(err, brand) {
			if (err) return next(err);
			for (var property in brand) {
				if (req.body.hasOwnProperty(property) && property !== '_id') {
					brand[property] = req.body[property];
				}
			}
			brand.save(function(err, data) {
				res.send(data);
			});
		});
	});
/* Get all Categories
==============================================================================*/
router.route('/all')
	.post(function(req, res) {
		console.log(req.body);
		var brand = BrandModel.find(function(err, brands, count) {
			res.send(brands);
		});
	});

/* Delete Brand
==============================================================================*/
router.route('/delete')
	.post(function(req, res) {
		console.log(req.body);
		BrandModel.findById(req.body._id).remove(function(err, brand, count) {
			if (err) return next(err);
			res.send(brand);
		});
	});
