searchImage = () => {

    $('.container').empty()
    let imageSearch = $('#image-search').val();
    console.log('app.js[clickEvent] searching ' + imageSearch)
    const queryURL = 'https://api.unsplash.com/search/photos?client_id=GnW9UHgOsCytI0V8CrIujkfLzyyZtoCGLQ6vkREqvsw&per_page=25&query=' + imageSearch;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then((response) => {
        const results = response.results;
        results.forEach(image => {
            const img = $('<img>');
            img.attr('src', image.urls.small);
            img.addClass('img')
            $('.container').append(img)
        });
    });

    $('#image-search').val('');
    imageSearch = '';
}

$('#search-image').on('click', searchImage) 