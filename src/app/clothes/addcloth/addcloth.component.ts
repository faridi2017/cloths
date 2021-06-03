import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ClothServiceService } from 'src/app/cloth-service.service';

import { Router } from "@angular/router";
@Component({
  selector: 'app-addcloth',
  templateUrl: './addcloth.component.html',
  styleUrls: ['./addcloth.component.css']
})
export class AddclothComponent implements OnInit {
  clothForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private apiService: ClothServiceService,private router: Router) { }

  ngOnInit(): void {
    this.clothForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      modelName: ['', [Validators.required]],
      price: ['', [Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(2),
        Validators.minLength(5)]], //
      dateOfManufacturer: ['', [Validators.required]],
      fabric: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]]
    }) 
  }
  get getControl(){
    return this.clothForm.controls;
  }
  
  onSubmit(){
    console.log('check form value-->',this.clothForm.value);
      this.apiService.addCloth(this.clothForm.value)
        .subscribe((data:any) => {
          this.router.navigate(['list']);
        });   
    
  }

}
