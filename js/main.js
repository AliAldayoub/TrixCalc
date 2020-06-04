const overlayChooseGame = document.querySelector('.overlay-choose'),
	showCase = document.querySelector('.show-case'),
	overlayLabelChoose = document.querySelector('.overlay-label-choose'),
	labelsBox = document.querySelector('.labels'),
	AllGameType = document.querySelectorAll('.overlay-choose .game-type p'),
	AllGameLabel = document.querySelectorAll('.overlay-label-choose .game-type p'),
	choosenLabelVal = document.querySelector('.choosen-label-val'),
	choosenLabelText = document.querySelector('.choosen-label-text'),
	chooseScoreBox = document.querySelector('.num-of-score-box'),
	labels = document.querySelector('.labels'),
	we = document.querySelector('.we'),
	they = document.querySelector('.they'),
	gameLabel = [ 'دينار', 'لطش', 'بنات', 'شيخ الكبة', 'تركس' ],
	HtmlOfChoose = [
		'<p>0</p> <p>1</p><p>2</p><p>3</p> <p>4</p><p>5</p> <p>6</p> <p>7</p> <p>8</p><p>9</p> <p>10</p> <p>11</p> <p>12</p><p>13</p>',

		'<p>0</p><p>1</p><p>2</p><p>3</p> <p>4</p><p>5</p> <p>6</p> <p>7</p> <p>8</p><p>9</p> <p>10</p> <p>11</p> <p>12</p><p>13</p>',

		'<p>0</p><p>1</p><p>2</p><p>3</p> <p>4</p>',

		'<p id="WeK" class="Keat">نحن</p><p id="theyK" class="Keat">هم</p>',

		'<p data-val="200">الاول</p><p data-val="150">الثاني</p><p data-val="100">الثالث</p><p data-val="50">الرابع</p>',

		'<button class="next-player">ابدأ المملكة التالية</button>'
	],
	funnyText = [
		'كم وحدة أكلتو يا معلم ',
		'كم لطش أكلتو يا كبير ',
		'كم بنت أكلتو يا أكابر',
		'مين أكل الكبير يا كبير',
		'شو اخدتو يا ريس'
	];

let choices,
	gameNameNum,
	weScore = 0,
	theyScore = 0,
	trexCount = 0,
	trexScore = 0,
	labelChoises = 0,
	playerCount = 1;

/* End partnership Trix vars  */
const showCaseTrix = document.querySelector('.show-case-trix'),
	overlayDouble = document.querySelector('.overlay-double'),
	doubleQuestAnswer = document.querySelectorAll('.double-quest-answer p'),
	doubleQuestBox = document.querySelector('.double-quest-box'),
	overlayName = document.querySelector('.overlay-names'),
	nameNum = document.querySelector('.overlay-names .name-num'),
	startFastBtn = document.querySelector('.overlay-names .start-fast'),
	nextName = document.querySelector('.overlay-names .next-name'),
	nameInput = document.querySelector('.overlay-names .form-box input'),
	playerInfoName = document.querySelector('.player-name'),
	playerInfoSelection = document.querySelector('.player-selection'),
	overlayLabelSelect = document.querySelector('.overlay-label-select'),
	allTrixGameLabel = document.querySelectorAll('.overlay-label-select .games-bord .game-type p'),
	allPlayersBordName = document.querySelectorAll('.playerBord-name'),
	allScoreBordName = document.querySelectorAll('.score-bord .player-score span'),
	allScoreValues = document.querySelectorAll('.score-bord .player-score p:last-of-type'),
	allScoreNameFinish = document.querySelectorAll('.score-bord .player-score p:first-of-type'),
	allitemsToSelect = document.querySelectorAll('.items-toSelect'),
	nameNumArr = [ 'الثاني', 'الثالث', 'الرابع' ],
	trixItem = [ 'الاول', 'الثاني', 'الثالث', 'الرابع' ],
	defaultName = [ 'اللاعب الاول', 'اللاعب الثاني', 'اللاعب الثالث', 'اللاعب الرابع' ],
	nameArr = new Array(),
	scoreArr = new Array(4),
	trixItemDataVal = {
		الاول: 200,
		الثاني: 150,
		الثالث: 100,
		الرابع: 50
	},
	classForTrixCCSelection = {
		دينار: 'dinar',
		لطش: 'ltsh',
		بنات: 'banat',
		شيخ: 'K',
		تركس: 'TrixCCSelect'
	};
