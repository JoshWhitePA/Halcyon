
public var RemoteIP : String = "127.0.0.1"; //127.0.0.1 signifies a local host (if testing locally
public var SendToPort : int = 9000; //the port you will be sending from
public var ListenerPort : int = 8000; //the port you will be listening on
public var controller : Transform;
public var gameReceiver = "Frog"; //the tag of the object on stage that you want to manipulate
private var handler : Osc;
public var isFocused = false;
public var isCalm = false;
public var jawClench = false;
var animConnector : Animator; 
public var displayFocusString = "init";
public var displayCalmString = "init";
public var Emotion = 0;
public var sensor01 : int;
public var sensor02 : int;
public var sensor04 : int;
public var sensor05 : int;
var myFocusGO : GameObject;
var myCalmGO : GameObject;
//var myGameObject : GameObject; //generic Game object for all calls to update game object
public var focusMeter : String;
public var calmMeter : String;

focusMeter = "Focus10";
calmMeter = "Calm10";

myFocusGO = GameObject.FindGameObjectWithTag(focusMeter);
myCalmGO = GameObject.FindGameObjectWithTag(calmMeter);

//myGameObject = GameObject.FindGameObjectWithTag(focusMeter);


//VARIABLES YOU WANT TO BE ANIMATED
private var yRot : int = 0; //the rotation around the y axis

public function Start ()
{
	//Initializes on start up to listen for messages
	//make sure this game object has both UDPPackIO and OSC script attached

	var udp : UDPPacketIO = GetComponent("UDPPacketIO");
	udp.init(RemoteIP, SendToPort, ListenerPort);
	handler = GetComponent("Osc");
	handler.init(udp);
	handler.SetAllMessageHandler(AllMessageHandler);
	animConnector = GetComponent("Animator");
	//myGameObject = GameObject.FindGameObjectWithTag("Focus10"); //initialize to 10%
	 GameObject.FindGameObjectWithTag("Focus100").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus90").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus80").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus70").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus60").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus50").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus40").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus30").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus20").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Focus10").GetComponent.<SpriteRenderer>().enabled = false;
	 //Erase Calm Meters
	 GameObject.FindGameObjectWithTag("Calm100").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm90").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm80").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm70").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm60").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm50").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm40").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm30").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm20").GetComponent.<SpriteRenderer>().enabled = false;
	 GameObject.FindGameObjectWithTag("Calm10").GetComponent.<SpriteRenderer>().enabled = false; 	 	
	
	focusMeter = "Focus10";
	calmMeter = "Calm10";

	myFocusGO.GetComponent.<SpriteRenderer>().enabled = true;
	myCalmGO.GetComponent.<SpriteRenderer>().enabled = true;
	//myGameObject = GameObject.FindGameObjectWithTag(focusMeter);
	//myGameObject.GetComponent.<SpriteRenderer>().enabled = true;
	//myGameObject = GameObject.FindGameObjectWithTag(calmMeter);
	//myGameObject.GetComponent.<SpriteRenderer>().enabled = true;
	//GameObject.FindGameObjectWithTag(focusMeter).GetComponent.<Renderer>().enabled = true;

}
//Debug.Log("Running");

function Update () {

	//var go = GameObject.Find(gameReceiver);
	//go.transform.Rotate(0, yRot, 0);

//	animConnector.SetBool("Calm", isCalm);
//	animConnector.SetInteger("Emotion", Emotion);
	//animConnector.SetBool("Calm", isCalm);
	animConnector.SetInteger("Emotion", Emotion);
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus100");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus90");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus80");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus70");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus60");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus50");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus40");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus30");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus20");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myFocusGO = GameObject.FindGameObjectWithTag("Focus10");
	 myFocusGO.GetComponent.<SpriteRenderer>().enabled = false;

	 //Erase Calm Meters
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm100");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm90");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm80");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm70");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm60");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm50");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm40");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm30");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm20");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;
	 myCalmGO = GameObject.FindGameObjectWithTag("Calm10");
	 myCalmGO.GetComponent.<SpriteRenderer>().enabled = false;


	//Debug.Log("FocusMeter: " + focusMeter);
	//Debug.Log("CalmMeter: " + calmMeter);
	myFocusGO = GameObject.FindGameObjectWithTag(focusMeter);
	myFocusGO.GetComponent.<SpriteRenderer>().enabled = true;

	myCalmGO = GameObject.FindGameObjectWithTag(calmMeter);
	myCalmGO.GetComponent.<SpriteRenderer>().enabled = true;


}

//These functions are called when messages are received
//Access values via: oscMessage.Values[0], oscMessage.Values[1], etc

