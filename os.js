const os = require('os');

os.uptime()

console.log(os.cpus()) // cpu에 대한 정보 
// 나중에 서버를 띄울때 노드는 기본적으로 싱글스레드이기 때문에 cpu가 6개 있으면 cpu를 하나만 사용을 한다. 효율적으로 서버를 구성하기 위해서는 서버를 6개 띄우면 된다. 그 6이라는 숫자를 알아내기위해서는 os.cpus()라는 메서드를 사용해야한다. 라이젠처럼 팔이 여러개 달린애들은 32개를 띄울수 있다. 

// 운영체제의 thread와 노드의 thread는 다른 의미이다. 만약 운영체제에서 8코어 16 스레드인경우 코어가 16개라고 생각하면 된다. 