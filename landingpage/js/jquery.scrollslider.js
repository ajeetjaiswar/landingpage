var scroll = document.getElementById("scroll-range");

scroll.oninput = function () {
	var panel = document.getElementById("scrolling-container");
	
	var total = panel.scrollWidth - panel.offsetWidth;
	var percentage = total*(this.value/100);
	
	console.log(total);
	panel.scrollLeft = percentage;
	//console.log(percentage);
}

// image
var scrollImage = document.getElementById("scroll-range-image");

scrollImage.oninput = function () {
	var panelImage = document.getElementById("scrolling-container-image");
	
	var totalImage = panelImage.scrollWidth - panelImage.offsetWidth;
	var percentageImage = totalImage*(this.value/100);
	
	console.log(totalImage);
	panelImage.scrollLeft = percentageImage;
	//console.log(percentage);
}
