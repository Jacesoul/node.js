// 변수에 대입하지 않아도 된다. 
// var.js가 실행은 되지만 모듈로 내보냈던것을 쓰지 않을뿐이다. 
// 다른파일을 실행하고 싶지만 그 파일에 있는 변수를 가지고 오고 싶지 않으면 require만 선언하면 된다. 
require('./var')
console.log(require);

console.log('require.cache 입니다.')
console.log(require.cache)
console.log('require.main 입니다.')
console.log(require.main === module)
console.log(require.main.filename)

// require도 모듈이다. 자바스크립트를 노드로 실행하면 그 파일들은 모듈이 된다. 
// node require를 실행했을때 실행한것이 main이 된다. (require.main으로 어떤 파일을 실행한건지 알아낼수 있다. )
// 한번 실행한 require는 메모리안에 저장을 하여 캐싱이 된다. 다음에 같은 require를 실행할때 캐싱되어 메모리에 저장된 것을 불러온다.(훨씬 효율적이다) 파일 읽는것이 오래걸리는 작업이기 때문에 파일은 한번만 읽고 메모리에서 불러오는것은 빠르다. 하드디스크에서 불러오는건 느리고 메모리에서 불러오는것은 빠르다. 하드디스크에 있는 정보를 메모리에 옮겨오는것을 캐싱이라고 한다. 
// require에 내장되어 있는 캐시를 삭제할수 있지만 내장되어 있는 객체들을 손대는것은 위험하다. 

/*
main: Module {
        id: '.',
        path: '/Users/jiwooseol/Development/node_textbook',
        exports: {},
        parent: null,
        filename: '/Users/jiwooseol/Development/node_textbook/require.js',
        loaded: false,
        children: [
            [Module]
        ],
        paths: [
            '/Users/jiwooseol/Development/node_textbook/node_modules',
            '/Users/jiwooseol/Development/node_modules',
            '/Users/jiwooseol/node_modules',
            '/Users/node_modules',
            '/node_modules'
        ]
    },
    cache: [Object: null prototype] {
        '/Users/jiwooseol/Development/node_textbook/require.js': Module {
            id: '.',
            path: '/Users/jiwooseol/Development/node_textbook',
            exports: {},
            parent: null,
            filename: '/Users/jiwooseol/Development/node_textbook/require.js',
            loaded: false,
            children: [Array],
            paths: [Array]
        },
        '/Users/jiwooseol/Development/node_textbook/var.js': Module {
            id: '/Users/jiwooseol/Development/node_textbook/var.js',
            path: '/Users/jiwooseol/Development/node_textbook',
            exports: [Function: checkOddOrEven],
            parent: [Module],
            filename: '/Users/jiwooseol/Development/node_textbook/var.js',
            loaded: true,
            children: [Array],
            paths: [Array]
        },
        '/Users/jiwooseol/Development/node_textbook/func.js': Module {
            id: '/Users/jiwooseol/Development/node_textbook/func.js',
            path: '/Users/jiwooseol/Development/node_textbook',
            exports: [Object],
            parent: [Module],
            filename: '/Users/jiwooseol/Development/node_textbook/func.js',
            loaded: true,
            children: [Array],
            paths: [Array]
        }
    }
}

*/