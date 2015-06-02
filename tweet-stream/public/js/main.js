;(function( io ) {
  var $tweets = document.querySelector( '[data-js="tweets"]' );
  var socket = io( 'http://localhost:3000' );
  var text = [];
  socket.on( 'tweet', function( data ) {
    text.unshift( data.text );
    $tweets.innerHTML = text.join( '<br /><br />' );
  });
})( io );
