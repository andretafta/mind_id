$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });


$(function(){
  $(".search").keyup(function() 
  { 
  var searchid = $(this).val();
  var dataString = 'search='+ searchid;
  if(searchid!='')
  {
      $.ajax({
      type: "POST",
      url: "searchdb.php",
      data: dataString,
      cache: false,
      success: function(html)
      {
      $("#result").html(html).show();
      }
      });
  }return false;    
  });
  
  jQuery("#result").on("click",function(e){ 
      var $clicked = $(e.target);
      var $name = $clicked.find('.name').html();
      var decoded = $("<div/>").html($name).text();
      $('#searchid').val(decoded);
  });
  jQuery(document).on("click", function(e) { 
      var $clicked = $(e.target);
      if (! $clicked.hasClass("search")){
      jQuery("#result").fadeOut(); 
      }
  });
  $('#searchid').click(function(){
      jQuery("#result").fadeIn();
  });
  });
