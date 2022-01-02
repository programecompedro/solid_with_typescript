type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";
export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this.orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkOut(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinhoe stá vazio");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
  sendMessage(message: string): void {
    console.log("mensagem enviada: ", message);
  }
  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }
  clear(): void {
    console.log("carrinho de compras foi limpo...");
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: "Camiseta", price: 49.9 });
shoppingCart.addItem({ name: "Calça", price: 50.9 });
shoppingCart.addItem({ name: "Bone", price: 39.9 });
console.log(shoppingCart.total());
shoppingCart.checkOut();
