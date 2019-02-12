import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from 'C:/Projects/angular-test-app/src/app/domain/product';
import {LIST} from 'C:/Projects/angular-test-app/src/mockups/listing';

import { Promise } from 'q';
import {Deferred} from "ts-deferred";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListingService {

  constructor(private http: HttpClient) {

  }

  getList():Observable<Product[]> {
    return of(LIST);
  };

  addItemToList():void {
    LIST.push(new Product(LIST.length, ""));
  }

  removeItemToList(itemId):void {
    var element = LIST.find(x => x.id == itemId); 
    var elementIndex = LIST.indexOf(element);

    this.removeDomItemElement((elementIndex + 1)).then(function (index) {
     LIST.splice(elementIndex, 1);
    });
  }

  updateItemFromList(itemId, itemName):void {
    var element = LIST.find(x => x.id == itemId);  
    var elementIndex = LIST.indexOf(element);

    LIST[elementIndex].id == itemId;
    LIST[elementIndex].name == itemName;
  }

  // helper methods
  removeDomItemElement(itemId):any {
    var p = document.getElementById(itemId.toString());
    p.parentNode.removeChild(p);

    let deferr: Deferred<number> = new Deferred<number>();
    let prom = deferr.promise;

    deferr.resolve(itemId-1);

    return prom;
  }
}