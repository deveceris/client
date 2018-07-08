import {Component} from '@angular/core';

@Component({
    selector: 'projectk-search',
    template: `
        <div class = "row">
            <h5 style="margin-left: 20px;">서비스 접근 차단</h5>
        </div>
        <hr/>
        <div class = "row">
            <div class="col-md-11">
                <input type="text" class="form-control" [(ngModel)]="message"/>
            </div>
            <div class="col-md-1 btn-group" ngbRadioGroup name="radioBasic" [(ngModel)]="operate" (change)="operateBtnChange($event)">
                <label ngbButtonLabel class="btn-outline-primary" >
                    <input ngbButton type="radio" value="allow">허용
                </label>
                <label ngbButtonLabel class="btn-outline-primary">
                    <input ngbButton type="radio" value="deny">차단
                </label>
            </div>
        </div>
    `,
})
export class Search {
    name = '업그레이드!!!!';
}
