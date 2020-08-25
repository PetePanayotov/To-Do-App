const handleMouseOver = (event) => {

    const button = event.target;
    const parent = button.parentNode;

    const [ , dropDownContent] = Array.from(parent.children);

    dropDownContent.style.display = 'block';

};

const handleMouseOut = (event) => {

    const link = event.target;
    const parent = link.parentNode;

    parent.addEventListener('mouseleave' , () => {
        parent.style.display = 'none'
    });

};


export default {handleMouseOver , handleMouseOut};