 //local storage
export const helperStorage = (key, element) => { 

    //get elements

    let getElements = JSON.parse(localStorage.getItem(key));
    //check array

    if(Array.isArray(getElements)){
        //add element
        getElements.push(element);
    }else{
        //replace elements + create array
        getElements = [element]; 
    };

    //save in lS
    localStorage.setItem(key, JSON.stringify(getElements))

    //return element

    return element; 
};
