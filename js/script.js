document.querySelector('.image-container').addEventListener('mouseover', function () {
    document.querySelector('.info-box').classList.add('active');
});
document.querySelector('.image-container').addEventListener('mouseout', function () {
    document.querySelector('.info-box').classList.remove('active');
});