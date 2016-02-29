using UnityEngine;
using System.Collections;

public class BugMovement : MonoBehaviour {
	public float velocidadMax;

	public float xMax;
	public float zMax;
	public float xMin;
	public float zMin;
	public float yMin;
	public float yMax;


	private float x;
	private float z;
	private float y;
	private float tiempo;
	private float angulo;

	// Use this for initialization
	void Start () {

		y = Random.Range(-velocidadMax, velocidadMax);
		x = Random.Range(-velocidadMax, velocidadMax);
		z = Random.Range(-velocidadMax, velocidadMax);
		angulo = Mathf.Atan2(x, z) * (180 / 3.141592f) + 90;
		//transform.localRotation = Quaternion.Euler( 0, angulo, 0);
	}

	// Update is called once per frame
	void Update ()
	{

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

		transform.localPosition = new Vector3 (transform.localPosition.x + x, transform.localPosition.y, 0);
	}
}