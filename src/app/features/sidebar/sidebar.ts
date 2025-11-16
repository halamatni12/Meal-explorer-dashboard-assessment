import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  encapsulation: ViewEncapsulation.None
})

export class Sidebar implements AfterViewInit {
  ngAfterViewInit(): void {
    const showNavbar = (toggleId: string, navId: string, bodyId: string, headerId: string) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          const isMobile = window.innerWidth < 768;
          if (isMobile) {
            return;

          } else {
            nav.classList.toggle('collapsed')
            headerpd.classList.toggle('sidebar-collapsed')

            bodypd.classList.toggle('sidebar-collapsed')
          }
          toggle.classList.toggle('bx-x')

        })
      }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink(this: any) {
      if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
      }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))


  }

}
