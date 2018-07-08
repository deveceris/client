import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface PopupParam {
  title? : string | Function | null;
  content? : string | Function | null;
  confirmCallback? : Function | null;
  cancelCallback? : Function | null;
  useOk? : boolean | null;
  useCancel? : boolean | null;
}

@Component({
  selector: `[carrier-popup]`,
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{getTitle()}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="cancel()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <span [innerHTML]="getContent()"></span>
    </div>
    <div class="modal-footer">
      <button *ngIf="isUseOk()" type="button" class="btn btn-outline-dark" (click)="ok()">확인</button>
      <button *ngIf="isUseCancel()" type="button" class="btn btn-outline-dark" (click)="cancel()">취소</button>
    </div>
  `
})

export class Popup {
  @Input() params : PopupParam;

  constructor(public operatorModal: NgbActiveModal) {}

  getTitle() : string {
    if(this.params.title instanceof Function) {
      return this.params.title();
    } else {
      return this.params.title;
    }
  }

  isUseOk() : boolean {
    if(this.params.useOk != null) {
      return this.params.useOk;
    }
    return true;
  }

  isUseCancel() : boolean {
    if(this.params.useCancel != null) {
      return this.params.useCancel;
    }
    return true;
  }

  getContent() : string {
    if(this.params.content instanceof Function) {
      return this.params.content();
    } else {
      return this.params.content;
    }
  }

  ok() {
    if(this.params.confirmCallback != null) {
      this.params.confirmCallback();
    }
  }

  cancel() {
    if(this.params.cancelCallback != null) {
      this.params.cancelCallback();
    }
  }
}