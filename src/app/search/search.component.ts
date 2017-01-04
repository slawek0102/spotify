import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;

  constructor(private _spotifyService: SpotifyService) {};

  ngOnInit() {};

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res=>console.dir(res.artists.items));
  }

}
