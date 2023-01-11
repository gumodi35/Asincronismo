function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iteration(array){
    for(let value of array) {
        yield value
    }
}

const it = iteration(['pepe', 'pedro', 'ana', 'lucia', 'lupe']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)