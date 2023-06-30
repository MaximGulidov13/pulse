window.addEventListener('DOMContentLoaded', () => {
    //slider
    const prev = document.querySelector('.slider__prev');
    const next = document.querySelector('.slider__next');
    const slide = document.querySelectorAll('.slider__item');
    let slideIndex = 1;
          
    showSlides(slideIndex);
          
    function showSlides(n) {
        if(n > slide.length) {
            slideIndex = 1;
        }
          
        if(n < 1) {
            slideIndex = slide.length;
        }
          
        slide.forEach(item => item.classList.add('hide'));
              
        slide[slideIndex - 1].classList.toggle('hide');
    }
          
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
          
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
          
    next.addEventListener('click', () => {
        plusSlides(1);
    });
          
    //tabs
	const tabs = document.querySelectorAll('.catalog__tab');
	const tabContent = document.querySelectorAll('.catalog__content');
	const tabsParent = document.querySelector('.catalog__tabs');

	function hideTabContent() {
			tabContent.forEach(item => {
				item.classList.remove('catalog__content_active');
			});

			tabs.forEach(item => {
				item.classList.remove('catalog__tab_active');
			});
		}

	function showTabContent(i = 0) {
			tabContent[i].classList.add('catalog__content_active');
			tabs[i].classList.add('catalog__tab_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (e) => {
	const target = e.target;
	if(target && target.parentNode.classList.contains('catalog__tab')){
		tabs.forEach((item, i) => {
			if(target.parentNode === item){
				hideTabContent();
				showTabContent(i);
			}
		});
	}
});
	
	//card

	const moreInfoLinks = document.querySelectorAll('.catalog-item__link');
	const firstContent = document.querySelectorAll('.catalog-item__content');
	const secondContent = document.querySelectorAll('.catalog-item__list');
	const backLinks = document.querySelectorAll('.catalog-item__back');
	

	moreInfoLinks.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			const target = e.target;
			e.preventDefault();
			if(target.classList.contains('catalog-item__link')){
				firstContent[i].classList.remove('catalog-item__content_active');
				secondContent[i].classList.add('catalog-item__list_active');
				
			}
		});
	});

	backLinks.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			const target = e.target;
			e.preventDefault();
			if(target.classList.contains('catalog-item__back')){
				firstContent[i].classList.add('catalog-item__content_active');
				secondContent[i].classList.remove('catalog-item__list_active');
			}
		});
	});
});


