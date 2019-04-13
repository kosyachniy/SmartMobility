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
        Location[] locations;
    }

    struct Car {
        address owner;
        bool free;
       Ride[] rides;
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
    
    // Give car

    function giveCar(uint car) public {
       cars[owners[msg.sender].cars[car]].free = true;
    }
    
    // Get car
    
    function getCar(uint car, uint lat, uint long, uint time) public {
        if (cars[car].free) {
            cars[car].free = false;
            cars[car].rides.push(Ride({
                client: msg.sender,
                locations: Location({
                    time: time,
                    lat: lat,
                    long: long
                })
            }));
        }
    }
}