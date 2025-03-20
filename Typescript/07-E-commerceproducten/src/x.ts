interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    discountPercentage?: number;
}

class Electronics implements Product {
    constructor(public id: number, public name: string, public price: number, public description: string, public discountPercentage?: number) { }
}

class Clothing implements Product {
    constructor(public id: number, public name: string, public price: number, public description: string, public discountPercentage?: number) { }
}
class Books implements Product {
    constructor(public id: number, public name: string, public price: number, public description: string, public discountPercentage?: number) { }
}

function displayProductInfo(product: Product) {
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Description: ${product.description}`);
    if (product.discountPercentage !== undefined) {
        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
        console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
    }
    console.log("--------------");
}



const electronics1 = new Electronics(1, "Smartphone", 699.99, "Latest smartphone with high-resolution camera", 10);
const electronics2 = new Electronics(2, "Laptop", 1099.99, "Powerful laptop for work and gaming");

const clothing1 = new Clothing(2, "T-Shirt", 19.99, "Comfortable and stylish t-shirt");
const clothing2 = new Clothing(4, "Jeans", 49.99, "Classic denim jeans", 20);

const book1 = new Books(3, "Harry Potter", 14.99, "Fantasy novel by J.K. Rowling", 3);
const book2 = new Books(6, "The Great Gatsby", 9.99, "Classic novel by F. Scott Fitzgerald");

displayProductInfo(electronics1);
displayProductInfo(electronics2);
displayProductInfo(clothing1);
displayProductInfo(clothing2);
displayProductInfo(book1);
displayProductInfo(book2);
