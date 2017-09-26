$(function(){
	window.addEventListener("orientationchange",onOrientationchange ,false);
	function onOrientationchange() {
		if (window.orientation === 180 || window.orientation === 0) {
			/*orientation: portrait 直式*/
			$("#orientation").hide();
		}
		if (window.orientation === 90 || window.orientation === -90 ){
			/*orientation: landscape 橫式*/
			$("#orientation").show();
		}
	}
})