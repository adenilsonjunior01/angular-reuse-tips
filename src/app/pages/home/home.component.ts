import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseResource } from 'src/app/shared/resources/base.resource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent extends BaseResource implements OnInit {
  constructor(protected override injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {}

  public navigate(route: string): void {
    this.router.navigateByUrl(route);
  }
}
