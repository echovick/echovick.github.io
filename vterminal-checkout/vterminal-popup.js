const modal = '<div class="modal-container" id="modal_container"><div><div class="modal"><div class="vmodal-header"><div><img src="imgs/logo.png" alt=""></div><div><p>uchechukwueze70@gmail.com <br><span>Pay <b>NGN 10,000</b></span></p></div></div><div class="vt-token-box"><p>Y3X9I4</p></div><h4>Complete Transaction</h4><p class="vt-text-desctiption">A token has been generated for this transaction, please enter your transaction pin to authorize transaction</p><div><input type="text" placeholder="Enter transaction pin"></div><div class="vt-button-group"><button id="close" class="vt-btn-fill" onclick="closeModal()">Authorize</button><button id="close" class="vt-btn-outline" onclick="closeModal()">Cancel</button></div></div><div class="vt-license"><img src="imgs/vt-license.png" alt=""></div></div></div><img src="imgs/Spinner-0.8s-98px.gif" class="spinner" id="spinner" alt="">';

document.write(modal);

function loadModal(){
	open_button.classList.add('hide');
	spinner.classList.add('show');
	setTimeout(hide, 5000);
}

function hide() {
	spinner.classList.remove('show');
	modal_container.classList.add('show');
}

function closeModal(){
	modal_container.classList.remove('show');
	open_button.classList.remove('hide');
}