let doublePlay = false,
	nameNumberShow = 1,
	numberOfNameWritten = 0,
	playerNumber = 0,
	labelNumber = 0,
	playerRoleNumber = 1,
	gameSelected,
	playerRoleNumberInCC = 0;

let gameType = {
	دينار: 13,
	لطش: 13,
	بنات: 4,
	شيخ: 1,
	تركس: 4
};

/* End Trix vars  */

/*trix CC vars */
const overlayCC = document.querySelector('.overlay-CC');

const allTrixCCLabel = document.querySelectorAll('.overlay-CC .game-type p');
/*اختيار نوع اللعبة*/

AllGameType.forEach((game) => {
	game.addEventListener('click', function() {
		/*اذا كان نوع اللعبة تركس شراكة  ا*/
		gameSelected = game.innerHTML;
		if (game.innerHTML == 'تركس شراكة') {
			overlayChooseGame.style.display = 'none';

			showCase.style.display = 'grid';

			overlayLabelChoose.style.display = 'grid';
		}
		/*اذا كان نوع اللعبة تركس يهودية  ا*/
		if (game.innerHTML == 'تركس') {
			overlayChooseGame.style.display = 'none';
			overlayDouble.style.display = 'grid';
		}
		if (game.innerHTML == 'تركس كومبلكس') {
			overlayChooseGame.style.display = 'none';
			overlayName.style.display = 'grid';
		}
	});
});

/*  Start Trix Func  */

/*السؤال عن التدبيل  */
doubleQuestAnswer.forEach((ans) => {
	ans.addEventListener('click', function() {
		if (ans.innerHTML == 'نعم') {
			doublePlay = true;

			overlayChooseGame.style.display = 'none';
			overlayDouble.style.display = 'none';
			overlayName.style.display = 'grid';
		} else {
			overlayChooseGame.style.display = 'none';
			overlayDouble.style.display = 'none';
			overlayName.style.display = 'grid';
		}
	});
});

/*السؤال عن الاسماء وادخالها والانتقال للخطوة التالية  */
nextName.addEventListener('click', function() {
	if (nameInput.value == '') alert('من بعد أذنك أدخل اسم صحيح');
	else {
		if (nameArr.includes(nameInput.value)) alert('من بعد أذنك ميز الاسماء عن بعضها');
		else {
			nameArr.push(nameInput.value);
			nameNum.innerHTML = nameNumArr[numberOfNameWritten];
			numberOfNameWritten++;

			nameInput.value = '';
			nameInput.focus();

			if (numberOfNameWritten == 3) {
				nextName.innerHTML = 'ابدأ التسجيل';
			}

			if (numberOfNameWritten == 4) {
				overlayName.style.display = 'none';
				showCaseTrix.style.display = 'grid';

				if (gameSelected == 'تركس') {
					editNames();
					overlayLabelSelect.style.display = 'grid';
					document.querySelector('.overlay-label-select .games-bord p span').innerHTML =
						nameArr[playerRoleNumber - 1];
				} else if (gameSelected == 'تركس كومبلكس') {
					editTrixCCNames();
					document.querySelector('.CC_select-game-type p span').innerHTML = nameArr[playerRoleNumber - 1];
					overlayCC.style.display = 'grid';
				}
			}
		}
	}
});

/*زر البدء السريع من غير ادخال اسماء */
startFastBtn.addEventListener('click', function() {
	defaultName.forEach((name) => {
		nameArr.push(name);
	});
	overlayName.style.display = 'none';
	showCaseTrix.style.display = 'grid';
	if (gameSelected == 'تركس') {
		editNames();
		overlayLabelSelect.style.display = 'grid';
	} else if (gameSelected == 'تركس كومبلكس') {
		editTrixCCNames();
		overlayCC.style.display = 'grid';
	}
});

