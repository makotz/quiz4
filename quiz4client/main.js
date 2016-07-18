var BASE_URL = "http://localhost:3000/";

$(document).ready(function(){

  $.ajax({
    method: "GET",
    url:    BASE_URL + "companies.json",
    error: function(){
      alert("can't load companies");
    },
    success: function(data){
      var template = $('#company-template').html();
      Mustache.parse(template);
      var companies = data["companies"];
      for(var i = 0; i < companies.length; i++){
        var company = companies[i]
        var rendered = Mustache.render(template, company);
        $("#companies").prepend(rendered);
      };
      var template2 = $('#product-template').html();
      Mustache.parse(template);
      var companies = data["companies"];
      for(var i = 0; i < companies.length; i++) {
        for(var v = 0; v < 2 ; v++) {
          var company = companies[i]
          var products = company.products
          var product = company[v]
          var rendered = Mustache.render(template2, product);
          $("#products").prepend(rendered);
        };
      };
    }
  });


  // $("#companies").on("click", ".like", function(event){
  //   $.ajax({
  //   method: "POST",
  //   url: BASE_URL + $(this).data("company-id") + "/answers",
  //   data: {api_key: API_KEY, answer: {body: body}},
  //   error: function(){
  //      console.log("Error");
  //   },
  //       success: function(){
  //         var template = $('#answer-template').html();
  //         var rendered = Mustache.render(template, {body: body});
  //         $("#answers").prepend(rendered);
  //         $("#body").val()
  //       }
  //     })
  //     event.preventDefault();
  //   })
  //
  // });


});
