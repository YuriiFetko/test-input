import {Action} from '@ngrx/store';
import * as TaskListActions from './task-list.actions';

export interface State {
  tasks: any;
}

const initialState: State = {
  tasks: [
    {
      id: 1,
      title: 'test 1'
    }
  ]
};

// tslint:disable-next-line:typedef
export function reducer(state = initialState, action: TaskListActions.TaskActions) {
  switch (action.type) {
    case TaskListActions.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TaskListActions.DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      console.log('default state: ', state);
      return state;
  }
}
