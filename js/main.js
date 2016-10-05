var FibonaccMe = (function() {
	var flag = true,
		firstRun = true,
		count = 0,
		limit = 12,
		initial = 1,
		firstOperator,
		secondOperator,
		$ul = $('.buttonContainer').find('ul'),
		liArr = [],
		self;

	return {
		start: function start() {
			self = (!self) ? this: self;
			while(count < limit) {
				var result;
				if (firstRun) {
					console.log('first run');
					firstOperator = 0;
					secondOperator = initial;
				}
				if(!flag) {
					console.log('second run');
					firstOperator = initial;
					secondOperator = initial;
				}
				result = firstOperator + secondOperator;
				console.log('result: ', result);
				firstOperator = secondOperator;
				secondOperator = result;
				flag = true;
				firstRun = false;
				colors = self.newRGB();
				
				count++;
				
				liArr.push("<li style='order: " + count + "; position: relative;'><button class='keyword' style='background-color: rgba(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ", 1);' data-popularityindex=" + count + "><p class='keyword'>" + result + "</p><div class='arrow-left'></div><div class='rightSide'><p class='popularityNumber'>" + count + "</p></div></button></li>");
			}
			if (liArr.length) {
				self.insertKeywords();
			} else {
				console.log("no liArr.length", liArr);
			}
		},
		newRGB: function newRGB() {
			var min = 0,
				max = 255,
				colorArr = [],
				r, g, b,
				rando = function() {
					return Math.floor(Math.random() * (max - min + 1)) + min;
				};
			
			if (!r) {
				r = rando();
				colorArr.push(r);
			}
			if (!g) {
				g = rando();
				colorArr.push(g);
			}
			if (!b) {
				b = rando();
				colorArr.push(b);
			}
			if (colorArr.length === 3) {
				console.log('colorArr: ', colorArr);
				return colorArr;
			}
		},
		insertKeywords: function insertKeywords() {
			var min = 0,
				max = liArr.length;
			
			if (max) {
				$ul.empty().append(liArr.join(''));
				
				$('#clickme').off('click').on('click', function(e) {
					e.stopPropagation();
					e.preventDefault();
					var firstRandom = Math.floor(Math.random() * (max - min + 1)) + min,
						secondRandom = Math.floor(Math.random() * (max - min + 1)) + min,
						$firstPick = $ul.find('li:nth-child(' + firstRandom + ')'),
						$secondPick = $ul.find('li:nth-child(' + secondRandom + ')'),
						firstOffset = $firstPick.offset(),
						firstTop = parseInt(firstOffset.top, 10),
						firstLeft = parseInt(firstOffset.left, 10),
						secondOffset = $secondPick.offset(),
						secondTop = parseInt(secondOffset.top, 10),
						secondLeft = parseInt(secondOffset.left, 10),
						topDiff = (firstTop > secondTop) ? (firstTop - secondTop) * -1: firstTop - secondTop,
						leftDiff = (firstLeft > secondLeft) ? (firstLeft - secondLeft) * -1: firstLeft - secondLeft;
					
					$firstPick.css({
						'transform': 'translate3d(' + (leftDiff * -1) + 'px, ' + (topDiff * -1) + 'px, 0)',
						'position': 'absolute'
					});
					$secondPick.css({
						'transform': 'translate3d(' + leftDiff + 'px, ' + topDiff + 'px, 0)',
						'position': 'absolute'
					});
				});
				
				liArr = [];
			}
		}
	}
})();

FibonaccMe.start();