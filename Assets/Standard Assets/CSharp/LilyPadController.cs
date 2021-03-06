﻿using UnityEngine;
using System.Collections;
using System;

public class LilyPadController : MonoBehaviour {
	float originalY;

	public float floatStrength = 1; // You can change this in the Unity Editor to 

	void Start()
	{
		this.originalY = this.transform.position.y;
	}

	void Update()
	{
		transform.position = new Vector3(transform.position.x,
			originalY + ((float)Math.Sin(Time.time) * floatStrength),
			transform.position.z);
	}
		

}
