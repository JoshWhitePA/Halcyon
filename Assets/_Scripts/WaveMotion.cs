﻿using UnityEngine;
using System.Collections;

public class WaveMotion : MonoBehaviour {
	public Camera cam;
	public float min=2f;
	public float max=3f;
	public bool moveLeft;
	public float waveSpeed;
	// Use this for initialization
	void Start () {
		if (cam == null){
			cam = Camera.main;
		}
		min=transform.position.x;
		max=transform.position.x+3;
		if (waveSpeed == null) {
			waveSpeed = .5f;
		}
	}
	
	// Update is called once per frame
	void Update () {
		if (moveLeft) {
			transform.position = new Vector3 (Mathf.PingPong (Time.time * waveSpeed, max - min) + min, transform.position.y, transform.position.z);
		} else {
			transform.position = new Vector3 (Mathf.PingPong (Time.time * waveSpeed, min + max) - min, transform.position.y, transform.position.z);

		}
	}
}
