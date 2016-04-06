import {register, ui} from 'platypus';

export default class MynavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./my-navbar.tc.html');
    
    context: any = {
        
    }
    
    myFunction(): void {
    document.getElementsByClassName("nav-links")[0].classList.toggle("responsive");
}
    

}

register.control('my-navbar', MynavbarTemplateControl);
