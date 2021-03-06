import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../../mock/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
