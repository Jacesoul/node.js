// this는 전역객체이기 때문에 노드에서는 전역객체가 global이니까(브라우저에서는 window) this가 global이지 않을까라는 추측할수 있다.  
// 노드에서는 전역스코프가 특별하다.(anonymous) anonymous의 this는 global이 아니다. 
console.log(this);
console.log(this === module.exports)

function a() {
    console.log(this === global);
}

a()