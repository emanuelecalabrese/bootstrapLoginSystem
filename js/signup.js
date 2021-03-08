$(() => {
    $('#submit').click((e) => {
        e.preventDefault();
        const data = {
            firstname: $('#firstname').val(),
            lastname: $('#lastname').val(),
            email: $('#email').val(),
            password: $('#password').val()
        }
        $.ajax({
        type:'POST',
        data: data,
        dataType: 'json',
        url: 'http://localhost:8080/signup',

        beforeSend: () => {
            console.log("Sending request...");
        },
        success: (data) => {
            console.log(data);
            if(confirm("Registered! Click ok to go on")){
                window.location.href = 'index.html';
            }
        },
        error: (error) => {
            console.log(error);
            alert("Something went wrong: " + error.responseJSON);
        }
    });
});
});