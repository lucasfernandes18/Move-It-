import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-input-primary',
  standalone: true,
  
  imports: [ReactiveFormsModule],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPrimaryComponent),
      multi: true
    }
  ],


  templateUrl: './input-primary.component.html',
  styleUrl: './input-primary.component.scss',

})
export class InputPrimaryComponent implements ControlValueAccessor{
@Input() type: InputTypes = 'text';
@Input() placeholder: string = '';
@Input() label: string = '';
@Input() inputName: string = '';


value: string = '';
onChange: any = () => {};
onTouched: any = () => {};

onInput(event: Event): void {
  const value = (event.target as HTMLInputElement).value;
  this.onChange(value);
}

writeValue(value: any): void {
  this.value = value
}

registerOnChange(fn: any): void {
  this.onChange = fn;
}

registerOnTouched(fn: any): void {
  this.onTouched = fn;
}

setDisabledState(isDisabled: boolean): void {
  
}

}
