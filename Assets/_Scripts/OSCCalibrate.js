//using UnityEngine.SceneManagement;
var sceneLoader : UnityEngine.SceneManagement.SceneManager;

public var RemoteIP : String = "127.0.0.1"; //127.0.0.1 signifies a local host (if testing locally
public var SendToPort : int = 9000; //the port you will be sending from
public var ListenerPort : int = 8000; //the port you will be listening on
public var controller : Transform;
public var gameReceiver = "Horeshoe"; //the tag of the object on stage that you want to manipulate
private var handler : Osc;
var mySensorGO : GameObject;
//var myGameObject : GameObject; //generic Game object for all calls to update game object
public var foreheadSensor : boolean;
public var sensor01 : int;
public var sensor02 : int;
public var sensor04 : int;
public var sensor05 : int;
var calibrationStatus : boolean;
//public var sensorArray : int[];

//myCalibrateGO = GameObject.FindGameObjectWithTag(caliSensor);

public function Start ()
{
	//Initializes on start up to listen for messages
	//make sure this game object has both UDPPackIO and OSC script attached

	var udp : UDPPacketIO = GetComponent("UDPPacketIO");
	udp.init(RemoteIP, SendToPort, ListenerPort);
	handler = GetComponent("Osc");
	handler.init(udp);
	handler.SetAllMessageHandler(AllMessageHandler);

	//Calibration - we initialize everything to invsible
	GameObject.FindGameObjectWithTag("Sensor01").GetComponent.<SpriteRenderer>().enabled = false; 	
	GameObject.FindGameObjectWithTag("Sensor02").GetComponent.<SpriteRenderer>().enabled = false; 	
	GameObject.FindGameObjectWithTag("Sensor03").GetComponent.<SpriteRenderer>().enabled = false;
	GameObject.FindGameObjectWithTag("Sensor04").GetComponent.<SpriteRenderer>().enabled = false; 	 	 	
	GameObject.FindGameObjectWithTag("Sensor05").GetComponent.<SpriteRenderer>().enabled = false; 	
}


function Update () {

	//Calibration
	//Special handling for the forehead sensor
	GameObject.FindGameObjectWithTag("Sensor01").GetComponent.<SpriteRenderer>().enabled = false;
	GameObject.FindGameObjectWithTag("Sensor02").GetComponent.<SpriteRenderer>().enabled = false;
	GameObject.FindGameObjectWithTag("Sensor03").GetComponent.<SpriteRenderer>().enabled = false;
	GameObject.FindGameObjectWithTag("Sensor04").GetComponent.<SpriteRenderer>().enabled = false;
	GameObject.FindGameObjectWithTag("Sensor05").GetComponent.<SpriteRenderer>().enabled = false;


	if(foreheadSensor == true)
	{GameObject.FindGameObjectWithTag("Sensor03").GetComponent.<SpriteRenderer>().enabled = true;}
	//else{GameObject.FindGameObjectWithTag("Sensor03").GetComponent.<SpriteRenderer>().enabled = false;}
	if(sensor01 == 1 || sensor01 == 2 || sensor01 == 3)
	{GameObject.FindGameObjectWithTag("Sensor01").GetComponent.<SpriteRenderer>().enabled = true;}
	if(sensor02 == 1 || sensor02 == 2 || sensor02 == 3)
	{GameObject.FindGameObjectWithTag("Sensor02").GetComponent.<SpriteRenderer>().enabled = true;}
	if(sensor04 == 1 || sensor04 == 2 || sensor04 == 3)
	{GameObject.FindGameObjectWithTag("Sensor04").GetComponent.<SpriteRenderer>().enabled = true;}
	if(sensor05 == 1 || sensor05 == 2 || sensor05 == 3)
	{GameObject.FindGameObjectWithTag("Sensor05").GetComponent.<SpriteRenderer>().enabled = true;}
	if(sensor01 == 1 && sensor02 == 1 && sensor04 == 1 && sensor05 == 1)
	{	//if(foreheadSensor == true)
		//	{
			//close the socket
			disableOSC();
			//load the main scene
			sceneLoader.LoadScene("Tutorial");
		//	}
	}//end load scene logic
}

//These functions are called when messages are received
//Access values via: oscMessage.Values[0], oscMessage.Values[1], etc

public function AllMessageHandler(oscMessage: OscMessage){


	var msgString = Osc.OscMessageToString(oscMessage); //the message and value combined
	var msgAddress = oscMessage.Address; //the message parameters
	var msgValue = oscMessage.Values[0]; //the message value


	switch (msgAddress){
		case "/muse/elements/touching_forehead":
			  Debug.Log("Forehead: " +msgValue);
			  if (msgValue == 1)
			  {
			  	//boolean value input from device passed as an INT through the msgValue

			 	foreheadSensor = true;

			  }
			  else
			  {
			  //statements
			  	foreheadSensor = false;
			  }
			  break;			
		case "/muse/elements/horseshoe":
			 // Debug.Log("Sensor Values: "+msgValue);
	//		   for(var i : int=0; i < oscMessage.Values.Length; i++)
//			   {Debug.Log("Values: " + oscMessage.Values[i]);}
			  // Debug.Log("MsgAddress: " + msgAddress);
			  // Debug.Log("MsgString: "+ msgString);
			  //left ear sensor
			  //add for loop here in the future

			  //documentation is a lie, we have int values from 1-4
			  sensor01 = oscMessage.Values[0];
			  Debug.Log("Sensor01 Values: "+msgValue);
			  sensor02 = oscMessage.Values[1];
			  Debug.Log("Sensor02 Values: "+msgValue);
			  sensor04 = oscMessage.Values[2];
			  Debug.Log("Sensor04 Values: "+msgValue);
			  sensor05 = oscMessage.Values[3];
			  Debug.Log("Sensor05 Values: "+msgValue);

		default:
			//Rotate(msgValue);
			break;
	}

}
/*
function OnGUI () {
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

function disableOSC()
{
//close OSC UDP socket
Debug.Log("Close OSC UDP socket");
handler.Cancel();
handler = null;
}



