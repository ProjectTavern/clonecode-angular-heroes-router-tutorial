import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    
    @Input() hero!: Hero;

    constructor() {}
    
    ngOnInit() {}
}