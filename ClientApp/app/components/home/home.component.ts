import { Component } from '@angular/core';

import {
    GridDataResult,
    PageChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {

    private gridView: GridDataResult;
    private data: any[];
    private pageSize: number = 150;
    private skip: number = 0;

    constructor() {
        this.data = this.createRandomData(100000);
        this.loadProducts();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadProducts();
    }

    private loadProducts(): void {
        this.gridView = {
            data: this.data.slice(this.skip, this.skip + this.pageSize),
            total: this.data.length
        };
    }

    /* Generating example data */
    private createRandomData(count: number) {
        const firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne", "Nige"],
            lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth", "White"],
            cities = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "Philadelphia", "New York", "Seattle", "London", "Boston"],
            titles = ["Accountant", "Vice President, Sales", "Sales Representative", "Technical Support", "Sales Manager", "Web Designer",
                "Software Developer", "Inside Sales Coordinator", "Chief Technical Officer", "Chief Execute Officer"];

        return Array(count).fill({}).map((_, idx) => ({
            id: idx + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            city: cities[Math.floor(Math.random() * cities.length)],
            title: titles[Math.floor(Math.random() * titles.length)]
        })
        );
    }

    public onClick(): void {
        alert("click Clock");
        console.log("button was clicked");
    }
}
