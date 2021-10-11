import { dateNull } from '../_util/date2.ts'
// vers 등 오브젝트 기본 값은 undefined 대신 null 을 쓰는 것이 좋다.
// JSON.stringify(null) 은 'null' 이지만,
// JSON.stringify(undefined) 는 출력이 없다. 문제가 생긴다.
export function newImage(image) {
    var _a, _b, _c, _d, _e;
    return {
        id: (_a = image.id) !== null && _a !== void 0 ? _a : 0,
        uid: (_b = image.uid) !== null && _b !== void 0 ? _b : 0,
        cdate: (_c = image.cdate) !== null && _c !== void 0 ? _c : dateNull,
        vers: (_d = image.vers) !== null && _d !== void 0 ? _d : null,
        comment: (_e = image.comment) !== null && _e !== void 0 ? _e : '',
    };
}
//# sourceMappingURL=image.js.map
