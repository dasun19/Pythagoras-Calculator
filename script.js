function calculate(){
            let a = document.getElementById('a').value;
            let b = document.getElementById('b').value;
            let c = document.getElementById('c').value;
            const solution = document.getElementById('solution');

            if (a && b && c){
                 alert("Please leave only one side empty to solve.");
            }
            else if(a && b){
                solution.innerHTML = "Solving for: c <br>";
                solution.innerHTML += "c = √ (a<sup>2</sup> + b<sup>2</sup>) <br>";
                solution.innerHTML += "c = √ ("+a+"<sup>2</sup> + "+b+"<sup>2</sup>) <br>";
                solution.innerHTML += "c = √ ("+a*a+" + "+b*b+") <br>";
                solution.innerHTML += "c = √ ("+((a*a)+(b*b))+") <br>";
                c = Math.sqrt(((a*a)+(b*b)));
                solution.innerHTML += "c = "+c+" <br>";
                document.getElementById('c').value = c;
                
            }else if(b && c){
                solution.innerHTML = "Solving for: a <br>";
                solution.innerHTML += "a = √ (c<sup>2</sup> - b<sup>2</sup>) <br>";
                solution.innerHTML += "a = √ ("+c+"<sup>2</sup> - "+b+"<sup>2</sup>) <br>";
                solution.innerHTML += "a = √ ("+c*c+" - "+b*b+") <br>";
                solution.innerHTML += "a = √ ("+((c*c)-(b*b))+") <br>";
                a = Math.sqrt(((c*c)-(b*b)));
                solution.innerHTML += "a = "+a+" <br>";
                document.getElementById('a').value = a;

            }else if(a && c){
                solution.innerHTML = "Solving for: b <br>";
                solution.innerHTML += "b = √ (c<sup>2</sup> - a<sup>2</sup>) <br>";
                solution.innerHTML += "b = √ ("+c+"<sup>2</sup> - "+a+"<sup>2</sup>) <br>";
                solution.innerHTML += "b = √ ("+c*c+" - "+a*a+") <br>";
                solution.innerHTML += "b = √ ("+((c*c)-(a*a))+") <br>";
                b = Math.sqrt(((c*c)-(a*a)));
                solution.innerHTML += "b = "+b+" <br>";
                document.getElementById('b').value = b;

            }
            else{
                alert("Please leave only one side empty to solve.");
            }
        }