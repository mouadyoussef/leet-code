function fibonacciModified(t1, t2, n) {
    // Write your code here
    var temp;
    for (var i = 3; i < n; ++i) {
        temp = t2;
        t2 = t1 + t2 * t2;
        t1 = temp;
    }
    return t1 + t2 * t2;
}
console.log(fibonacciModified(0, 1, 10));
