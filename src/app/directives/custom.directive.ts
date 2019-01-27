import {Directive, ElementRef, } from '@angular/core'

@Directive({
    selector : '[only-alphabets]'

})
export class OnlyAlphabets{
    constructor(public e1 : ElementRef){
        this.e1.nativeElement.onkeypress = (evt) =>{
            if(!((evt.which >=97 && evt.which <=122) || (evt.which >=65 && evt.which <=90))){
                evt.preventDefault();
            }
        };
    }

}
@Directive({
    selector : '[change-text]'

})
export class ChangeText{
    constructor(public e1 : ElementRef){
        
        e1.nativeElement.innerText="Hi.....";
    }

}