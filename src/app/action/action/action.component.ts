import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';
import { ActionService, Action } from '../../action-service/action-service.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements DoCheck {
  
  newAction: Action = {
    name: '',
    objective: '',
    responsible: '',
    beneficiaries: 0,
    creationDate: new Date(),
    status: ""
  };

  constructor(private actionService: ActionService) {}

  actions!: Action[];

  ngDoCheck(): void {
    this.actions = this.actionService.getActions();
  }

  addAction(): void {
    this.actionService.addAction(this.newAction);

    this.newAction = {
      name: '',
      objective: '',
      responsible: '',
      beneficiaries: 0,
      creationDate: new Date(),
      status: ""
    };
  }

  deleteAction(actionName: string): void {
    this.actionService.deleteAction(actionName);
    this.actions = this.actions.filter(action => action.name !== actionName);
  }

  markSuccess(action: Action): void {
    action.status = "succeeded"
  }

  markFail(action: Action): void {
    action.status = "failed"
  }

  getBackgroundColor(action: Action): string {
    if(action.status === "succeeded")
      return "green";
    else if(action.status === "failed")
      return "red";
    else
      return "white";
  }

  
  filter(actionName: string): void {
    var searchInput = document.getElementById("search-input") as HTMLInputElement | null;
    this.actionService.filter(searchInput, actionName);
  }
  
}
