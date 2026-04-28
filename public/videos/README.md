# Videos Directory

Place video files here for use in the website.

## Current Videos

- **video01.mp4** - Hero section background video for the home page

## Video Specifications

For best performance and compatibility:

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **File Size**: Keep under 10MB for fast loading
- **Length**: 10-30 seconds (will loop automatically)
- **Orientation**: Landscape

## Optimization Tips

1. **Compress videos** before uploading:
   - Use [HandBrake](https://handbrake.fr/) or [FFmpeg](https://ffmpeg.org/)
   - Reduce bitrate to 2-5 Mbps
   - Remove audio track (not needed for background videos)

2. **Example FFmpeg command** to optimize:
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1920:1080 -an output.mp4
   ```

3. **Always provide a fallback image** for browsers that don't support video or when video fails to load.

## Usage in Components

```tsx
<HeroSection
  title="Your Title"
  subtitle="Your Subtitle"
  backgroundVideo="/videos/video01.mp4"
  backgroundImage="/images/hero/fallback.jpg"
/>
```

The video will:
- Auto-play on page load
- Loop continuously
- Be muted (required for autoplay)
- Have proper fallback to image

