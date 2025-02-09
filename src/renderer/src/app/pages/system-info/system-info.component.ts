import { Component, OnInit, NgZone } from '@angular/core';
import { IpcService } from 'src/app/ipc.service';

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.css']
})
export class SystemInfoComponent implements OnInit {
  arch = '-';
  hostname = '-';
  platform = '-';
  release = '-';

  constructor(private ipcService: IpcService, private ngZone: NgZone) { }

  ngOnInit() {
    this.ipcService.getSystemInfoAsync()
      .subscribe(systemInfo => {
        this.ngZone.run(() => {
          this.arch = systemInfo.Arch;
          this.hostname = systemInfo.Hostname;
          this.platform = systemInfo.Platform;
          this.release = systemInfo.Release;
        });
      });
  }

  showNotification() {
    this.ipcService.showNotification('Hello from Angular');
  }
}
