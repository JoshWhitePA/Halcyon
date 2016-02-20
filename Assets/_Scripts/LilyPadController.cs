using UnityEngine;
using System.Collections;

public class LilyPadController : MonoBehaviour {
	int emotion = 20;
	int angleODangle;
	private bool odd = true;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		rocking (5);
	}
	void rocking(int emotion){
		angleODangle = (int)Mathf.PingPong (Time.time, emotion);
		if (odd) {
			transform.Rotate (Vector3.right * -angleODangle);
		} else {
			transform.Rotate (Vector3.left * angleODangle);
		}

			setOdd (!getOdd());
		
		DebugConsole.Log(angleODangle.ToString(),"red");
		DebugConsole.Log(getOdd().ToString(),"blue");


	}


	public void setOdd(bool val){
		odd = val;
	}
	public bool getOdd(){
		return odd;
	}

}
