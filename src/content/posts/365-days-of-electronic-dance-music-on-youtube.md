---
title: "365 Days of Electronic Dance Music on YouTube"
date: "2016-07-03"
category: "side-project"
toc: true
---

<style>
.songs-list {
  overflow-x: auto;
  margin: 1rem auto;
  font-size: 16px;
}

.songs-list table {
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto;
}

.songs-list table th {
  border-bottom: 1px solid #d0d0d0;
}

.songs-list table td {
  padding: 5px 10px;
  white-space: pre;
}

.songs-list table td:nth-child(2) {
  max-width: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.songs-list table td:nth-child(3) {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.songs-list table td:nth-child(1),
.songs-list table td:nth-child(4),
.songs-list table td:nth-child(5) {
  text-align: right;
}

.songs-list table td.footer {
  text-align: center;
}

.songs-list table td.footer img.youtube-logo {
  display: inline;
  transform: translate(1px, 2px)
}
</style>

<!--
Used technologies:

- PHP (for data collection and processing)
- YouTube API
- Microsoft Excel (graphing)
-->

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/party.gif" class="centered" />

## Introduction

While some say that electronic dance music is just a fad, it is undoubtedly one of the most popular music genres today.

Though I am kind of an older armchair EDM fan and not the young party animal, I was curious to see how the genre evolves over time and started brainstorming about a potential analysis, and so more than a year ago I’ve set up a small script that started collecting data.

At the beginning I have asked fairly simple questions like “Which are the most popular songs?” and “How did they become popular: instantly or gradually?”, but as I was getting the answers, more and more questions have arisen and many unexpected patterns have been discovered.

In the following I present the results of my analysis and I hope you too will find some interesting bits and pieces about the worldwide EDM community.

### Dataset

The analysis is based on the content uploaded to YouTube channels dedicated to electronic dance music. The following channels were being monitored:

<style>
#youtube-channels {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 35px;
}

@media screen and (max-width: 625px) {
  #youtube-channels {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 500px) {
  #youtube-channels {
    grid-template-columns: repeat(2, 1fr);
  }
}

#youtube-channels img {
  width: 64px;
  height: 64px;
  margin: 0 auto 10px auto;
}

#youtube-channels > div {
  text-align: center;
}
</style>
<div id="youtube-channels">
  <div>
    <a href="https://www.youtube.com/user/anjunabeats" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/anjunabeats.jpg" />
      anjunabeats
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/anjunadeep" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/anjunadeep.jpg" />
      anjunadeep
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/armadamusic" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/armadamusic.jpg" />
      armadamusic
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/blancoynegro" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/blancoynegro.jpg" />
      blancoynegro
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/dimmakrecords" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/dimmakrecords.jpg" />
      dimmakrecords
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/happymusic" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/happymusic.jpg" />
      happymusic
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/kontor" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/kontor.jpg" />
      kontor
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/ministryofsoundde" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/ministryofsoundde.jpg" />
      ministryofsoundde
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/mostv" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/mostv.jpg" />
      mostv
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/musicalfreedomrecs" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/musicalfreedomrecs.jpg" />
      musicalfreedomrecs
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/pandoramuslc" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/pandoramuslc.jpg" />
      pandoramuslc
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/planetpunkmusic" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/planetpunkmusic.jpg" />
      planetpunkmusic
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/spinninrec" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/spinninrec.jpg" />
      spinninrec
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/toolroomrecords" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/toolroomrecords.jpg" />
      toolroomrecords
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/ultrarecords" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/ultrarecords.jpg" />
      ultrarecords
    </a>
  </div>
  <div>
    <a href="https://www.youtube.com/user/zoolandmusicgmbh" target="_blank">
      <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-channels/zoolandmusicgmbh.jpg" />
      zoolandmusicgmbh
    </a>
  </div>
</div>

Though data collection was started a bit earlier, only the period between 1 July, 2015 and 1 July, 2016 is part of the analysis. Only newly uploaded content was tracked (videos that were uploaded before July 2015 were ignored).

<style>
#time-period {
  overflow-x: auto;
}

#time-period table  {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 15px auto;
}

#time-period table th {
  font-weight: 500;
  padding-bottom: 5px;
}

#time-period table tr.months {
  border: 0; 
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #d0d0d0;
}

#time-period table td {
  padding: 0 10px;
}

#time-period table td.active {
  background-color: #d0d0d0;
}
</style>
<div id="time-period">
  <table>
    <thead>
      <tr>
        <th colspan="12">2015</td>
      </tr>
    </thead>
    <tbody>
      <tr class="months">
        <td>Jan</td>
        <td>Feb</td>
        <td>Mar</td>
        <td>Apr</td>
        <td>May</td>
        <td>Jun</td>
        <td class="active">Jul</td>
        <td class="active">Aug</td>
        <td class="active">Sep</td>
        <td class="active">Oct</td>
        <td class="active">Nov</td>
        <td class="active">Dec</td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr>
        <th colspan="12">2016</th>
      </tr>
    </thead>
    <tbody>
      <tr class="months">
        <td class="active">Jan</td>
        <td class="active">Feb</td>
        <td class="active">Mar</td>
        <td class="active">Apr</td>
        <td class="active">May</td>
        <td class="active">Jun</td>
        <td>Jul</td>
        <td>Aug</td>
        <td>Sep</td>
        <td>Oct</td>
        <td>Nov</td>
        <td>Dec</td>
      </tr>
    </tbody>
  </table>
</div>

## Uploads and Views

The number of uploads shows how much new music is getting released by EDM record labels (supply) and the number of views can tell us whether people are actually interested in that new content (demand).

### Daily Uploads

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-1-number-of-daily-uploads-1.png" class="centered" />

The number of daily uploads over the last 12 months were quite balanced, there is no statistically significant general upward or downward trend in the series. A noticeable big drop happened between 28 Dec 2015 and 3 Jan 2016 (the middle of **Fig. 1.**): labels were taking a break on the week of New Year’s Eve.

While some of the spikes are caused by a single channel uploading many videos at once (e.g. an entire artist album), the day of the week breakdown reveals a general pattern:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-2-number-of-daily-uploads-2.png" class="centered" />

As one would expect, the least number of uploads are made on Saturday and Sunday. Labels in general are more likely to release new music just before the weekend: 1 in 4 of new uploads are made on Friday. The beginning of the week, Monday and Tuesday, are also a popular choice for uploading new content, these two days combined with Friday are responsible for 57% of all uploads.

### Daily Views

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-3-number-of-daily-views-1.png" class="centered" />

As compared to the number of daily uploads, there is a general upward trend in the number of daily views. The spring of 2016 has brought an increased demand for EDM which is still maintained for the current months.

_Important note: though **Fig. 3.** shows the rate at which views were captured, it cannot be used as a measure of absolute growth. In other words: the popularity of EDM on YouTube did not grow by a factor of 4 in the last 12 months!_

Let’s look at the day of the week breakdown of views:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-4-number-of-daily-views-2.png" class="centered" />

A higher than average number of views are recorded on weekends, especially on Saturdays. Not surprisingly, the number of views on Mondays are the lowest.

### Uploads vs. Views

