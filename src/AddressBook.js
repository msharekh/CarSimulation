function AddressBook() {
	// body...
	this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
	// body...
	this.contacts.push(contact);
};

AddressBook.prototype.getContacts = function(index) {
	// body...
	return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(index){
	// body...
	this.contacts.splice(index,1);
};