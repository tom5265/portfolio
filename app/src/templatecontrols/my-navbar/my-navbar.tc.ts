import {register, ui} from 'platypus';

export default class MynavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./my-navbar.tc.html');
    
    context: any = {
        
    }
    
    myFunction(): void {
    document.getElementsByClassName("menu")[0].classList.toggle("slide-down");
}
    

}

register.control('my-navbar', MynavbarTemplateControl);
