(function (root, $, bigInt) {
    'use strict';
    
    var fibonacci = {},
        internal = {
            cache: {}
        };

    fibonacci.process = function (num) {
        var result = 0;
        for (var i = 0; i <= num; i++) {  //starting at leaf node for caching purpose
            result = calculate(i);
        }

        return result;
    }

    /*
        f(0) = 0
        f(1) = 1
        f(n) = f(n-1) + f(n-2)
    */
    function calculate(num) {
        if (internal.cache[num]) {
            return internal.cache[num];
        }

        if (num === 0) {
            return 0;
        }

        if (num === 1) {
            return 1;
        }

        var precedingNum1 = calculate(num - 1),
            precedingNum2 = calculate(num - 2),
            bigInteger1 = bigInt(precedingNum1.toString()),
            bigInteger2 = bigInt(precedingNum2.toString());

        internal.cache[num] = bigInteger1.add(bigInteger2);
        return internal.cache[num];
    }

    root.fibonacci = fibonacci;
})(window, jQuery, bigInt);
