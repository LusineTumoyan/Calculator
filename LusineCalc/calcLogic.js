		var equalPressed = true;
		var dotPressed = false;
		var op1 = 0;
		var operation = '';

		function operate(symbol){
			equal();
			op1 = document.myform.view.value;
			if(symbol == '=') return;
			operation = symbol;			
			document.myform.view.value = '';
			dotPressed = false;
		}
		function equal(){
			equalPressed = true;
			dotPressed = false;			

			if(document.myform.view.value == ''){
				alert("Enter the operand");
				return;
			}
			switch(operation){
				case '/':
					if(document.myform.view.value == 0){
						document.myform.view.value = op1;
						alert("Division is not allowed");
						return;
					}
					document.myform.view.value = op1/document.myform.view.value;
					break;
				case 'x':
					document.myform.view.value = op1*document.myform.view.value;
					break;
				case '-':					
					document.myform.view.value = op1-document.myform.view.value;
					break;
				case '+':
					document.myform.view.value = Number.parseFloat(op1)+Number.parseFloat(document.myform.view.value);
					break;
			}
			operation = '=';
		}	
		function clicked(num){
			if(equalPressed) document.myform.view.value = '';
			equalPressed = false;
			
			if(document.myform.view.value === '0' && num == 0) return;
			if(document.myform.view.value === '0' && num != '.') document.myform.view.value = '';
			
			if(num == '.' && (dotPressed || document.myform.view.value == '')) return;			
			if(num == '.') dotPressed = true;
			
			document.myform.view.value = document.myform.view.value + num;			
		}