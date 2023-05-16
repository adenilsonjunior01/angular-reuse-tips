import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseResource {
  private _router!: Router;
  private _activatedRoute!: ActivatedRoute;

  public loading$: Subject<boolean> = new Subject<boolean>();

  constructor(protected injector: Injector) {}

  get router(): Router {
    if (!this._router) {
      this._router = this.injector.get(Router);
    }
    return this._router;
  }

  get activatedRoute(): ActivatedRoute {
    if (!this.activatedRoute) {
      this._activatedRoute = this.injector.get(ActivatedRoute);
    }
    return this._activatedRoute;
  }

  public filter(list: any): any {}
  public orderBy(list: any, param: string): any {}
}
