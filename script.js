var swtBtn = document.querySelector('.nut2 input');
var thebody = document.querySelector('body');
var setting = document.querySelector('.seting-and-user i');
var userSt = document.querySelector('.seting-and-user img');
var userStHiden = document.querySelector('.seting-and-user');
var clickSetting = document.querySelector('.setting');
var clickSetting1 = document.querySelector('.setting1');
var hidenSetting = document.querySelector('.setting.demo');
var hidenSetting1 = document.querySelector('.setting1.demo1');
var wrapperBtn = document.querySelector('.wrapper-btn');
var wrapperBtn1 = document.querySelector('.setting1 .wrapper-btn');
var searchInput = document.querySelector('.search-input input');
var userChats = document.querySelectorAll('.user-chat');
var groupUser = document.querySelector('.group-user');
var chatBox = document.querySelector('.chatbox');
var backLeft = document.querySelector('.hd-top-mobile i');
swtBtn.addEventListener('change', () => {
    thebody.classList.toggle('dark');
})
setting.addEventListener('click', () => {
    clickSetting.classList.add('demo')
})
userSt.addEventListener('click', () => {
    clickSetting1.classList.add('demo1')
})
clickSetting.addEventListener('click', () => {
    clickSetting.classList.remove('demo');
})
clickSetting1.addEventListener('click', () => {
    clickSetting1.classList.remove('demo1');
})
wrapperBtn.addEventListener('click', (e) => {
    e.stopPropagation();
})
wrapperBtn1.addEventListener('click', (e) => {
    e.stopPropagation();
})
userChats.forEach(chat => {
    chat.addEventListener('click', function() {
        groupUser.classList.add('hidden');
        userStHiden.classList.add('hidden');
        chatBox.classList.add('to-right');
        backLeft.classList.add('display');
    });
});
backLeft.addEventListener('click', function() {
    groupUser.classList.remove('hidden');
    userStHiden.classList.remove('hidden');
    chatBox.classList.remove('to-right');
    backLeft.classList.remove('display');
})