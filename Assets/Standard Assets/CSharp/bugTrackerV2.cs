using UnityEngine;
using System.Collections;

public class bugTrackerV2 : MonoBehaviour {
	public Transform ballB; // drag sphereB here
	public Transform bug; //drag bug here
	public Transform frog;
	BugMovement bm;
	// Use this for initialization
	void Start () {
//		bm = new BugMovement();
	}

	// Update is called once per frame
	void Update () {
//		transform.position = new Vector3 (frog.position.x, frog.position.y, frog.position.z);//works
//		ballB.transform.position = bug.position;
//		Debug.Log("CatchAnim"+bm.catchAnim);
//		Debug.Log("snagged"+bm.snagged);
//		if (bm.catchAnim && !bm.snagged){
//
//			float step = bm.speed * Time.deltaTime;
////			Vector3 tmpF = new Vector3 (this.transform.position.x,this.transform.position.y+1,this.transform.position.z);
//
//			ballB.position = Vector3.MoveTowards(ballB.transform.position, bug.transform.position, step);
//			Debug.Log ("Stuff:"+Vector3.MoveTowards(ballB.transform.position, bug.transform.position, step));
//			if (ballB.transform.position == Vector3.MoveTowards(ballB.transform.position, bug.transform.position, step)){
//				bm.snagged = true;
//			}
//		}
//		ballB.transform.position = frog.transform.position;
//		ballB.transform.position = bug.position;
	}
}
