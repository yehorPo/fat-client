let blogs = [];

const makeRequest = () => {
    $.ajax({
        url: "/api/post", method: "GET", success: function (result) {
            if (JSON.stringify(blogs) !== JSON.stringify(result.blogs)) {
                blogs = result.blogs;
                const $blogs = $('#content');
                $blogs.empty();
                $.each( blogs, (index,blog)=> {
                    $blogs.append('<div class="px-2 col-12">' +
                        '<div class="card bg-dark px-2 flex-md-row mb-4 box-shadow h-md-250">' +
                        '<div class="card-body d-flex flex-column align-items-start">' +
                        `<h3 class="text-white">${blog['name']}</h3>` +
                        `<a href="/read/${blog['_id']}">More</a>`)
                })
            }

        }
    });
};
makeRequest();

setInterval(makeRequest, 1000);


