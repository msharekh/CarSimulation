describe('Address Book', function () {

	var addressBook,thisContact; 

	beforeEach(function () {
			addressBook = new AddressBook(),
			thisContact = new Contact();
	})

	it('Should be able to add a contact',function () {
		 
		addressBook.addContact(thisContact);

		expect(addressBook.getContacts(0)).toBe(thisContact);
	});

	it('Should be able to delete contact',function () {
	

		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContacts(0)).not.toBeDefined();
	});
})