class parentAsset {
  id;
  name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  showDetails() {
    console.log("from parent");
    console.log(this.id);
  }
}
const asset1 = new parentAsset(123, "testAsset");
//asset1.showDetails();

class childAsset extends parentAsset {
  vendor;
  constructor(id, name, vendor) {
    super(id, name);
    this.vendor = vendor;
  }
  getvendorDetails() {
    console.log(this.vendor);
  }
  showDetails() {
    console.log("from child");
    console.log(this.id);
  }
}

const cAsset1 = new childAsset(345, "mina", "ibm");
cAsset1.showDetails();
cAsset1.getvendorDetails();
