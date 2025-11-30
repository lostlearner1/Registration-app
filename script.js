// script.js - jQuery for validation and AJAX submit
$(function(){
  $('#resetBtn').on('click', function(){ $('#regForm')[0].reset(); $('#message').addClass('hidden'); $('#result').addClass('hidden'); });

  $('#regForm').on('submit', function(e){
    e.preventDefault();
    $('#message').removeClass('hidden').text('Submitting...');
    var form = $(this);
    // Basic client-side validation
    var email = $('#email').val().trim();
    if(!email){ $('#message').text('Please enter a valid email.'); return; }

    // Submit via AJAX to process.php
    $.ajax({
      url: form.attr('action'),
      method: 'POST',
      data: form.serialize(),
      dataType: 'html',
      success: function(response){
        $('#message').addClass('hidden');
        $('#result').removeClass('hidden').html(response + getActionButtonsHtml());
        // scroll into view
        $('html,body').animate({ scrollTop: $('#result').offset().top - 20 }, 600);
        bindActionButtons();
      },
      error: function(xhr, status, err){
        $('#message').text('Submission failed: ' + (err || status));
      }
    });
  });

  function getActionButtonsHtml(){
    return '<div class="row" style="margin-top:12px"><button id="viewBtn" type="button">Open in new window</button> <button id="printBtn" type="button">Print</button></div>';
  }

  function bindActionButtons(){
    $('#viewBtn').on('click', function(){
      var content = $('#result').find('.print-window').prop('outerHTML');
      var w = window.open('', '_blank');
      w.document.open();
      w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Registration Output</title><link rel="stylesheet" href="style.css"></head><body>'+content+'</body></html>');
      w.document.close();
    });
    $('#printBtn').on('click', function(){
      var content = $('#result').find('.print-window').prop('outerHTML');
      var w = window.open('', '_blank');
      w.document.open();
      w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Print</title><link rel="stylesheet" href="style.css"></head><body onload="window.print();">'+content+'</body></html>');
      w.document.close();
    });
  }
});
