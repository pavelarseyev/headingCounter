export function animateHeadings() {

    let headings = $(".animated");

    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let length = alphabet.length - 1;
    let time = 700;
    let iterations = 4;
    let timing = time / iterations;

    headings.each((i, item) => {
        wrapLetters(item);
        $(item).attr("data-animated", "false");
    });

    $(window).on("load scroll", function () {
        animateHeadings(headings);
    });

    function animateHeadings($collection){
        $collection.each(function(i, item){
            let offset = item.getBoundingClientRect().top;
            let animated = $(item).attr("data-animated");

            if(offset <= window.innerHeight * 0.8 && animated === "false"){
                $(item).attr("data-animated", "true");

                startAnimation(item);

                $(item).addClass("visible");
            }
        });
    }

    function startAnimation(animatedElement) {
        $(animatedElement).find("i").each(function (i, item) {
            let firstLetter = item.innerText;

            setTimeout(function () {
                animateLetter(item, firstLetter);
            }, randNumber(100, 500));
        });
    }

    function animateLetter(letterHolder, firstLetter) {
        let holder = letterHolder;
        let letter = firstLetter;
        let counter = 0;
        let interval;

        if (holder.innerText !== " ") {

            interval = setInterval(function () {

                holder.innerText = alphabet[randNumber(0, length)];
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

        selectorText = $(selector).html().replace(/[\t\r\n\v]/gi, "").split("");

        for (let i = 0; i < selectorText.length; i++) {

            if (selectorText[i] === "<") {

                let currentTag = "";

                for (let k = i; k < selectorText.length; k++) {

                    if (selectorText[k] === ">") {
                        currentTag += selectorText[k];
                        i = k;
                        break;
                    }

                    currentTag += selectorText[k];
                }

                resultHtml += currentTag;

            } else {
                resultHtml += "<i>" + (selectorText[i] === " " ? " " : selectorText[i]) + "</i>";
            }
        }

        $(selector).html(resultHtml);

    }

    function randNumber(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
}