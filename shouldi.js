window.onload = function() {

var btn = document.querySelector( '.btn' );

var btnFront = btn.querySelector( '.btn-front' ),
    btnYes = btn.querySelector( '.btn-back .yes' );

btnFront.addEventListener( 'click', function( event ) {
  
	var date = new Date();
      	var currentTime = date.getHours();
	var currentTimeMin = date.getMinutes();

	if (0 <= currentTime && currentTime < 2) {
       		document.getElementById("content").innerHTML = decision("Well, it's " + currentTime + ":" + currentTimeMin + ". You should probably sleep." , "It's only " + currentTime + ":" + currentTimeMin + ". Just five more minutes." , 8);
      	}
      	if (2 <= currentTime && currentTime < 4) {
       		document.getElementById("content").innerHTML = decision("Nah dude, it's " + currentTime + ":" + currentTimeMin + ". You're good.", "Hell yes, it's " + currentTime + ":" + currentTimeMin + ". What are you doing with your life?", 8);
      	}
	if (4 <= currentTime && currentTime < 8) {
		document.getElementById("content").innerHTML = decision("Unless you're about to go to work like the productive members of society, hell yes.", "At this point, fuck it. All nighter.", 6);
	}
      	if (8 <= currentTime && currentTime < 20) 
	{
      		document.getElementById("content").innerHTML = decision("Yes. It's " + currentTime + ":" + currentTimeMin + ". This is a perfect time for sleep.", "No you pyscho. It's " + currentTime + ":" + currentTimeMin + ". Be a productive member of society.", 8);
      	}
      	if (20 <= currentTime&&currentTime < 24) {
       		document.getElementById("content").innerHTML = decision("Sure!", "It's " + currentTime + ":" + currentTimeMin + ". Unless you have something important to do tomorrow, keep the productivity going.", 8);
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

function distance( x1, y1, x2, y2 ) 
{
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}

function decision(string1, string2, x)
{
	var i = Math.floor(Math.random()*(x));

	if(i > 2)
	{
		return string2;
	}
	else
	{
		return string1;
	}

}

}