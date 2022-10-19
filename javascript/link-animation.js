var link = document.getElementsByClassName('l-nav');

//Add the mouseenter event to all "link" elements
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("mouseenter", (e) => {

        // Push every letters in the link's word into an Array for later treatment
        let currentText = link[i].textContent.trim();
        let currentCharactersList = [];
        for (var o = 0; o < currentText.length; o++) {
            currentCharactersList.push(currentText.charAt(o));
        }

        //Add the animation to all letters delay by .030s
        let newCharactersList = currentCharactersList.slice();
        let newText = "";
        for (let x = 0; x < currentText.length + 1; x++) {
            //Reset initialized variables
            newText = "";
            newCharactersList = currentCharactersList.slice();

            task(x, i, newCharactersList, currentCharactersList, newText);
        }
    });
}

//Change the current link's text to the new one
function task(x, i, newCharactersList, currentCharactersList, newText) {
    setTimeout(function () {
        //Form the newText to add to the html
        newCharactersList[x] = "<span class=\"highlight\">" + currentCharactersList[x] + "</span>";
        for (var it = 0; it < currentCharactersList.length; it++) {
            newText += newCharactersList[it];
        }
        //Add the animation to the html
        link[i].innerHTML = "<p>" + newText + "</p>";

    }, 30 * x);
}

         