**Fig. 5.** shows the relative difference of the actual data to a situation where the number of daily uploads and views were equal for all days of the week:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-5-daily-uploads-vs-daily-views.png" class="centered" />

Even tough that the number of uploads on an average Monday is 8% higher than the rest of the week, the number of views are 10% lower as compared to other days. Similarly, despite that on a typical Friday there are 83% more uploads as we would expect, it doesn’t attract significantly more views than the other days of the week.

Both Wednesday and Thursday has less than average number of uploads and views: it seems that both the labels and the fans are waiting for the weekend.

## Popularity

Some songs quickly become very popular, others never get more than a few thousand views. While no amount of data will ever tell what exactly makes a hit, it can tell which songs can be considered as such.

### Distribution of Views

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-6-distribution-of-videos-based-on-number-of-views.png" class="centered" />

<style>
#distribution-of-views {
  font-size: 16px;
  margin: 1rem auto;
  overflow-x: auto;
}

#distribution-of-views table  {
  border-collapse: collapse;
  border-spacing: 0;
  margin: auto;
}

#distribution-of-views table th {
  font-weight: 500;
}

#distribution-of-views table th,
#distribution-of-views table td {
  border-bottom: 1px solid #d0d0d0;
  padding: 10px;
  white-space: pre;
}

#distribution-of-views table tr td:not(:first-child) {
  text-align: right;
}

#distribution-of-views table tr td {
  width: 80px;
}

#distribution-of-views table tr td:nth-child(4) {
  width: 105px;
}

#distribution-of-views table tr :nth-child(1),
#distribution-of-views table tr :nth-child(3) {
  border-right: 1px solid #d0d0d0;
}
</style>
<div id="distribution-of-views">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Count</th>
        <th>Share</th>
        <th>Views</th>
        <th>Share</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Less than 100,000 views:</td>
        <td>2,680</td>
        <td>61.95%</td>
        <td>66.29M</td>
        <td>3.66%</td>
      </tr>
      <tr>
        <td>Between 100,000 and 500,000 views:</td>
        <td>1,014</td>
        <td>23.44%</td>
        <td>250.41M</td>
        <td>13.81%</td>
      </tr>
      <tr>
        <td>Between 500,000 and 1,000,000 views:</td>
        <td>326</td>
        <td>7.54%</td>
        <td>230.13M</td>
        <td>12.69%</td>
      </tr>
      <tr>
        <td>More than 1,000,000 views:</td>
        <td>306</td>
        <td>7.07%</td>
        <td>1,266.33M</td>
        <td>70.42%</td>
      </tr>                          
    </tbody>
  </table>
</div>

**Fig. 6.** shows how unequal the popularity of the songs are. Videos that reached at least 500,000 views (15% of all uploads) account for 83% of all views and the rest of them (85% of all uploads) got only 17% of the views.

To be in the top 10% based on views, a video must have been played at least 730,000 times and only 24 of all the 4,326 uploads (0.55%) has reached more than 10 million views.

### Top 50 Most viewed EDM Songs (July 2015 – July 2016)

<div class="songs-list">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Uploader</th>
        <th>Upload date</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>
          <a href="https://www.youtube.com/watch?v=cedoBlUvBlI" target="_blank" class="hide-icon">Era Istrefi – Bonbon</a>
        </td>
        <td>ultrarecords</td>
        <td>Mar 7, 2016</td>
        <td>85.01M</td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <a href="https://www.youtube.com/watch?v=RYzQvj3icjs" target="_blank" class="hide-icon">Omi – Hula Hoop</a>
        </td>
        <td>ultrarecords</td>
        <td>Sep 16, 2015</td>
        <td>53.02M</td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Bkj3IVIO2Os" target="_blank" class="hide-icon">Stereoact feat. Kerstin Ott – Die Immer Lacht</a>
        </td>
        <td>kontor</td>
        <td>Dec 14, 2015</td>
        <td>49.03M</td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          <a href="https://www.youtube.com/watch?v=2_wpOmM1d8w" target="_blank" class="hide-icon">Benny Benassi & Chris Brown – Paradise</a>
        </td>
        <td>ultrarecords</td>
        <td>Apr 7, 2016</td>
        <td>41.49M</td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          <a href="https://www.youtube.com/watch?v=0OoqRkETcl0" target="_blank" class="hide-icon">OMI feat. Nicky Jam – Cheerleader</a>
        </td>
        <td>ultrarecords</td>
        <td>Jul 31, 2015</td>
        <td>27.69M</td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Cbvqv19Nf0E" target="_blank" class="hide-icon">Tiësto & Don Diablo – Chemicals</a>
        </td>
        <td>spinninrec</td>
        <td>Sep 23, 2015</td>
        <td>26.63M</td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <a href="https://www.youtube.com/watch?v=OORoOGY8D2M" target="_blank" class="hide-icon">Cheat Codes x Kris Kross Amsterdam – SEX</a>
        </td>
        <td>spinninrec</td>
        <td>Feb 19, 2016</td>
        <td>25.82M</td>
      </tr>
      <tr>
        <td>8</td>
        <td>
          <a href="https://www.youtube.com/watch?v=USVg_E7r20g" target="_blank" class="hide-icon">R3hab & Headhunterz – Won’t Stop Rocking</a>
        </td>
        <td>spinninrec</td>
        <td>Oct 23, 2015</td>
        <td>25.18M</td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          <a href="https://www.youtube.com/watch?v=LeMLVEJLruQ" target="_blank" class="hide-icon">Gestört aber GeiL feat. Sebastian Hämer – Ich & Du</a>
        </td>
        <td>kontor</td>
        <td>Oct 8, 2015</td>
        <td>21.37M</td>
      </tr>
      <tr>
        <td>10</td>
        <td>
          <a href="https://www.youtube.com/watch?v=r6E3J4GPpjc" target="_blank" class="hide-icon">Don Diablo – On My Mind</a>
        </td>
        <td>spinninrec</td>
        <td>Jul 27, 2015</td>
        <td>21.24M</td>
      </tr>
      <tr>
        <td colspan="5" class="footer">Check the full list as a <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-logo.png" class="youtube-logo" /> <a href="https://www.youtube.com/playlist?list=PL4ErO_7_XTSalj06U6HLBEGGtvE0xgtrP" target="_blank" class="small">YouTube playlist</a> or in the Appendix at the end of this post.</td>
      </tr>
    </tbody>
  </table>
</div>

The problem with determining the popularity of a song based on the absolute number of views it has received is that it favors older uploads (because in general, the more time elapsed since upload, the more views an upload has).

### Growth

We need to take a look on growth to better understand which songs are the currently most popular ones.

For example, an upload with 25M views but an age of ~7000 hours (~290 days) is less popular currently than the one that reached 10M views and was uploaded ~2000 hours (~80 days) ago.

**On Fig. 7.** each dot represents a video: the horizontal axis shows how many hours elapsed since it was uploaded (1000 hours is about 42 days) and the vertical axis shows the number of views it got:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-7-total-views-vs-hours-elapsed-since-upload.png" class="centered" />

There are so many factors influencing the number of views a song gets that each of them has a unique growth profile. **Figures 8 – 12.** provide examples of such growth profiles: on the left side you can see the number of daily views (grey area) and the number of total views on the right side (black line).

