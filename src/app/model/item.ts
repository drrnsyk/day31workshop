export class Item {
    Image: string;
    Description: string;
    Quantity: number;

    constructor(Image: string, Description: string, Quantity: number) {
        this.Image = Image;
        this.Description = Description;
        this.Quantity = Quantity;
    }
}