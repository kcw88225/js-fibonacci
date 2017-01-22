describe('fibonacci function "process"', function(){
    var fibonacci = window.fibonacci;

    it('should return 0 when the input is 0', function(){
        var input = 0,
            result = fibonacci.process(input);

        expect(result).toEqual(0);
    });

    it('should return 1 when the input is 1', function(){
        var input = 1,
            result = fibonacci.process(input);

        expect(result).toEqual(1);
    });

    it('should return correct answer when the input is 100', function(){
        var input = 100,
            result = fibonacci.process(input);

        expect(result).toEqual(bigInt('354224848179261915075'));
    });

    it('should NOT return Infinity when it handles result integer greater than 64bit', function(){
        var input = 10000,
            result = fibonacci.process(input);
        
        expect(result).not.toEqual(Infinity);
    });
});