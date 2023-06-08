function allowDrop(event) {
    event.preventDefault();
    event.target.classList.add("highlight");
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
    event.target.classList.remove("highlight");
  
    showMessage("Item dropped successfully!");
  }
  
  function resetContainers() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
  
    while (container2.firstChild) {
      container1.appendChild(container2.firstChild);
    }
  }
  
  var items = document.getElementsByClassName("item");
  
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("dragstart", function(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
    });
  
    items[i].addEventListener("dragend", function(event) {
      event.target.classList.remove("dragging");
    });
  }
  
  function showMessage(message) {
    var messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
  
    setTimeout(function() {
      document.body.removeChild(messageElement);
    }, 2000);
  }
  