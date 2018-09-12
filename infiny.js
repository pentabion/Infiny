var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

contacts = [];
chat_div = [];

function triggerMouseEvent(node, eventType) {
    var event = document.createEvent('MouseEvents');
    event.initEvent(eventType, true, true);
    node.dispatchEvent(event);
}

function getChatname(){
    $('#pane-side>div>div>div>div').each(function(){
        var a = $(this).find('span._1wjpf');

        console.log($(a).attr('title'));
        contacts.push($(a).attr('title'));
        chat_div.push($(a));
    })
}

function selectContact(name){
    getChatname()
    for (i = 0; i < contacts.length; i++){
        if (name.toUpperCase() === contacts[i].toUpperCase()){
            console.log(name.toUpperCase() + " match with "+contacts[i].toUpperCase())
             triggerMouseEvent(chat_div[i][0],"mousedown")
        }else{
            console.log(name.toUpperCase() + " mismatch with "+contacts[i].toUpperCase())
        }
    }
}

function sendMessage(text){
    $('div._3F6QL._2WovP>div._2S1VP').text(text)
    input = document.querySelector("div._3F6QL._2WovP>div._2S1VP");
    input.dispatchEvent(new Event('input', {bubbles: true}));
    $('button._35EW6').click()
}
