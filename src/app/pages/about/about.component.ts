import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

import { defaultWebTitle, tagLine } from '../../app.constants';
import { TextSection, ActionLink } from '../../components/text-section-display/text-section-display.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  tagLine : string = tagLine;

  highlightedActions : ActionLink[] = [
    {label:'Hello', action: ()=>{alert('🦕 yes this works.')} },
    {label:'Examples', action: ()=>{alert('🦖 another dinosaur')} },
    {label:'Start Shopping', action: ()=>{this.router.navigateByUrl('shop')} },
    {label:'FAQ', action: ()=>{this.router.navigateByUrl('home')} },
    {label:'YO', action: ()=>{alert('yo')} },
  ]

  sections : TextSection[] = [
    {
      title : 'Welcome',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus felis, volutpat eget turpis nec, egestas mollis leo. Sed sit amet pellentesque purus. Fusce eros ipsum, varius vel tellus sit amet, posuere elementum enim. Nunc ante mauris, venenatis quis nisl eu, venenatis pulvinar nisl. Mauris turpis urna, tincidunt eu ornare eu, pretium scelerisque risus. Vestibulum sed orci eu neque convallis luctus eu vel arcu. Suspendisse luctus nunc eu pretium tincidunt. Pellentesque efficitur, massa non lacinia elementum, leo lorem tristique velit, vel auctor velit erat vitae elit. Cras facilisis libero ac nulla accumsan pretium. Praesent dignissim mi ut tortor facilisis egestas. Aliquam non convallis eros, ut venenatis purus. Donec eleifend dui ut facilisis imperdiet. Pellentesque dapibus diam vitae neque accumsan sodales.',
      actionLinks : [
        {label: "Back home", action: ()=>{ this.router.navigateByUrl('') } },
        {label: "Another one", action: (indx)=>{ alert(`Here\s a cow 🐄 ${indx}`); } }
      ]
    },
    {
      title : 'What are you going to find here',
      text : 'Maecenas erat lacus, tincidunt non suscipit eget, tristique non felis. In pulvinar nibh eget tellus lacinia pharetra. Maecenas vulputate pharetra diam eu dictum. Duis laoreet ultrices felis vitae volutpat. Duis turpis orci, blandit vel molestie nec, suscipit vitae mauris. Integer iaculis est quis ullamcorper consequat. Etiam semper sagittis magna ut efficitur.',
    },
    {
      title : 'Who we are',
      text : 'Suspendisse potenti. Sed vitae nulla ac turpis bibendum ullamcorper. Nam nec tempus enim. Nulla ultricies sem vitae mauris hendrerit convallis. Curabitur porta nec nunc vitae interdum. Pellentesque nec vestibulum diam, nec sollicitudin lorem. Ut blandit lacus odio, vitae commodo ligula tincidunt in. Donec auctor est eu viverra bibendum. Mauris tristique tristique est non pellentesque. Duis quis finibus nisi.',
    },
    {
      title : 'Enjoy!',
      text : '',
      actionLinks : [
        {label: "Back home", action: ()=>{ this.router.navigateByUrl('') } },
        {label: "Another one", action: ()=>{ alert('Here\s a cow 🐄') } }
      ]
    },
  ]

  constructor(private router : Router ) { }

  ngOnInit() { }

}

