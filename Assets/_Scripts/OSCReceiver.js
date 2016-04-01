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
}
Debug.Log("Running");

function Update () {
	var go = GameObject.Find(gameReceiver);
	go.transform.Rotate(0, yRot, 0);
	animConnector.SetBool("Calm", isCalm);
	animConnector.SetInteger("Emotion", Emotion);
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
			  //Sadface = 0.00-0.30
			  //Concern = 0.31 - 0.79
			  //Calm = 0.80 - 1.0
			  displayCalmString = "CALM: " + msgValue.ToString();
			  if (msgValue > 0.00 && msgValue < 0.30)
			  {
			  	//SADFACE
			  	isCalm = false;
			  	Emotion = 1;
			  	//Debug.Log("Sadface: " + msgValue);
			  	//Debug.Log("isCalm " + isCalm);
			  }
			  if(msgValue > 0.31 && msgValue < 0.79)
			  {
			  	Emotion = 0;
			  	//CONCERNFACE
			  	isCalm = false;
			  	//Debug.Log("Concernface: " + msgValue);
			  	//Debug.Log("isCalm " + isCalm);
			  }
			  if(msgValue > 0.80 && msgValue < 1.1)
			  {
			  	Emotion = 2;
			  	isCalm = true;
			  	Debug.Log("CALM!! " + msgValue);
			  	Debug.Log("isCalm " + isCalm);
			  }
			  break;
		case "/muse/elements/experimental/concentration":
			//Ranges:
				//Distracted = 0.00 - 0.79
				//Focused = 0.80 - 1.0
			displayFocusString = "FOCUS: " + msgValue.ToString();
			  if(msgValue > 0.00 && msgValue < 0.79)
			  {
			  	//Target not on fly
			  	isFocused = false;
			  	//Debug.Log("Distracted: " + msgValue);
			  }
			  if(msgValue > 0.80 && msgValue < 1.1)
			  {
			  	//Target locked in
			  	isFocused = true;
			  	//Debug.Log("FOCUSED!! " + msgValue);
			  	Debug.Log("isFocused " + isFocused);
			  }
			  break;	
		case "/muse/elements/jaw_clench":
			//jaw must be unclenched to catch fly
			Debug.Log("JAW: " + msgValue);
			  if(msgValue == 1.0)
			  {
//			  	jawClench = true;

			  }
			  else
			  {
//			  	jawClench = false;
//			  	Emotion = 3;
			  }
			  break;
		default:
			//Rotate(msgValue);
			break;
	}
	if (isCalm && isFocused){
		Emotion = 3;
	}

}


function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,30), displayFocusString);
    GUI.Box (Rect (10,40,100,30), displayCalmString);

  
}

//FUNCTIONS CALLED BY MATCHING A SPECIFIC MESSAGE IN THE ALLMESSAGEHANDLER FUNCTION
/*
public function Rotate(msgValue) : void //rotate the cube around its axis
{
	yRot = msgValue;
}
*/