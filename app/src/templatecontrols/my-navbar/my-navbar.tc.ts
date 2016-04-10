import {register, ui} from 'platypus';

export default class MynavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./my-navbar.tc.html');
    
    context: any = {
        
    }
    
}

register.control('my-navbar', MynavbarTemplateControl);
