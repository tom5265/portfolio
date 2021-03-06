import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {

    };

    rollScroll() {
        let scroll = (function () {

            let elementPosition = function (a: any) {
                return function () {
                    return a.getBoundingClientRect().top;
                };
            };

            let scrolling = function (elementID: any) {

                let el: any = document.getElementById(elementID),
                    elPos = elementPosition(el),
                    duration = 200,
                    increment = Math.round(Math.abs(elPos()) / 40),
                    time = Math.round(duration / increment),
                    prev = 0,
                    E: any;

                function scroller() {
                    E = elPos();

                    if (E === prev) {
                        return;
                    } else {
                        prev = E;
                    }

                    increment = (E > -20 && E < 20) ? ((E > - 5 && E < 5) ? 1 : 5) : increment;
                    if (E > 1 || E < -1) {
                        if (E < 0) {
                            window.scrollBy(0, -increment);
                        } else {
                            window.scrollBy(0, increment);
                        }
                        setTimeout(scroller, time);
                    } else {
                        el.scrollTo(0, 0);
                    }
                }
                scroller();
            };

            return {
                To: scrolling
            }
        })();
        scroll.To('scroll-div');
    }
    
    loaded() {
        let markup = document.getElementById('markup');
        let dynamic = document.getElementById('dynamic');
        let frameworks = document.getElementById('frameworks');
        markup.addEventListener('mouseenter', function () {
            document.getElementById('markers').classList.toggle('shake-slow');
            document.getElementById('markers').classList.toggle('shake-constant');
        })
        markup.addEventListener('mouseleave', function () {
            document.getElementById('markers').classList.toggle('shake-slow');
            document.getElementById('markers').classList.toggle('shake-constant');
        });
        dynamic.addEventListener('mouseenter', function () {
            document.getElementById('front-end').classList.toggle('shake-slow');
            document.getElementById('front-end').classList.toggle('shake-constant');
        })
        dynamic.addEventListener('mouseleave', function () {
            document.getElementById('front-end').classList.toggle('shake-slow');
            document.getElementById('front-end').classList.toggle('shake-constant');
        });
        frameworks.addEventListener('mouseenter', function () {
            document.getElementById('framing').classList.toggle('shake-slow');
            document.getElementById('framing').classList.toggle('shake-constant');
        })
        frameworks.addEventListener('mouseleave', function () {
            document.getElementById('framing').classList.toggle('shake-slow');
            document.getElementById('framing').classList.toggle('shake-constant');
        });
    }

}
register.viewControl('home-vc', HomeViewControl);
