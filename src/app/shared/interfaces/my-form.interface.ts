import { FormControl } from '@angular/forms';

export interface MyFormInterface {
  id: FormControl<number | null>;
  description: FormControl<string | null>;
  type: FormControl<string | null>;
}
