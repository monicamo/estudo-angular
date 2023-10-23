import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: Person | undefined;
  @Output() delete: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() update: EventEmitter<Person> = new EventEmitter<Person>();

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.person);
  }

}
