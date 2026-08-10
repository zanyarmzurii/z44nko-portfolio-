```javascript
/*
 * Z44NKO Main Ultra Fast Logic Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Slide Drawer Toggle Logic
    const openDrawer = document.getElementById('openDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function toggleDrawer(open) {
        if (open) {
            mobileDrawer.classList.add('open');
            drawerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileDrawer.classList.remove('open');
            drawerOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (openDrawer && closeDrawer && drawerOverlay) {
        openDrawer.addEventListener('click', () => toggleDrawer(true));
        closeDrawer.addEventListener('click', () => toggleDrawer(false));
        drawerOverlay.addEventListener('click', () => toggleDrawer(false));

        drawerLinks.forEach(link => {
            link.addEventListener('click', () => toggleDrawer(false));
        });
    }

    // 2. Interactive Profile Image Uploader Mechanism
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
                    uploadPrompt.style.display = 'none';
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // 3. Contact Form Direct Mailto Listener
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
