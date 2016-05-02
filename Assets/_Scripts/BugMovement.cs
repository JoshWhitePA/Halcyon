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
	public bool catchAnim;
	public Vector3 flyLocOrigin;
	Vector3 tmpF;
	AudioSource audio;

	private float x;
	private float z;
	private float y;
	private float tiempo;
	private float angulo;
	//
	public Transform target = GameObject.FindGameObjectWithTag("DaFrog").transform;
	public float speed;
	//

	// Use this for initialization
	void Start () {
		score = 0;
		tmpF = new Vector3 (this.transform.position.x,this.transform.position.y+1,this.transform.position.z);
		catchAnim = false;
		y = Random.Range(-velocidadMax, velocidadMax);
		x = Random.Range(-velocidadMax, velocidadMax);
		z = Random.Range(-velocidadMax, velocidadMax);
		angulo = Mathf.Atan2(x, z) * (180 / 3.141592f) + 90;

		//transform.localRotation = Quaternion.Euler( 0, angulo, 0);
	}

	// Update is called once per frame

	void Update ()
	{
		if (!catchAnim) {
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
			flyLocOrigin = new  Vector3 (transform.localPosition.x + x, transform.localPosition.y, -5);
		} else {
			speed = 3;
			//			this.GetComponent<AudioSource>().Play();
			moveFlyToFrog();
			//			AudioSource audio = GetComponent<AudioSource>();
			//			audio.Play();
			//			audio.Play(44100);
		}
		GameObject.Find ("GUIScore").GetComponent<GUIText> ().text = "Score: " + score.ToString ();
	}

	void moveFlyToFrog(){
		float step = speed * Time.deltaTime;
		Vector3 tmpF = new Vector3 (this.transform.position.x,this.transform.position.y+1,this.transform.position.z);

		transform.position = Vector3.MoveTowards(this.transform.position, frogLoc, step);
		if (transform.position == Vector3.MoveTowards(this.transform.position, frogLoc, step)){
			this.gameObject.SetActive(false);
			catchAnim = false;
			transform.position = new Vector3 (flyLocOrigin.x,flyLocOrigin.y,flyLocOrigin.z);
			this.gameObject.SetActive(true);
			score++;
		}
	}


}