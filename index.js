function addToLocalStorage() {
    var keyInput = document.getElementById("keyInput").value;
    var valueInput = document.getElementById("valueInput").value;

    
    if (keyInput && valueInput) {
      localStorage.setItem(keyInput, valueInput);
      displayKeys();
    } else {
      alert("Complete all inputs!");
    }
  }
  function displayKeys() {
    var keyList = document.getElementById("keyList");
    keyList.innerHTML = ""; 

  
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);

      var listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(key));

      
      var button = document.createElement("button");
      button.appendChild(document.createTextNode("Show value"));
      button.setAttribute("onclick", "displayValue('" + key + "')");
      listItem.appendChild(button);

      keyList.appendChild(listItem);
    }
  }

  function displayValue(key) {
    var value = localStorage.getItem(key);
    console.log("Value for key '" + key + "': " + value);
  }

  displayKeys();