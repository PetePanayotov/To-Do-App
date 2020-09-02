const handleMouseOver = (event) => {

    const li = event.currentTarget;

    const [arrowElem , dropDownContent] = Array.from(li.children);

    dropDownContent.style.display = 'block';
    
    arrowElem.className = "fas fa-chevron-up"


};

const handleMouseOut = (event) => {
    
    const li = event.currentTarget;

    const [arrowElem , dropDownContent] = Array.from(li.children);

    arrowElem.className = "fas fa-chevron-down"
    dropDownContent.style.display = 'none';
};

const logout = (context , history) => {

    context.logout();
    history.push('/')

};


export default {handleMouseOver , handleMouseOut , logout};