import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";
import AnimalController from "./AnimalController";

export default class TestAnimal {
    static startRace(): void {
        const animals = [
            new Horse("Horse"),
            new Tiger("Tiger"),
            new Dog("Dog")
        ];

        const winner = AnimalController.findTheFastestSpeed(animals);

        console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()} km/h`);
    }
}

TestAnimal.startRace();
