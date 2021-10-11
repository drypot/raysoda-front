// Error2 를 시리얼라이즈하면 class 정보가 사라진다.
// 해서 class 대신 plain object 로 만들기로 한다.
export function newErrorConst(name, message = '', field = '') {
    return {
        name,
        message,
        field
    };
}
export function logError(list, logger = console.log) {
    if (list instanceof Array) {
        for (const e of list) {
            logger(e.message);
        }
        return;
    }
    logger(list);
}
//# sourceMappingURL=error2.js.map