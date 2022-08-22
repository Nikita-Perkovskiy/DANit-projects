function tabAnimation(){
    const selectElement =document.querySelectorAll('.tabs-title');
    const selectContent =document.querySelectorAll('.tab-content');
    let elementDataName;
    selectElement.forEach(element =>{
        element.addEventListener('click', elementAnimation)
    });
   function elementAnimation(){
        selectElement.forEach(item =>{
            item.classList.remove('active');
        });
        this.classList.add('active');
         elementDataName = this.getAttribute('data-tab');
       function contentAnimation(){
        selectContent.forEach(item =>{
             if (item.dataset.content == elementDataName){item.classList.add('active')} 
             else{item.classList.remove('active')}
            })};
             contentAnimation();
    };
};
tabAnimation();
   

      



