import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MyFormInterface } from 'src/app/shared/interfaces/my-form.interface';
import { FormBaseResource } from 'src/app/shared/resources/form-base.resource';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CategoriesComponent extends FormBaseResource<MyFormInterface> implements OnInit {
  constructor(protected override injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.createForm();
  }

  protected override createForm(): void {
    this.myForm = this.formBuilder.group({
      id: [0],
      description: [''],
      type: ['']
    });
  }
  public override submitForm(): void {}

  public navigate(route: string): void {
    this.router.navigateByUrl(route);
  }
}
