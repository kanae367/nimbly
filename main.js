(() => {
//burger
const popup = document.querySelector('.popup');
const burger = document.querySelector('.topbar__nav');
burger.addEventListener('click', () => popup.classList.add('popup_active'));

popup.addEventListener('click', (e) => {
    if(!(e.target.classList.contains('close-popup-btn') || e.target.classList.contains('popup__link'))) return;
    popup.classList.remove('popup_active');
})

//"Swiper"
const insightSection = document.getElementById('insight');
let feedbackId = 1;

//creating buttons based on 'slides' amount 
(function(){
    const switchBtnsContainer = document.querySelector('.insight__switch-btns');
    for(let i = 0; i < data.length; i++){
        const btn = document.createElement('span');
        btn.classList.add('insight__button');
        switchBtnsContainer.append(btn);
    }
})()

//creating nav buttons
document.getElementById('switch-left').addEventListener('click', () => changeFeedback(--feedbackId));
document.getElementById('switch-right').addEventListener('click', () => changeFeedback(++feedbackId));

const feedback = {
    _feedbackImage: insightSection.querySelector('.insight__image'),
    _feedbackText: insightSection.querySelector('.insight__feedback-text'),
    _feedbackUserName: insightSection.querySelector('.insight__user-name'),
    _feedbackUserInfo: insightSection.querySelector('.insight__user-info'),
    
    setData: function(){
        this._feedbackImage.src = data[feedbackId].img,
        this._feedbackText.textContent = data[feedbackId].text,
        this._feedbackUserName.textContent = data[feedbackId].name,
        this._feedbackUserInfo.textContent = data[feedbackId].position
    },
    
    changeData: function(){
        insightSection.style.opacity = 0;
        setTimeout(() => {
            this.setData();
            insightSection.style.opacity = 1;
        }, 500)
    }
}

const btns = document.querySelectorAll('.insight__button');

function switchActiveClass(){
    btns.forEach(item => item.classList.remove('insight__button_active'));
    btns[feedbackId].classList.add('insight__button_active');
}

function handleFeedbackIdChange(){
    if(feedbackId < 0) feedbackId = data.length-1;
    if(feedbackId >= data.length) feedbackId = 0;
}

function changeFeedback(){
    handleFeedbackIdChange();
    feedback.changeData();
    switchActiveClass();
}

//setting initial feedback
changeFeedback(feedbackId);

//features swap

const featuresElements = document.querySelectorAll('.features__item');
featuresElements.forEach(item => item.addEventListener('click', () => changeActiveFeature(item)))


function changeActiveFeature(currentFeature){
    featuresElements.forEach(item => item.classList.remove('features__item_active'))
    currentFeature.classList.add('features__item_active')
}

})();