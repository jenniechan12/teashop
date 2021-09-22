class Item {
	constructor(name, description, price, tags, reviews, numberOfReviews) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.tags = tags;
		this.reviews = reviews;
		this.numberOfReviews = numberOfReviews;
	}

	get item() {
		return this;
	}
}

module.exports.Item = Item;
