import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appForGroup]',
  standalone: true
})
export class ForGroupDirective implements OnChanges {
  @Input('appForGroupOf') array!: any[];
  @Input('appForGroupBy') num!: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    let num = +this.num; // Comes as an string sometimes!
    this.viewContainer.clear();
    for(let i = 0; i < this.array.length; i+= num) {
      const items = this.array.slice(i, i + num);
      console.log(items, i, num);

      for (let j = items.length; j < num; j++) {
        items[j] = null;
      }

      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: items
      });
    }
  }

}
