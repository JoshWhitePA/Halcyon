using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;
public class LoadingTimer : MonoBehaviour {
	public float timeLeft = 15.0f;
	// Use this for initialization
	void Start () {
		timeLeft = 15.0f;
	}
	
	// Update is called once per frame
	void Update () {
		timeLeft -= Time.deltaTime;
		if(timeLeft < 0){
			SceneManager.LoadScene("Main");
		}
	}
}
