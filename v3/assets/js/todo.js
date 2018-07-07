$("button").each(function functionName() {
    $(this).hover(function(){$(this).css("border-color","white")},
                  function(){$(this).css("border-color","black")}
                 )})

function addtolist() {
  $("#addtolist").on("click",function() {
    // alert("add")
    if ($("#newitem").val()!="") {
      if($("#newitem").val()[0]!=" "){
        $("#list").html($("#list").html()+"<li><span class=\"trashcan\"><i class=\"far fa-trash-alt\"></i></span><text>"+$("#newitem").val()+"</text></li>")
        $("#newitem").val("")
        refreshcolor()
      }
      else {
        alert('List item cannot start with a space character!');
      }
    }
  })
}

function removefromlist() {
  $("#removefromlist").on("click",function() {
    // alert("remove")
    $("li").each(function () {
      if($(this).find("text").hasClass("done"))
      {
        $(this).slideUp(function () {
          console.log("Item removed:");
          console.log($(this).find("text").html());
          $(this).remove()
          refreshcolor()
        })
      }
    })
  })
}

function refreshcolor() {
  $("li>span").hide(0)
  $("li").css("background","none")
  $("li:nth-of-type(2n)").css("background","rgba(200,200,200,0.7)")
  $("li").each(function() {
    if($(this).find("text").hasClass("done"))
      $(this).css("background","rgb(170,170,170)")
  })
  $("li").each(function functionName() {
    $(this).on("mouseenter",function () {
      $(this).find("span").slideDown(200);
    })
    $(this).on("mouseleave",function () {
      $(this).find("span").slideUp(200);
    })
  })
}

function initialize() {
  addtolist()
  removefromlist()

  $("#newitem").on("keypress",function () {
    // console.log(event.which);
    if(event.which==13)
        $("#addtolist").click()
  })

  $("ul").on("click","li",function () {
    $(this).find("text").toggleClass("done")
    refreshcolor()
  })
  $("ul").on("click","span",function () {
      $(this).parent().remove()
      refreshcolor()
    })
}

initialize()
