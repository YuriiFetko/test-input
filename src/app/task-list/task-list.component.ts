import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter, HostListener,
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
  searchQuery;
  dist1 = 0;
  public zoom = 1;

  @HostListener('touchstart', ['$event']) start(e) {
    if (e.targetTouches.length === 2) {
      this.dist1 = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
    }
  }

  @HostListener('touchmove', ['$event']) move(e) {
    setTimeout(() => {
      if (e.targetTouches.length === 2 && e.changedTouches.length === 2){
        const dist2 = Math.hypot(
          e.touches[0].pageX - e.touches[1].pageX,
          e.touches[0].pageY - e.touches[1].pageY
        );

        if ((this.zoom >= 1.1 && this.zoom <= 101) && this.dist1 > dist2) {
          this.zoom = this.zoom - 1;
        }

        if ((this.zoom <= 100) && this.dist1 < dist2) {
          this.zoom = this.zoom + 1;
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
