export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cardsContainer = containerSelector;
  }

  createItems() {
    this._items.forEach(element => {
      this.addItem(element);
    });
  }

  addItem(item) {
    const card = this._renderer(item);
    this._cardsContainer.prepend(card);
  }
}