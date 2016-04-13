using UnityEngine;
using System.Collections;
using System;
public class Timer : MonoBehaviour {
	public float timeLeft = 120.0f;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		GameObject.Find("GUITimer").GetComponent<GUIText>().text = "Time: " + Math.Round(timeLeft,0).ToString();
		timeLeft -= Time.deltaTime;
		if(timeLeft < 0)
		{
			
		}
	}
}
