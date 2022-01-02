import { OrderStatus } from "./interfaces/order-status";
import { ICustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistenceProtocol } from "./interfaces/persistence-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistence: PersistenceProtocol,
    private readonly customer: ICustomerOrder
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkOut(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinhoe stá vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido.`
    );
    this.persistence.saveOrder();
    this.cart.clear();

    console.log(
      "O cliente é: ",
      this.customer.getName(),
      this.customer.getIDN()
    );
  }
}
