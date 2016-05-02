#pragma strict
var ballA: Transform; // drag sphereA here
var bug: Transform; //drag bug here

function Start () {

}

function Update () {
	
//make the ball target = to the bug position
 
  ballA.transform.position = bug.position;
  //ballA.transform



}