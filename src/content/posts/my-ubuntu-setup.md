---
title: "My Ubuntu setup"
date: "2019-07-12"
category: "personal"
toc: true
---

I have been using Ubuntu as my primary OS for personal computing since 2015. My then notebook was a bit old and I had performance issues with Windows, so I have decided to give Ubuntu a try and stuck with it.

<img src="/images/posts/my-ubuntu-setup/ubuntu1804.jpg" alt="A screenshot of Ubuntu 18.04" class="centered"/>

My current notebook is a Dell Inspiron 5570 and I don't remember experiencing any issues that could not be solved with a little bit of Googling.

From time to time, I run a Windows in VirtualBox when there is some very specific app I need to use, like for example PhotoShop, but otherwise I am more than satisfied with Ubuntu.

Here's a list of the software I use. I believe my set of tools is pretty average, so feel free to suggest me your favorite cool app!

## Essentials

### Terminal

I use the built-in one.

### Gnome Tweak Tool

A powerful tool to customize the GNOME shell. The only extension I use is called Dash to panel which gives me a Windows-style taskbar.

<img src="/images/posts/my-ubuntu-setup/gnome-tweak-tool-dash-to-panel.png" class="centered"/>

<a href="https://wiki.gnome.org/action/show/Apps/Tweaks" target="_blank">https://wiki.gnome.org/action/show/Apps/Tweaks</a><br/>
<a href="https://extensions.gnome.org/extension/1160/dash-to-panel/" target="_blank">https://extensions.gnome.org/extension/1160/dash-to-panel/</a>

### Open Graphics Drivers

An absolute must. I have zero problems with my displays since I have found this package.

<a href="https://launchpad.net/~oibaf/+archive/ubuntu/graphics-drivers" target="_blank">https://launchpad.net/~oibaf/+archive/ubuntu/graphics-drivers</a>

## Office apps

### Web browser

Most of the time I use Google Chrome, sometimes Mozilla Firefox.

### E-mail client, word processing, spreadsheets

I use Gmail, Google Docs and Google Sheets for these tasks.

### Document viewer

<a href="https://okular.kde.org/" target="_blank">Okular</a> is perfect for PDF and ePub documents. I use its highlighter feature extensively.

Update (2021): <a href="https://workspace.google.com/marketplace/app/adobe_acrobat_%E2%80%93_pdf_and_esignature_tools/80763634447" target="_blank">Adobe Acrobat for Google Drive</a> is also a decent choice for reading PDF documents. The files are stored on Google Drive and modifications (e.g. highlights) are saved automatically.

## Development

### Code editor, IDE

<a href="https://code.visualstudio.com/" target="_blank">VS Code</a> works fine for me. Sometimes I open IntelliJ IDEA for Java development but often it's just too heavy for my personal projects.

### Git client

Although I have tried GitKraken and others, I mostly use the one built in VS Code.

### Firefox Developer Edition

It has some nice tools but I don't actually use it as part of my development workflow.

<a href="https://www.mozilla.org/en-US/firefox/developer/" target="_blank">https://www.mozilla.org/en-US/firefox/developer/</a>

## Multimedia

### VLC media player

Plays almost all kinds of formats and very fast. <a href="https://play.google.com/store/apps/details?id=org.videolan.vlc&hl=en" target="_blank">VLC for Android</a> is also pretty good.

<a href="https://www.videolan.org/" target="_blank">https://www.videolan.org/</a>

### Audacity

Lightweight and easy to use. Perfect for editing audio files, might not be the best for complex workflows.

<a href="https://www.audacityteam.org/" target="_blank">https://www.audacityteam.org/</a>

### imagemagick

A command line tool for manipulating images. It has many features, I mostly use it for resizing, cropping, and compressing images.

<a href="https://imagemagick.org/" target="_blank">https://imagemagick.org/</a>

#### Convert all `png` files in current directory to `jpg`s

```shell
for file in *.png; do convert $file ${file/%.png/.jpg}; done
```

The `convert` command is part of the `imagemagick` package.

### Screenshot tool

Ubuntu 22.04 comes with a great built-in screenshot tool but before that I haved used <a href="https://shutter-project.org/" target="_blank">Shutter</a>.

### YouTube downloader

I frequently download videos from YouTube so I can watch them using VLC (to have better control of playback speed and rewind step size).

My goto tool was <a href="https://github.com/ytdl-org/youtube-dl" target="_blank">youtube-dl</a> but nowadays (August 2022) I use <a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp</a> which is actually a more actively maintained fork of youtube-dl.

It can also be used directly to save the audio content of a video as an mp3 file:

```terminal
$ yt-dlp -x --audio-format mp3 -f 140 <video-id>
```

The quality of such audio files is far from good but usually it's okay when the goal is having something to listen to as background music.

### HEIF support

<a href="https://en.wikipedia.org/wiki/High_Efficiency_Image_File_Format" target="_blank">HEIF</a> is a file format used by iOS and Android devices for saving photos. These packages enable the standard Image Viewer to open such files and Nautilus to show thumbnails for them.

```shell
$ sudo apt update
$ sudo apt install heif-gdk-pixbuf heif-thumbnailer libheif1
```

#### Convert all HEIF images in current directory to a different image format

When it is not possible to upgrade an environment, one can use `heif-convert` to convert HEIF images to, for example, jpgs:

```shell
for file in \*.heic; do heif-convert $file ${file/%.heic/.jpg}; done
```

Manual for `heif-convert`: <a href="https://manpages.debian.org/testing/libheif-examples/heif-convert.1.en.html" target="_blank">https://manpages.debian.org/testing/libheif-examples/heif-convert.1.en.html</a>

## Other tools

### dupeGuru

A small utility to find duplicate files.

<a href="https://dupeguru.voltaicideas.net/" target="_blank">https://dupeguru.voltaicideas.net/</a>

### Disk Usage Analyzer

Scans directories and displays a nice visualization on how much disk space is consumed by each subdirectory.

<img src="/images/posts/my-ubuntu-setup/disk-usage-analyzer.jpg" alt="A screenshot of Disk Usage Analyzer" class="centered bordered max-width-500" />

<a href="https://wiki.gnome.org/action/show/Apps/DiskUsageAnalyzer" target="_blank">https://wiki.gnome.org/action/show/Apps/DiskUsageAnalyzer</a>
