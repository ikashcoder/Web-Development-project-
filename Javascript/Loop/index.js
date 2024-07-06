
function Fibonacci(n) {
    var output_fibo = [];
    for (var count = 0; count <= n-1; count++) {
        if (count === 0) {
            output_fibo.push(0);
        } else if (count === 1) {
            output_fibo.push(1);
        } else {
        
            var fib = output_fibo[output_fibo.length - 1] + output_fibo[output_fibo.length - 2];
            output_fibo.push(fib);
        }
    }
    return output_fibo;
}