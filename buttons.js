function engButtons (canvas,ctx) {
	document.getElementById('letterButtons').innerHTML = '<input type="submit" value="?" class="button" onclick="instruct();"><input type="submit" value="A" class="button" onclick="drawEngA(canvas,ctx);"><input type="submit" value="E" class="button" onclick="drawEngE(canvas,ctx);"><input type="submit" value="F" class="button" onclick="drawEngF(canvas,ctx);"><input type="submit" value="H" class="button" onclick="drawEngH(canvas,ctx);"><input type="submit" value="K" class="button" onclick="drawEngK(canvas,ctx);"><input type="submit" value="L" class="button" onclick="drawEngL(canvas,ctx);">';
	$('[type="submit"]').button();
	$('[type="submit"]').button('refresh');
	drawEngA(canvas,ctx);
}

function tibButtons (canvas,ctx) {
	document.getElementById('letterButtons').innerHTML = '<input type="submit" value="?" class="button" onclick="instruct();"><input type="submit" value="&#3904 Kha" class="button" onclick="drawKah(canvas,ctx);"><input type="submit" value="&#3905 Ka" class="button" onclick="drawKuh(canvas,ctx);"><input type="submit" value="&#3906 Ga" class="button" onclick="drawGa(canvas,ctx);"><input type="submit" value="&#3908 Nga" class="button" onclick="drawNgu(canvas,ctx);"><input type="submit" value="&#3909 Cha" class="button" onclick="drawCha(canvas,ctx);"><input type="submit" value="&#3921 Tha" class="button" onclick="drawTha(canvas,ctx);">';
	$('[type="submit"]').button();
	$('[type="submit"]').button('refresh');
	drawKah(canvas,ctx);
}

function hebButtons (canvas,ctx) {
	document.getElementById('letterButtons').innerHTML = '<input type="submit" value="?" class="button" onclick="instruct();"><input type="submit" value="&#1488" class="button" onclick="drawAlef(canvas,ctx);"><input type="submit" value="&#64305" class="button" onclick="drawBet(canvas,ctx);"><input type="submit" value="&#1490" class="button" onclick="drawGimmel(canvas,ctx);"><input type="submit" value="&#1491" class="button" onclick="drawDalet(canvas,ctx);"><input type="submit" value="&#1492" class="button" onclick="drawHay(canvas,ctx);"><input type="submit" value="&#1504" class="button" onclick="drawNun(canvas,ctx);">';
	$('[type="submit"]').button();
	$('[type="submit"]').button('refresh');
	drawAlef(canvas,ctx);
}