import { KeyValue } from '@angular/common';

export class Hero {
    constructor(name: string, power: string, stats: KeyValue<string, number>[]) {
        this.name = name;
        this.power = power;
        this.stats = stats;
    }
    public name: string;
    public power: string;
    public stats: KeyValue<string, number>[];
}