var todolist={}
var todos=[]

function refreshtable() {
    var temp=""
    todos=[]
    todos=Object.keys(todolist)
    for (var i = 0; i < todos.length; i++) {
        if(todolist[todos[i]]==1)
            temp=temp+'<tr class="listitem"><td><input type="checkbox"></td><td class="done">'+todos[i]+"</td></tr>"
        else
            temp=temp+'<tr class="listitem"><td><input type="checkbox"></td><td>'+todos[i]+"</td></tr>"
      }

    $("#list").html(temp)
    $("input[type='checkbox']").each(function () {
        $(this).val("off")
    })
    checkout()
  }

function checkout() {
  $('input[type="checkbox"]').each(function () {
    $(this).on("click",function () {
      if($(this).val()=="on")
      $(this).val("off")
      else
      $(this).val("on")
      console.log($(this).val())
    })
  })
  $("tr td:nth-of-type("+2+")").each(function () {
    $(this).on("click",function () {
      $(this).toggleClass("done")
      if($(this).hasClass("done"))
        todolist[$(this).text()]=1
      else
        todolist[$(this).text()]=0
    })
  })
}

function add_init() {
  $("#addtolist").on("click",function () {
    if ($("#newitem").val()) {
      todolist[$("#newitem").val()]=0
    }
    refreshtable()
    $("#newitem").val("")
  })
}

function remove_init(){
  $("#removefromlist").on("click",function () {
    var temp=[]
    $("input[type='checkbox']").each(function (index) {
      todos=Object.keys(todolist)
      if($(this).val()=="on")
        {
          console.log(index);
          temp[temp.length]=todos[index]
          }
    })
    for (var i = 0; i < temp.length; i++)
      delete todolist[temp[i]]
      delete todolist[""]
    refreshtable()
  })
}

function shortcutkeys_init() {
  $("#newitem").on("keypress",function(){
  // console.log(event.which)
  if(event.which==13)
	 $("#addtolist").click()})
}


function init() {
  add_init()
  remove_init()
  shortcutkeys_init()
}



init()
