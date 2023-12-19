import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActionService {

  actions: Action[] = [
    {
      name: 'Action 1',
      objective: 'Objective 1',
      responsible: 'Responsible 1',
      beneficiaries: 1,
      creationDate: new Date("2022-03-25"),
      status: ""
    },
    {
      name: 'Action 2',
      objective: 'Objective 2',
      responsible: 'Responsible 2',
      beneficiaries: 2,
      creationDate: new Date("2022-04-15"),
      status: ""
    },
    {
      name: 'Action 3',
      objective: 'Objective 3',
      responsible: 'Responsible 3',
      beneficiaries: 3,
      creationDate: new Date("2022-06-28"),
      status: ""
    }
  ];

  addAction(action: Action): void {
    
    this.actions.push(
      {
        name: action.name,
        objective: action.objective,
        responsible: action.responsible,
        beneficiaries: action.beneficiaries,
        creationDate: action.creationDate,
        status: action.status
      }
    );
  }

  deleteAction(actionName: string): void {
    this.actions = this.actions.filter(action => action.name !== actionName);
  }

  getActions(): Action[] {
    return this.actions;
  }

  filter(searchInput: HTMLInputElement| null, actionName: string): Action[] {
    if (searchInput) {
      if((searchInput.value).toLowerCase().includes(actionName.toLowerCase()))
      this.actions = this.actions.filter(action => action.name.toLowerCase().includes(actionName.toLowerCase()));
    }
    return this.actions;
  }

}

export interface Action {
  name: string;
  objective: string;
  responsible: string;
  beneficiaries: number;
  creationDate: Date;
  status: string;
}
