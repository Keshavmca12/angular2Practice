import {Injectable, EventEmitter} from '@angular/core';
import {Router, RoutesRecognized, ActivatedRouteSnapshot} from '@angular/router';

@Injectable()
export class BreadcrumbComponent1 {
  public breadcrumbs:Array<any>;
  constructor(private _router:Router) {

    this._router.events.subscribe(eventData => {
      if (eventData instanceof RoutesRecognized) {
        let event:any = eventData;
        let currentUrlPart = event.state._root;
        let currUrl = '#'; //for HashLocationStrategy

        this.breadcrumbs = [];
        while (currentUrlPart.children.length > 0) {
          currentUrlPart = currentUrlPart.children[0];
          let routeSnaphot = <ActivatedRouteSnapshot>currentUrlPart.value;

          currUrl += '/' + routeSnaphot.url.map(function (item) {
              return item.path;
            }).join('/');

          this.breadcrumbs.push({
            displayName: (<any>routeSnaphot.data).displayName,
            url: currUrl,
            params: routeSnaphot.params
          })
          console.log(this.breadcrumbs)
        }
      }
    });
  }}
