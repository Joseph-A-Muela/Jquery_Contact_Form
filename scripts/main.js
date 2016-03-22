
var button = $('button');
var nameInput = $('#nameInput');
var nameError = $('#nameError');
var emailInput = $('#emailInput');
var emailError = $('#emailError');
var websiteInput = $('#websiteInput');
var websiteError = $('#websiteError');
var messageInput = $('#messageInput');
var messageError = $('#messageError');
var input = $('input');
var textarea = $('textarea');
var main1 = $('.main1');
var main2 = $('.main2');


button.on('click', function() {
	var hasError = false;

	if(nameInput.val() === '') {
	   hasError = true;
	   nameError.text('Name cannot be left empty');
       input.css({ borderLeft: '0.4em solid red' });
	}

	if(emailInput.val() !== '@') {
		hasError = true;
		emailError.html('Email must contain an \'@\' symbol or cannot be empty');
		input.css({ borderLeft: '0.4em solid red'  });
	}

	if(websiteInput.val() !== 'http://') {
		websiteInput = true;
		websiteError.html('Website must start with http://');
		input.css({ borderLeft: '0.4em solid red'  });
	}

	if(messageInput.val() === '') {
		input = true;
		messageError.text('Message cannot be left empty');
		textarea.css({ borderLeft: '0.4em solid red'  });
	}

	if(hasError === false) {
		main2.show();
		main2.html('Thanks for contacting us '+nameInput.val()+'. We have received your message and will be in touch with you shortly.');
	}


});
