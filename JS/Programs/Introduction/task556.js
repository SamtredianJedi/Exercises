// JavaScript: Get nth largest element from an unsorted array


/**
 * 
 * 


JavaScript Array: Exercise-34 with Solution
Write a JavaScript function to get the nth largest element from an unsorted array.

Test Data:
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89



Html Code:




<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JavaScript function to get nth largest element from an unsorted array.</title>
</head>
<body>

</body>
</html>









JavaScript Code:


function nthlargest(arra,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arra.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){
						
						if(arra[x] < arra[z]){
							temp = arra[z];
							arra[z] = arra[x];
							arra[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){ 
                      
						result = true;
					}	
				}
				if(result){
					break;
				}
			}

			return (arra[(highest - 1)]);	
		}
		
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 






ES6 Version:




function nthlargest(arra,highest){
    let x = 0;
    let y = 0;
    let z = 0;
    let temp = 0;
    const tnum = arra.length;
    let flag = false;
    let result = false;

    while(x < tnum){
        y = x + 1; 
        
        if(y < tnum){
            for(z = y; z < tnum; z++){
                
                if(arra[x] < arra[z]){
                    temp = arra[z];
                    arra[z] = arra[x];
                    arra[x] = temp;
                    flag = true; 
                }else{
                    continue;
                }	
            }					
        }
        
        if(flag){
            flag = false;
        }else{
            x++; 
            if(x === highest){ 
              
                result = true;
            }	
        }
        if(result){
            break;
        }
    }

    return (arra[(highest - 1)]);
}
		
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));








Live Demo:


js:




function nthlargest(arra,highest){
			var x = 0,
				y = 0,
				z = 0,
				temp = 0,
				tnum = arra.length, 
				flag = false, 
				result = false; 
   
			while(x < tnum){
				y = x + 1; 
				
				if(y < tnum){
					for(z = y; z < tnum; z++){
						
						if(arra[x] < arra[z]){
							temp = arra[z];
							arra[z] = arra[x];
							arra[x] = temp;
							flag = true; 
						}else{
							continue;
						}	
					}					
				}
				
				if(flag){
					flag = false;
				}else{
					x++; 
					if(x === highest){ 
                      
						result = true;
					}	
				}
				if(result){
					break;
				}
			}

			return (arra[(highest - 1)]);	
		}
		
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 




 */