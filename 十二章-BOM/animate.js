function animate(obj,target){
    clearInterval(obj.timer);


    obj.timer = setInterval(function(){
        let step = (target - obj.offsetLeft) / 10 
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
        console.log(obj.offsetLeft);
    },30)
}