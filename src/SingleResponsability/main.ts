import { ShoppingCart } from "./entities/index";
import { Order } from "./entities/order";
import { Messaging } from "./services/messaging";
import { Persistence } from "./services/persistence";
import { Product } from "./entities/product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product("Camiseta", 49.9));
shoppingCart.addItem(new Product("Calça", 49.9));
shoppingCart.addItem(new Product("Sapato", 49.9));
console.log(shoppingCart.total());

order.checkOut();
