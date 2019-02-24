import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(public http: HttpClient) { }

  public getProducts(dataURL: any) {
    return this.http.get(dataURL)
      .subscribe((res: Response) => res.json());
  }
}
