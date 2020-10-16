import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-display-new',
  templateUrl: './display-new.component.html',
  styleUrls: ['./display-new.component.css']
})
export class DisplayNewComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfTickets: ['', Validators.required],
      tickets: new FormArray([])
  });

  this.t.push(this.formBuilder.group({
    value: ['', Validators.required],
      priority: ['', Validators.required],
      order: ['', Validators.required],
      default: ['', Validators.required]
}));
  }

  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  onSubmit(){
    this.submitted = true;
    console.log("haiiii")
    console.log(this.dynamicForm.value)
  }



  add(){
    this.t.push(this.formBuilder.group({
      value: ['', Validators.required],
      priority: ['', Validators.required],
      order: ['', Validators.required],
      default: ['', Validators.required]
  }));
  }

  remove(e){
    if (e!=0)
    this.t.removeAt(e);
    }
    
  
}
