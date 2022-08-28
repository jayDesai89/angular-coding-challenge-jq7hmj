import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl,  } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Output() tasks = ["Task 1","Task 2"];
  @Output() taskCompleteCheck;
  taskNameForm : FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.taskNameForm = this.formBuilder.group({
      'nameTask': new FormControl('')
    })
  }

  getTask(){
    this.tasks.unshift(this.taskNameForm.value.nameTask);
    console.log(this.taskNameForm.value);
    this.taskNameForm.reset();
  }

  taskComplete(){
    this.taskCompleteCheck != this.taskCompleteCheck;
  }

  deleteTask(task){
    this.tasks.splice(this.tasks.indexOf(task),1);
  }

}