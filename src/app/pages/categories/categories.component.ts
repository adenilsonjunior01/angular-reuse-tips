import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { List } from 'src/app/shared/interfaces/list.interface';
import { MyFormInterface } from 'src/app/shared/interfaces/my-form.interface';
import { FormBaseResource } from 'src/app/shared/resources/form-base.resource';

interface Categories {
  id: number;
  description: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CategoriesComponent extends FormBaseResource<MyFormInterface> implements OnInit, List<Categories, string> {
  constructor(protected override injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
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

  override filter(list: any): string {
    return '';
  }

  override orderBy(list: any, param: string): any {
    return {};
  }
}
