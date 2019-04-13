contract EasyMotion {
    // Notary
    
    address notary;

    constructor() public {
        notary = msg.sender;
    }
    
    // Cars

    struct Location {
        uint time;
        uint lat;
        uint long;
    }
    
    struct Ride {
        uint client;
        mapping (uint => Location) locations;
    }

    struct Car {
        address owner;
        bool free;
        mapping (uint => Ride) rides;
    }

    mapping (uint => Car) cars;
    
    struct Client {
        uint count;
        mapping (uint => uint) cars;
    }
    
    mapping (address => Client) owners;
    
    uint countCar = 0;
    
    // Add car
    
    function addCar(address user) public {
        if (msg.sender == notary) {
            countCar += 1;
    
            cars[countCar] = Car({
                owner: user,
                free: false
            });

            if (owners[user].count > 0) {
                owners[user].count += 1;
                owners[user].cars[owners[user].count] = countCar;
            } else {
                owners[user] = Client({
                    count: 1
                });
                owners[user].cars[1] = countCar;
            }

        }
    }
    
    function viewCar() public view returns (address) {
        return cars[countCar].owner;
    }
    
    // Owner car give

    function freeCar(uint car) public {
       cars[owners[msg.sender].cars[car]].free = true;
    }
}