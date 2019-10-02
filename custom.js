
function changeslider(){


	if (document.getElementsByClassName('single_slide')[0].classList.contains('active') ) {
	document.getElementsByClassName('single_slide')[1].classList.add('active');
	document.getElementsByClassName('single_slide')[0].classList.remove('active');
	}
	else if(document.getElementsByClassName('single_slide')[1].classList.contains('active') ) {
		document.getElementsByClassName('single_slide')[2].classList.add('active');
		document.getElementsByClassName('single_slide')[1].classList.remove('active');
	}
	else if(document.getElementsByClassName('single_slide')[2].classList.contains('active') ) {
		document.getElementsByClassName('single_slide')[3].classList.add('active');
		document.getElementsByClassName('single_slide')[2].classList.remove('active');
	}
	else if(document.getElementsByClassName('single_slide')[3].classList.contains('active') ) {
		document.getElementsByClassName('single_slide')[0].classList.add('active');
		document.getElementsByClassName('single_slide')[3].classList.remove('active');
	}


}

setInterval(changeslider,3000);

