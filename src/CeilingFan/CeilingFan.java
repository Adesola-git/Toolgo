package CeilingFan;

public class CeilingFan implements Fan{
    private int fanSpeed;
    private int maxSpeed;
    private String fanDirection;

    public CeilingFan(int maxSpeed){
        fanSpeed =0;
        fanDirection ="forward";
        this.maxSpeed = maxSpeed;
    }

    @Override
    public void increaseSpeed() {
        if(fanSpeed < maxSpeed){
            fanSpeed++;
        }else{
            fanSpeed=0;
        }
    }

    @Override
    public void changeDirection() {
        if(fanDirection =="forward"){
            fanDirection="backward";
        }else{
            fanDirection="forward";
        }
    }

    public String toString(){
        return "Current Fan Speed is "+fanSpeed+" moving in "+fanDirection+" direction";
    }

}
