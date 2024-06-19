import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  imageUrl: string | ArrayBuffer | null = null;

  triggerFileInput(): void {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result ?? null;
      };

      reader.readAsDataURL(file);
    }
  }
}
