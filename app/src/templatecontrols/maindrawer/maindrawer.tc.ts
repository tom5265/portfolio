import {register, ui} from 'platypus';

export default class MaindrawerTemplateControl extends ui.TemplateControl {
    templateString: string = require('./maindrawer.tc.html');
    hasOwnContext = true;
    
    context = {
        showDrawer: false
    }
    
    closeDrawer() {
        this.context.showDrawer = false;
    }
    
    setTemplate() {
        this.addEventListener(this.element, '$tap', this.closeDrawer);
    }
}

register.control('maindrawer', MaindrawerTemplateControl);
