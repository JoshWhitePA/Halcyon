using UnityEngine;
using System.Collections;

public class EatSound : MonoBehaviour {
	public Animator anikant;
	AudioSource audio;

	void Start () {
		audio = GetComponent<AudioSource> ();
	}

		



	void Update () {
		if (anikant.GetInteger ("Emotion") == 3 &&  !audio.isPlaying) {
			Debug.Log ("in there");
			audio.Play ();
		}

	}
	// Use this for initialization
//	public void playNoise(){
//		if (anikant.GetInteger ("Emotion") == 3) {
//			this.GetComponent<AudioSource>().Play();
//		}
//
//
//	}
}
