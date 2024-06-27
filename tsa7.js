function resetFlexbox() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.style.flexDirection = 'row';
    mainContainer.style.justifyContent = 'flex-start';
    mainContainer.style.alignItems = 'stretch';
    mainContainer.style.gap = '0px';
    document.getElementById('gap').value = 0;
    document.getElementById('grow1').value = 0;
    document.getElementById('grow2').value = 0;
    document.getElementById('grow3').value = 0;
    document.getElementById('flex1').style.flexGrow = 0;
    document.getElementById('flex2').style.flexGrow = 0;
    document.getElementById('flex3').style.flexGrow = 0;
}

function modifyGap() {
    const gapAmount = document.getElementById('gap').value;
    document.getElementById('main-container').style.gap = `${gapAmount}px`;
}

function setFlexDirection(newDirection) {
    document.getElementById('main-container').style.flexDirection = newDirection;
}

function setJustifyContent(newJustify) {
    document.getElementById('main-container').style.justifyContent = newJustify;
}

function setAlignItems(newAlign) {
    document.getElementById('main-container').style.alignItems = newAlign;
}

function adjustFlexGrow(itemIndex) {
    const growAmount = document.getElementById(`grow${itemIndex}`).value;
    document.getElementById(`flex${itemIndex}`).style.flexGrow = growAmount;
}
