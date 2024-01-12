function changeColor() {
    var container = document.querySelector('.container');
    container.style.backgroundColor = '#FDFFAB';

    var upper = document.querySelector('.upper-section');
    upper.style.backgroundColor = '#4F6F52';
    upper.style.color = '#D2E3C8';

    var line = document.querySelector('.line');
    line.style.backgroundColor = '#FDFFAB';

}
var colorSets = [
    {
        containerBg: '#FDFFAB',
        upperBg: '#4F6F52',
        upperColor: '#D2E3C8',
        lineBg: '#FDFFAB'
    },
    {
        containerBg: '#FFD1DC', 
        upperBg: '#6B8E23',
        upperColor: '#8A2BE2',
        lineBg: '#FFD1DC'
    },

    {
        containerBg: '#F0E68C', 
        upperBg: '#FF4500',
        upperColor: '#2E8B57',
        lineBg: '#F0E68C'
    },
    {
        containerBg: '#FFB6C1',
        upperBg: '#20B2AA',
        upperColor: '#778899',
        lineBg: '#FFB6C1'
    },
    {
        containerBg: '#87CEFA',
        upperBg: '#FFA07A',
        upperColor: '#B0C4DE',
        lineBg: '#87CEFA'
    },
    {
        containerBg: '#98FB98',
        upperBg: '#DB7093',
        upperColor: '#FFD700',
        lineBg: '#98FB98'
    }
];

var currentIndex = 0;

function changeColor() {
    var currentColors = colorSets[currentIndex];

    var container = document.querySelector('.container');
    container.style.backgroundColor = currentColors.containerBg;

    var upper = document.querySelector('.upper-section');
    upper.style.backgroundColor = currentColors.upperBg;
    upper.style.color = currentColors.upperColor;

    var line = document.querySelector('.line');
    line.style.backgroundColor = currentColors.lineBg;

    currentIndex = (currentIndex + 1) % colorSets.length;
}
