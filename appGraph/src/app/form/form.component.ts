import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  options:any;
  homeForm: FormGroup;
  constructor(private fb: FormBuilder,
              private service: AppService,
              private router: Router) {
    this.buildForm();
   }

  ngOnInit() {
    this.getData(); 
  }

  buildForm() {
    this.homeForm = this.fb.group({
      option_select:[null, Validators.required]
    })
  }

  getData() {
    this.service.getOptions().subscribe(data => {
      console.log(data);
    });
    this.service.getFixedList().subscribe(data => {
      this.options = data;
    })
  }

  onSubmit() {
    console.log(this.homeForm.value.option_select);
    let number = Number(this.homeForm.value.option_select);
    console.log(number)
    this.service.postOption(number);
    setTimeout(() => {
      this.router.navigate(['/graph']);
    }, 1000);
  }

}
