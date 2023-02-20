// 提前确认/提前返回 @kofeine,2023-02-20-11:31:25

// 兼容 attachEvent 和 addEventListener 
// 只执行一次判断，用立即执行函数
const eventListener = (() => {
    if (window.addEventListener) {
        return (element, type, handler, useCapture) => {
            element.addEventListener(type, function (e) {
                handler.call(element, e);
            }, useCapture)
        }
    }
    if (window.attachEvent) {
        return (element, type, handler) => {
            element.attachEvent('on' + type, function (e) {
                handler.call(element, e);
            })
        }
    }
})()