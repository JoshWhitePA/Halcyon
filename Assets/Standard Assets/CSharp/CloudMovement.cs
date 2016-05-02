using UnityEngine;
using System.Collections;

public class CloudMovement : MonoBehaviour {
	public float startY;
	public float startX;
	private Vector3 camCenter;
	public bool rollIn;
	private Camera cam;
	public bool isCloudToRight;
	public Animator anikin;
	// Use this for initialization
	void Start () {
		if (cam == null){
			cam = Camera.main;
		}
		startX = this.transform.position.x;
		startY = this.transform.position.y;
		camCenter.z = 10;
		camCenter = cam.ScreenToWorldPoint (camCenter);

	}
	
	// Update is called once per frame
	void Update () {
		if (anikin.GetInteger ("Emotion") == 1) {
			rollIn = true;
		} else {
			rollIn = false;
		}
		Vector3 v3  = Input.mousePosition;
					v3.z = 10;
					v3 = cam.ScreenToWorldPoint (v3);
//					DebugConsole.Log("MouseLocation: "+v3.x.ToString(),"green");
		rollingClouds ();
	}

	void rollingClouds(){
		if (rollIn) {
			transform.position = new Vector3 (moveToLoc(),
				startY,
				this.transform.position.z);
		} else {
			transform.position = new Vector3 (startX,
				startY,
				this.transform.position.z);
		}
	}
	float moveToLoc(){
		float currentPosX = 0;
		float maxX;

		switch(isCloudToRight){
			case true:
				maxX = calcMaxX();
				if (rollIn) {
					if (this.transform.position.x <= maxX) {
						currentPosX = this.transform.position.x + .1f;
					} else {
						currentPosX = this.transform.position.x;
					}
//					DebugConsole.Log("Right-rollin: currentPosX: "+currentPosX,"red");
				} else {
					if (this.transform.position.x >= startX) {
						currentPosX -= this.transform.position.x - .1f;
					} else {
						currentPosX = this.transform.position.x;
					}
//				DebugConsole.Log("Right-Rollout: currentPosX: "+currentPosX,"red");
				}
				break;
			case false:
				maxX = calcMaxX();
				if (rollIn) {
					if (this.transform.position.x >= maxX) {
						currentPosX = this.transform.position.x - .1f;
					} else {
						currentPosX = this.transform.position.x;
					}
//					DebugConsole.Log("Left-rollin: currentPosX: "+currentPosX,"green");
				} else {
					if (this.transform.position.x <= startX) {
						currentPosX -= this.transform.position.x + .1f;
					} else {
						currentPosX = this.transform.position.x;
					}
//					DebugConsole.Log("Left-Rollout:currentPosX: "+currentPosX,"green");
				}
				break;
		}
		return currentPosX;
	}

	float calcMaxX(){
		float codeNameX;
		codeNameX = (startX/3) ;
		return codeNameX;
	}



}
