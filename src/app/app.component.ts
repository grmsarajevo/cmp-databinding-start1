import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test server', content: 'This is a test server'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
    type: 'blueprint',
    name: bluprintData.serverName,
    content: bluprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
}
