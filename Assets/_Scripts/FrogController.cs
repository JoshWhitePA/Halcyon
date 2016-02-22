using UnityEngine;
using System.Collections;

public class FrogController : MonoBehaviour {
		public Camera cam;
		public float maxWidth;

		public Sprite[] emotionSprites;

		void Awake()
		{
			// load all frames in fruitsSprites array
			emotionSprites = Resources.LoadAll<Sprite>("Frog-Sprite");
		}

		// Use this for initialization
		void Start () {
			if (cam == null){
				cam = Camera.main;
			}
			// create the object
			GameObject frog = new GameObject();
			// add a "SpriteRenderer" component to the newly created object
			frog.AddComponent<SpriteRenderer>();
				// assign "fruit_9" sprite to it
			frog.GetComponent<SpriteRenderer>().sprite = emotionSprites[0];
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

	}
