import { ShoppingCart } from "./classes/shopping-cart";
import { Order } from "./classes/order";
import { Messaging } from "./services/messaging";
import { Persistence } from "./services/persistence";
import { Product } from "./classes/product";
import { FiftyPercentDiscount } from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product("Camiseta", 49.9));
shoppingCart.addItem(new Product("Calça", 49.9));
shoppingCart.addItem(new Product("Sapato", 49.9));
console.log(shoppingCart.totalWithDiscount());

order.checkOut();
