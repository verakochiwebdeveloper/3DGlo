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

        popupCloseBtn.addEventListener('click', () => {
            hideModal();
        });
};

export default modal;
