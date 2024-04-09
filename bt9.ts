function isPrime(n: number): boolean {
    if (n < 2) {
        return false;
    } else if (n === 2 || n === 3 || n === 5 || n === 7 || n === 11) {
        return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    
    let i: number = -1;
    while (i < Math.sqrt(n)) {
        i += 6;
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function areAllPrimes(numbers: number[]): boolean {
    return numbers.every(number => 
        isPrime(number)
    )
}

let arr3: number[] = [2, 3, 5, 7, 11]; 
console.log(areAllPrimes(arr3)); 

let arr4: number[] = [2, 3, 4, 5, 6]; 
console.log(areAllPrimes(arr4));
