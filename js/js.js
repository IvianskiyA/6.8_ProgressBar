let currentLevel = 0;


function setNewLevel()
{
  let ww = currentLevel;
  $("#prgbar")
    .css("width", currentLevel + "%")
    .attr("aria-valuenow", currentLevel)
    .text(currentLevel + "% Complete");
  if (currentLevel < 35)
  {
     $("#prgbar").attr("class", "progress-bar progress-bar-striped bg-success");
  }
  if (currentLevel >= 35)
  {
     $("#prgbar").attr("class", "progress-bar progress-bar-striped bg-warning");
  }
  if (currentLevel > 75)
  {
    $("#prgbar").attr("class", "progress-bar progress-bar-striped bg-danger");
  }
  console.log("Установили новый уровень - " + ww);
}

function click1Button(arg)
{
  if (arg.target.id == "btnDrop") 
  {
    currentLevel = 0;
  }
  else
  {
    currentLevel = currentLevel + Number(arg.target.name);  
    if (currentLevel > 100)
    {
      currentLevel = 100;
    }
  }  
  setNewLevel(); 
}


function init() {
  $("button").click(click1Button);

  console.log("скрипт подгрузился");  
}

$(document).ready(init);


