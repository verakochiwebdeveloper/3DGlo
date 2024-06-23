const modal = () => { 
    const modal = document.querySelector('.popup'); 
    const buttons = document.querySelectorAll('.popup-btn'); 
    const popupCloseBtn = modal.querySelector('.popup-close'); 

    buttons.forEach(btn => { 
        btn.addEventListener('click', () => { 
            modal.style.display = 'block'; 
        }); 
    }); 

    popupCloseBtn.addEventListener('click', () => { 
        modal.style.display = 'none'; 
    }); 

        const showModal = () => {
            modal.classList.add('show');
        };

        const hideModal = () => {
            modal.classList.remove('show');
        };

        const checkScreenWidth = () => {
            if (window.innerWidth >= 768) {
                showModal();
            }
        };

        window.addEventListener('load', checkScreenWidth);

        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                showModal();
            });
        });

        

        modal.addEventListener('click', (event)=> {
            if (!event.target.closest('.popup-content') || event.targert.classList.contains('.popup-close')) {
                hideModal();
            }

        })
};

export default modal;
