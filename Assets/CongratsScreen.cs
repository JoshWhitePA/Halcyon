using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class CongratsScreen : MonoBehaviour {

	private int score;
	public GameObject congrats;
	public GameObject sorry;
	// Use this for initialization
	void Start () {
		congrats.SetActive (true);
		score = PlayerPrefs.GetInt ("score");
		Debug.Log ("score" + score);
		if (score > 0) {
			congrats.SetActive (true);
			sorry.SetActive (false);
		} else {
			sorry.SetActive (true);
			congrats.SetActive (false);
		}

	
	}
	
	// Update is called once per frame
	void Update () {

		
//		if(Input.GetMouseButton(0))
//			SceneManager.LoadScene("Main");
		if (Input.GetMouseButton (0)) {
			PlayerPrefs.SetInt ("score",0);
			SceneManager.LoadScene ("Calibration");
		}
	}
}
