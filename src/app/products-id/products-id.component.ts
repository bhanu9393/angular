import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-id',
  templateUrl: './products-id.component.html',
  styleUrls: ['./products-id.component.css']
})
export class ProductsIdComponent implements OnInit {
  paramQuery=' ';
  constructor(private activatedRoute:ActivatedRoute ) {

    this.activatedRoute.params.subscribe(data => {
      this.paramQuery=data.id;
    });

   }

  ngOnInit(): void {
  }

}
