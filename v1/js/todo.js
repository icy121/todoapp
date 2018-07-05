window.setTimeout(function() {
  // put all of your JS code from the lecture here
alert("Welcome to \"What TODO?\"")
var todolist=[]
var exitch=0
function choiceofop(ch)
{
  exitch=0
  if (ch===1)
  {
    var newtask=prompt("Enter the task to add to the list : ")
    if (newtask!=="")
    {
      todolist.push(newtask)
      console.log("Item added to the TODO list.");
    }
    else
      alert("Empty task! Not added to the list.")
  }
  else if (ch===2)
  {
    var list="TODO list : \n"
    // console.log("TODO LIST : \n")
    // for(var i = 0; i<todolist.length;i++)
    // {
    //   list=list+(i+1)+"."+todolist[i]+"\n"
    //   console.log(i+1+"."+todolist[i])
    // }
    var i=1
    todolist.forEach(function(k)
                    {
                      list=list+(i)+"."+k+"\n"
                      i++
                    })

    console.log("**********");
    console.log(list);
    console.log("**********");
    alert("TODO list has been printed in the console log")
    alert(list)
  }
  else if (ch===3)
  {
    var num=prompt("Enter the list element number to remove!");
    // for(var i=num-1;i<todolist.length-1;i++)
    // {
    //   var temp=todolist[i]
    //   todolist[i]=todolist[i+1]
    //   todolist[i+1]=temp
    //   console.log(todolist);
    // }
    // var item=todolist.pop()
    var item=todolist[num-1]
    todolist.splice(num-1,1)
    alert(item+" has been removed from the TODO list!")
    console.log("!!!!!!!!!!");
    console.log(item+" has been removed from the TODO list!");
    console.log("!!!!!!!!!!");


  }
  else if (ch===4)
      exitch=1
}


while (true) {
  var op=prompt("What would you like to do?")
  choiceofop(Number(op))
  if (exitch===1)
    break;
  else
    continue;
}
console.log("Exiting the app!");
alert("Exiting the app!")
}, 500);
