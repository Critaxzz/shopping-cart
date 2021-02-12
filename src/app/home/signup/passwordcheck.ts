import { AbstractControl } from '@angular/forms'; 


export function passwordMatchValidator(control:AbstractControl){
    if(control && (control.value !== null || control.value !== undefined)){
        const password2Value = control.value;
        
        const passControl = control.root.get('password');
        if(passControl){
            const passValue = passControl.value;
            if(passValue !== password2Value){
                return {
                    isError : true
                };
            }
        }
    }
    return null;
}