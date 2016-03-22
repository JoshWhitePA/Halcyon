﻿ var ballA: Transform; // drag sphereA here
 var ballB: Transform; // drag sphereB here
 var scale0: Vector3; // initial localScale
 

// Use this for initialization
 function Start()
 {
   scale0 = transform.localScale;
 }
// Update is called once per frame
 function Update()
 {
   var pA = ballA.position;
   var pB = ballB.position;
   transform.position = (pA+pB)/2; // place the cube in the middle of A-B
   transform.LookAt(pB); // make it look to ballB position
   // adjust cube length so it will have its ends at the sphere centers
   var scale = scale0;
   scale.z = scale0.z * Vector3.Distance(pA, pB);
  // stretch it in the direction it's looking
   transform.localScale = scale;

 }
