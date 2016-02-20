using UnityEngine;
using System.Collections;

public class WaveMovement : MonoBehaviour {
	public Camera cam;
	// Use this for initialization
	void Start () {
		if (cam == null){
			cam = Camera.main;
		}
	}
	
	// Update is called once per frame
	void Update () {
//		Vector2 v2  = new Vector2(Screen.width/2,);
//
//		DebugConsole.Log(v2.x.ToString(),"red");
//		Vector2 targetPos = new Vector2 (v3.x,0.0f);
//		GetComponent<Rigidbody2D>().MovePosition (targetPos);
	}
}
