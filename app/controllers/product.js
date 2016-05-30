var express = require('express'),
	router = express.Router(),
	mongoose = require('mongoose'),
	ProductModel = mongoose.model('Product');

module.exports = function(app) {
	app.use('/product', router);
};

/* Create new Product
==============================================================================*/
router.route('/create')
	.post(function(req, res) {
		console.log(req.body);
		var product = new ProductModel(req.body);
		product.save(function(err) {
			if (err) return next(err);
			res.send(product);
		});
	});

/* Update Product
==============================================================================*/
router.route('/update')
	.post(function(req, res) {
		console.log(req.body);
		ProductModel.findById(req.body._id, function(err, product) {
			if (err) return next(err);
			for (var property in product) {
				if (req.body.hasOwnProperty(property) && property !== '_id') {
					product[property] = req.body[property];
				}
			}
			console.log(product);
			product.save(function(err, data) {
				res.send(data);
			});
		});
	});
/* Get all Categories
==============================================================================*/
router.route('/all')
	.post(function(req, res) {
		console.log(req.body);
		var product = ProductModel.find(function(err, categories, count) {
			res.send(categories);
		});
	});

/* Delete Product
==============================================================================*/
router.route('/delete')
	.post(function(req, res) {
		console.log(req.body);
		ProductModel.findById(req.body._id).remove(function(err, product, count) {
			if (err) return next(err);
			res.send(product);
		});
	});