/*تعديل الاسماء  */
function editNames() {
	allPlayersBordName.forEach((playerName, index) => {
		playerName.innerHTML = nameArr[index];
	});
	allScoreBordName.forEach((playerName, index) => {
		playerName.innerHTML = nameArr[index];
	});
	playerInfoName.innerHTML = nameArr[playerCount - 1];
}
/*بدء لعبة التركس واختيار تسمية  */
allTrixGameLabel.forEach((label) => {
	label.addEventListener('click', function() {
		label.classList.add('no-clicking', 'clicked');
		labelSelected = label.innerHTML;
		playerInfoSelection.innerHTML = labelSelected;
		/*اذا كانت التسمية لطش او دينار او بنات  */
		if (labelSelected == 'دينار' || labelSelected == 'لطش' || labelSelected == 'بنات') {
			allitemsToSelect.forEach((item) => {
				createOptions(labelSelected);
				item.classList.add('no-clicking');
			});

			/*اذا كانت التسمية تركس */
		} else if (labelSelected == 'تركس') {
			allitemsToSelect.forEach((item) => {
				item.classList.add('trix');
				createOptions(labelSelected);
				item.classList.add('no-clicking');
			});

			/*اذا كانت التسمية شيخ الكبة */
		} else if (labelSelected == 'شيخ الكبة') {
			allitemsToSelect.forEach((item) => {
				item.classList.remove('no-clicking');
				item.classList.add('trix');
				const divK = document.createElement('div');
				item.appendChild(divK);
				divK.innerHTML = 'شيخ الكبة';
				divK.classList.add('animate__animated', 'animate__fadeInUp');
				divK.addEventListener('click', function() {
					let arr = Array.from(divK.parentElement.parentElement.parentElement.children);
					let index = arr.indexOf(divK.parentElement.parentElement);
					allScoreValues[index].innerHTML = -75 + parseInt(allScoreValues[index].innerHTML);

					overlayLabelSelect.style.display = 'grid';
					playerNumber = 0;
					allitemsToSelect.forEach((item) => {
						item.innerHTML = '';
						item.classList.remove('trix');
					});
				});
			});
		}
		overlayLabelSelect.style.display = 'none';
		const allOneP = document.querySelectorAll('.one p');
		const allTwoP = document.querySelectorAll('.two p');
		const allThreeP = document.querySelectorAll('.three p');
		const allFourP = document.querySelectorAll('.four p');

		allOneP.forEach((p) => {
			p.parentElement.classList.remove('no-clicking');

			p.addEventListener('click', function() {
				p.classList.add('clicked');

				if (labelSelected == 'تركس') {
					allScoreValues[0].innerHTML = trixItemDataVal[p.innerHTML] + parseInt(allScoreValues[0].innerHTML);
					allTwoP.forEach((p2) => {
						if (p2.innerHTML == p.innerHTML) {
							p2.classList.add('clicked', 'no-clicking');
						}
					});
					allThreeP.forEach((p3) => {
						if (p3.innerHTML == p.innerHTML) {
							p3.classList.add('clicked', 'no-clicking');
						}
					});
					allFourP.forEach((p4) => {
						if (p4.innerHTML == p.innerHTML) {
							p4.classList.add('clicked', 'no-clicking');
						}
					});
				} else {
					allScoreValues[0].innerHTML =
						calcTrixGame(labelSelected, p.innerHTML) + parseInt(allScoreValues[0].innerHTML);
					for (let i = 0; i < parseInt(p.innerHTML); i++) {
						allTwoP[0].parentElement.removeChild(allTwoP[0].parentElement.lastElementChild);
						allThreeP[0].parentElement.removeChild(allThreeP[0].parentElement.lastElementChild);
						allFourP[0].parentElement.removeChild(allFourP[0].parentElement.lastElementChild);
					}
				}
				p.parentElement.classList.add('no-clicking');

				allTwoP[0].parentElement.classList.remove('no-clicking');
			});
		});
		allTwoP.forEach((p) => {
			p.addEventListener('click', function() {
				p.classList.add('clicked');
				if (labelSelected == 'تركس') {
					allScoreValues[1].innerHTML = trixItemDataVal[p.innerHTML] + parseInt(allScoreValues[1].innerHTML);
					allThreeP.forEach((p3) => {
						if (p3.innerHTML == p.innerHTML) {
							p3.classList.add('clicked', 'no-clicking');
						}
					});
					allFourP.forEach((p4) => {
						if (p4.innerHTML == p.innerHTML) {
							p4.classList.add('clicked', 'no-clicking');
						}
					});
				} else {
					allScoreValues[1].innerHTML =
						calcTrixGame(labelSelected, p.innerHTML) + parseInt(allScoreValues[1].innerHTML);

					for (let i = 0; i < parseInt(p.innerHTML); i++) {
						allThreeP[0].parentElement.removeChild(allThreeP[0].parentElement.lastElementChild);
						allFourP[0].parentElement.removeChild(allFourP[0].parentElement.lastElementChild);
					}
				}
				p.parentElement.classList.add('no-clicking');
				allThreeP[0].parentElement.classList.remove('no-clicking');
			});
		});
		allThreeP.forEach((p) => {
			p.addEventListener('click', function() {
				p.classList.add('clicked');
				if (labelSelected == 'تركس') {
					allScoreValues[2].innerHTML = trixItemDataVal[p.innerHTML] + parseInt(allScoreValues[2].innerHTML);
					allFourP[0].parentElement.classList.remove('no-clicking');
					allFourP.forEach((p4) => {
						if (p4.innerHTML == p.innerHTML) {
							p4.classList.add('clicked', 'no-clicking');
						}
					});
				} else {
					allScoreValues[2].innerHTML =
						calcTrixGame(labelSelected, p.innerHTML) + parseInt(allScoreValues[2].innerHTML);
					for (let i = 0; i < parseInt(p.innerHTML); i++) {
						allFourP[0].parentElement.removeChild(allFourP[0].parentElement.lastElementChild);
					}
					let lastSelection = allFourP[0].parentElement.lastElementChild,
						parent = allFourP[0].parentElement;
					parent.innerHTML = '';
					parent.appendChild(lastSelection);
					lastSelection.parentElement.classList.remove('no-clicking');
				}

				p.parentElement.classList.add('no-clicking');
			});
		});
		allFourP.forEach((p) => {
			p.addEventListener('click', function() {
				p.classList.add('clicked');
				if (labelSelected == 'تركس') {
					allScoreValues[3].innerHTML = trixItemDataVal[p.innerHTML] + parseInt(allScoreValues[3].innerHTML);
				} else {
					allScoreValues[3].innerHTML =
						calcTrixGame(labelSelected, p.innerHTML) + parseInt(allScoreValues[3].innerHTML);
				}
				p.parentElement.classList.add('no-clicking');
				overlayLabelSelect.style.display = 'grid';
				playerNumber = 0;
				labelNumber++;
				allitemsToSelect.forEach((item) => {
					item.innerHTML = '';
					if (item.classList.contains('trix')) {
						item.classList.remove('trix');
					}
				});
				if (labelNumber == 4) {
					allTrixGameLabel.forEach((label) => {
						if (label.classList.contains('clicked') && label.classList.contains('no-clicking')) {
							label.classList.remove('clicked', 'no-clicking');
						}
					});
					labelNumber = 0;
					playerRoleNumber++;
					document.querySelector('.overlay-label-select .games-bord p span').innerHTML =
						nameArr[playerRoleNumber - 1];
					playerInfoName.innerHTML = nameArr[playerRoleNumber - 1];
					if (playerRoleNumber == 5) {
						let finalScore = new Array();
						let finalScoreName = new Array();

						allScoreValues.forEach((score) => {
							finalScore.push(parseInt(score.innerHTML));
						});
						finalScore.sort((a, b) => a - b);
						for (let i = 0; i < 4; i++) {
							for (let j = 0; j < 4; j++) {
								if (finalScore[i] == allScoreNameFinish[j].nextElementSibling.innerHTML) {
									finalScoreName.push(j);
								}
							}
						}
						let div = document.createElement('div');
						div.innerHTML = `<p class="winner">مبروك  ${nameArr[
							finalScoreName[3]
						]} الفوز بنتيجة ${finalScore[3]}</p>
							<div class="after-winner">
							<p>	المرتبة الثانية ${nameArr[finalScoreName[2]]} بنتيجة ${finalScore[2]}</p>
							<p>	المرتبة الثالثة ${nameArr[finalScoreName[1]]} بنتيجة ${finalScore[1]}</p>
							<p>	المرتبة الرابعة ${nameArr[finalScoreName[0]]} بنتيجة ${finalScore[0]}</p>
							</div>
							<div class="game-type">
							<p class="new-game">ابدأ لعبة جديدة</p>
							`;

						overlayLabelSelect.firstElementChild.innerHTML = '';
						overlayLabelSelect.firstElementChild.appendChild(div);
						document.querySelector('.new-game').addEventListener('click', resetgame);
					}
				}
			});
		});
	});
});

