import { CanDeactivateFn, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProductFormComponent } from "../product-form/product-form.component";

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

export const leavePageGuard: CanDeactivateFn<CanDeactivateComponent> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
}
