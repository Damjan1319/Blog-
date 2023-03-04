function ajaxCallBack(url, func, data = {}) {
    $.ajax({
        url: url,
        method: 'Post',
        dataType: 'JSON',
        data: data,
        success: func,
        error: function (xhr) { console.error(xhr); }


    })


}



try {
    let btn = document.querySelector("#btn");
    let validationMsg = [];
    function checkValidation() {
        console.log(validationMsg);
        if (validationMsg.length == 2) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', '');
        }

    }

    let provera = document.querySelector("#emailM");

    provera.addEventListener("blur", proveri);


    function proveri() {

        //RegEx Email
        console.log(this.value);
        let regEmail = /^[a-z][\d\w\.]*\@[a-z]{3,}(\.[a-z]{2,4}){1,3}$/;

        if (regEmail.test(this.value)) {

            this.nextElementSibling.classList.add("correct");
            this.nextElementSibling.innerHTML = "Valid entry";
            console.log("ok");
            if (validationMsg.indexOf("email") == -1) {
                validationMsg.push("email");
            }

            checkValidation();
        } else {
            this.nextElementSibling.classList.remove("correct");
            this.nextElementSibling.classList.add("mistake");
            this.nextElementSibling.innerHTML = `Format:</br>example.example@example.eg`;
            console.log("bad");

            if (validationMsg.indexOf("email") != -1) {
                const index = validationMsg.indexOf('email');
                const x = validationMsg.splice(index, 1);
            }
            checkValidation();
        }
    }
}
catch { }
try {
    let content = document.querySelector("#content");

    content.addEventListener("blur", count);

    function count() {

        //RegEx Email
        console.log(this.value.length);


        if (this.value.length > 10) {
            this.nextElementSibling.classList.add("correct");
            this.nextElementSibling.innerHTML = "Valid entry";
            if (validationMsg.indexOf("msg") == -1) {
                validationMsg.push("msg");
            }
            checkValidation();
        } else {
            this.nextElementSibling.classList.remove("correct");
            this.nextElementSibling.classList.add("mistake");
            this.nextElementSibling.innerHTML = `Messages must have more then 10 caracters`;
            if (validationMsg.indexOf("msg") != -1) {
                const index = validationMsg.indexOf('msg');
                const x = validationMsg.splice(index, 1);
            }
            checkValidation();
        }
    }
} catch {

}

let likes = document.querySelectorAll('.likes');

likes.forEach(l => {

    l.addEventListener('click', function () {
        //console.log(this.getAttribute('id'));
        let data = {
            'blog_id': this.getAttribute('ss'),
            'author_id': document.querySelector('#like').value
        }
        ajaxCallBack('models/likes.php', function (data) {
            let id = '#b' + data.id;
            console.log(id);
            let element = document.querySelector(id);
            console.log(element.innerHTML);
            if (data.msg == 'delete') {
                element.innerHTML = parseInt(element.innerHTML - 1);
            }
            else {
                element.innerHTML = parseInt(element.innerHTML + 1);
            }
        }, data)
    });


})


