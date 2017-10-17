import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "app/services/data.service";

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.scss']
})


export class AddClassesComponent implements OnInit {

  model: any;
  selectedValue: string;
  ClassData: any[];

  //form data
  faddClass: FormGroup;

  //Dropdown
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;


  constructor(private DataService: DataService, private formBuilder: FormBuilder) {
    // this.onAddClass(ClassData: FormControl) ;
  }

  ngOnInit() {

    //Form
    this.faddClass = this.formBuilder.group({
      className: ['', [Validators.required]],
      enrollCapacity: ['', [Validators.required, Validators.maxLength(3)]],
      category: ['', [Validators.required]]
    });

  }


  //TODO: GET data and post 
  onAddClass(ClassData: FormControl) {

    console.log(ClassData.value);

    this.ClassData = ClassData.value;

    //TODO: Post to database
    this.DataService.postClass(this.ClassData).subscribe((response) => {
      console.log(response);
    });


  }


}
