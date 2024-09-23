let targetWidth = 212.38;
let targetHeight = 209.1;

document.querySelectorAll("img").forEach(a => {
	let widthRatio = targetWidth / a.width;
	let heightRatio = targetHeight / a.height;
	a.width = heightRatio * a.width;
	a.height = 209.1;
});