export class Rectangle {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}
