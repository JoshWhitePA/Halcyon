using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class TutorialTracker : MonoBehaviour {
	public GameObject tut0;
	public GameObject tut1;
	public GameObject tut2;
	public GameObject tut3;
	public GameObject tut4;
	private bool buttonFlag;

	int counter = 0;
	// Use this for initialization
	void Start () {
		if(!PlayerPrefs.HasKey("clickCount")){
			PlayerPrefs.SetInt ("clickCount",0);
		}
		buttonFlag = false;
	}
	
	// Update is called once per frame
	void Update () {
		switch(PlayerPrefs.GetInt ("clickCount")){
			case 0:
				tut0.SetActive (true);
				tut1.SetActive (false);
				tut2.SetActive (false);
				tut3.SetActive (false);
				tut4.SetActive (false);
				break;
			case 1:
				tut0.SetActive (false);
				tut1.SetActive (true);
				tut2.SetActive (false);
				tut3.SetActive (false);
				tut4.SetActive (false);
				break;
			case 2:
				tut0.SetActive (false);
				tut1.SetActive (false);
				tut2.SetActive (true);
				tut3.SetActive (false);
				tut4.SetActive (false);
				break;
			case 3:
				tut0.SetActive (false);
				tut1.SetActive (false);
				tut2.SetActive (false);
				tut3.SetActive (true);
				tut4.SetActive (false);
				break;
			case 4:
				tut0.SetActive (false);
				tut1.SetActive (false);
				tut2.SetActive (false);
				tut3.SetActive (false);
				tut4.SetActive (true);
				break;
		case 5:
			PlayerPrefs.DeleteKey ("clickCount");
			SceneManager.LoadScene("Loading");
			break;
		}

		if (Input.GetMouseButtonDown(0) && buttonFlag == false) {
			Debug.Log (PlayerPrefs.GetInt ("clickCount"));
			PlayerPrefs.SetInt ("clickCount", PlayerPrefs.GetInt ("clickCount")+1);
			buttonFlag = true;
		}
		if(Input.GetMouseButtonUp(0) && buttonFlag == true){
			buttonFlag = false;
		}


	}
	void OnMouseUp() {

	}


}