function createOptions(type) {
	for (let i = 0; i <= gameType[type]; i++) {
		let pOption = document.createElement('p');
		pOption.innerHTML = i;
		pOption.classList.add('animate__animated', 'animate__fadeInUp');
		if (gameSelected == 'تركس كومبلكس') {
			pOption.classList.add(classForTrixCCSelection[type]);
		}
		allitemsToSelect[playerNumber].appendChild(pOption);

		if (type == 'تركس') {
			pOption.innerHTML = trixItem[i];
			if (gameSelected == 'تركس كومبلكس') {
				pOption.dataset.trixValue = trixItemDataVal[trixItem[i]];
			}
			if (i == 3) {
				break;
			}
		}
	}
	playerNumber++;
}
function calcTrixGame(type, optionSelect) {
	if (type == 'دينار') {
		return parseInt(optionSelect) * -10;
	} else if (type == 'لطش') {
		return parseInt(optionSelect) * -15;
	} else if (type == 'بنات') {
		return parseInt(optionSelect) * -25;
	}
}
/*End Trix Func */

/* Start partnership Trix func*/

AllGameLabel.forEach((label) => {
	label.addEventListener('click', function() {
		labelChoises++;

		label.classList.add('no-clicking', 'clicked');

		overlayLabelChoose.style.display = 'none';

		gameNameNum = gameLabel.indexOf(label.innerHTML);

		chooseScoreBox.innerHTML = HtmlOfChoose[gameNameNum];

		if (gameLabel[gameNameNum] == 'تركس') chooseScoreBox.classList.add('trex');

		choosenLabelVal.innerHTML = gameLabel[gameNameNum];
		choosenLabelText.innerHTML = funnyText[gameNameNum];

		choices = chooseScoreBox.querySelectorAll('p');
		choices.forEach((choice) => {
			choice.addEventListener('click', function() {
				if (choices.length == 2) {
					if (choice.id == 'WeK') {
						weScore += -75;

						createLabel(gameNameNum, -75);

						overlayLabelChoose.style.display = 'grid';

						checkEndLabel(choice);
					} else {
						theyScore += -75;

						createLabel(gameNameNum, 0);

						overlayLabelChoose.style.display = 'grid';

						checkEndLabel(choice);
					}
				} else if (choices.length == 4) {
					choice.classList.add('no-clicking', 'clicked');

					trexScore += parseInt(choice.dataset.val);

					trexCount++;

					if (trexCount == 2) {
						createLabel(gameNameNum, trexScore);

						overlayLabelChoose.style.display = 'grid';

						chooseScoreBox.classList.remove('trex');

						weScore += trexScore;

						theyScore += 500 - trexScore;

						checkEndLabel(choice);
					}
				} else {
					calcValue = calc(gameNameNum, choice.innerHTML);

					weScore += calcValue;

					createLabel(gameNameNum, calcValue);

					overlayLabelChoose.style.display = 'grid';

					checkEndLabel(choice);
				}

				we.innerHTML = weScore;
				they.innerHTML = theyScore;
			});
		});
	});
});