<a href="https://www.youtube.com/watch?v=Cbvqv19Nf0E" target="_blank">Tiësto & Don Diablo – Chemicals</a> was uploaded in late September and was getting more and more popular throughout the rest of 2015:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-8-growth-profile-for-tiest-don-diablo-chemicals.png" class="centered" />

After an initial short burst, <a href="https://www.youtube.com/watch?v=OORoOGY8D2M" target="_blank">Cheat Codes x Kris Kross Amsterdam – SEX</a> was forgotten, but made a comeback in early April and got into a very strong upward trend:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-9-growth-profile-for-cheat-codes-sex.png" class="centered" />

<a href="https://www.youtube.com/watch?v=souJM4aCk6w" target="_blank">Tujamo – Drop That Low</a> has managed to maintain its popularity since its release in March 2016:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-10-growth-profile-for-tujamo-drop-that-low.png" class="centered" />

Although <a href="https://www.youtube.com/watch?v=2_wpOmM1d8w" target="_blank">Benny Benassi & Chris Brown – Paradise</a> is quickly losing its popularity, it still gets 200k views a day:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-11-growth-profile-for-benny-benassi-paradise.png" class="centered" />

Mahmut Orhan feat. Sena Sener – Feel</a> is an example of song that was uploaded recently and is getting more and more popular day by day:

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/figures/figure-12-growth-profile-for-mahmut-orhan-feel.png" class="centered" />

### Top 50 EDM Songs of Summer 2016

Based on the analysis of the growth profiles I have compiled a list of the songs that are likely to dominate the sound of summer 2016 (Age and Views are of 1 July 2016, Age is the days elapsed since the date it was uploaded):

<div class="songs-list">
  <table id="most-popular-uploads-relative">
    <tbody>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Uploader</th>
        <th>Age</th>
        <th>Views</th>
      </tr>
      <tr>
        <td>1</td>
        <td>
          <a href="https://www.youtube.com/watch?v=YUMdd27gYbk" target="_blank" class="hide-icon">Headhunterz & KSHMR – Dharma</a>
        </td>
        <td>spinninrec</td>
        <td>2</td>
        <td>618.13k</td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <a href="https://www.youtube.com/watch?v=CictPbTWkBU" target="_blank" class="hide-icon">VINAI feat. Anjulie – Into The Fire</a>
        </td>
        <td>spinninrec</td>
        <td>1</td>
        <td>223.36k</td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <a href="https://www.youtube.com/watch?v=rQ7tMWOCQlM" target="_blank" class="hide-icon">Mahmut Orhan feat. Sena Sener – Feel</a>
        </td>
        <td>ultrarecords</td>
        <td>79</td>
        <td>11.27M</td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          <a href="https://www.youtube.com/watch?v=5txjj5awqS0" target="_blank" class="hide-icon">Yves V Vs Dimitri Vangelis & Wyman – Daylight</a>
        </td>
        <td>spinninrec</td>
        <td>3</td>
        <td>435.81k</td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          <a href="https://www.youtube.com/watch?v=ux9vr4xfWj4" target="_blank" class="hide-icon">KSHMR feat. Sidnie Tipton – Wildcard</a>
        </td>
        <td>spinninrec</td>
        <td>83</td>
        <td>10.70M</td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          <a href="https://www.youtube.com/watch?v=_zK8HGVwcX0" target="_blank" class="hide-icon">R3hab – Sakura</a>
        </td>
        <td>spinninrec</td>
        <td>20</td>
        <td>2.50M</td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <a href="https://www.youtube.com/watch?v=knnf2Aw6kMU" target="_blank" class="hide-icon">Ookay – Thief</a>
        </td>
        <td>pandoramuslc</td>
        <td>0</td>
        <td>50.00k</td>
      </tr>
      <tr>
        <td>8</td>
        <td>
          <a href="https://www.youtube.com/watch?v=9cBtJYI6itg" target="_blank" class="hide-icon">Deorro feat. Elvis Crespo – Bailar</a>
        </td>
        <td>ultrarecords</td>
        <td>65</td>
        <td>7.26M</td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          <a href="https://www.youtube.com/watch?v=4Kh93U_yLyI" target="_blank" class="hide-icon">Steve Aoki feat. Rich The Kid & ILoveMakonnen – How Else</a>
        </td>
        <td>ultrarecords</td>
        <td>1</td>
        <td>95.24k</td>
      </tr>
      <tr>
        <td>10</td>
        <td>
          <a href="https://www.youtube.com/watch?v=yiNrVLIOOtw" target="_blank" class="hide-icon">Florian Paetzold – Easy</a>
        </td>
        <td>spinninrec</td>
        <td>5</td>
        <td>519.33k</td>
      </tr>
      <tr>
        <td colspan="5" class="footer">Check the full list as a <img src="https://www.youtube.com/favicon.ico" class="youtube-logo" /> <a href="https://www.youtube.com/playlist?list=PL4ErO_7_XTSaAocC-uV3q1h9vPP7Y29Me" target="_blank" class="small">YouTube playlist</a> or in the Appendix at the end of this post.</td>
      </tr>
    </tbody>
  </table>
</div>

Keep in mind that this is just one of the many possible ways to rank the songs based on their potential to become the major hits of summer 2016 (and some of them are already have became), so don’t be offended if your favorite new song is not on the list!

### Top record Labels

Finding out which record labels are the top ones based on YouTube views is not a straightforward task because not only that each label puts a different emphasis on this distribution channel, their artists usually have their own YouTUbe channels which are not part of the dataset.

While it would be risky to draw conclusions about the exact market share of each label based on the data available, it is safe to say that the top 5 EDM labels are as the following: Spinnin’ Records, Ultra Music, Kontor Records, Armada Music, and Proximity.

<img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/top-record-labels.png" class="centered" />

This fact comes by no surprise considering that these are among the EDM labels that were started the earliest (Kontor and Ultra in 1995, Spinnin’ in 1999, Armada in 2003). However, it is worth to note that Proximity was started in 2009 and it is already the 5th most popular YouTube channel for EDM.

## Conclusions

Though this analysis is based solely on one platform, it provides widescale insights into the worldwide EDM community. The key points are:

- The popularity of EDM on YouTube is still increasing: labels supply a steady flow of new content and fans watch more and more of it.

- Only 1 in 14 releases (7%) become hits (more than 1M views) and 1 in 180 (0.55%) megahits (more than 10M views).

- Although five record labels dominate the scene, smaller labels can find success as well because the environment is constantly changing.

The music industry is so complex that predicting future hits is impossible, but seeing what resonates with the audience is essential in supporting an artist’s career. While this report shows what happened, record labels could gain actionable insights by getting to know why it happened so.

### When will the bass drop?

Has EDM already reached its peak or it will become even more popular in the coming years? Only time can tell that for sure but currently there’s no sign of any slowdown!

<div class="responsive-youtube-embed">
  <iframe  src="https://www.youtube.com/embed/XCawU6BE8P8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Update: Blogosphere coverage

I submitted my analysis to <a href="https://www.reddit.com/r/edm" target="_blank">/r/edm</a> and, to my biggest surprise, a few blogs have picked it up and published their own articles on it:

