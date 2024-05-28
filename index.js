document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('dynamic-header');
    const text = "I'm Lemuel Dickson, your best content writer freelancer.";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = text.substr(0, index);
        header.textContent = current;

    
        if (isDeleting) {
          
            if (index > 0) {
                index--;
                setTimeout(typeEffect, 50); 
            } else {
                isDeleting = false;
                setTimeout(typeEffect, 100); 
            }
        } else {
            
            if (index < text.length) {
                index++;
                setTimeout(typeEffect, 100); 
            } else {
                isDeleting = true;
                setTimeout(typeEffect, 1000); 
            }
        }
    }

    
    setTimeout(typeEffect, 1000);
});
