import {AbstractControl} from "@angular/forms";
export class customValidators {
    static onlyNumberAndWord(control: AbstractControl): {[key: string]: boolean} | null {
      const rule = /(([a-z]+\d+)|(\d+[a-z]+))[a-z\d]*/
      if(!rule.test(control.value)) {
        return { onlyNumberAndWord: true }
      }
      return null
    }
  }
  