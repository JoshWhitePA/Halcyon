 var ballA: Transform; // drag sphereA here
 var ballB: Transform; // drag sphereB here
 var scale0: Vector3; // initial localScale

 var myAnimator : Animator;
// 
 var IntEmotion = null;


// Use this for initialization
 function Start()
 {
   
//   myAnimator = GameObject.FindGameObjectWithTag("DaFrog").GetComponent(Animator);
//IntEmotion = myAnimator.GetInteger("Emotion");
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
   IntEmotion = myAnimator.GetInteger("Emotion");
   Debug.Log("Emotion: " + IntEmotion);
   TongueOut(IntEmotion);
 }

 function TongueOut(x : int){
    if (x == 3)
   {GetComponent.<Renderer>().enabled = true;}
   else
   {GetComponent.<Renderer>().enabled = false;}

 }

 /*
 //Emotional States
 0 = ConcernedFrog
 1 = SadFrog
 2 = HappyFrog
 3 = OmNomNom
 */
 /*Sample code


   Animator animator;
    
    // Use this for initialization
    void Start () {
        animator = GetComponent<Animator>();
    }
    
    // Update is called once per frame
    void Update () {
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");
        bool fire = Input.GetButtonDown("Fire1");

        animator.SetFloat("Forward",v);
        animator.SetFloat("Strafe",h);
        animator.SetBool("Fire", fire);
    }

    void OnCollisionEnter(Collision col) {
        if (col.gameObject.CompareTag("Enemy"))
        {
            animator.SetTrigger("Die");
        }
    }
 */