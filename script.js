$('.envia').click(function () {
  let data = $('.data').val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=T2YrB10rjkiEbm1TucDDAXbtyrvvaTPXPrh0v7g0&date=${data}`,
    type: 'GET',
    success: function (data) {
      console.log(data);
      $('.foto').attr('src', data.url);
      $('.titulo').text(data.title);
      $('.texto').text(data.explanation);
      $('.foto').css('display', 'flex');
    },
  });
});
