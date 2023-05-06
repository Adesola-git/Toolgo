package CeilingFan;

public class CeilingFan implements Fan{
    private int fanSpeed;
    private int maxSpeed;
    private String fanDirection;
    //Constructor initializes fan Speed to 0, set direction and maximum speed
    public CeilingFan(int maxSpeed){
        fanSpeed =0;
        fanDirection ="forward";
        this.maxSpeed = maxSpeed;
    }

    //Increase speed method implementation
    @Override
    public void increaseSpeed() {
        //check if fan speed is less than maximum then increase if not, if it is fan speed goes back to 0
        if(fanSpeed < maxSpeed){
            fanSpeed++;
        }else{
            fanSpeed=0;
        }
    }

    //change direction method implementation
    @Override
    public void changeDirection() {
        if(fanDirection =="forward"){
            fanDirection="backward";
        }else{
            fanDirection="forward";
        }
    }
    //Print method for class
    public String toString(){
        return "Current Fan Speed is "+fanSpeed+" in "+fanDirection+" direction";
    }

}
