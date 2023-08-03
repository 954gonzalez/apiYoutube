import { Component } from '@angular/core';
import { YoutubeService } from '../service/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  searchTerm: string = '';
  videos: any[] = [];
  selectedVideo: any;

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) {}


  onSearch() {
    
    if (this.searchTerm.trim() !== '') {
      
      this.youtubeService.searchVideos(this.searchTerm,).subscribe((data: any) => {
        this.videos = data.items;
        this.selectedVideo = null;
      });
    }
  }

  selectVideo(video: any) {
    this.selectedVideo = video;
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
