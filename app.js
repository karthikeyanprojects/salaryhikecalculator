
document.querySelector('.wholeform')
    .addEventListener('click', fntocall)

document.querySelector('.mobileform')
.addEventListener('click', fntocallmobile)

function fntocall(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-primary")){
        
        const rownum = e.target.id.split('submitsection')[1]//just to get rownum from id of element
       
        const input1_str = `#sec${rownum}inp1`,
            input2_str = `#sec${rownum}inp2`,
            output_str = `#sec${rownum}answer`;
        
        const input1 = parseInt(document.querySelector(input1_str).value)
        const input2 = parseInt(document.querySelector(input2_str).value) 

       
       
        let output = 0

        //logic based on row number
        switch(rownum){
            case '1':
                output = input1 + (input1 * (input2/100));
               
                break;
            case '2':
                output = (input2/input1) *100;
               
                break;
            case '3':
                
                output = input1 * (input2/100)
               
                
                break;
            case '4':
                output = ((input2 - input1)/input1) * 100
                break;
            default:
            alert('Something went wrong')
        }
        document.querySelector(output_str).value = output.toFixed(2)
    }
}//eof



function fntocallmobile(e){
    e.preventDefault()
    if(e.target.classList.contains("btn-primary")){
        
        
        const rownum = e.target.id.split('submitsection')[1]//just to get rownum from id of element
      
        const input1_str = `#mobsec${rownum}inp1`,
            input2_str = `#mobsec${rownum}inp2`,
            output_str = `#mobsec${rownum}answer`;
       
        const input1 = parseInt(document.querySelector(input1_str).value)

        const input2 = parseInt(document.querySelector(input2_str).value) 
        
       
       
        let output = 0

        //logic based on row number
        switch(rownum){
            case '1':
                output = input1 + (input1 * (input2/100));
               
                break;
            case '2':
                output = (input2/input1) *100;
               
                break;
            case '3':
                
                output = input1 * (input2/100)
               
                
                break;
            case '4':
                output = ((input2 - input1)/input1) * 100
                break;
            default:
            alert('Something went wrong')
        }
        document.querySelector(output_str).value = output.toFixed(2)
    }
}//eof


