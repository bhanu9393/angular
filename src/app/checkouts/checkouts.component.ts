import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.css']
})
export class CheckoutsComponent implements OnInit {

  checkoutforms:FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.checkoutforms=formBuilder.group({
      /*email:new FormControl(),
    password:new FormControl(),
    terms:new FormControl()
    */
   emailAdd:['',[Validators.required,Validators.email]], 
   password:['',Validators.required],
   terms:['',Validators.requiredTrue],
   items:this.formBuilder.array([

    this.formBuilder.group({
      itemId: ['1'],
      itemName: ["Product"],
      itemdesc: ['Sample'],
      itemDone : ['',Validators.requiredTrue]
    })

   ])

    }); 
    
  }






trackedValue='';
  ngOnInit(): void {
    
  }
  












  postData(){
   // console.log(this.checkoutforms);
    //console.log(this.checkoutforms.value);
    console.log(this.checkoutforms.get('items').value)
    const x=this.checkoutforms.get('items').value;
    console.log(x[0].itemName)
    this.resetForm();
    
    
  }

  
//resets form
  resetForm(){
    this.checkoutforms.get('items').reset();
    console.log("reset works")
  }

  get Items(){
    return this.checkoutforms.get('items') as FormArray;
  }

  addNewItem(){
    const itemLenght=this.Items.length
    const newItem=this.formBuilder.group({
      itemId: [itemLenght+1],
      itemName: [""],
      itemdesc: [''],
      itemDone : ['',Validators.requiredTrue]
    });
    this.Items.push(newItem);
  }

}
