import { NgModule }     from '@angular/core';
import {NavigationComponent} from "./navigation.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  imports:      [SharedModule ],
  declarations: [ NavigationComponent ],
  exports:      [ NavigationComponent ]
})
export class NavigationModule {

}
