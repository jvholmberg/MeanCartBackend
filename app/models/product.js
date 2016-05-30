var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProductSchema = new Schema({
	title: String,
	summary: String,
	description: String,
	category: String,
	brand: String,
	sku: String,
	price: Number,
	salesPrice: Number,
	stockLevel: Number,
	stockStatus: String,
	weight: Number,
	width: Number,
	height: Number,
	depth: Number
});

ProductSchema.virtual('date')
	.get(function() {
		return this._id.getTimestamp();
	});

mongoose.model('Product', ProductSchema);
