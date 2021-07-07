export const Increment = (num) =>{
    return {
        type:"Increment",
        payload:num,
    };
}

export const Decrement = (num)=>{
    return {
        type:"Decrement",
        payload:num,
    }
}