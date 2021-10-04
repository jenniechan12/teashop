class Item {
	constructor(name, description, price, tags, reviews, numberOfReviews) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.tags = tags;
		this.reviews = reviews;
		this.numberOfReviews = numberOfReviews;
	}

	printItem() {
		console.log(`${this.name} - ${this.description}: $${this.price}`);
		console.log(`${this.reviews} (${this.numberOfReviews})`);
	}
}

class OrderItem extends Item {
	constructor(item, addOns, total) {
		super(item);
		this.addOns = addOns;
		this.total = total;
	}

	showOrder() {
		this.printItem();
		console.log(`AddOns: ${this.addOns}`);
		console.log(`Total: $${this.total}`);
	}
}

module.exports.Item = { Item, OrderItem };
