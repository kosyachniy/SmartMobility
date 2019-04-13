contract EasyMotion {
    // Notary
    
    address notary;
    
    // Cars

    struct Location {
        uint time;
        uint lat;
        uint long;
    }
    
    struct Ride {
        uint client;
        Location[] locations;
    }

    struct Car {
        bool busy;
        Ride[] rides;
    }
    
    mapping (address => Car) cars;
    
    // Owner car give
    
    function freeCar() public {
        cars[msg.sender].busy = false;
    }
}
