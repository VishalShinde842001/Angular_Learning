
import { Component, Input } from '@angular/core'

@Component(
    {
        selector: 'product-list'
        , templateUrl: 'product-list.component.html'
    }
)
export class ProductListComponent {

    @Input()
    searchKeyFromSearchComponent: string = '';
    constructor(){
        console.log("Inside Product List searchKeyFromSearchComponent====>",this.searchKeyFromSearchComponent)
    }
    productList = [
        {
            id: 1,
            name: "Wireless Mouse",
            price: 25.99,
            category: "Electronics",
            description: "Ergonomic wireless mouse with 2.4GHz connectivity."
        },
        {
            id: 2,
            name: "Mechanical Keyboard",
            price: 89.99,
            category: "Electronics",
            description: "RGB backlit mechanical keyboard with customizable keys."
        },
        {
            id: 3,
            name: "Bluetooth Headphones",
            price: 59.99,
            category: "Electronics",
            description: "Noise-cancelling Bluetooth headphones with 20-hour battery life."
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 149.99,
            category: "Wearables",
            description: "Fitness tracker with heart rate monitor and GPS."
        },
        {
            id: 5,
            name: "Laptop Backpack",
            price: 39.99,
            category: "Accessories",
            description: "Water-resistant backpack with USB charging port."
        },
        {
            id: 6,
            name: "Desk Lamp",
            price: 29.99,
            category: "Home & Office",
            description: "Adjustable LED desk lamp with touch control."
        }
    ];
}