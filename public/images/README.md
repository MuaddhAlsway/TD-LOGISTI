# Images Directory

Place all images in this folder. The following images are referenced in the application:

## Hero Images
- `hero-truck.jpg` - Main hero image with delivery truck fleet
- `warehouse.jpg` - Warehouse facility image

## Service Images
- `last-mile.jpg` - Last-mile delivery service image
- `ecommerce.jpg` - E-commerce solutions image
- `customized.jpg` - Customized delivery image
- `technology.jpg` - Technology features image

## Testimonial Images
- `testimonial-1.jpg` - Ahmed Al-Rashid profile image
- `testimonial-2.jpg` - Fatima Al-Zahra profile image
- `testimonial-3.jpg` - Omar bin Sultan profile image

## Other Images
- `partnership.jpg` - Partnership page image
- `support.jpg` - Support/contact page image
- `placeholder.jpg` - Fallback placeholder image

## Image Specifications

### Hero Images (600x500px)
- Format: JPG
- Quality: High (85-90%)
- Aspect ratio: 6:5

### Testimonial Images (60x60px)
- Format: JPG
- Quality: High
- Aspect ratio: 1:1 (square)

### Service Images (600x400px)
- Format: JPG
- Quality: High
- Aspect ratio: 3:2

## Usage

Images are referenced in `src/config/images.js` and imported in page components:

```jsx
import { images } from '../config/images';

<img src={images.heroTruck} alt="Description" />
```

## Notes

- All images should be optimized for web
- Use descriptive alt text for accessibility
- Keep file sizes under 200KB for web images
- Use JPG for photographs, PNG for graphics
