package CeilingFan;

public class Demo {
    public static void main(String[]args){
        //Create Fan object with maximum speed 3
        CeilingFan myFan = new CeilingFan(3);

        //Manipulate fan to see features
        myFan.increaseSpeed();
        System.out.println(myFan);
        myFan.increaseSpeed();
        System.out.println(myFan);
        myFan.changeDirection();
        System.out.println(myFan);
        myFan.increaseSpeed();
        myFan.changeDirection();
        System.out.println(myFan);
        myFan.increaseSpeed();
        System.out.println(myFan);
    }
}
