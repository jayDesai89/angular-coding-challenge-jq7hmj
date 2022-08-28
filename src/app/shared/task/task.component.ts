import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() taskName;
  @Output() taskDelete = new EventEmitter<{}>;
  taskCompleteCheck;

  constructor() {}

  ngOnInit() {}

  taskStatus(taskName){
    this.taskDelete.emit(taskName);
  }

  // taskComplete(){
  //   this.taskCompleteCheck = !this.taskCompleteCheck;
  // }
}
