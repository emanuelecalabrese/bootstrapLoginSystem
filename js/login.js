$(() => {
    $('#submit').click((e) => {
        e.preventDefault();
        const data = {
            email: $('#email').val(),
            password: $('#password').val()
        }
        $.ajax({
        type:'POST',
        data: data,
        dataType: 'json',
        url: 'http://localhost:8080/login',

        beforeSend: () => {
            console.log("Sending request...");
        },
        success: (data) => {
            console.log(data);
            if(confirm("Successfully logged in! Click ok to go on")) {
              location.reload();
            }
        },
        error: (error) => {
            console.log(error);
            alert("Something went wrong: " + error.responseJSON);
        }
    });
});
});