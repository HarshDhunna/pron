const inputBtn=document.querySelector("input");
const subBtn=document.querySelector("button");
function speakThis(sentence)
{
    const speech=new SpeechSynthesisUtterance(sentence);
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}
function handler()
{
    const word=inputBtn.value;
    if(word.length==0)
    {
        alert("!! Enter something to pronnounce");
    }
    else
    {
        speakThis(word);
    }
}

subBtn.addEventListener("click",handler)







