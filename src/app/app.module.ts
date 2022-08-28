import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { TaskComponent } from './shared/task/task.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    TodosComponent,
    TaskComponent
  ],
  exports: [TodosComponent, TaskComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
