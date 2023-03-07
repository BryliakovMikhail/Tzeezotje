
$(document).ready(function () {
  $("form").submit(function () {
      // Получение ID формы
      var formID = $(this).attr('id');
      // Добавление решётки к имени ID
      var formNm = $('#' + formID);
      var message = $(formNm).find(".msgs"); // Ищет класс .msgs в текущей форме  и записываем в переменную
      var formTitle = $(formNm).find(".form__title"); // Ищет класс .formtitle в текущей форме и записываем в переменную
      $.ajax({
          type: "POST",
          url: 'sendmail.php',
          data: formNm.serialize(),
          success: function (data) {
            // Вывод сообщения об успешной отправке
            message.html(data);
            setTimeout(function(){
              $('.form__title').css("display","block");
              $('.msgs').html('');
              $('input').not(':input[type=submit], :input[type=hidden]').val('');
              $('textarea').val('');
            }, 3000);
          },
          error: function (jqXHR, text, error) {
              // Вывод сообщения об ошибке отправки
              message.html(error);
              setTimeout(function(){
                $('.form__title').css("display","block");
                $('.msgs').html('');
                $('input').not(':input[type=submit], :input[type=hidden]').val('');
                $('textarea').val('');
              }, 3000);
          }
      });
      return false;
  });
});



