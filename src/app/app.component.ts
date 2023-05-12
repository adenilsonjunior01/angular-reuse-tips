import { Component, Injector, OnInit } from '@angular/core';
import { BaseResource } from 'shared/resources/base.resource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseResource implements OnInit {
  title = 'angular-reuse-tips';

  constructor(protected override injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    console.log(this.router);
  }
}
