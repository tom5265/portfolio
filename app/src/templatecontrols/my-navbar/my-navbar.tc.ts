import {register, ui} from 'platypus';

export default class MynavbarTemplateControl extends ui.TemplateControl {
    templateString: string = require('./my-navbar.tc.html');
    
    context: any = {
        
    }


    burgerToggle(): void {
        let dropDown = document.getElementById('responsive-menu');
        console.log(dropDown);
        if (dropDown.className = "hidden") {
       dropDown.className = 'show';              
    }
    else {
        dropDown.className = "hidden"
    }
    }
}

register.control('my-navbar', MynavbarTemplateControl);
