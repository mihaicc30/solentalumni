// const root = document.documentElement;
// var bgposY = -450;
// var bgposX = 50;
// let WW = window.innerWidth > 1000;
// let operation = "sub";

// onresize = (event) => {
//     bgposY = 0;
//     bgposX = 0;
// 	WW = window.innerWidth > 1000;
// };

// setInterval(() => {
// 	if (WW) {
// 		switch (operation) {
// 			case "sub":
// 				root.style.setProperty("--bgposY", (bgposY -= 25));
// 				root.style.setProperty("--bgposX", 50);
// 				if (bgposY < -700) {
// 					operation = "add";
// 				}
// 				break;

// 			case "add":
// 				root.style.setProperty("--bgposY", (bgposY += 25));
// 				root.style.setProperty("--bgposX", 50);
// 				if (bgposY > -150) {
// 					operation = "sub";
// 				}
// 				break;
// 		}
// 	} else {
// 		switch (operation) {
// 			case "sub":
// 				root.style.setProperty("--bgposX", (bgposX -= 5));
// 				root.style.setProperty("--bgposY", 0);
// 				if (bgposX < 15) {
// 					operation = "add";
// 				}
// 				break;

// 			case "add":
// 				root.style.setProperty("--bgposX", (bgposX += 5));
// 				root.style.setProperty("--bgposY", 0);
// 				if (bgposX > 75) {
// 					operation = "sub";
// 				}
// 				break;
//             default:
                
// 		}
// 	}
// }, 500);
