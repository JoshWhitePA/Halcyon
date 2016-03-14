using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class Tongue : MonoBehaviour {
	public Vector3 frogPos;
	public Vector3 toungeOrigin;
	public Vector3 fly;
	public float tBottom;
	float tz;
	// Use this for initialization
	void Start () {
		frogPos = GameObject.Find("Frog-Happy").transform.position;
		toungeOrigin = GameObject.Find("Tonge").transform.position;
		fly = GameObject.Find("bug").transform.position;
		tz = toungeOrigin.z;
	}


	void Update ()
	{
		frogPos = GameObject.Find("Frog-Happy").transform.position;
		toungeOrigin = GameObject.Find("Tonge").transform.position;
		fly = GameObject.Find("bug").transform.position;
		//get current size of the fishing rod
		var rodLength = System.Math.Abs(2); 
		//Get distance between the hook and the rod based on y coordinates.
		float hookRodDistance = fly.y - transform.position.y;

		//Calculate the scale factor
		float scaleFactor = hookRodDistance / rodLength;
		//Scale  the rod        
		transform.localScale = new Vector3(transform.localScale.x, scaleFactor * transform.localScale.y, transform.localScale.z );




		if(Input.GetMouseButton(0))
		{
//			transform.localScale = new Vector3(transform.localScale.x, transform.localScale.y+1, transform.localScale.z );

		}
//		transform.position = new Vector3 (transform.position.x,  frogPos.y * (transform.localScale.y/2) , tz );
//		DebugConsole.Log(transform.position.y.ToString(),"Red");
//		//if mouse button is held clicked and line exists


	}

	//method to create line

}
