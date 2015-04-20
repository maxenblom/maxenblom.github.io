var btn = document.querySelector( '.btn' );

var btnFront = btn.querySelector( '.btn-front' ),
    btnYes = btn.querySelector( '.btn-back .yes' );

btnFront.addEventListener( 'click', function( event ) {
  
    var i = Math.floor(Math.random()*(5));
		var out1 = "Yes.";		
		var out2 = "No.";

		if(i > 2)
		{
			document.getElementById("content").innerHTML = out1;
		}
		else
		{
			document.getElementById("content").innerHTML = out2;
		}
  
  var mx = event.clientX - btn.offsetLeft,
      my = event.clientY - btn.offsetTop;

  var w = btn.offsetWidth,
      h = btn.offsetHeight;
	
  var directions = [
    { id: 'top', x: w/2, y: 0 },
    { id: 'right', x: w, y: h/2 },
    { id: 'bottom', x: w/2, y: h },
    { id: 'left', x: 0, y: h/2 }
  ];
  
  directions.sort( function( a, b ) {
    return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
  } );
  
  btn.setAttribute( 'data-direction', directions.shift().id );
  btn.classList.add( 'is-open' );

} );

btnYes.addEventListener( 'click', function( event ) 
{	
  btn.classList.remove( 'is-open' );
  
} );

function distance( x1, y1, x2, y2 ) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}