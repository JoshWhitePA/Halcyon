using UnityEngine;
using System.Collections;
//[RequireComponent(typeof(AudioSource))]
public class BugMovement : MonoBehaviour {
	public float velocidadMax;
	public int score;
	public Vector3 frogLoc = GameObject.FindGameObjectWithTag("DaFrog").transform.position;
	public float xMax;
	public float zMax;
	public float xMin;
	public float zMin;
	public float yMin;
	public float yMax;
	public MeshRenderer tongue;
	public bool catchAnim;
	public SpriteRenderer flySprite;
	public Vector3 flyLocOrigin;
	Vector3 tmpF;
	AudioSource audio;
	public bool snagged;
	public GameObject frogBog;
	Animator otherAnim;
	int emotionCheck;

	private float x;
	private float z;
	private float y;
	private float tiempo;
	private float angulo;
	//
	public Transform target = GameObject.FindGameObjectWithTag("DaFrog").transform;
	public float speed;
	public Transform ballB;
	public Transform flyT;
	//

	// Use this for initialization
	void Start () {
		snagged = false;
		
		score = 0;
		tmpF = new Vector3 (this.transform.position.x,this.transform.position.y+1,this.transform.position.z);
		catchAnim = false;
		y = Random.Range(-velocidadMax, velocidadMax);
		x = Random.Range(-velocidadMax, velocidadMax);
		z = Random.Range(-velocidadMax, velocidadMax);
		angulo = Mathf.Atan2(x, z) * (180 / 3.141592f) + 90;
		frogBog =  GameObject.FindGameObjectWithTag("DaFrog");
		otherAnim = frogBog.GetComponent<Animator>();
		emotionCheck = otherAnim.GetInteger("Emotion");
		//transform.localRotation = Quaternion.Euler( 0, angulo, 0);
	}

	// Update is called once per frame

	void Update ()
	{
		//check Emotion
		//print ("Inside Bug Update");
		otherAnim = frogBog.GetComponent<Animator>();
		emotionCheck = otherAnim.GetInteger("Emotion");
		//Debug.Log("Emotion: "+  emotionCheck);
		//Debug.Log("catchAnim: "+ catchAnim);
		//emotionCheck = anim.GetInteger("Emotion"); //this causes the fly to stop moving.
		if (emotionCheck == 3) 
		{
			catchAnim = true;
		}			
		if (!catchAnim) {
			tongue.enabled = false;
			tiempo += Time.deltaTime;

			if (transform.localPosition.x > xMax) {
				y = Random.Range (-velocidadMax, 0.0f);
				x = Random.Range (-velocidadMax, 0.0f);
				angulo = Mathf.Atan2 (x, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0);
				tiempo = 0.0f; 
			}
			if (transform.localPosition.x < xMin) {
				y = Random.Range (0.0f, velocidadMax);
				x = Random.Range (0.0f, velocidadMax);
				angulo = Mathf.Atan2 (x, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0); 
				tiempo = 0.0f; 
			}
			/*if (transform.localPosition.y < yMin) {
				y = Random.Range (0.0f, velocidadMax);
				x = Random.Range (0.0f, velocidadMax);
				angulo = Mathf.Atan2 (y, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0); 
				tiempo = 0.0f; 
			}
			if (transform.localPosition.y > yMax) {
				y = Random.Range (0.0f, velocidadMax);
				x = Random.Range (0.0f, velocidadMax);
				angulo = Mathf.Atan2 (y, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0); 
				tiempo = 0.0f; 
			}*/
			if (transform.localPosition.z > zMax) {
				z = Random.Range (-velocidadMax, 0.0f);
				angulo = Mathf.Atan2 (x, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0); 
				tiempo = 0.0f; 
			}
			if (transform.localPosition.z < zMin) {
				z = Random.Range (0.0f, velocidadMax);
				angulo = Mathf.Atan2 (x, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0);
				tiempo = 0.0f; 
			}


			if (tiempo > 1.0f) {
				y = Random.Range (-velocidadMax, velocidadMax);
				x = Random.Range (-velocidadMax, velocidadMax);
				z = Random.Range (-velocidadMax, velocidadMax);
				angulo = Mathf.Atan2 (x, z) * (180 / 3.141592f) + 90;
				//transform.localRotation = Quaternion.Euler (0, angulo, 0);
				tiempo = 0.0f;
			}

			transform.localPosition = new Vector3 (transform.localPosition.x + x, transform.localPosition.y, -5);
			flyLocOrigin = new  Vector3 (transform.localPosition.x + x, transform.localPosition.y + y, -5);
		} else {
			
			moveFlyToFrog();
		}
		GameObject.Find ("GUIScore").GetComponent<GUIText> ().text = "Score: " + score.ToString ();
		PlayerPrefs.SetInt("score", score);
	}

	void moveFlyToFrog(){
		tongue.enabled = true;
		if (snagged) {//change

			float step = speed * Time.deltaTime;
//			Vector3 tmpF = new Vector3 (this.transform.position.x, this.transform.position.y + 1, this.transform.position.z);
			ballB.position = new Vector3 (flyT.position.x, flyT.position.y, flyT.position.z);
			transform.position = Vector3.MoveTowards (this.transform.position, frogLoc, step);

			if (transform.position.y < frogLoc.y +1.5) {
				
				flySprite.enabled = false;
			}
			if (transform.position == Vector3.MoveTowards (this.transform.position, frogLoc, step)) {
				
				catchAnim = false;
				transform.position = new Vector3 (flyLocOrigin.x, flyLocOrigin.y, flyLocOrigin.z);
				this.gameObject.SetActive (true);
				flySprite.enabled = true;
				score++;
			}
		} else {
			moveTongueToFly ();
		}


	}

	void moveTongueToFly(){
		snagged = true;
	}


}