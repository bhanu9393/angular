import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpParams} from '@angular/common/http'
import {Product} from './model/product2';
import { Observable } from 'rxjs';

@Injectable({  
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient:HttpClient) { }
  getProducts(){
    return this.httpclient.get("https://run.mocky.io/v3/6b281f53-33c7-4a9a-a8d5-1362ef29abeb");
  }
  
  getProducts2(): Observable<Product[]>{
    return this.httpclient.get<Product[]>("https://run.mocky.io/v3/7c3f86aa-7729-4314-96fa-b65e7a117133");
  }

  getCtegory(){
    return this.httpclient.get("http://localhost:9090/ingestion/productcategorynames");
  }

  getSubCtegory(category){
    let param1=new HttpParams().set("category",category)
    return this.httpclient.get("http://localhost:9090/ingestion/"+category);
  }
  createProduct(resource){
    return this.httpclient.post("",resource)
  }
}
 