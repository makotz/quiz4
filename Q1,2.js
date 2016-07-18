//Visit this page http://vancouver.craigslist.ca and write a piece of jQuery code that changes all the links on the home page to have a color red if the link's anchor text includes the pattern eal (20%)

$("a:contains('rea')").css({
  color: 'red'
})

//Visit a Wikipedia page like this one: https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming) then write a peice of jQuery code that will fadeOut any link you click on without following the link. (15%)

$('a').click(function(e){
  e.preventDefault();
  $(this).fadeOut(1000);
});


//Write a Rails application that has a company model and a product model. It should be set up as: company has many products. Your application should generate a JSON when you visit a link like (25%):http://localhost:3000/companies.json that looks like:

{"companies":
  [
    {"name": "Apple", "products": ["iMac", "iPhone", "iPad"]},
    {"name": "Toyota", "products": ["Corolla", "Matrix", "Rav4"]}
  ]
}
