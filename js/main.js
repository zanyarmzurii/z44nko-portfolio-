```javascript
/*
 * Main JavaScript Functionalities
 * Portfolio: Z44NKO
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Upload User Avatar Interactive Handler
    const uploadPrompt = document.getElementById('uploadPrompt');
    const imageUploader = document.getElementById('imageUploader');
    const userPhotoImage = document.getElementById('userPhotoImage');

    if (uploadPrompt && imageUploader && userPhotoImage) {
        uploadPrompt.addEventListener('click', () => imageUploader.click());
        userPhotoImage.addEventListener('click', () => imageUploader.click());

        imageUploader.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    userPhotoImage.src = e.target.result;
                    userPhotoImage.style.display = 'block';
                    userPhotoImage.classList.remove('hidden');
                    uploadPrompt.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 2. Direct Contact Form Submission to Email
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('senderName')?.value || '';
            const email = document.getElementById('senderEmail')?.value || '';
            const message = document.getElementById('senderMessage')?.value || '';

            const mailtoUrl = `mailto:z.14x@outlook.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
            
            window.location.href = mailtoUrl;
        });
    }
});

```
