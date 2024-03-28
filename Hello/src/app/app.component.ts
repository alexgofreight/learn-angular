import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
import * as _ from 'lodash-es'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Hello'
  fruits = ['apple', 'orange', 'banana']
  myModal: any

  ngOnInit(): void {
    this.myModal = new bootstrap.Modal('#exampleModal', {
      keyboard: false
    })

    $('#jq-demo').append('<b>Hi jQuery</b>')
    _.isEmpty(null)
  }

  openModal(): void {
    this.myModal.show()
  }
}
