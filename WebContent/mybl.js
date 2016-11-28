    $.ajaxSetup({
       headers: {
       }
    });
    $.getJSON(
        'http://api.ng.bluemix.net/info'
        , function( jsondata ) {
      alert(jsondata.authorization_endpoint);
    });
