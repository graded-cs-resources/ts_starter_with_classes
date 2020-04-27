/** runs as soon as the assets are available */

import { Box } from "./classes/Box.js";

let boxes: Box[] = [];

let clickBtn = <HTMLButtonElement>document.getElementById("click_here");
clickBtn.onclick = makeNewBox;

function makeNewBox() {
  boxes.push(new Box());
}