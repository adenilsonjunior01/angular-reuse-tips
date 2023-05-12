import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export abstract class BaseResource {
  private _router!: Router;

  constructor(protected injector: Injector) {}

  get router(): Router {
    if (!this._router) {
      this._router = this.injector.get(Router);
    }
    return this._router;
  }
}
