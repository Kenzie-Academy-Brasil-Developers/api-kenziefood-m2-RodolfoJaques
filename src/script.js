import { ProductsPublic } from "./controllers/ProductsPublic.js"
import { Dom } from "./models/Dom.js";


Dom.showcase(await ProductsPublic.getProducts())
