class Address {
    constructor(street, city, state, zip) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

class ImmutableEmployee {
    constructor(name, id, dateOfJoining, addresses) {
        this._name = name;
        this._id = id;
        this._dateOfJoining = new Date(dateOfJoining)
        this._addresses = addresses.map(addr => new Address(addr.street, addr.city, addr.state, addr.zip));
    }
    
    get name() {
        return this._name;
    }
    
    get id() {
        return this._id;
    }
    
    get dateOfJoining() {
        return new Date(this._dateOfJoining)
    }
    
    get addresses() {
        return this._addresses.map(addr => new Address(addr.street, addr.city, addr.state, addr.zip));
    }
}

const addresses = [
    new Address('Gachibowli', 'Hyderabad', 'Telangana', '500028'),
    new Address('Ponna puram', 'Chennai', 'Tamil Nadu', '700012')
];

const emp = new ImmutableEmployee("Tilak", "12345", "2025-02-15", addresses);
console.log(emp)
