document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const admissionButton = document.querySelector('.hero-text a');
    const popup = document.getElementById('admissionPopup');
    const closeButton = document.getElementById('closePopup');
    const admissionForm = document.getElementById('admissionForm');

    // Open popup when clicking the admission button
    admissionButton.addEventListener('click', function(e) {
        e.preventDefault();
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close popup when clicking the close button
    closeButton.addEventListener('click', function() {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close popup when clicking outside
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle form submission
    admissionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(admissionForm);
        const data = Object.fromEntries(formData);

        // Create email content
        const emailBody = `
            New Admission Enquiry:
            
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data.phone}
            Course Interest: ${data.course}
            Message: ${data.message || 'No message provided'}
        `;

        // Send email using mailto
        const mailtoLink = `mailto:enquiry@arenaanimaionnagpur.in?subject=New Admission Enquiry&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your enquiry! We'll get back to you soon.</p>
        `;
        admissionForm.appendChild(successMessage);

        // Reset form and close popup after delay
        setTimeout(() => {
            admissionForm.reset();
            popup.classList.remove('active');
            document.body.style.overflow = '';
            successMessage.remove();
        }, 3000);
    });
}); 