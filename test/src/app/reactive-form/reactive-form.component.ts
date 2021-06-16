import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { customValidators } from './customValidator/customValidator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm!: FormGroup
  get emailFormArray() {
    return this.reactiveForm.get('emails') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      username: [null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16)
      ]],
      password: [null, [
        Validators.required,
        customValidators.onlyNumberAndWord
      ]],
      emails: fb.array([])
    })
   }

  ngOnInit(): void {
  }
  addEmail() {
    const newEmail = new FormControl(null, [Validators.email, Validators.required] )
    this.emailFormArray.push(newEmail)
  }

  removeControl(idx: number) {
    this.emailFormArray.removeAt(idx)
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  onSubmit() {
    const formData = {...this.reactiveForm.value}
    console.log(formData)

    this.reactiveForm.reset()
    this.clearFormArray(this.emailFormArray)
  }

}
