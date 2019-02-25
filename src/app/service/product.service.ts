import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable()
export class ProductService {

  constructor(public http: HttpClient) { }

  public getProducts() {
    return this.http.get('../../../assets/db.json');
  }
}