function calc(gameNameNum, numberChoose) {
	if (gameLabel[gameNameNum] == 'دينار') {
		let x = parseInt(numberChoose) * -10;
		theyScore += 13 * -10 - x;
		return x;
	} else if (gameLabel[gameNameNum] == 'لطش') {
		let y = parseInt(numberChoose) * -15;
		theyScore += 13 * -15 - y;
		return y;
	} else if (gameLabel[gameNameNum] == 'بنات') {
		let z = parseInt(numberChoose) * -25;
		theyScore += 4 * -25 - z;
		return z;
	}
}
function createLabel(gameNum, labelVal) {
	labels.innerHTML += `
		<div class="lebel">
		<p>${gameLabel[gameNum]} : <span class="label-val ">${labelVal}</span> </p>
		</div>
		`;
}

function continueGame() {
	playerCount++;

	labels.innerHTML = '';
	chooseScoreBox.innerHTML = '';

	let playerNum = document.querySelector('.player-num');
	playerNum.innerHTML = parseInt(playerNum.innerHTML) + 1;

	AllGameLabel.forEach((label) => {
		label.classList.remove('no-clicking', 'clicked');
	});

	trexCount = 0;
	trexScore = 0;
	labelChoises = 0;

	overlayLabelChoose.style.display = 'grid';
}
function checkEndLabel(choice) {
	if (labelChoises == 5) {
		overlayLabelChoose.style.display = 'none';

		choice.classList.add('no-clicking', 'clicked');

		chooseScoreBox.innerHTML = HtmlOfChoose[5];

		const nextPlayer = document.querySelector('.next-player');
		nextPlayer.addEventListener('click', continueGame);

		if (playerCount == 4) {
			nextPlayer.innerHTML = 'ابدأ لعبة جديدة يا كبير ';
			nextPlayer.addEventListener('click', resetgame);

			let div = document.createElement('div');
			div.classList.add('winner');
			chooseScoreBox.insertBefore(div, nextPlayer);
			if (weScore == 0) div.innerHTML = `النتيجة تعادل يا ريس`;
			else if (weScore > 0) div.innerHTML = `أنتو الربحانين يا برنس نتيجتكن ${weScore}`;
			else if (weScore < 0) div.innerHTML = `خسرتو يا معلم خيرها بغيرها نتيجتكن ${weScore}`;

			chooseScoreBox.style.flexDirection = 'column';
			document.querySelector('.label-box p').innerHTML = '';
			document.querySelector('.label-box p').nextElementSibling.style.display = 'block';
		}
	}
}
function resetgame() {
	location.reload();
}
/* End partnership Trix func */