- EDM Analysis Predicts Summer 2016’s Biggest Hits
  <a href="https://www.youredm.com/2016/07/09/edm-analysis-predicts-summer-2016s-biggest-hits/" target="_blank">https://www.youredm.com/2016/07/09/edm-analysis-predicts-summer-2016s-biggest-hits/</a>

- Blogger presents YouTube analytics of top EDM channels from last year
  <a href="https://dancingastronaut.com/2016/07/fan-analyzes-365-days-edm-youtube/" target="_blank">https://dancingastronaut.com/2016/07/fan-analyzes-365-days-edm-youtube/</a>

- New EDM Study Predicts the Top 10 Tracks that Will Dominate the Summer of 2016
  <a href="http://edmnations.com/new-edm-study-predicts-the-top-10-tracks-that-will-dominate-the-summer-of-2016/" target="_blank">http://edmnations.com/new-edm-study-predicts-the-top-10-tracks-that-will-dominate-the-summer-of-2016/</a>

- Study Shows 7% of EDM Tracks Go Viral
  <a href="https://web.archive.org/web/20170717133429/http://news.bpmsupreme.com/study-shows-7-edm-tracks-go-viral/" target="_blank">http://news.bpmsupreme.com/study-shows-7-edm-tracks-go-viral/</a>

## Appendix

### List #1: Top 50 Most viewed EDM Songs (July 2015 – July 2016)

