import "babel-polyfill";

import {binder, fwa} from "./libs/binder";
import "slick-carousel";
import constanst from "./modules/constants";
import {animateHeadings, eye} from "./modules/module";




binder({
    bounds: {
        ".animated": [animateHeadings],
        ".eye": eye
    },
    runTests: false
});
