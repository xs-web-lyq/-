function tap(obj,callback){
    let isMove = false;
    let startTime = 0; // 记录触摸时候的时间变量
    obj.addEventListener('touchstart',function(e){
        startTime = Date.now(); // 记录触摸时间
    })
    obj.addEventListener('touchmove',function(e){
        isMove = true; //记录是否有滑动，右滑动算拖拽，不算点击
    })
    obj.addEventListener('touchend',function(e){
        if(!isMove && (Date.now() - startTime) < 150){
            callback && callback()
        }
        isMove = false;
        startTime = 0;
    })
}