import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service'
import {Product} from '../model/product2';
import {attributes} from '../model/attributes';
import { FormGroup, FormBuilder,FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  attributes=new attributes()
  

  constructor(private productService:ProductsService,private fb: FormBuilder) {  }


  showForms=this.fb.group({
    firstName:['',Validators.required],
    lastname:['',Validators.required],
    age:['',Validators.required],
    email:['',Validators.required],
      address:this.fb.group({
        address1:['',Validators.required],
        address2:['',Validators.required],
        state:['',Validators.required],
        zip:['',Validators.required],
      }),
      mobiles:this.fb.array([
        this.fb.control('')
      ]),
  });


 
 public ProducSubtCtegoryList:any=[];
 public CategoryList:any=[];

 get mobiles(){
   return this.showForms.get('mobiles') as FormArray;
 }
 
 addNewMobile(){
   console.log("addd")
   this.mobiles.push(this.fb.control(''));
   }

 onSubmit(){
   console.log(this.showForms.value);
   console.log(this.showForms.get(['address','address1']).value);
 }

  ngOnInit(): void {
    
  }
  




  postData(){
    
    console.log("...........Form values ................")
    console.log(this.showForms.value);
  }
  
  removeForm(i){

  }
  
  addForm(){
   
    
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
