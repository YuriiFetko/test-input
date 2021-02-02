import * as fromTaskList from './task-list.reducer';

export interface AppState {
  task: fromTaskList.State;
}

export const reducers: any = {
  task: fromTaskList.reducer
};


// task
export const getTaskState = (state: AppState) => state.task;
