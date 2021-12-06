import { UserInfo, ApiModel, Headersinterface, RciApiPost } from './tutorial';

// 유저를 생성한다. 생성자가 있기때문에 new 를 해서 생성한다.
let userInfo: UserInfo = new UserInfo('ricagency', '123');

// Headers를 생성한다. 생성자가 없다.
let hearders: Headersinterface = new Headersinterface();

// 생성자가 없는 경우는 아래와 같이 값을 넣을 수 있다.
hearders.Authorization = 'hello';
hearders['Content-Type'] = 'application/json; charset=utf8;'

// 아래의 방법으로도 값을 저장할 수 있다.
// const headers: Headersinterface = {
//     'Authorization': 'hello',
//     'Content-Type': 'application/json; charset=utf8;'
// }

// API오브젝트를 생성한다.
let api: ApiModel<UserInfo> = new ApiModel('https://jsonplaceholder.typicode.com/todos/1', userInfo, hearders);

// POST요청 메소드를 실행한다.
const apiResult: Promise<UserInfo> = RciApiPost(api.url, api.param, api.headers);

console.log(apiResult);