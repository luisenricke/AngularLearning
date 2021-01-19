import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm: FormGroup;
  message: string;
  name: string;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    });

    this.onChanges();
    this.onChangeOneValue();
  }

  onSubmit() {
    console.log(`All form: ${this.message}`);
    console.log(`One input: ${this.name}`);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  private onChanges(){
    this.profileForm.valueChanges.subscribe(value => {
      this.message = `Hello ${value.firstName} ${value.lastName}, nice to meet you.`;
    });
  }

  private onChangeOneValue() {
    this.profileForm.get('firstName').valueChanges.subscribe(value => {
      this.name = `Hello ${value}`;
    });
  }

}
