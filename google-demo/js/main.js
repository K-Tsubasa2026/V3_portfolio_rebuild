// ショートカット　ポップアップのボタン操作
const shortcutBtn = document.getElementById('shortcut-btn');
const shortcutPopup = document.getElementById('shortcut-popup');
const cancelBtn = document.getElementById('cancel-btn');
const doneBtn = document.getElementById('done-btn');
const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');


// console.log(shortcutBtn);
// console.log(shortcutPopup);
// console.log(cancelBtn);
// console.log(doneBtn);
// console.log(nameInput);
// console.log(urlInput);


// ポップアップを開く
function openModal(){
    shortcutPopup.classList.add('is-open');
}

// ポップアップを閉じる
function closeModal(){
    shortcutPopup.classList.remove('is-open');
    nameInput.value = '';
    urlInput.value = '';
    doneBtn.disabled = true;
}

// クリック時の動作
    shortcutBtn.addEventListener('click',openModal);
    cancelBtn.addEventListener('click',closeModal);
    doneBtn.addEventListener('click',closeModal);

// 入力欄の値が空かどうかをチェックして、Doneボタンの有効/無効を切り替える
    function updateDoneButton() {
    doneBtn.disabled = nameInput.value.trim() === '' || urlInput.value.trim() === '';
}
