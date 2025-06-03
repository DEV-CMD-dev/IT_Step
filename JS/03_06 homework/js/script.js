class Time {
    constructor(hours, minutes, seconds) {
        let h = hours;
        let m = minutes;
        let s = seconds;

        if (m > 59) {
            h += Math.floor(m / 60);
            m %= 60;
        }
        if (s > 59) {
            m += Math.floor(s / 60);
            s %= 60;
        }

        this.h = h;
        this.m = m;
        this.s = s;
    }

    get() {
        const hh = this.h <= 9 ? "0" + this.h : this.h;
        const mm = this.m <= 9 ? "0" + this.m : this.m;
        const ss = this.s <= 9 ? "0" + this.s : this.s;
        return `${hh}:${mm}:${ss}`;
    }
}
function compare(num1, num2) {
    return num1 < num2 ? -1 : num1 == num2 ? 0 : 1;
}

console.log(compare(2, 5))


function factorial(n) {
    if (!Number.isInteger(n) || n < 0) return null;
    if (n === 0) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5))


function joinNums(numbers) {
    return numbers.join("");
}

console.log(joinNums([2, 10, 5]))

function calculateSquare(h, w) {
    if (w === undefined)
        return h * h;
    return h * w;
}

console.log(calculateSquare(5, 4))
console.log(calculateSquare(5))

function isPerfect(n) {
    let res = 0;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0)
            res += i;
    }

    return n === res;
}

console.log(isPerfect(12))
console.log(isPerfect(6))


function isPerfectInRange(start, end) {
    for (let i = start; i < end; i++) {
        console.log(isPerfect(i) + `[${i}]`);
    }
}

isPerfectInRange(1, 29)

function time(h = 0, m = 0, s = 0) {
    if (m > 59) {
        h += Math.floor(m / 60);
        m = m % 60;
    }
    if (s > 59) {
        m += Math.floor(s / 60);
        s = s % 60;
    }

    return new Time(h, m, s).get();
}

console.log(time(12, 60, 0))

function convertToSeconds(h = 0, m = 0, s = 0) {
    let res = 0;
    if (h > 0)
        res += h * 60 * 60
    if (m > 0)
        res += m * 60
    return res + s;
}

console.log(convertToSeconds(1, 20, 70))

function secondsParse(seconds) {
    let h, m, s;

    h = Math.floor(seconds / 3600)
    m = Math.floor((seconds % 3600) / 60)
    s = seconds % 60

    return new Time(h, m, s).get();
}

console.log(secondsParse(4805))



function diferenceTime(time1, time2) {
    let s1 = convertToSeconds(time1.h, time1.m, time1.s)
    let s2 = convertToSeconds(time2.h, time2.m, time2.s)

    let res = s1 - s2;

    return secondsParse(res);
}

console.log(diferenceTime(new Time(22, 45, 17), new Time(12, 10, 12)))