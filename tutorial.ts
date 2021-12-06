import axios from "axios";

/**
 * Header를 정의하는 클래스
 */
class Headersinterface {
    'Authorization': string;
    'Content-Type': string;
}

/**
 * API 클래스
 * url, param, headers를 담는다
 */
class ApiModel<T> {
    public url: string;
    public param: T;
    public headers: Headersinterface;

    constructor(url:string, param:T, headers: Headersinterface) {
        this.url = url;
        this.param = param;
        this.headers = headers;
    }
}

/**
 * User정보 클래스
 */
class UserInfo {
    public username: string;
    public password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

// let request: ApiInterface<UserInfo> = {
//     url: 'http:localhost:8080/',
//     param: user,
//     headers: headers
// }

/**
 * POST용 API메소드
 * 공통으로 함수를 넣어주고 요청한곳에서 받도록 한다
 * @param url 
 * @param param 
 * @param headers 
 */
const RciApiPost = async <T>(url:string, param: T, headers: any): Promise<T> => {
    return await axios.post(url, param, headers);
}


export { UserInfo, ApiModel, Headersinterface, RciApiPost };