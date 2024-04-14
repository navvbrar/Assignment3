const valid = () => {
    let first_name = document.getElementById("f-name").value;
    let last_name = document.getElementById("l-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let date = document.getElementById("date").value;

    const email_regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
    const date_regex = new RegExp("/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[01])$/");
    const current_date = new Date();
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();


    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = `${yyyy}-${mm}-${dd}`;
    let d1 = new Date(formattedToday);
    let d2 = new Date(date)

 

    if (first_name.length < 5) {
        document.getElementById("show").innerText = "first name should be atleast 5 characters";
        let label = document.getElementById("f-name-label")
        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }
    else if (last_name.length < 5) {
        document.getElementById("show").innerText = "last name should be atleast 5 characters";
        let label = document.getElementById("l-name-label")
        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }


    else if (phone.length < 10 || phone.length > 10) {
        document.getElementById("show").innerText = "phone should be of exactly 10 characters";
        let label = document.getElementById("l-phone")
        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }
    else if (isNaN(phone)) {
        document.getElementById("show").innerText = "phone should contain only numbers";
        let label = document.getElementById("l-phone")
        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }
    else if (!email_regex.test(email)) {
        document.getElementById("show").innerText = "email should be a valid email";
        let label = document.getElementById("l-email")
        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }
    else if (d2 > d1 || d1 > d2) {
        document.getElementById("show").innerText = "date should be of today";
        let label = document.getElementById("date")

        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }
    else if (date.length == 0) {
        document.getElementById("show").innerText = "date must be entered";
        let label = document.getElementById("date")

        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;
    }

    else if (message.length < 50) {
        document.getElementById("show").innerText = "message should be atleast 50 characters";
        let label = document.getElementById("l-message");
        label.style.color = "red";
        setTimeout(() => {
            label.style.color = "black";
            document.getElementById("show").innerText = "";
        }, 3000)
        return false;

    }
    else {

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "bnavdeep189@gmail.com",
            Password: "403C06C8413359F4E60272458263FC2800B6",
            To: document.getElementById("email").value,
            From: "bnavdeep189@gmail.com",
            Subject: "Form sent you via shark forms ",
            Body: " THis data is deliered to you via SMTP " + JSON.stringify({
                firstname: first_name,
                lastname: last_name,
                email: email,
                phone: phone,
                message: message,
                date: date
            })
        }).then(
            message => console.log("message sent")
        );
        return true
    }

}

