$().ready(function () {
 
    $("form").validate({
        // in 'rules' user have to specify all the constraints for respective fields
        rules: {
            fname: "required",
            lname: "required",
         
            pass: {
                required: true,
                minlength: 5
            },
            cpass: {
                required: true,
                minlength: 5,
                equalTo: "#pass" //for checking both passwords are same or not
            },
            city:{
                required:true
            },
            add:{
                required:true

            },
            email: {
                required: true,
                email: true
            },
            hobby:{
                required:true,
                minlength:2,
            },
            state:{
                required:true

            },
            gender:{
                required:true
            },
            agree: "required"
        },
        // in 'messages' user have to specify message as per rules
        messages: {
            fname: " Pl enter your firstname",
            lname: " Pl enter your lastname",
         pass: {
                required: " Please enter a password",
                minlength: " Your password must be consist of at least 5 characters"
            },
            copass: {
                required: " Please enter a password",
                minlength: " Your password must be consist of at least 5 characters",
                equalTo: " Please enter the same password as above"
            },
            agree: "Please accept our policy"
        }
    });
});





