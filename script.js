$(document).ready(function() {
    
    // Navbar scroll effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Q2: jQuery Form Validation
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert('✅ Message sent successfully!\nI will contact you within 24 hours.');
            $('#contactForm')[0].reset();
            $('.form-control').removeClass('is-invalid');
            $('.error-msg').hide();
        }
    });

    // Real-time validation
    $('.required').on('blur keyup change', function() {
        var value = $(this).val().trim();
        var $field = $(this);
        var $error = $field.siblings('.error-msg');
        
        if (value === '') {
            $field.addClass('is-invalid');
            $error.text($(this).attr('name') + ' is required!').show();
        } else {
            $field.removeClass('is-invalid');
            $error.hide();
        }
    });

    function validateForm() {
        var isValid = true;
        
        $('.required').each(function() {
            var value = $(this).val().trim();
            if (value === '') {
                $(this).addClass('is-invalid');
                $(this).siblings('.error-msg').show();
                isValid = false;
            }
        });
        
        return isValid;
    }

    // Active nav link highlighting
    $('.nav-link').on('click', function(e) {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

<script>
function openMap() {
    document.getElementById("mapModal").style.display = "block";
}

function closeMap() {
    document.getElementById("mapModal").style.display = "none";
}

// Close when clicking outside modal
window.onclick = function(event) {
    let modal = document.getElementById("mapModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>