import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  


  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3';
  private readonly apiKey = 'AIzaSyAQ-Wmmmzy0O418eQv3mdDvecKb4NjpTMQ';

  constructor(private http: HttpClient) {}

  searchVideos(query: string) {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', query)
      .set('part', 'snippet')
      .set('type', 'video')
      .set('maxResults', '10');

    return this.http.get(`${this.apiUrl}/search`, { params });
  }
}
