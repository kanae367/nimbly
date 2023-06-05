(() => {
//бургер меню
const popup = document.querySelector('.popup');
const burger = document.querySelector('.topbar__nav');
burger.addEventListener('click', () => {
    popup.classList.add('popup_active');
})

popup.addEventListener('click', (e) => {
    const target = e.target;
    if(!(target.classList.contains('close-popup-btn') || target.classList.contains('popup__link'))) return;
    
    popup.classList.remove('popup_active');
})

//"Слайдер"
const insightSection = document.getElementById('insight');

const feedback = {
    feedbackImage: insightSection.querySelector('.insight__image'),
    feedbackText: insightSection.querySelector('.insight__feedback-text'),
    feedbackUserName: insightSection.querySelector('.insight__user-name'),
    feedbackUserInfo: insightSection.querySelector('.insight__user-info'),

    setData: function(){
        this.feedbackImage.src = data[feedbackId].img,
        this.feedbackText.textContent = data[feedbackId].text,
        this.feedbackUserName.textContent = data[feedbackId].name,
        this.feedbackUserInfo.textContent = data[feedbackId].position
    }
}

const changeDataWithAnimation = () => {
    insightSection.style.opacity = 0;

    setTimeout(() => {
        feedback.setData();
        insightSection.style.opacity = 1;
    }, 500)
}

const switchActiveBtnClass = () => {
    document.querySelectorAll('.insight__button').forEach((item, index) => {
        item.classList.remove('insight__button_active');
        if(index === feedbackId){
            item.classList.add('insight__button_active');
        }
    })
}

const changeFeedback = () => {
    if(feedbackId >= data.length){
        feedbackId = 0;
    }else if(feedbackId < 0){
        feedbackId = data.length -1;
    }
    changeDataWithAnimation(feedbackId);
    switchActiveBtnClass(feedbackId);
}


const switchLeft = document.getElementById('switch-left');
const switchRight = document.getElementById('switch-right');
let feedbackId = 1;

switchLeft.addEventListener('click', () => changeFeedback(--feedbackId));
switchRight.addEventListener('click', () => changeFeedback(++feedbackId));
const switchBtnsContainer = document.querySelector('.insight__switch-btns');

const createBtn = () => {
    const btn = document.createElement('span');
    btn.classList.add('insight__button');
    switchBtnsContainer.append(btn);
}

for(let i = 0; i < data.length; i++){
    createBtn(i);
}

changeFeedback(feedbackId);


const featuresElements = document.querySelectorAll('.features__item');
featuresElements.forEach(item => {
    item.addEventListener('click', function(){
        featuresElements.forEach(item => item.classList.remove('features__item_active'))
        this.classList.add('features__item_active')
    })
})

})();