const calculator = () => {
    document.querySelectorAll('.calc-item').forEach(item => {
        if (item.classList.contains('calc-square') || item.classList.contains('calc-count') || item.classList.contains('calc-day')) {
            item.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '');
            });
        }
    });
    document.querySelectorAll('input[type="text"][placeholder="Ваше сообщение"]').forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^а-яА-Я\s-]/g, '');
        });
    });
    
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Z0-9@_.!~*'"]/g, '');
        });
    });
    
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^\d()-]/g, '');
        });
    });
        
}

export default calculator