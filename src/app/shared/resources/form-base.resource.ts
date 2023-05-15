import { Injectable, Injector } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { BaseResource } from './base.resource';

type Type<T> = { [K in keyof T]: AbstractControl<unknown, unknown> };

export abstract class FormBaseResource<T extends Type<T>> extends BaseResource {
  private _formBuilder!: FormBuilder;
  public myForm!: FormGroup<T>;

  constructor(protected override injector: Injector) {
    super(injector);
  }

  protected get formBuilder(): FormBuilder {
    if (!this._formBuilder) {
      this._formBuilder = this.injector.get(FormBuilder);
    }
    return this._formBuilder;
  }

  protected isValidForm(): boolean {
    if (this.myForm?.invalid) {
      this.markFormAsTouched();
      return false;
    }
    return true;
  }

  protected markFormAsTouched(): void {
    Object.keys(this.myForm?.controls).forEach((key) => {
      this.myForm?.get(key)?.markAsTouched();
    });
  }

  protected abstract createForm(): void;
  public abstract submitForm(): void;
}
