import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import {ProductsService} from '../products.service';
import {ProductAttriButes} from '../model/product';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
product=new ProductAttriButes()
dataArray=[];

productList: any;
  public first= [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Cloths' },
    { id: 3, name: 'ABC' },
];

  
    x=['Television','Mobile']
    y=['Kids','Women','Men']
    z=['A','B','C']

public secondOpt;



  displayForms:FormGroup
  constructor(private formBuilder: FormBuilder,private productService:ProductsService) {
    this.displayForms=formBuilder.group({
      selectOne:new FormControl(),
      selectTwo:new FormControl(),
      attribute:new FormControl(),
      priority:new FormControl
    });
   }

  
ProductList: any

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
      this.ProductList=data;
    })
    this.dataArray.push(this.product);
  }

  postData(){
    console.log(this.displayForms.value.selectOne);
    console.log(this.displayForms.value.selectTwo);
  }

  onsubmit(){
    //console.log("Haiii")
  }
  addForm(){
   this.product=new ProductAttriButes();
   this.dataArray.push(this.product)
  }
  removeForm(index){
    this.dataArray.splice(index)
  }

  onChangeSubCategory(value: String){
    this.displayForms.controls['attribute'].enable();
    this.displayForms.controls['priority'].enable();
  }

  onChangeCategory(value: String){
    if(value=="Electronics"){
      this.secondOpt=this.x
      this.displayForms.controls['selectTwo'].enable();
             }
    else if(value=="Cloths"){
      this.secondOpt=this.y
      this.displayForms.controls['selectTwo'].enable();
    }
    else if(value=="ABC"){
      this.secondOpt=this.z
      this.displayForms.controls['selectTwo'].enable();
    }
    else{
      this.displayForms.controls['selectTwo'].enable();
    }
  }
}
