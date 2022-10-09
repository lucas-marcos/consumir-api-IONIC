import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import fetch from 'node-fetch';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  filmes: Observable<{ results: any[] }>;
  generos: any[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.buscarImagens();
  }

  async buscarImagens() {
    const apiKey = '6671c443705be828502ab7c33ad469cc';

    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=pt-BR&page=1');
    this.filmes = await response.json();
  }

}
