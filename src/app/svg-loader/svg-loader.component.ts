import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThreeConfigService } from '../three-config.service';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


@Component({
  selector: 'app-svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrls: ['./svg-loader.component.css']
})
export class SvgLoaderComponent implements OnInit{
  
  // acces to element
  @ViewChild('mysvg', { static: true }) _mysvg!: ElementRef;
  // used to specify the extrusion depth
  defaultExtrusion = 5;
  fillColor = '#F3FBFB';
  stokeColor = 'black';
  svgPath = 'assets/svgfile/availability-svgrepo-com.svg';


  // Getters are used to retrieve the value of an object's property.
  get mysvg() {
    return this._mysvg.nativeElement as HTMLElement;
  }

  constructor(private threeConfigService: ThreeConfigService) { }

  
  
  ngOnInit(): void {
    const scene = this.threeConfigService.setupScene(this.mysvg);
    const { object } = this.threeConfigService.renderSVG(this.svgPath, this.defaultExtrusion, this.fillColor, this.stokeColor);
    scene.add(object);
  }
}
