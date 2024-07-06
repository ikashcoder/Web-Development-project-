
function Add(no1 ,no2)
{
    return no1+no2;
}

function Multiply(no1 ,no2)
{
    return no1*no2;
}

function Substract(no1 ,no2)
{
    return no1-no2;
}

function Division(no1 ,no2)
{
    return no1/no2;
}

function calc(no1,no2,operator)
{
    return operator(no1,no2);
}

console.log(calc(4,5,Division));