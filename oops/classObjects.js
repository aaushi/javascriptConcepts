class parentAsset {
  id;
  name;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  showDetails() {
    console.log(this.id);
  }
}
const asset1 = new parentAsset(123, "testAsset");
asset1.showDetails();
