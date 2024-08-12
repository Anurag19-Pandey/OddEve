
function OddEven(num){
    if(!(typeof num === 'number'))
    {
        throw new Error("Passed value is not a number");
        return ;
    }
    
    if(num % 2 === 0)
        return 'even'; 
    else
        return 'odd';
}

module.exports = OddEven ;