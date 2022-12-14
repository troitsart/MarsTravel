let $currentElem = document.getElementById('choice-default');
let bufCurrent = '';

function animateChoice(id){

	$selectedElem = document.getElementById(id);

	if ($selectedElem != $currentElem) {

		if (bufCurrent != '') {
			bufCurrent.classList.remove('about-interactive-choice-animate-disappearance');
			$currentElem.classList.remove('about-interactive-choice-animate-appearance');
		}

		else {
			$currentElem.style.opacity = 0;
		}

	    $currentElem.classList.add('about-interactive-choice-animate-disappearance');
	    $selectedElem.classList.add('about-interactive-choice-animate-appearance');

		bufCurrent = $currentElem;
	    $currentElem = $selectedElem;
	}
}