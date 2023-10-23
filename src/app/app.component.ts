import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  people$ : Observable<Person[]> | undefined;
  title = 'ngrx-basic';

  delete(person: Person) {
    console.log(person);
  }

  update(person: Person) {
    console.log(person);
  }

  addNew() {
    console.log('teste')
  }

}
