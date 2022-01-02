import { OrderStatus } from "./interfaces/order-status";
import { Messaging } from "../services/messaging";
import { Persistence } from "../services/persistence";
import { ShoppingCart } from "./shopping-cart";
import { ICustomerOrder } from "./interfaces/customer-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
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
