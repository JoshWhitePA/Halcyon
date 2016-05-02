using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
public class SpashTimer : MonoBehaviour {
	public float timeLeft = 10.0f;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		timeLeft -= Time.deltaTime;
		if(timeLeft < 0){
			SceneManager.LoadScene("Calibration");
		}
	}
}
