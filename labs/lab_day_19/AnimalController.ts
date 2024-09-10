import Animal from "./Animal";

export default class AnimalController {
    static findTheFastestSpeed(animals: Animal[]): Animal {
        let fastestAnimal = animals[0];
        for (const animal of animals) {
            if (animal.getSpeed() > fastestAnimal.getSpeed()) {
                fastestAnimal = animal;
            }
        }
        return fastestAnimal;
    }
}

