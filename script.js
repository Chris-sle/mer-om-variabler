let selectedColor = '';
        let lastDiv = '';

        function changeSelectedColor(color, divID) {
            removeBorder(lastDiv)
            selectedColor = color;
            document.getElementById("selectedColorDiv").style.backgroundColor = selectedColor;
            document.getElementById(divID).style.border = '5px solid black';
            lastDiv = divID;
        }

        function setBodyBackgroundColor() {
          document.body.style.backgroundColor = selectedColor;
        }

        function removeBorder (divID) {
            if (divID != ''){
                document.getElementById(divID).style.border = '0px solid black'; 
                }

        }
        