<div class="songs-list">
  <table id="most-popular-uploads-absolute">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Uploader</th>
        <th>Upload date</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>
          <a href="https://www.youtube.com/watch?v=cedoBlUvBlI" target="_blank" class="hide-icon">Era Istrefi – Bonbon</a>
        </td>
        <td>ultrarecords</td>
        <td>Mar 7, 2016</td>
        <td>85.01M</td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <a href="https://www.youtube.com/watch?v=RYzQvj3icjs" target="_blank" class="hide-icon">Omi – Hula Hoop</a>
        </td>
        <td>ultrarecords</td>
        <td>Sep 16, 2015</td>
        <td>53.02M</td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Bkj3IVIO2Os" target="_blank" class="hide-icon">Stereoact feat. Kerstin Ott – Die Immer Lacht</a>
        </td>
        <td>kontor</td>
        <td>Dec 14, 2015</td>
        <td>49.03M</td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          <a href="https://www.youtube.com/watch?v=2_wpOmM1d8w" target="_blank" class="hide-icon">Benny Benassi & Chris Brown – Paradise</a>
        </td>
        <td>ultrarecords</td>
        <td>Apr 7, 2016</td>
        <td>41.49M</td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          <a href="https://www.youtube.com/watch?v=0OoqRkETcl0" target="_blank" class="hide-icon">OMI feat. Nicky Jam – Cheerleader</a>
        </td>
        <td>ultrarecords</td>
        <td>Jul 31, 2015</td>
        <td>27.69M</td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Cbvqv19Nf0E" target="_blank" class="hide-icon">Tiësto & Don Diablo – Chemicals</a>
        </td>
        <td>spinninrec</td>
        <td>Sep 23, 2015</td>
        <td>26.63M</td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <a href="https://www.youtube.com/watch?v=OORoOGY8D2M" target="_blank" class="hide-icon">Cheat Codes x Kris Kross Amsterdam – SEX</a>
        </td>
        <td>spinninrec</td>
        <td>Feb 19, 2016</td>
        <td>25.82M</td>
      </tr>
      <tr>
        <td>8</td>
        <td>
          <a href="https://www.youtube.com/watch?v=USVg_E7r20g" target="_blank" class="hide-icon">R3hab & Headhunterz – Won’t Stop Rocking</a>
        </td>
        <td>spinninrec</td>
        <td>Oct 23, 2015</td>
        <td>25.18M</td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          <a href="https://www.youtube.com/watch?v=LeMLVEJLruQ" target="_blank" class="hide-icon">Gestört aber GeiL feat. Sebastian Hämer – Ich & Du</a>
        </td>
        <td>kontor</td>
        <td>Oct 8, 2015</td>
        <td>21.37M</td>
      </tr>
      <tr>
        <td>10</td>
        <td>
          <a href="https://www.youtube.com/watch?v=r6E3J4GPpjc" target="_blank" class="hide-icon">Don Diablo – On My Mind</a>
        </td>
        <td>spinninrec</td>
        <td>Jul 27, 2015</td>
        <td>21.24M</td>
      </tr>
      <tr>
        <td>11</td>
        <td>
          <a href="https://www.youtube.com/watch?v=S0J07N7smd8" target="_blank" class="hide-icon">DJ Antoine feat. Akon – Holiday</a>
        </td>
        <td>kontor</td>
        <td>Jul 3, 2015</td>
        <td>19.73M</td>
      </tr>
      <tr>
        <td>12</td>
        <td>
          <a href="https://www.youtube.com/watch?v=dU3r68jWp0w" target="_blank" class="hide-icon">DVBBS – Never Leave</a>
        </td>
        <td>spinninrec</td>
        <td>Oct 2, 2015</td>
        <td>19.16M</td>
      </tr>
      <tr>
        <td>13</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Traf1RVHimk" target="_blank" class="hide-icon">OMI – Cheerleader (Felix Jaehn Remix)</a>
        </td>
        <td>ultrarecords</td>
        <td>Jul 22, 2015</td>
        <td>19.10M</td>
      </tr>
      <tr>
        <td>14</td>
        <td>
          <a href="https://www.youtube.com/watch?v=g2rdrNONy7k" target="_blank" class="hide-icon">Dzeko & Torres – L’Amour Toujours (Tiësto Edit) </a>
        </td>
        <td>spinninrec</td>
        <td>Sep 8, 2015</td>
        <td>17.04M</td>
      </tr>
      <tr>
        <td>15</td>
        <td>
          <a href="https://www.youtube.com/watch?v=TSaacuKAoD4" target="_blank" class="hide-icon">Eva Simons feat. Konshens – Policeman</a>
        </td>
        <td>kontor</td>
        <td>Jul 2, 2015</td>
        <td>16.02M</td>
      </tr>
      <tr>
        <td>16</td>
        <td>
          <a href="https://www.youtube.com/watch?v=KlJAiwwGHMg" target="_blank" class="hide-icon">KSHMR & Marnik – Bazaar</a>
        </td>
        <td>spinninrec</td>
        <td>Dec 11, 2015</td>
        <td>13.76M</td>
      </tr>
      <tr>
        <td>17</td>
        <td>
          <a href="https://www.youtube.com/watch?v=klIF0nhsxxM" target="_blank" class="hide-icon">Tiësto & The Chainsmokers – Split (Only U)</a>
        </td>
        <td>spinninrec</td>
        <td>Sep 3, 2015</td>
        <td>13.08M</td>
      </tr>
      <tr>
        <td>18</td>
        <td>
          <a href="https://www.youtube.com/watch?v=HIJ5XvZeb-k" target="_blank" class="hide-icon">Diplo & Sleepy Tom – Be Right There</a>
        </td>
        <td>pandoramuslc</td>
        <td>Sep 1, 2015</td>
        <td>12.92M</td>
      </tr>
      <tr>
        <td>19</td>
        <td>
          <a href="https://www.youtube.com/watch?v=xIKoXfvIztg" target="_blank" class="hide-icon">DVBBS – Raveheart</a>
        </td>
        <td>spinninrec</td>
        <td>Aug 3, 2015</td>
        <td>12.42M</td>
      </tr>
      <tr>
        <td>20</td>
        <td>
          <a href="https://www.youtube.com/watch?v=souJM4aCk6w" target="_blank" class="hide-icon">Tujamo – Drop That Low (When I Dip)</a>
        </td>
        <td>spinninrec</td>
        <td>Mar 21, 2016</td>
        <td>11.98M</td>
      </tr>
      <tr>
        <td>21</td>
        <td>
          <a href="https://www.youtube.com/watch?v=rQ7tMWOCQlM" target="_blank" class="hide-icon">Mahmut Orhan feat. Sena Sener – Feel</a>
        </td>
        <td>ultrarecords</td>
        <td>Apr 12, 2016</td>
        <td>11.27M</td>
      </tr>
      <tr>
        <td>22</td>
        <td>
          <a href="https://www.youtube.com/watch?v=LzVGvfBLEq0" target="_blank" class="hide-icon">KSHMR and BASSJACKERS feat. SIRAH – Memories</a>
        </td>
        <td>spinninrec</td>
        <td>Aug 31, 2015</td>
        <td>10.78M</td>
      </tr>
      <tr>
        <td>23</td>
        <td>
          <a href="https://www.youtube.com/watch?v=aUWYDaVp92I" target="_blank" class="hide-icon">Kygo feat. Maty Noyes – Stay</a>
        </td>
        <td>ultrarecords</td>
        <td>Dec 3, 2015</td>
        <td>10.71M</td>
      </tr>
      <tr>
        <td>24</td>
        <td>
          <a href="https://www.youtube.com/watch?v=ux9vr4xfWj4" target="_blank" class="hide-icon">KSHMR feat. Sidnie Tipton – Wildcard</a>
        </td>
        <td>spinninrec</td>
        <td>Apr 8, 2016</td>
        <td>10.70M</td>
      </tr>
      <tr>
        <td>25</td>
        <td>
          <a href="https://www.youtube.com/watch?v=k0rwzGdWb68" target="_blank" class="hide-icon">Martin Garrix – Break Through The Silence</a>
        </td>
        <td>spinninrec</td>
        <td>Jul 13, 2015</td>
        <td>9.14M</td>
      </tr>
      <tr>
        <td>26</td>
        <td>
          <a href="https://www.youtube.com/watch?v=rRry3DEaCgE" target="_blank" class="hide-icon">Martin Garrix – Dragon</a>
        </td>
        <td>spinninrec</td>
        <td>Jul 6, 2015</td>
        <td>8.92M</td>
      </tr>
      <tr>
        <td>27</td>
        <td>
          <a href="https://www.youtube.com/watch?v=bFKSXvH8DuU" target="_blank" class="hide-icon">Rico Bernasconi & Tuklan – Ebony Eyes</a>
        </td>
        <td>kontor</td>
        <td>Jul 29, 2015</td>
        <td>8.32M</td>
      </tr>
      <tr>
        <td>28</td>
        <td>
          <a href="https://www.youtube.com/watch?v=dy1y4-_xh-8" target="_blank" class="hide-icon">Hardwell feat. Jason Derulo – Follow Me</a>
        </td>
        <td>ultrarecords</td>
        <td>Sep 30, 2015</td>
        <td>8.21M</td>
      </tr>
      <tr>
        <td>29</td>
        <td>
          <a href="https://www.youtube.com/watch?v=EJN3VgAW9B8" target="_blank" class="hide-icon">Omi feat. Nicky Jam – Cheerleader</a>
        </td>
        <td>ultrarecords</td>
        <td>Aug 19, 2015</td>
        <td>7.98M</td>
      </tr>
      <tr>
        <td>30</td>
        <td>
          <a href="https://www.youtube.com/watch?v=tuH2XTJ0HEI" target="_blank" class="hide-icon">Basto – Hold You</a>
        </td>
        <td>kontor</td>
        <td>Jul 9, 2015</td>
        <td>7.96M</td>
      </tr>
      <tr>
        <td>31</td>
        <td>
          <a href="https://www.youtube.com/watch?v=a52Ul2AM92c" target="_blank" class="hide-icon">Galantis – No Money</a>
        </td>
        <td>pandoramuslc</td>
        <td>Apr 4, 2016</td>
        <td>7.90M</td>
      </tr>
      <tr>
        <td>32</td>
        <td>
          <a href="https://www.youtube.com/watch?v=kQFywYvqhd0" target="_blank" class="hide-icon">R3hab & Quintino – Freak</a>
        </td>
        <td>spinninrec</td>
        <td>Mar 11, 2016</td>
        <td>7.87M</td>
      </tr>
      <tr>
        <td>33</td>
        <td>
          <a href="https://www.youtube.com/watch?v=6H1iW9z60fQ" target="_blank" class="hide-icon">The King’s Son feat. Shaggy – I’m Not Rich</a>
        </td>
        <td>ultrarecords</td>
        <td>Nov 13, 2015</td>
        <td>7.65M</td>
      </tr>
      <tr>
        <td>34</td>
        <td>
          <a href="https://www.youtube.com/watch?v=IlyVdjEQQRY" target="_blank" class="hide-icon">OMI feat. AronChupa – Drop In The Ocean</a>
        </td>
        <td>ultrarecords</td>
        <td>Jan 14, 2016</td>
        <td>7.59M</td>
      </tr>
      <tr>
        <td>35</td>
        <td>
          <a href="https://www.youtube.com/watch?v=9cBtJYI6itg" target="_blank" class="hide-icon">Deorro feat. Elvis Crespo – Bailar </a>
        </td>
        <td>ultrarecords</td>
        <td>Apr 26, 2016</td>
        <td>7.26M</td>
      </tr>
      <tr>
        <td>36</td>
        <td>
          <a href="https://www.youtube.com/watch?v=HzCazh3raN0" target="_blank" class="hide-icon">Tiësto & Oliver Heldens – Wombass</a>
        </td>
        <td>spinninrec</td>
        <td>Nov 11, 2015</td>
        <td>6.95M</td>
      </tr>
      <tr>
        <td>37</td>
        <td>
          <a href="https://www.youtube.com/watch?v=J91uMhwU7jM" target="_blank" class="hide-icon">DJ Antoine feat. Akon – Holiday</a>
        </td>
        <td>kontor</td>
        <td>Sep 7, 2015</td>
        <td>6.93M</td>
      </tr>
      <tr>
        <td>38</td>
        <td>
          <a href="https://www.youtube.com/watch?v=wD5yKGhuzqY" target="_blank" class="hide-icon">R3HAB & KSHMR – Strong</a>
        </td>
        <td>spinninrec</td>
        <td>Nov 19, 2015</td>
        <td>6.70M</td>
      </tr>
      <tr>
        <td>39</td>
        <td>
          <a href="https://www.youtube.com/watch?v=OTAqCmGXf7s" target="_blank" class="hide-icon">DVBBS & Shaun Frank – LA LA LAND</a>
        </td>
        <td>spinninrec</td>
        <td>Apr 7, 2016</td>
        <td>6.65M</td>
      </tr>
      <tr>
        <td>40</td>
        <td>
          <a href="https://www.youtube.com/watch?v=71h1TBaEpwM" target="_blank" class="hide-icon">Tiësto & Tony Junior – Get Down</a>
        </td>
        <td>spinninrec</td>
        <td>Dec 29, 2015</td>
        <td>6.36M</td>
      </tr>
      <tr>
        <td>41</td>
        <td>
          <a href="https://www.youtube.com/watch?v=GOuHbx7krCk" target="_blank" class="hide-icon">Shaun Frank & KSHMR – Heaven</a>
        </td>
        <td>spinninrec</td>
        <td>Oct 19, 2015</td>
        <td>6.33M</td>
      </tr>
      <tr>
        <td>42</td>
        <td>
          <a href="https://www.youtube.com/watch?v=6MReeYAcEUM" target="_blank" class="hide-icon">ItaloBrothers – Sleep When We’re Dead</a>
        </td>
        <td>zoolandmusicgmbh</td>
        <td>Aug 27, 2015</td>
        <td>6.27M</td>
      </tr>
      <tr>
        <td>43</td>
        <td>
          <a href="https://www.youtube.com/watch?v=kAwSQq44O_U" target="_blank" class="hide-icon">Steve Aoki & Walk Off The Earth – Home We’ll Go</a>
        </td>
        <td>ultrarecords</td>
        <td>Dec 21, 2015</td>
        <td>5.90M</td>
      </tr>
      <tr>
        <td>44</td>
        <td>
          <a href="https://www.youtube.com/watch?v=pJXOZWFnBfo" target="_blank" class="hide-icon">VINAI feat. Harrison – The Wave</a>
        </td>
        <td>spinninrec</td>
        <td>Jul 20, 2015</td>
        <td>5.83M</td>
      </tr>
      <tr>
        <td>45</td>
        <td>
          <a href="https://www.youtube.com/watch?v=J5lDFroE4zY" target="_blank" class="hide-icon">R3hab & Felix Snow feat. Madi – Care</a>
        </td>
        <td>spinninrec</td>
        <td>Apr 29, 2016</td>
        <td>5.55M</td>
      </tr>
      <tr>
        <td>46</td>
        <td>
          <a href="https://www.youtube.com/watch?v=aKQ9kavmryg" target="_blank" class="hide-icon">OMI – Hula Hoop</a>
        </td>
        <td>ultrarecords</td>
        <td>Aug 27, 2015</td>
        <td>5.22M</td>
      </tr>
      <tr>
        <td>47</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Xy3rcoz-8rU" target="_blank" class="hide-icon">Shoffy feat. Lincoln Jesser – Takes My Body Higher</a>
        </td>
        <td>spinninrec</td>
        <td>Apr 29, 2016</td>
        <td>5.18M</td>
      </tr>
      <tr>
        <td>48</td>
        <td>
          <a href="https://www.youtube.com/watch?v=av_J7bgUSKI" target="_blank" class="hide-icon">SASH! vs Olly James – Ecuador</a>
        </td>
        <td>spinninrec</td>
        <td>Jan 27, 2016</td>
        <td>5.18M</td>
      </tr>
      <tr>
        <td>49</td>
        <td>
          <a href="https://www.youtube.com/watch?v=fHjF8Nw-mco" target="_blank" class="hide-icon">R3hab & BURNS – Near Me</a>
        </td>
        <td>spinninrec</td>
        <td>Jan 29, 2016</td>
        <td>5.13M</td>
      </tr>
      <tr>
        <td>50</td>
        <td>
          <a href="https://www.youtube.com/watch?v=0jISGYEDfNs" target="_blank" class="hide-icon">Bassjackers & Joe Ghost ft. MOTi – On The Floor Like</a>
        </td>
        <td>spinninrec</td>
        <td>Mar 14, 2016</td>
        <td>5.01M</td>
      </tr>
      <tr>
        <td colspan="5" class="footer">Check the list as a <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-logo.png" class="youtube-logo" /> <a href="https://www.youtube.com/playlist?list=PL4ErO_7_XTSalj06U6HLBEGGtvE0xgtrP" target="_blank" class="small">YouTube playlist</a>.</td>
      </tr>
    </tbody>
  </table>
