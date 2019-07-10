export function animateHeadings() {

    let headings = $(".animated");

    let alphabetLower = "abcdefghijklmnopqrstuvwxyz".split("");
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let length = alphabetLower.length - 1;

    let time = 800;
    let iterations = 3;
    let timing = time / iterations;

    headings.each((i, item) => {
        wrapLetters(item);
        $(item).attr("data-animated", "false");
    });


    $(window).on("load scroll", function () {
        animateHeadings(headings);
    });


    function animateHeadings($collection) {
        $($collection).each(function (i, item) {
            let offset = item.getBoundingClientRect().top;
            let animated = $(item).attr("data-animated");

            if (offset <= window.innerHeight * 0.8 && animated === "false") {
                $(item).attr("data-animated", "true");

                startAnimation(item);

                $(item).addClass("visible");
            }
        });
    }

    function startAnimation(animatedElement) {
        $(animatedElement).find(".letter").each(function (i, item) {
            let firstLetter = item.innerText;

            setTimeout(function () {
                animateLetter(item, firstLetter);
            }, randNumber(150, 700));
        });
    }

    function animateLetter(letterHolder, firstLetter) {
        let holder = letterHolder;
        let letter = firstLetter;
        let counter = 0;
        let interval;

        if (holder.innerText.match(/[a-z0-9]/i)) {

            interval = setInterval(function () {
                holder.innerText = letter === letter.toUpperCase() ? alphabetUpper[randNumber(0, length)] : alphabetLower[randNumber(0, length)];
                counter++;

                if (counter >= iterations) {
                    letterHolder.innerText = letter;
                    clearInterval(interval);
                }

            }, timing);
        }
    }

    function wrapLetters(selector) {

        let selectorText;
        let resultHtml = "";

        selectorText = $(selector).html().split("");

        for (let i = 0; i < selectorText.length; i++) {

            if (selectorText[i] === "<") {

                let currentTag = "";

                for (let k = i; k < selectorText.length; k++) {

                    if (selectorText[k] === ">") {
                        currentTag += selectorText[k + 1] ? selectorText[k + 1].match(/[a-z]/i) ? selectorText[k] + " " : selectorText[k] : selectorText[k];
                        i = k;
                        break;
                    }

                    currentTag += selectorText[k];
                }

                resultHtml += currentTag;

            } else if (selectorText[i] === "&") {

                let currentSymbol;

                for (let k = i; k < selectorText.length; k++) {

                    if (selectorText[k] === ">") {
                        currentTag += selectorText[k + 1] ? selectorText[k + 1].match(/[a-z]/i) ? selectorText[k] + " " : selectorText[k] : selectorText[k];
                        i = k;
                        break;
                    }

                    currentSymbol += selectorText[k];
                }

                resultHtml += currentSymbol;

            } else {
                resultHtml += "<span class='letter'>" + (selectorText[i] === " " ? " " : selectorText[i]) + "</span>";
            }
        }

        $(selector).html(resultHtml);

    }

    function randNumber(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
}

export function eye() {
    let PI = Math.PI;
    let eye = document.querySelectorAll(".eye");


    eye.forEach((item, i) => {


        window.addEventListener("mousemove", (e) => {

            let offsetX = item.getBoundingClientRect().x + item.offsetWidth / 2;
            let offsetY = item.getBoundingClientRect().y + item.offsetHeight / 2;

            let mouseX = e.x;
            let mouseY = e.y;

            let x = mouseX - offsetX;
            let y = mouseY - offsetY;
            let c = Math.sqrt(x * x + y * y);

            item.style.transform = "rotate(" + sin(x, y, c) + "deg)";

            function sin(x, y, c) {
                let result = 0;


                if (x > 0 && y <= 0) {
                    result = Math.asin(x / c);
                }

                if (x > 0 && y > 0) {
                    result = Math.asin(y / c) + PI / 2;
                }

                if (x <= 0 && y > 0) {
                    result = Math.abs(Math.asin(x / c)) + PI;
                }

                if (x <= 0 && y <= 0) {
                    result = Math.abs(Math.asin(y / c)) + PI * 1.5;
                }

                return (result * 180 / PI);

            }
        });
    });
}
