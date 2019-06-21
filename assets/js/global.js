import "babel-polyfill";

import {binder, fwa} from "./libs/binder";
import { animateHeadings } from "./modules/module";



binder({
    bounds: {
        ".animated": [animateHeadings]
    },
    runTests: false
});
