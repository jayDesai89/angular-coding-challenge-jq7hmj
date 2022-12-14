import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'todos', component: TodosComponent},
      { path: '', component: WelcomeComponent },
      { path: '**', redirectTo: '' },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


