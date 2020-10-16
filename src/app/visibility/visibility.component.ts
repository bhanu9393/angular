import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'
import {Product} from '../model/product2';
import {attributes} from '../model/attributes';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.component.html',
  styleUrls: ['./visibility.component.css']
})
export class VisibilityComponent implements OnInit {
  attributes=new attributes()
  public dataArray=[];
  public arrayEx=[];

  showForms
  constructor(private productService:ProductsService,private formBuilder: FormBuilder) {
    this.showForms=formBuilder.group({
      selectOne:new FormControl(),
      selectTwo:new FormControl(),
      value:new FormControl,
      priority:new FormControl(),
      order:new FormControl(),
      default:new FormControl(),
    });
   }
   public ProducSubtCtegoryList:any=[];
   public CategoryList:any=[];
  ngOnInit(): void {
    this.productService.getCtegory()
    .subscribe(data =>this.CategoryList=data)
    this.attributes=new attributes();
    this.dataArray.push(this.attributes)
    
  }

  postData(){
    
    console.log("...........Form values ................")
    console.log(this.showForms.get('selectOne').value);
    console.log(this.showForms.get('selectTwo').value);
    
    console.log("................Attributes..........");
    console.log(this.attributes);
  }
  
  removeForm(i){

  }
  
  addForm(){
    console.log("Testinggg...")
    this.dataArray.push(this.attributes)   
    console.log(this.attributes)
    
  }






  onChangeCategory(value:String){
    console.log(value+"Of Category")
    this.showForms.controls['selectTwo'].enable();
    this.productService.getSubCtegory(value)
    .subscribe(data =>this.ProducSubtCtegoryList=data) 
    console.log(this.ProducSubtCtegoryList)
  
  }
  onChangeSubCategory(value:String){
    console.log(value+"Of SubCategory")
  }


}
