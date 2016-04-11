import {register, ui} from 'platypus';

export default class MaindrawerTemplateControl extends ui.TemplateControl {
    templateString: string = require('./maindrawer.tc.html');
}

register.control('maindrawer', MaindrawerTemplateControl);
