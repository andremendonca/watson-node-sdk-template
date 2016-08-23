(function () {
  /* Audio helpers */
  var onCanplaythrough = function (audio) {
    audio.removeEventListener("canplaythrough", audio.listener);

    try { audio.currentTime = 0; } catch(ex) {
      // ignore. Firefox just freaks out here for no apparent reason.
    }
    audio.controls = true;
    audio.muted = false;
  };

  var stripTags = function (text) {
    text = text.replace(/<br(\s\/){0,1}>/g, ' ');
    text = text.replace(/<\/li><li>/g, '</li> ou <li>');
    return $('<div>' + text + '</div>').text();
  };

  var speechSrc = function(text) {
    var text = stripTags(text);
    return '/api/yourmodule?text=' + encodeURIComponent(text);
  };

  var requestSpeech = function(audio) {
    audio.pause();
    audio.src = speechSrc($(audio).data('text'));
    audio.listener = onCanplaythrough.bind(this, audio);
    audio.addEventListener("canplaythrough", audio.listener);
    audio.muted = true;
  };

  var requestSpeechInterator = function(i, audio) {
    requestSpeech(audio);
  };
  /* End Audio helpers */

  $().ready(function () {
    /* Example to initiate audios */
    $('audio').each(requestSpeechInterator);

    /* Example to make a request to ask a question */
    //show loading...
    $.post('/api/yourmodule', postData)
      .done(function(data) {
        //body..
      })
      .fail(function (error) {
        //body..
      })
      .always(function (error) {
        //hide loading...
        //body..
      });
  });
})();
