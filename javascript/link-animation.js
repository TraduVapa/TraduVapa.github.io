var links = document.getElementsByClassName('link');

//Add the mouseenter event to all "link" elements
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", (e) => {

        //Push every letters in the link's word into an Array for later treatment
        var text = links[i].textContent;
        var chara = [];
        for (var o = 0; o < text.length; o++) {
            chara.push(text.charAt(o));
        }

        var newChara = chara.slice();
        let newText = "";
        for (var x = 0; x < text.length + 1; x++) {
            task(x);
        }
        
        function task(x) {
            setTimeout(function () {
                // Add tasks to do
                newChara[x] = "<span class=\"highlight\">" + chara[x] + "</span>";
                for (var relou = 0; relou < chara.length; relou++) {
                    newText += newChara[relou];
                }
                links[i].innerHTML = "<p>" + newText + "</p>";

                newText = "";
                newChara = chara.slice();
                // Add tasks to do
            }, 30 * x);
        }
    }, false);
}