</div>

### List #2: Top 50 EDM Songs of Summer 2016 (Prediction)

<div class="songs-list">
  <table id="most-popular-uploads-relative">
    <tbody>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Uploader</th>
        <th>Age</th>
        <th>Views</th>
      </tr>
      <tr>
        <td>1</td>
        <td>
          <a href="https://www.youtube.com/watch?v=YUMdd27gYbk" target="_blank" class="hide-icon">Headhunterz & KSHMR – Dharma</a>
        </td>
        <td>spinninrec</td>
        <td>2</td>
        <td>618.13k</td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <a href="https://www.youtube.com/watch?v=CictPbTWkBU" target="_blank" class="hide-icon">VINAI feat. Anjulie – Into The Fire</a>
        </td>
        <td>spinninrec</td>
        <td>1</td>
        <td>223.36k</td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <a href="https://www.youtube.com/watch?v=rQ7tMWOCQlM" target="_blank" class="hide-icon">Mahmut Orhan feat. Sena Sener – Feel</a>
        </td>
        <td>ultrarecords</td>
        <td>79</td>
        <td>11.27M</td>
      </tr>
      <tr>
        <td>4</td>
        <td>
          <a href="https://www.youtube.com/watch?v=5txjj5awqS0" target="_blank" class="hide-icon">Yves V Vs Dimitri Vangelis & Wyman – Daylight</a>
        </td>
        <td>spinninrec</td>
        <td>3</td>
        <td>435.81k</td>
      </tr>
      <tr>
        <td>5</td>
        <td>
          <a href="https://www.youtube.com/watch?v=ux9vr4xfWj4" target="_blank" class="hide-icon">KSHMR feat. Sidnie Tipton – Wildcard</a>
        </td>
        <td>spinninrec</td>
        <td>83</td>
        <td>10.70M</td>
      </tr>
      <tr>
        <td>6</td>
        <td>
          <a href="https://www.youtube.com/watch?v=_zK8HGVwcX0" target="_blank" class="hide-icon">R3hab – Sakura</a>
        </td>
        <td>spinninrec</td>
        <td>20</td>
        <td>2.50M</td>
      </tr>
      <tr>
        <td>7</td>
        <td>
          <a href="https://www.youtube.com/watch?v=knnf2Aw6kMU" target="_blank" class="hide-icon">Ookay – Thief</a>
        </td>
        <td>pandoramuslc</td>
        <td>0</td>
        <td>50.00k</td>
      </tr>
      <tr>
        <td>8</td>
        <td>
          <a href="https://www.youtube.com/watch?v=9cBtJYI6itg" target="_blank" class="hide-icon">Deorro feat. Elvis Crespo – Bailar </a>
        </td>
        <td>ultrarecords</td>
        <td>65</td>
        <td>7.26M</td>
      </tr>
      <tr>
        <td>9</td>
        <td>
          <a href="https://www.youtube.com/watch?v=4Kh93U_yLyI" target="_blank" class="hide-icon">Steve Aoki feat. Rich The Kid & ILoveMakonnen – How Else</a>
        </td>
        <td>ultrarecords</td>
        <td>1</td>
        <td>95.24k</td>
      </tr>
      <tr>
        <td>10</td>
        <td>
          <a href="https://www.youtube.com/watch?v=yiNrVLIOOtw" target="_blank" class="hide-icon">Florian Paetzold – Easy</a>
        </td>
        <td>spinninrec</td>
        <td>5</td>
        <td>519.33k</td>
      </tr>
      <tr>
        <td>11</td>
        <td>
          <a href="https://www.youtube.com/watch?v=ocLD1FW0WKg" target="_blank" class="hide-icon">Bassjackers & Jay Hardway – El Mariachi</a>
        </td>
        <td>spinninrec</td>
        <td>10</td>
        <td>949.99k</td>
      </tr>
      <tr>
        <td>12</td>
        <td>
          <a href="https://www.youtube.com/watch?v=LSj4nE0y85s" target="_blank" class="hide-icon">Moby – Go (HI-LO Remix)</a>
        </td>
        <td>spinninrec</td>
        <td>5</td>
        <td>473.59k</td>
      </tr>
      <tr>
        <td>13</td>
        <td>
          <a href="https://www.youtube.com/watch?v=a52Ul2AM92c" target="_blank" class="hide-icon">Galantis – No Money</a>
        </td>
        <td>pandoramuslc</td>
        <td>87</td>
        <td>7.90M</td>
      </tr>
      <tr>
        <td>14</td>
        <td>
          <a href="https://www.youtube.com/watch?v=J5lDFroE4zY" target="_blank" class="hide-icon">R3hab & Felix Snow feat. Madi – Care</a>
        </td>
        <td>spinninrec</td>
        <td>62</td>
        <td>5.55M</td>
      </tr>
      <tr>
        <td>15</td>
        <td>
          <a href="https://www.youtube.com/watch?v=dKWssskzCSU" target="_blank" class="hide-icon">Nicky Romero – The Moment (Novell)</a>
        </td>
        <td>pandoramuslc</td>
        <td>1</td>
        <td>126.39k</td>
      </tr>
      <tr>
        <td>16</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Xy3rcoz-8rU" target="_blank" class="hide-icon">Shoffy feat. Lincoln Jesser – Takes My Body Higher</a>
        </td>
        <td>spinninrec</td>
        <td>62</td>
        <td>5.18M</td>
      </tr>
      <tr>
        <td>17</td>
        <td>
          <a href="https://www.youtube.com/watch?v=wrKvY8Gnyi0" target="_blank" class="hide-icon">Lush & Simon x Carta feat. Funkz – Th3 0ne</a>
        </td>
        <td>spinninrec</td>
        <td>3</td>
        <td>253.13k</td>
      </tr>
      <tr>
        <td>18</td>
        <td>
          <a href="https://www.youtube.com/watch?v=OTAqCmGXf7s" target="_blank" class="hide-icon">DVBBS & Shaun Frank – LA LA LAND</a>
        </td>
        <td>spinninrec</td>
        <td>84</td>
        <td>6.65M</td>
      </tr>
      <tr>
        <td>19</td>
        <td>
          <a href="https://www.youtube.com/watch?v=-lcmCwEHut8" target="_blank" class="hide-icon">Bali Bandits – Toink</a>
        </td>
        <td>spinninrec</td>
        <td>2</td>
        <td>178.89k</td>
      </tr>
      <tr>
        <td>20</td>
        <td>
          <a href="https://www.youtube.com/watch?v=kQFywYvqhd0" target="_blank" class="hide-icon">R3hab & Quintino – Freak</a>
        </td>
        <td>spinninrec</td>
        <td>111</td>
        <td>7.87M</td>
      </tr>
      <tr>
        <td>21</td>
        <td>
          <a href="https://www.youtube.com/watch?v=h92IGodrTUo" target="_blank" class="hide-icon">Firebeatz & Fafaq – Sir Duke</a>
        </td>
        <td>spinninrec</td>
        <td>6</td>
        <td>459.04k</td>
      </tr>
      <tr>
        <td>22</td>
        <td>
          <a href="https://www.youtube.com/watch?v=e8zB7QKU87c" target="_blank" class="hide-icon">Headhunterz & Skytech – Kundalini</a>
        </td>
        <td>spinninrec</td>
        <td>52</td>
        <td>3.60M</td>
      </tr>
      <tr>
        <td>23</td>
        <td>
          <a href="https://www.youtube.com/watch?v=n7dLt6uy-Fg" target="_blank" class="hide-icon">Janieck – Feel The Love (Sam Feldt Edit)</a>
        </td>
        <td>spinninrec</td>
        <td>55</td>
        <td>3.82M</td>
      </tr>
      <tr>
        <td>24</td>
        <td>
          <a href="https://www.youtube.com/watch?v=zcIsBtKySWY" target="_blank" class="hide-icon">Eva Simons & Sidney Samson – Escape From Love</a>
        </td>
        <td>spinninrec</td>
        <td>22</td>
        <td>1.45M</td>
      </tr>
      <tr>
        <td>25</td>
        <td>
          <a href="https://www.youtube.com/watch?v=YXN_lNZZAZA" target="_blank" class="hide-icon">DJ Antoine & Timati feat. Grigory Leps – London</a>
        </td>
        <td>spinninrec</td>
        <td>35</td>
        <td>2.31M</td>
      </tr>
      <tr>
        <td>26</td>
        <td>
          <a href="https://www.youtube.com/watch?v=z26AfLhELbM" target="_blank" class="hide-icon">Nils van Zandt ft Emmaly Brown – Unified</a>
        </td>
        <td>happymusic</td>
        <td>31</td>
        <td>2.04M</td>
      </tr>
      <tr>
        <td>27</td>
        <td>
          <a href="https://www.youtube.com/watch?v=AEHwyt34T3I" target="_blank" class="hide-icon">Smash – Feel The Summer</a>
        </td>
        <td>kontor</td>
        <td>23</td>
        <td>1.46M</td>
      </tr>
      <tr>
        <td>28</td>
        <td>
          <a href="https://www.youtube.com/watch?v=uozgE83uG4o" target="_blank" class="hide-icon">Slushii – All For You</a>
        </td>
        <td>pandoramuslc</td>
        <td>2</td>
        <td>141.52k</td>
      </tr>
      <tr>
        <td>29</td>
        <td>
          <a href="https://www.youtube.com/watch?v=8Aj_VPE7B9w" target="_blank" class="hide-icon">Martin Garrix – Oops</a>
        </td>
        <td>pandoramuslc</td>
        <td>17</td>
        <td>1.04M</td>
      </tr>
      <tr>
        <td>30</td>
        <td>
          <a href="https://www.youtube.com/watch?v=eKH46ff1roc" target="_blank" class="hide-icon">Selena Gomez – Kill Em With Kindness (Felix Cartal Remix)</a>
        </td>
        <td>pandoramuslc</td>
        <td>4</td>
        <td>243.36k</td>
      </tr>
      <tr>
        <td>31</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Ey1_nkmS54g" target="_blank" class="hide-icon">Sam Feldt x Lucas & Steve feat. Wulf – Summer On You</a>
        </td>
        <td>spinninrec</td>
        <td>20</td>
        <td>1.14M</td>
      </tr>
      <tr>
        <td>32</td>
        <td>
          <a href="https://www.youtube.com/watch?v=uhlkafwFk_I" target="_blank" class="hide-icon">Don Diablo feat. DYU – Drifter</a>
        </td>
        <td>spinninrec</td>
        <td>30</td>
        <td>1.65M</td>
      </tr>
      <tr>
        <td>33</td>
        <td>
          <a href="https://www.youtube.com/watch?v=QP5_n5UmbHc" target="_blank" class="hide-icon">Bob Sinclar – Someone Who Needs Me </a>
        </td>
        <td>spinninrec</td>
        <td>73</td>
        <td>3.96M</td>
      </tr>
      <tr>
        <td>34</td>
        <td>
          <a href="https://www.youtube.com/watch?v=VzGSeWwNkLI" target="_blank" class="hide-icon">Kygo – Raging feat. Kodaline</a>
        </td>
        <td>ultrarecords</td>
        <td>90</td>
        <td>4.70M</td>
      </tr>
      <tr>
        <td>35</td>
        <td>
          <a href="https://www.youtube.com/watch?v=WrBi1vrcUrY" target="_blank" class="hide-icon">PBH & Jack Shizzle feat. Emilie Adams – Feel The Music</a>
        </td>
        <td>spinninrec</td>
        <td>3</td>
        <td>180.96k</td>
      </tr>
      <tr>
        <td>36</td>
        <td>
          <a href="https://www.youtube.com/watch?v=IOOWD_UjfVM" target="_blank" class="hide-icon">Tujamo ft. Inaya Day – Keep Pushin’</a>
        </td>
        <td>spinninrec</td>
        <td>7</td>
        <td>352.20k</td>
      </tr>
      <tr>
        <td>37</td>
        <td>
          <a href="https://www.youtube.com/watch?v=n8m0bRFIBlI" target="_blank" class="hide-icon">Muzzaik & Stadiumx – So Much Love</a>
        </td>
        <td>spinninrec</td>
        <td>44</td>
        <td>2.15M</td>
      </tr>
      <tr>
        <td>38</td>
        <td>
          <a href="https://www.youtube.com/watch?v=yZnUhW-SCwY" target="_blank" class="hide-icon">EDX – Roadkill (EDX’s Ibiza Sunrise Remix)</a>
        </td>
        <td>spinninrec</td>
        <td>17</td>
        <td>829.99k</td>
      </tr>
      <tr>
        <td>39</td>
        <td>
          <a href="https://www.youtube.com/watch?v=0mOqIsnqSqM" target="_blank" class="hide-icon">Firebeatz & Fafaq – Sir Duke (Festival Mix)</a>
        </td>
        <td>spinninrec</td>
        <td>16</td>
        <td>777.81k</td>
      </tr>
      <tr>
        <td>40</td>
        <td>
          <a href="https://www.youtube.com/watch?v=W32HW5xj0bM" target="_blank" class="hide-icon">Bob Marley feat. LVNDSCAPE & Bolier – Is This Love</a>
        </td>
        <td>spinninrec</td>
        <td>14</td>
        <td>636.25k</td>
      </tr>
      <tr>
        <td>41</td>
        <td>
          <a href="https://www.youtube.com/watch?v=0jISGYEDfNs" target="_blank" class="hide-icon">Bassjackers & Joe Ghost ft. MOTi – On The Floor Like</a>
        </td>
        <td>spinninrec</td>
        <td>108</td>
        <td>5.01M</td>
      </tr>
      <tr>
        <td>42</td>
        <td>
          <a href="https://www.youtube.com/watch?v=8kwngV4tvYw" target="_blank" class="hide-icon">Leroy Styles feat. Neil Ormandy – Can’t Let Go</a>
        </td>
        <td>spinninrec</td>
        <td>27</td>
        <td>1.25M</td>
      </tr>
      <tr>
        <td>43</td>
        <td>
          <a href="https://www.youtube.com/watch?v=fd-dd5gQZ4g" target="_blank" class="hide-icon">Burak Yeter – Happy</a>
        </td>
        <td>spinninrec</td>
        <td>4</td>
        <td>191.57k</td>
      </tr>
      <tr>
        <td>44</td>
        <td>
          <a href="https://www.youtube.com/watch?v=VJL_DlHmwzg" target="_blank" class="hide-icon">MOTi x Alpharock – Legends</a>
        </td>
        <td>spinninrec</td>
        <td>6</td>
        <td>242.17k</td>
      </tr>
      <tr>
        <td>45</td>
        <td>
          <a href="https://www.youtube.com/watch?v=yKH624_U50Q" target="_blank" class="hide-icon">Bob Marley feat. LVNDSCAPE & Bolier – Is This Love</a>
        </td>
        <td>spinninrec</td>
        <td>20</td>
        <td>837.68k</td>
      </tr>
      <tr>
        <td>46</td>
        <td>
          <a href="https://www.youtube.com/watch?v=NMXW9Q-yAAw" target="_blank" class="hide-icon">Stephen – Sincerely (Nikö Blank Remix)</a>
        </td>
        <td>pandoramuslc</td>
        <td>3</td>
        <td>135.67k</td>
      </tr>
      <tr>
        <td>47</td>
        <td>
          <a href="https://www.youtube.com/watch?v=Ou2eIHO41F0" target="_blank" class="hide-icon">Wishes – I Want To Be Alone With You</a>
        </td>
        <td>ultrarecords</td>
        <td>1</td>
        <td>53.90k</td>
      </tr>
      <tr>
        <td>48</td>
        <td>
          <a href="https://www.youtube.com/watch?v=1_y5Fa_Q9h0" target="_blank" class="hide-icon">Promise Land & Luciana – Rebound To The Beat</a>
        </td>
        <td>spinninrec</td>
        <td>9</td>
        <td>372.62k</td>
      </tr>
      <tr>
        <td>49</td>
        <td>
          <a href="https://www.youtube.com/watch?v=rabOaM2kh9c" target="_blank" class="hide-icon">Ryos ft. Karra – Where We Are</a>
        </td>
        <td>pandoramuslc</td>
        <td>6</td>
        <td>246.82k</td>
      </tr>
      <tr>
        <td>50</td>
        <td>
          <a href="https://www.youtube.com/watch?v=fikqx9k1ZK4" target="_blank" class="hide-icon">Kygo & Labrinth – Fragile</a>
        </td>
        <td>ultrarecords</td>
        <td>104</td>
        <td>4.02M</td>
      </tr>
      <tr>
        <td colspan="5" class="footer">Check the list as a <img src="/images/posts/365-days-of-electronic-dance-music-on-youtube/youtube-logo.png" class="youtube-logo" /> <a href="https://www.youtube.com/playlist?list=PL4ErO_7_XTSaAocC-uV3q1h9vPP7Y29Me" target="_blank" class="small">YouTube playlist</a>.</td>
      </tr>
    </tbody>
  </table>
</div>
