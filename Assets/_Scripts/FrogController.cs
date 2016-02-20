using UnityEngine;
using System.Collections;

public class FrogController : MonoBehaviour {
		public Camera cam;
		public float maxWidth;
		// Use this for initialization
		void Start () {
			if (cam == null){
				cam = Camera.main;
			}
//			Vector3 upperCorner = new Vector3 (Screen.width,Screen.height,0.0f);
//			Vector3 targetWidth = cam.ScreenToWorldPoint(upperCorner);
//			maxWidth = targetWidth.x;
		}

		// Update is called once per frame
		void FixedUpdate () {
//			Vector3 v3  = Input.mousePosition;
//			v3.z = 10;
//			v3 = cam.ScreenToWorldPoint (v3);
//			DebugConsole.Log(v3.x.ToString(),"red");
//			Vector2 targetPos = new Vector2 (v3.x,0.0f);
//			GetComponent<Rigidbody2D>().MovePosition (targetPos); 
		}

//	public Vector2 CenterFromFrog(){
//
//
//	}
	}