public function AllMessageHandler(oscMessage: OscMessage){


	var msgString = Osc.OscMessageToString(oscMessage); //the message and value combined
	var msgAddress = oscMessage.Address; //the message parameters
	var msgValue = oscMessage.Values[0]; //the message value
	//var goEmotion = GameObject.Find("Emotion");
	//Debug.Log(goEmotion); 
	//Debug.Log(msgString); //log the message and values coming from OSC

	//FUNCTIONS YOU WANT CALLED WHEN A SPECIFIC MESSAGE IS RECEIVED
	switch (msgAddress){
		case "/muse/elements/experimental/mellow": 
			//Ranges: 
//			 var lp: LilyPadController = GetComponent(LilyPadController); 
//			 var cm: CloudMovement = GetComponent(CloudMovement);
			  //Sadface = 0.00-0.30
			  //Concern = 0.31 - 0.79
			  //Calm = 0.80 - 1.0
			  displayCalmString = "CALM: " + msgValue;
			  //calmMeter = msgValue.ToFloat();
			  //through testing we saw where the sensor disconnected would read a high value for mellow
			  if (sensor01 == 4 || sensor02 == 4 || sensor04 == 4 || sensor05 == 4)
			  {
				  //set isCalm to false
				  isCalm = false;
				  //set Emotion = 1
				  Emotion = 1;
				  //set calmmeter to 10
				  calmMeter = "Calm10";
			   }
			   else
			   {
				  if (msgValue > 0.00 && msgValue < 0.30)
				  {
	//			  	cm.rollIn = true;
	//			  	lp.floatStrength = 5;
				  	//SADFACE
				  	isCalm = false;
				  	Emotion = 1;
					if (msgValue >= 0.20 && msgValue < 0.30)
					{
						// clearMeter();
						 //GameObject.FindGameObjectWithTag("Focus20").GetComponent.<SpriteRenderer>().enabled = true;
						 calmMeter = "Calm20";
					}
					if (msgValue >= 0.10 && msgValue <= 0.19)
					{
						 //clearMeter();
						 //GameObject.FindGameObjectWithTag("Focus10").GetComponent.<SpriteRenderer>().enabled = true;
						  calmMeter = "Calm10";
					}
				  	//Debug.Log("Sadface: " + msgValue);
				  	//Debug.Log("isCalm " + isCalm);
				  }
				  if(msgValue > 0.31 && msgValue < 0.79)
				  {
	//			  	lp.floatStrength = 3;
				  	Emotion = 0;
				  	//CONCERNFACE
				  	isCalm = false;
				  	//Debug.Log("Concernface: " + msgValue);
				  	//Debug.Log("isCalm " + isCalm);
					if (msgValue >= 0.70 && msgValue <= 0.79)
					{
						// clearMeter();
						 //GameObject.FindGameObjectWithTag("Calm70").GetComponent.<SpriteRenderer>().enabled = true;
						  calmMeter = "Calm70";
					}
					if (msgValue >= 0.60 && msgValue <= 0.69)
					{
						// clearMeter();
						 //GameObject.FindGameObjectWithTag("Calm60").GetComponent.<SpriteRenderer>().enabled = true;
						  calmMeter = "Calm60";
					}
					if (msgValue >= 0.50 && msgValue <= 0.59)
					{
						// clearMeter();
						 //GameObject.FindGameObjectWithTag("Calm50").GetComponent.<SpriteRenderer>().enabled = true;
						  calmMeter = "Calm50";
					}
					if (msgValue >= 0.40 && msgValue <= 0.49)
					{
						// clearMeter();
						 //GameObject.FindGameObjectWithTag("Calm40").GetComponent.<SpriteRenderer>().enabled = true;
						  calmMeter = "Calm40";
					}
					if (msgValue >= 0.30 && msgValue <= 0.39)
					{
						// clearMeter();
						 //GameObject.FindGameObjectWithTag("Calm30").GetComponent.<SpriteRenderer>().enabled = true;
						  calmMeter = "Calm30";
					}
				  }
				  if(msgValue > 0.80 && msgValue <= 1.0)
				  {
	//			  cm.rollIn = false;
	//			  lp.floatStrength = 1;
				  	Emotion = 2;
				  	isCalm = true;
				  	//Debug.Log("CALM!! " + msgValue);
				  	//Debug.Log("isCalm " + isCalm);
					if(msgValue == 1.0)
						{ 
							// clearMeter();
							 //GameObject.FindGameObjectWithTag("Calm100").GetComponent.<SpriteRenderer>().enabled = true;
							  calmMeter = "Calm100";

						}
						if (msgValue >= 0.90 && msgValue <= 0.99)
						{
							// clearMeter();
							 //GameObject.FindGameObjectWithTag("Calm90").GetComponent.<SpriteRenderer>().enabled = true;
							  calmMeter = "Calm90";
						}
						if (msgValue >= 0.80 && msgValue <= 0.89)
						{
							// clearMeter();
							 //GameObject.FindGameObjectWithTag("Calm80").GetComponent.<SpriteRenderer>().enabled = true;
							  calmMeter = "Calm80";
						}
				  }
			  }//end sensor short circut
			  break;
		case "/muse/elements/experimental/concentration":
			//Ranges:
				//Distracted = 0.00 - 0.79
				//Focused = 0.80 - 1.0
			displayFocusString = msgValue.ToString();
			  //focusMeter = msgValue; //.toString(); //toFloat crashed the handler, and terminated the socket
			  //debugging
			  //focusMeter = 1.0;
			  //updateMeter("Focus", focusMeter);
			  //Debug.Log("Focus: " + msgValue);
			  if (sensor01 == 4 || sensor02 == 4 || sensor04 == 4 || sensor05 == 4)
			  {
				  //set isFocused to false
				  isFocused = false;
				  //set calmmeter to 10
				  focusMeter = "Focus10";
			  }
			  else
			  {
			  if(msgValue > 0.00 && msgValue < 0.79){
			  	//Target not on fly
			  	isFocused = false;
				if (msgValue >= 0.70 && msgValue <= 0.79)
				{
					// clearMeter();
					 //GameObject.FindGameObjectWithTag("Focus70").GetComponent.<SpriteRenderer>().enabled = true;
					 focusMeter = "Focus70";
				}
				if (msgValue >= 0.60 && msgValue <= 0.69)
				{
					// clearMeter();
					 //GameObject.FindGameObjectWithTag("Focus60").GetComponent.<SpriteRenderer>().enabled = true;
					  focusMeter = "Focus60";
				}
				if (msgValue >= 0.50 && msgValue <= 0.59)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus50").GetComponent.<SpriteRenderer>().enabled = true;
					 focusMeter = "Focus50";
				}
				if (msgValue >= 0.40 && msgValue <= 0.49)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus40").GetComponent.<SpriteRenderer>().enabled = true;
					 focusMeter = "Focus40";
				}
				if (msgValue >= 0.30 && msgValue <= 0.39)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus30").GetComponent.<SpriteRenderer>().enabled = true;
					 focusMeter = "Focus30";
				}
				if (msgValue >= 0.20 && msgValue <= 0.29)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus20").GetComponent.<SpriteRenderer>().enabled = true;
					  focusMeter = "Focus20";
				}
				if (msgValue > 0.00 && msgValue <= 0.19)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus10").GetComponent.<SpriteRenderer>().enabled = true;
					focusMeter = "Focus10";
				}
			  }
			  if(msgValue > 0.80 && msgValue <= 1.0) {
			  	//Target locked in
			  	isFocused = true;
				if(msgValue == 1.0)
				{ 
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus100").GetComponent.<SpriteRenderer>().enabled = true;
					focusMeter = "Focus100";

				}
				if (msgValue >= 0.90 && msgValue <= 0.99)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus90").GetComponent.<SpriteRenderer>().enabled = true;
					focusMeter = "Focus90";
				}
				if (msgValue >= 0.80 && msgValue <= 0.89)
				{
					// clearMeter();
					// GameObject.FindGameObjectWithTag("Focus80").GetComponent.<SpriteRenderer>().enabled = true;
					focusMeter = "Focus80";
				}
			  	//Debug.Log("FOCUSED!! " + msgValue);
			  	//Debug.Log("isFocused " + isFocused);
			  }
			 }//end sensor failure short ciruit
			 break;	

		case "/muse/elements/horseshoe":
			  sensor01 = oscMessage.Values[0];
			  //Debug.Log("Sensor01 Values: "+msgValue);
			  sensor02 = oscMessage.Values[1];
			 // Debug.Log("Sensor02 Values: "+msgValue);
			  sensor04 = oscMessage.Values[2];
			 // Debug.Log("Sensor04 Values: "+msgValue);
			  sensor05 = oscMessage.Values[3];
			 // Debug.Log("Sensor05 Values: "+msgValue);
		case "/muse/elements/jaw_clench":
			//jaw must be unclenched to catch fly
			//Debug.Log("JAW: " + msgValue);
			  if(msgValue == 1.0)
			  {

			  }
			  else
			  {

			  }
			  break;


		default:
			//Rotate(msgValue);
			break;
	}
	if (isCalm && isFocused){
//	 	var bm: BugMovement = GetComponent(BugMovement);
//	 	bm.catchAnim = true;
		Emotion = 3;
	}

}


/*function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,30), "FOCUS: " + displayFocusString);
    GUI.Box (Rect (10,40,100,30), displayCalmString);

  
}*/

//FUNCTIONS CALLED BY MATCHING A SPECIFIC MESSAGE IN THE ALLMESSAGEHANDLER FUNCTION
/*
public function Rotate(msgValue) : void //rotate the cube around its axis
{
	yRot = msgValue;
}
*/



