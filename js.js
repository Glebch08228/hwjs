var divs = document.getElementsByTagName('div');
		function makeRed() {
			this.style.backgroundColor = 'red';
			this.removeEventListener('click', makeRed);
			this.addEventListener('click', makeGreen);
		}	
		function makeGreen() {
			this.style.backgroundColor = 'green';
			this.removeEventListener('click', makeGreen);
			this.addEventListener('click', makeRed);
		}
		for (var i = 0; i < divs.length; i++) {
			divs[i].addEventListener('click', makeRed);
		}