/*  Start Trix CC  */
let counterForNumberOfPClicked = 0,
	counterForNumberOFLabelSelectedInCC = 1,
	ccBool = false,
	trixCCBool = false,
	allScoreArray = [ 0, 0, 0, 0 ],
	divKtrue,
	divKfalse,
	labelSelectedTrixOrCC;

allTrixCCLabel.forEach((label) => {
	label.addEventListener('click', function() {
		playerInfoSelection.innerHTML = label.innerHTML;
		labelSelectedTrixOrCC = label.innerHTML;
		label.classList.add('clicked', 'no-clicking');
		if (label.innerHTML == 'كومبلكس') {
			ccBool = true;
			overlayCC.style.display = 'none';
			editTrixCCNames();
			allitemsToSelect.forEach((item, index) => {
				createAllOptionsCC(index);
				if (index == 3) {
					createKElement(item);
				}
			});
			playerNumber = 0;
		} else if (label.innerHTML == 'تركس') {
			trixCCBool = true;
			overlayCC.style.display = 'none';
			editNames();
			allitemsToSelect.forEach((item) => {
				item.classList.add('trix');
				createOptions('تركس');
			});
			playerNumber = 0;
		}
	});
});

document.body.addEventListener('click', function(e) {
	if (e.target.classList.contains('dinar')) {
		//If the Label Of Selection is dinar
		stepsToDoAfterClickOnSelection(e.target, 'دينار');
	} else if (e.target.classList.contains('ltsh')) {
		//If the Label Of Selection is ltsh
		stepsToDoAfterClickOnSelection(e.target, 'لطش');
	} else if (e.target.classList.contains('banat')) {
		//If the Label Of Selection is banat
		stepsToDoAfterClickOnSelection(e.target, 'بنات');
	} else if (e.target.classList.contains('PforK')) {
		//If the Label Of Selection is K
		stepsToDoAfterClickOnSelection(e.target, 'شيخ');
	} else if (e.target.classList.contains('TrixCCSelect')) {
		let allitemsToSelectArray = Array.from(allitemsToSelect);
		let indexOfPlayer = allitemsToSelectArray.indexOf(e.target.parentElement);

		e.target.parentElement.classList.add('no-clicking');

		allScoreValues[indexOfPlayer].innerHTML =
			parseInt(e.target.dataset.trixValue) + parseInt(allScoreValues[indexOfPlayer].innerHTML);

		let childrenOfParetElement = Array.from(e.target.parentElement.children);
		let indexOfChosenSelect = childrenOfParetElement.indexOf(e.target);

		allitemsToSelect.forEach((item) => {
			item.children[indexOfChosenSelect].classList.add('clicked', 'no-clicking');
		});

		counterForNumberOfPClicked++;
	}
	if (counterForNumberOfPClicked == 4) {
		if (labelSelectedTrixOrCC == 'كومبلكس') {
			allScoreValues[counterForNumberOFLabelSelectedInCC - 1].innerHTML =
				parseInt(allScoreValues[counterForNumberOFLabelSelectedInCC - 1].innerHTML) +
				parseInt(allScoreArray[counterForNumberOFLabelSelectedInCC - 1]);
			allScoreArray = [ 0, 0, 0, 0 ];
			counterForNumberOFLabelSelectedInCC++;
			editTrixCCNames();
			playerNumber = 0;
			allitemsToSelect.forEach((item, index) => {
				if (index < 3) {
					Array.from(item.children).forEach((child) => {
						child.remove();
					});
				}
				item.classList.remove('no-clicking');
				createAllOptionsCC(index);
			});
			counterForNumberOfPClicked = 0;

			if (counterForNumberOFLabelSelectedInCC == 4) {
				allitemsToSelect.forEach((item, index) => {
					if (index < 3) {
						let x = item.lastElementChild;
						item.innerHTML = '';
						item.appendChild(x);
					} else {
						if (divKtrue.classList.contains('clicked')) divKtrue.remove();
						else divKfalse.remove();
					}
				});
			} else if (counterForNumberOFLabelSelectedInCC > 4) {
				counterForNumberOFLabelSelectedInCC = 1;
				playerNumber = 0;
				allitemsToSelect.forEach((item) => {
					Array.from(item.children).forEach((child) => {
						child.remove();
					});
				});
				overlayCC.style.display = 'grid';
				if (trixCCBool == true && ccBool == true) {
					trixCCBool = false;
					ccBool = false;
					allTrixCCLabel.forEach((label) => {
						label.classList.remove('clicked', 'no-clicking');
					});
					playerCount++;
					editTrixCCNames();
					document.querySelector('.CC_select-game-type p span').innerHTML = nameArr[playerCount - 1];
					checkEndGameTrixCC();
					overlayCC.style.display = 'grid';

					gameType = {
						دينار: 13,
						لطش: 13,
						بنات: 4,
						شيخ: 1,
						تركس: 4
					};
				}
			}
		} else if (labelSelectedTrixOrCC == 'تركس') {
			counterForNumberOfPClicked = 0;
			counterForNumberOFLabelSelectedInCC = 1;

			allitemsToSelect.forEach((item) => {
				Array.from(item.children).forEach((child) => {
					child.remove();
				});
				item.classList.remove('trix', 'no-clicking');
			});
			overlayCC.style.display = 'grid';
			if (trixCCBool == true && ccBool == true) {
				trixCCBool = false;
				ccBool = false;
				allTrixCCLabel.forEach((label) => {
					label.classList.remove('clicked', 'no-clicking');
				});
				playerCount++;
				editTrixCCNames();
				document.querySelector('.CC_select-game-type p span').innerHTML = nameArr[playerCount - 1];
				checkEndGameTrixCC();
				overlayCC.style.display = 'grid';
				gameType = {
					دينار: 13,
					لطش: 13,
					بنات: 4,
					شيخ: 1,
					تركس: 4
				};
			}
		}
	}
});
function checkEndGameTrixCC() {
	if (playerCount > 4) {
		let pElementWinner = document.createElement('div');
		let allLastScoreFinished = [];
		let allLastScoreNameFinished = [];
		allScoreValues.forEach((score) => {
			allLastScoreFinished.push(parseInt(score.innerHTML));
		});
		allLastScoreFinished.sort((a, b) => b - a);

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (allLastScoreFinished[i] == allScoreNameFinish[j].nextElementSibling.innerHTML) {
					allLastScoreNameFinished.push(j);
				}
			}
		}

		pElementWinner.innerHTML = `<p class="winner">مبروك  ${nameArr[
			allLastScoreNameFinished[0]
		]} الفوز بنتيجة ${allLastScoreFinished[0]}</p>
			<div class="after-winner">
			<p>	المرتبة الثانية ${nameArr[allLastScoreNameFinished[1]]} بنتيجة ${allLastScoreFinished[1]}</p>
			<p>	المرتبة الثالثة ${nameArr[allLastScoreNameFinished[2]]} بنتيجة ${allLastScoreFinished[2]}</p>
			<p>	المرتبة الرابعة ${nameArr[allLastScoreNameFinished[3]]} بنتيجة ${allLastScoreFinished[3]}</p>
			</div>
			<div class="game-type">
			<p class="new-game" onclick="resetgame()">ابدأ لعبة جديدة</p>
			`;
		document.querySelector('.overlay-CC .CC_select-game-type').innerHTML = '';
		document.querySelector('.overlay-CC .CC_select-game-type').appendChild(pElementWinner);
	}
}
function stepsToDoAfterClickOnSelection(target, type) {
	counterForNumberOfPClicked++;

	if (type != 'شيخ') {
		allScoreArray[counterForNumberOFLabelSelectedInCC - 1] += parseInt(calcTrixGame(type, target.innerHTML));
		gameType[type] -= parseInt(target.innerHTML);
		target.classList.add('clicked', 'no-clicking');
	} else {
		allScoreArray[counterForNumberOFLabelSelectedInCC - 1] += parseInt(target.dataset.Kval);
		if (target.dataset.Kval == -75) {
			target.classList.add('clicked', 'no-clicking');
		}
	}

	target.parentElement.classList.add('no-clicking');
}
function createKElement(item) {
	item.classList.add('trix');
	divKtrue = document.createElement('p');
	divKfalse = document.createElement('p');
	item.appendChild(divKtrue);
	item.appendChild(divKfalse);
	divKtrue.innerHTML = 'نعم';
	divKtrue.dataset.Kval = -75;
	divKfalse.innerHTML = 'لا';
	divKfalse.dataset.Kval = 0;
	divKtrue.classList.add('animate__animated', 'animate__fadeInUp', 'PforK');
	divKfalse.classList.add('animate__animated', 'animate__fadeInUp', 'PforK');
}
function editTrixCCNames() {
	allPlayersBordName.forEach((playerName, index) => {
		playerName.innerHTML = nameArr[counterForNumberOFLabelSelectedInCC - 1] + '  ' + gameLabel[index];
	});
	allScoreBordName.forEach((playerName, index) => {
		playerName.innerHTML = nameArr[index];
	});
	playerInfoName.innerHTML = nameArr[playerCount - 1];
}
function createAllOptionsCC(index) {
	createOptions(gameLabel[index]);
}

/*  End Trix CC  */
