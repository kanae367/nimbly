(() => {
//burger
const popup = document.querySelector('.popup');
const burger = document.querySelector('.topbar__nav');
burger.addEventListener('click', () => popup.classList.add('popup_active'))

popup.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup__nav-list')) return;
    popup.classList.remove('popup_active');
})

//"Swiper"
let feedbackId = 1;

//creates btn elements based on slides amount
(() => {
    const switchBtnsContainer = document.querySelector('.insight__switch-btns');
    for(let i = 0; i < data.length; i++){
        const btn = document.createElement('span');
        btn.classList.add('insight__button');
        switchBtnsContainer.append(btn);
        
    }
})()

//handles clicks on swiper controls
document.getElementById('switch-left').addEventListener('click', () => changeFeedback(--feedbackId));
document.getElementById('switch-right').addEventListener('click', () => changeFeedback(++feedbackId));

const insightFeedback = document.querySelector('.insight__feedback');
const feedback = {
    feedbackImage: insightFeedback.querySelector('.insight__image'),
    feedbackText: insightFeedback.querySelector('.insight__feedback-text'),
    feedbackUserName: insightFeedback.querySelector('.insight__user-name'),
    feedbackUserInfo: insightFeedback.querySelector('.insight__user-info'),

    setData: function(){
        this.feedbackImage.src = data[feedbackId].img,
        this.feedbackText.textContent = data[feedbackId].text,
        this.feedbackUserName.textContent = data[feedbackId].name,
        this.feedbackUserInfo.textContent = data[feedbackId].position
    },

    changeData: function(){
        insightFeedback.style.opacity = 0;
        setTimeout(() => {
            this.setData();
            insightFeedback.style.opacity = 1;
        }, 500)
    }
}

const btns = document.querySelectorAll('.insight__button');

function switchActiveClass(){
    btns.forEach(item=> item.classList.remove('insight__button_active'));
    btns[feedbackId].classList.add('insight__button_active');
}

function handleFeedbackIdChange(){
    if(feedbackId >= data.length) feedbackId = 0;
    if(feedbackId < 0) feedbackId = data.length -1;
}

function changeFeedback(){
    handleFeedbackIdChange();
    feedback.changeData();
    switchActiveClass();
}

//sets initial feedback
changeFeedback(feedbackId);

//features swap

const featuresElements = document.querySelectorAll('.features__item');
featuresElements.forEach(item => item.addEventListener('click', () => handleFeaturesSwap(item)));

function handleFeaturesSwap(currentFeature){
    featuresElements.forEach(item => item.classList.remove('features__item_active'))
    currentFeature.classList.add('features__item_active')
}

})();