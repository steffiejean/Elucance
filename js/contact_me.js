// // Contact Form Scripts

$(function() {

		var url = window.location.href
		console.log(url)

		if (url == "https://www.elucance.com/"){
	    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
	        preventSubmit: true,
	        submitError: function($form, event, errors) {
	            // additional error messages or events
	        },
	        submitSuccess: function($form, event) {
	            event.preventDefault(); // prevent default submit behaviour
	            // get values from FORM
	            var name = $("input#name").val();
	            var email = $("input#email").val();
	            var tel = $("input#phone").val();
	            var message = $("textarea#message").val();
	            var firstName = name; // For Success/Failure Message
	            // Check for white space in name for Success/Fail message
	            if (firstName.indexOf(' ') >= 0) {
	                firstName = name.split(' ').slice(0, -1).join(' ');
	            }
	            $.ajax({
	                url: "https://www.elucance.com/send",
	                type: "GET",
	                data: {
	                    name: name,
	                    phone: tel,
	                    email: email,
	                    message: message
	                },
	                cache: false,
	                success: function() {
	                    // Success message
	                    $('#success').html("<div class='alert alert-success'>");
	                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                        .append("</button>");
	                    $('#success > .alert-success')
	                        .append("<strong>Thank you! Your message has been sent and we'll be in touch within 48 hours.</strong>");
	                    $('#success > .alert-success')
	                        .append('</div>');

	                    //clear all fields
	                    $('#contactForm').trigger("reset");
	                },
	                error: function() {
	                    // Fail message
	                    $('#success').html("<div class='alert alert-danger'>");
	                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                        .append("</button>");
	                    $('#success > .alert-danger').append($("<strong>").html("Sorry " + firstName + ", it seems that my mail server is not responding. Please email <a href='mailto:stephanie@elucance.com?Subject=Enquiry' target='_blank'>stephanie@elucance.com</a> directly"));
	                    $('#success > .alert-danger').append('</div>');
	                    //clear all fields
	                    $('#contactForm').trigger("reset");
	                },
	            });
	        },
	        filter: function() {
	            return $(this).is(":visible");
	        },
	    });
			}else{
				$("#contactForm input,#contactForm textarea").jqBootstrapValidation({
	        preventSubmit: true,
	        submitError: function($form, event, errors) {
	            // additional error messages or events
	        },
	        submitSuccess: function($form, event) {
	            event.preventDefault(); // prevent default submit behaviour
	            // get values from FORM
	            var name = $("input#name").val();
	            var email = $("input#email").val();
	            var tel = $("input#phone").val();
	            var message = $("textarea#message").val();
	            var firstName = name; // For Success/Failure Message
	            // Check for white space in name for Success/Fail message
	            if (firstName.indexOf(' ') >= 0) {
	                firstName = name.split(' ').slice(0, -1).join(' ');
	            }
	            $.ajax({
	                url: "https://www.elucance.co.uk/send",
	                type: "GET",
	                data: {
	                    name: name,
	                    phone: tel,
	                    email: email,
	                    message: message
	                },
	                cache: false,
	                success: function() {
	                    // Success message
	                    $('#success').html("<div class='alert alert-success'>");
	                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                        .append("</button>");
	                    $('#success > .alert-success')
	                        .append("<strong>Thank you! Your message has been sent and we'll be in touch within 48 hours.</strong>");
	                    $('#success > .alert-success')
	                        .append('</div>');

	                    //clear all fields
	                    $('#contactForm').trigger("reset");
	                },
	                error: function() {
	                    // Fail message
	                    $('#success').html("<div class='alert alert-danger'>");
	                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
	                        .append("</button>");
	                    $('#success > .alert-danger').append($("<strong>").html("Sorry " + firstName + ", it seems that my mail server is not responding. Please email <a href='mailto:stephanie@elucance.com?Subject=Enquiry' target='_blank'>stephanie@elucance.com</a> directly"));
	                    $('#success > .alert-danger').append('</div>');
	                    //clear all fields
	                    $('#contactForm').trigger("reset");
	                },
	            });
	        },
	        filter: function() {
	            return $(this).is(":visible");
	        },
	    });
			}

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
