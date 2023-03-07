function ajaxCallBack(url, func,method, data = {}) {
    $.ajax({
        url: url,
        method: method,
        dataType: 'JSON',
        data: data,
        success: func,
        error: function (xhr) { console.error(xhr); }
    })
}

//PRETRAGA, FILTRIRANJE I DINAMICKO ISPISIVANJE
try{
    let page = 1;
    let per_page = 6;


    $('#searchA').on('input', function () {
        getBlogs();
    })

//    $('#sort_order').change(function () {
//        getBlogss();
//    })

    getBlogs();

    function getBlogs() {
        var search = $('#searchA').val();

        let sortOrder = $('#sort_order').val();
        let data = {
            search: search,
            sortOrder: sortOrder,
            blogsPerPage: per_page,
            page: page
        }
        ajaxCallBack('models/filteringSorting.php', function(data){
            showBlogs(data);
        },'Get',data)
    }

    function showBlogs(data) {
        let blogs = data.blogs;
        let html = '';
        if (blogs.length != 0) {
            blogs.forEach(e => {
                html += `<article class="post">

            <header>
                <div class="title">
                    <h2><a href="">${e.title}</a></h2>
                    <!-- <p>${e.content}</p> -->
                </div>

                <div class="meta">
                    <time class="published">${e.created_at}</time>
                    <a href="#" class="author"><span class="name">
                            ${e.username}
                        </span><img src="assets/images/${e.image}" alt="${e.title}" class="imgP" /></a>
                </div>
            </header>

            <a href="index.php?page=single&post=${e.blog_ID}" class="image featured"><img src="assets/images/${e.images}" alt="${e.title}" /></a>
            <p>${e.content}</p>

            <footer>
                <ul class="actions">
                    <li><a href="index.php?page=single&post=${e.blog_ID}" class="button large">See Post</a></li>
                </ul>
                <ul class="stats" id='footerPost'>
                    <li>
                        <a class=" icon solid fa-heart likes" id="b${e.blog_ID}" ss="${e.blog_ID}"></a>
                     </li>
                    <li>
                           <a href="index.php?page=single&post=${e.blog_ID}" class="icon solid fa-comment"></a></li>
                </ul>
            </footer>
        </article>`;
            });
        }
            else {
                html = 'No Blogs with Specified filter';
            }
        $('.post-flex').html(html);

    }
}
catch(e){}




try {
    let btn = document.querySelector("#btn");
    // let validationMsg = [];
    function checkValidation() {
        console.log(validationMsg);
        if (validationMsg.length == 1) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', '');
        }



        let provera = document.querySelector("#emailM");
        provera.addEventListener("blur", proveri);
        console.log(provera)


        function proveri() {

            //RegEx Email
            let regEmail = /^[a-z][\d\w\.]*\@[a-z]{3,}(\.[a-z]{2,4}){1,3}$/;

            if (regEmail.test(this.value)) {

                this.nextElementSibling.classList.add("correct");
                this.nextElementSibling.innerHTML = "Valid entry";
                if (validationMsg.indexOf("email") == -1) {
                    validationMsg.push("email");
                }

                checkValidation();
            } else {
                this.nextElementSibling.classList.remove("correct");
                this.nextElementSibling.classList.add("mistake");
                this.nextElementSibling.innerHTML = `Format:</br>example.example@example.eg`;

                if (validationMsg.indexOf("email") != -1) {
                    const index = validationMsg.indexOf('email');
                    const x = validationMsg.splice(index, 1);
                }
                checkValidation();
            }
        }
    }



    let content = document.querySelector("#content");
    validationMsg = [];
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
}
catch { }

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
        }, 'Post',data)
    });


})


