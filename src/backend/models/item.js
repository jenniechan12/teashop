export default class Item {
	constructor(name, description, price, addOns, tags) {
		this.name = name;
		this.description = description;
		this.price = price;
		this.addOns = addOns;
		this.tags = tags;
	}

	get item() {
		return this;
	}

	addAddOns(addOn) {
		this.addOns.push(addOn);
	}
}
