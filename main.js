(function () {
    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        const header_navbar = document.querySelector(".navbar-area");
        const sticky = header_navbar.offsetTop;
        const logo = document.querySelector(".navbar-brand img");

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = "horizontal-ondkbkgd.png";
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = "horizontal-ondkbkgd.png";
        }

        // show or hide the back-top-top button
        const backToTo = document.querySelector(".scroll-top");
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // for menu scroll
    const pageLink = document.querySelectorAll(".page-scroll");

    pageLink.forEach((elem) => {
        elem.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(elem.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            offsetTop: 1 - 60,
        });
        });
    });

    // section menu active
    function onScroll(event) {
        const sections = document.querySelectorAll(".page-scroll");
        const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

        for (let i = 0; i < sections.length; i++) {
        const currLink = sections[i];
        const val = currLink.getAttribute("href");
        const refElement = document.querySelector(val);
        const scrollTopMinus = scrollPos + 73;
        if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
            document.querySelector(".page-scroll").classList.remove("active");
            currLink.classList.add("active");
        } else {
            currLink.classList.remove("active");
        }
        }
    }

    window.document.addEventListener("scroll", onScroll);

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    document.querySelectorAll(".page-scroll").forEach((e) =>
        e.addEventListener("click", () => {
        navbarToggler.classList.remove("active");
        navbarCollapse.classList.remove("show");
        })
    );
    navbarToggler.addEventListener("click", function () {
        navbarToggler.classList.toggle("active");
    });
})();
  
document.getElementById('bootstrapForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    var form = event.target;
    var formData = new FormData(form);
    var formMessage = document.getElementById('formMessage');

    // Clear any previous messages
    formMessage.innerHTML = '';
    formMessage.classList.remove('alert', 'alert-danger', 'alert-success');

    // Display errors or proceed with form submission
    if (!form.checkValidity()) {
        formMessage.innerHTML = errors.join('<br>');
        formMessage.classList.add('alert', 'alert-danger');
        event.stopPropagation()
    } else {
        // Perform a fetch request
        fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        .then(function (response) {
            if (response) {
                formMessage.innerHTML = 'Thanks for your interest in gomantu!';
                formMessage.classList.add('alert', 'alert-success');
                // Optionally reset the form
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(function (error) {
            formMessage.innerHTML = 'Error submitting form. Please try again.';
            formMessage.classList.add('alert', 'alert-danger');
            console.error('Error:', error);
        });
    }
});
