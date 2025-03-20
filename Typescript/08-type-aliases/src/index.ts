type Product = {
    naam: string;
    prijs: number;
    beschrijving: string;
};


const products: Product[] = [
    {
        naam: "Product A",
        prijs: 19.99,
        beschrijving: "Dit is product A.",
    },
    {
        naam: "Product B",
        prijs: 29.99,
        beschrijving: "Dit is product B.",
    },
];


function displayProducts(products: Product[]): void {
    products.map(product => {
        console.log(`Product Name: ${product.naam}`);
        console.log(`Price: ${product.prijs.toFixed(2)}€`);
        console.log(`Description: ${product.beschrijving}`);
        console.log("-----------------");
    });
}


displayProducts(products);
