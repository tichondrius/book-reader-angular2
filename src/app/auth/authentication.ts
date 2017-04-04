 interface IAuthentication{
    isAuth: boolean,
    username: string,
    name: string,
    token: string
}
export interface ITokenResult{
    token: string,
    username: string,
    name: string
}
export default IAuthentication;