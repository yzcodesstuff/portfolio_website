const paragraphHTML = `Hey there!&#128075<br><br>And welcome to my portfolio website. On this website, you can explore some of my personal coding projects.<br><br>If you are interested in looking through any project in more detail, you can click on the GitHub icon next to the project to go to the designated GitHub Project Page.`;
const target = document.getElementById("typingText");

async function typeHTML(text, delay = 40) {
  let i = 0;
  let display = "";

  while (i < text.length) {
    display += text[i];
    target.innerHTML = display + '<span id="cursor">|</span>';
    let currentChar = text[i];
    i++;
    let delay = 40;
    if (/[.,!?]/.test(currentChar)) {
      delay += 200;
    }

    await new Promise((r) => setTimeout(r, delay));
  }

  document.getElementById("cursor").style.display = "none";
}

typeHTML(paragraphHTML);
