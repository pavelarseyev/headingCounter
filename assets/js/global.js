import "babel-polyfill";

import {binder, fwa} from "./libs/binder";
import "slick-carousel";
import constanst from "./modules/constants";
import {animateHeadings} from "./modules/module";
import {burgerMenu} from "./modules/burger-menu";
import {factsSlider} from "./modules/facts-slider";
import {cardsSlider} from "./modules/cards-slider";
import {navigationDropdown} from "./modules/navigation-dropdown";
import {preloader} from "./modules/preloader";
import {scrollDown} from "./modules/scroll-down";
import {stickyHeader} from "./modules/sticky-header";
import {scrollAnimate} from "./modules/scroll-animate";
import {showOnScroll} from "./modules/show-on-scroll";




binder({
    bounds: {
        "body": scrollAnimate,
        ".animated": [animateHeadings],
        ".main-navigation": [burgerMenu, navigationDropdown],
        ".facts .slider": factsSlider,
        ".cards .slider": cardsSlider,
        ".preloader": preloader,
        ".scroll-down": scrollDown,
        ".home .header": stickyHeader,
        ".scroll-fadein": showOnScroll
    },
    runTests: false
});
