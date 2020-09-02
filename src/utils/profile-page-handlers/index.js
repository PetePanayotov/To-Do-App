export default {

    getActivities: async (setState, setPages , userId) => {
    
        const url = `http://localhost:9999/api/user/${userId}`;
       
        const promise = await fetch(url);
    
        const response = await promise.json();
    
        const {activities} = response;

        const numOfPages = Math.ceil(activities.length / 3);
        let pagesArr = new Array(numOfPages);
        pagesArr = pagesArr.fill('button' , 0 , pagesArr.length);
    
        setState(activities);
        setPages(pagesArr);
    
    },

    changePage : (event , setStartInd) =>  {

        const button = event.target;
        const parent = button.parentNode;
        const children = Array.from(parent.children);
    
        children.forEach(child => {
    
            child.style.color = '#0F508E';
            child.style['border-bottom'] = 'none'
    
        })
        
        const pageNum = Number(button.textContent);
    
        button.style.color = '#C050F7';
        button.style['border-bottom'] = '1px solid #C050F7'
    
        setStartInd(pageNum - 1);
    
    },

    finishActivity: async (e , state , setState , id) => {

        const url = `http://localhost:9999/api/activity/${id}`;
        const actInd = state.findIndex(a => a._id === id);
    
    
        const newState = [...state.slice(0 , actInd) , ...state.slice(actInd + 1)];
    
        const promise = await fetch(url , {method: 'DELETE'});
    
        if(promise.status === 200) {
            setState(newState);
        };
    
    }

};