export default class Animal {
    private name: string;
    private speed: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    public static generateRandomSpeed(maxSpeed: number): number {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }

    getSpeed(): number {
        return this.speed;
    }

    getName(): string {
        return this.name;
    }
}
