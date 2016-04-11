using UnityEngine;
using System.Collections;

public class EatSound : MonoBehaviour {


	// Use this for initialization
	public void playNoise(){
		this.GetComponent<AudioSource>().Play();
	}
}
