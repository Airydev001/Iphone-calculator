
        //declaring an international variable to hold my  variables
        let runningTotal = 0;
        let buffer = "0";
        let standardOperator = null;
        //grab the button
        const buttons = document.querySelectorAll(".ind");
        //Grab the screen value;
        const myScreen = document.querySelector(".amper");


        //Create an event on all my button 
        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                buttonClicked(event.target.innerText);
                rerender();
            })

        })


        //CREATE MY FUNCTION TO HANDLE CLICKED BUUTON
        function buttonClicked(value) {
            if (isNaN(parseInt(value))) {
                handleSymbol(value)
            } else {
                handleNumber(value);
            }

        }
        function handleNumber(value) {
            console.log("It's working");
            if (buffer === "0") {
                buffer = value;
            } else {
                buffer += value;
            }


        }
        console.log(typeof (runningTotal));
        function handleSymbol(value) {
            switch (value) {
                case "clear":
                    buffer = "0";//return buffer to zero 
                    runningTotal = 0;
                    standardOperator = null
                    break;
                case "Del":
                    if (buffer.length === 1) {
                        buffer = "0";
                    } else {
                        buffer = buffer.substring(0, buffer.length - 1);
                    }
                    break;
                case "=":
                    if (standardOperator === null) {
                        return//Please don't do anything for other condition of previous Operator set to null
                    } else {
                        //console.log(typeof (buffer));
                        runningTotal = Number(runningTotal);
                        performOperation(parseInt(buffer));
                        //console.log(runningTotal);
                        buffer = "" + runningTotal // set this to string with the running Total

                        //console.log(runningTotal)
                        runningTotal = 0;

                    }
                    break;
                default:
                    handleMath(value);

            }
        }

        function handleMath(value) {
            const intBuffer = parseInt(buffer);
            if (runningTotal === 0) {
                runningTotal = buffer;
            } else {

                performOperation(intBuffer);
            }
            standardOperator = value;
            buffer = "0";
        }
        // create perform operation 
        function performOperation(intBuffer) {
            //console.log(typeof (intBuffer));
            if (standardOperator === "+") {
                runningTotal += intBuffer;


            }

            else if (standardOperator === "˟") {
                console.log(typeof (runningTotal))
                runningTotal *= intBuffer;

            } else if (standardOperator === "-") {
                runningTotal -= intBuffer;
            }
            /*else if (standardOperator === "**") {
                console.log(runningTotal);
                runningTotal = runningTotal ** intBuffer;

            } */else if (standardOperator === "cos") {

                const radAnswer = ((intBuffer * Math.PI) / 180);
                runningTotal = Math.sin(radAnswer);
            }
            else if (standardOperator === "tan") {
                const radianAnswer = ((intBuffer * Math.PI) / 180);
                runningTotal = Math.tan(radianAnswer);
            } else if(standardOperator === "sin"){
                const radAnswer = ((intBuffer * Math.PI) / 180);
                runningTotal = Math.sin(radAnswer);
            }
            else {
                runningTotal /= intBuffer;



            }
        }



        //To render my output to the screen
        function rerender() {
            myScreen.innerText = buffer;
        }
        //