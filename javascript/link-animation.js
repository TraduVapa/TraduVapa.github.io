var links = document.getElementsByClassName('link');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseover", () => {

        var text = links[i].textContent;
        var chara = [];
        for(var o = 0; o < text.length; o++){
            chara.push(text.charAt(o));
        }

        var newChara = chara.slice();
        let newText = "";
        for(var x = 0; x < text.length + 1; x++){
            task(x);
        }
        function task(x) {
            setTimeout(function() {
                // Add tasks to do
                newChara[x] = "<span class=\"highlight\">"+chara[x]+"</span>";
                for(var relou = 0; relou < chara.length; relou++){
                    newText += newChara[relou];
                }
                links[i].innerHTML = newText;
                
                newText = "";
                newChara = chara.slice();
                // Add tasks to do
            }, 30 * x);
          }
    
        console.log(newChara.length);
    });
}