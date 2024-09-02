import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";

export default class AnimalController {
    static winner(): void {
        const animals = [
            new Horse("Horse"),
            new Tiger("Tiger"),
            new Dog("Dog")
        ];

        let fastestAnimal = animals[0];
        for (const animal of animals) {
            if (animal.getSpeed() > fastestAnimal.getSpeed()) {
                fastestAnimal = animal;
            }
        }
        console.log(`Winner is ${fastestAnimal.getName()}, with speed: ${fastestAnimal.getSpeed()} km/h`);
    }
}

AnimalController.winner();
