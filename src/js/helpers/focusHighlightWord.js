export default function focusHighlightSearch(bgColor) {
    const elements = document.querySelectorAll('*');
    const matchingElements = [];

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        // console.log(element.style.backgroundColor + " => " + element.textContent);
        if (element.style.backgroundColor === bgColor) {
        matchingElements.push(element);
        }
    }

    const warningSpan = document.getElementById('warning-msg');

    if (matchingElements.length > 0) {
        // console.log(matchingElements[0]);
        matchingElements[0].setAttribute('tabindex', '0');
        matchingElements[0].focus();
        warningSpan.textContent = "";
    } else {
         warningSpan.textContent = "Given TCA not found";
    }

    const loaderDiv = document.getElementById('loader');
    loaderDiv.style.display = "none";
}