

const Debounce = (fn, delay) => {

    let timeCtx;

    return function(){
        let ctx=this;
        let args=arguments;
        if(timeCtx) clearTimeout(timeCtx);
        timeCtx= setTimeout(() => {
            fn(args);
    
        }, delay);
    }

   
}

export default Debounce;