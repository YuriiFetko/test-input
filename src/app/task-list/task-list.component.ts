import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store';
import * as taskAction from '../store/task-list.actions';
// @ts-ignore
import {ListKeyManager} from '@angular/cdk/a11y';
// @ts-ignore
import {UP_ARROW, DOWN_ARROW, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  clickInput() {

  }

  // tslint:disable-next-line:typedef
  inputValue(e: Event) {
    console.log(e);
  }

  // tslint:disable-next-line:typedef
  handleKeydown(e: KeyboardEvent) {

  }

  // tslint:disable-next-line:typedef
  keypPress() {

  }

  // tslint:disable-next-line:typedef
  onInputKeydown(e: any) {
    alert('enter');
  }
}
