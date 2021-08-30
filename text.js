// 호출 스택
function first() {
    second();
    console.log("첫 번째");
}

function second() {
    third();
    console.log("두 번째");
}

function third() {
    console.log("세 번째");
}

first();

function run() {
    console.log("3초 후 실행");
}
console.log("시작");
setTimeout(run, 3000);
console.log("끝");

function oneMore() {
    console.log("one more");
}
function run() {
    console.log("run run");
    setTimeout(() => {
        console.log("wow");
    }, 0);
    new Promise((resolve) => {
        resolve("hi");
    }).then(console.log);
    oneMore();
}

setTimeout(run, 5000);

function add1(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;
const add4 = (x, y) => x + y;

function not1(x) {
    return !x;
}

const not2 = (x) => !x;

const example = { a: 123, b: { c: 135, d: 146 } };
const a = example.a;
const d = example.b.d;

const {
    a,
    b: { d },
} = example;

arr = [1, 2, 3, 4, 5];
const x = arr[0];
const y = arr[1];
const z = arr[4];

const [x, y, , , z] = arr;

var candyMachine = {
    status: {
        name: "node",
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine = {
    status: {
        name: "node",
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    },
};
const {
    getCandy,
    status: { count },
} = candyMachine;

var Human = function (type) {
    this.type = type || "human";
};

Human.isHuman = function (human) {
    return human instanceof Human;
};

Human.prototype.breathe = function () {
    alert("h-a-a-a-m");
};

var Zero = function (type, firstName, lastName) {
    Human.apply(this, arguments);
    this.firstName = firstName;
    this.lastName = lastName;
};

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function () {
    alert(this.firstName + " " + this.lastName);
};
var oldZero = new Zero("human", "Zero", "Cho");
Human.isHuman(oldZero); // true

class Human {
    constructor(type = "human") {
        this.type = type;
    }
    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert("h-a-a-a-m");
    }
}

class Zero extends Human { 
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName()i{
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`)
    }
}

const new Zero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); //

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve,reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});
promise.then((message)=>{
    console.log(message); //성공(resolve)한 경우 실행 
}).catch((error){
    console.error(error); // 실패(reject)한 경우 실행
}).finally(()=>{ // 끝나고 무조건 실행 
    console.log('무조건')
})

promise.then((message)=>{
    return new Promise((resolve,reject)=>{
        resolve(message);
    });
}).then((message2)=>{
    console.log(message2);
    return new Promise((resolve,reject)=>{
        resolve(message2);
    })
}).then((message3)=>{
    console.log(message3)
}).catch((error)=>{
    console.error(error)
})

function findAndSaveUser(Users){
    Users.findOne({}, (err, user)=>{
        if(err){
            return console.error(err);
        }
        user.name = 'jace';
        user.save((err)=>{
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'},(err,user)=>{
                // 생량
            });
        });
    });
}

function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name = 'zero';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'})
    })
    .then((user)=>{
        // 생략
    })
    .catch(err =>{
        console.error(err);
    })
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
.then((result)=>{
    console.log(result); // ['성공1','성공2'];
})
.catch((error)=>{
    console.error(error);
})

function findAndSaveUser(Users){
    Users.findOne({})
    .then((user)=>{
        user.name = 'jace';
        return user.save();
    })
    .then((user)=>{
        return Users.findOne({gender:'m'})
    })
    .then((user)=>{
        //생략
    })
    .catch(err=>{
        console.error(err);
    })
}
async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
        user.name = 'jace';
        user = await user.save();
        user = await Users.findOne({gender:'m'});
    }catch(error){
        console.error(error)
    }
}

async function main(){
    const result = await promise;
    return 'jace';
}

main().then((name)=> ... )

const findAndSaveUser = async (Users)=>{
    try{
        let user = await Users.findOne({});
        user.name = 'jace';
        user = await user.save();
        user = await Users.findOne({gender:'m'});
    }catch(error){
        console.error(error)
    }
}

async function findAndSaveUser(Users){
    // 생략
}
findAndSaveUser().then(()=>{ /* 생략 */});
// 또는 
async function other(){
    const result = await findAndSaveUser();
}

const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공2');
(async()=>{
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();