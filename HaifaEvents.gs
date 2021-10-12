
//Mor_
/**
 * @param {Number} id
 * @param {String} name - user's name
 * @param {String} text - user's input
 * @param {Sheet}
 */
function sendHaifaEvents(id, name, text, haifaEventsSheet){
  sendKey(id, "Choose your way to have fun today from the list below", HaifaEventsBoard);
  set(id, name, text, "Wait"); //reg2 == "Wait"

}

/**
 * 
 */
function updateEventCategory(id, name, text, haifaEventsSheet){
  set(id, name, null,text); //set only reg2
  sendKey(id, "WooHoo!!! - it's " + text + " time!")
  var req_category = getKeyByValue(HaifaEventsInlinefields, text);
  var categoryCol = HaifaEventsfields.category;

  // search in sheet for displaying first possible event
  var textFinder = haifaEventsSheet.createTextFinder(req_category);
  var categoryRows_list = textFinder.findAll();
  var list_len = categoryRows_list.length;
  if (list_len == 0){
    sendKey(id, "There is no " + text + " soon :(")
  }
  else{
    sendKey(id, "There are some " + text + " events coming up!");
    // current resutlt
    curr_row = textFinder.findNext().getRow(); 
    makeEventsInlineKeyBoard(id, curr_row,list_len, haifaEventsSheet);
    curr_instance_num = 1; // first event in category is displayed
    set(id, name, null,null, curr_instance_num); //set only reg3

  }
}


/**
 * function that work with the instances inside the category >> <<
 */
function updateInstancesInCategory(id, name, text, mes_id, category, instance_num, haifaEventsSheet){
  var req_category = getKeyByValue(HaifaEventsInlinefields, category);
  var textFinder = haifaEventsSheet.createTextFinder(req_category);
  var num_tot_instances = textFinder.findAll().length;

  sendKey(id, "instance: " + instance_num + " / " + num_tot_instances); // test

  switch(text){
    case (">>"):
    // TODO: set reg by proceeding in FindText results and ask if last
    // work with sendEditedText!
      if (instance_num!=num_tot_instances){

      }
      else{

      }
      case ("<<"):
    // TODO: set reg by proceeding in FindText results and ask if first
    // work with sendEditedText!


  }

}

/**
 * function that makes an internal keyboard from the numbers in the spreadsheet. 
 */
function makeEventsInlineKeyBoard(id, curr_row, len, haifaEventsSheet){
  var newKeyBoard = [];
  var i = 0; // first - TODO: change to reg data 

  // for (var i = 0; i < (len-1); i++) {
  // sendText(id,  curr_row + " - " + HaifaEventsfields.event);//test
  var event_headline = haifaEventsSheet.getRange(curr_row, HaifaEventsfields.event).getValue();
  var date = String(haifaEventsSheet.getRange(curr_row, HaifaEventsfields.date).getValue());
  var hour = String(haifaEventsSheet.getRange(curr_row, HaifaEventsfields.hour).getValue());
  var location = haifaEventsSheet.getRange(curr_row, HaifaEventsfields.location).getValue();
  var link = haifaEventsSheet.getRange(curr_row, HaifaEventsfields.link).getValue();

  newKeyBoard.push([{"text": "<<", 'callback_data':  "<<"}, { "text": link, 'callback_data': "link"}, { "text": ">>", 'callback_data': ">>"}]);
  // }
  newKeyBoard.push([{"text": 'Main Menu \ud83c\udfe0', 'callback_data': 'Main Menu \ud83c\udfe0'}]);

  if (i==0){
      sendText (id, String(event_headline), newKeyBoard);

  }
  // sendEditedText (id, mes_id, "Select from the editable", newKeyBoard);
  return
}


/*@typedef {Message}

/**
 * 
 */
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// var inline_keyboard = contents.callback_query.message.reply_markup;   

/**
 * Sends text with optional internal keyboard.
 * @param {(String|Number)} chatId Identifier of the chat to send the text to.
 * @param {String} text The text to send.
 * @param {TelegramInlineKeyboard} keyboard The inline keyboard to send.
 */
//sendText(chatId, text, keyboard)
//Description: sends text to chatId with(optional) exeternal keyboard.
//input: chat id, string and(optional) the name of the exeternal keyboared.
function sendEditedText(chatId, mes_id, text, keyboard) {
  var data = {
    method: "post",
    payload: {
      method: "editMessageText",
      chat_id: String(chatId),
      message_id: mes_id,
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({
        "inline_keyboard": keyboard,
      })
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}


//Mor_
