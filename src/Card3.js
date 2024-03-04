  class Card {
    constructor({
      currently,
      scoreArray,
      scoreYear,
      brRadius,
      fg_opacity,
      displayName,
      bgColor,
      textColor,
      detailsColor,
      br,
      brColor,
      fgColor,
      height,
    }) {
      this.textLimit = 48;
      this.slidePercent = 80;
      this.slideSpeed = 8;
      this.slideSpeed2 = 8;
      this.height = height;
      this.header = currently ? "Current Ratings" : scoreYear+" Top Ratings";
      this.width = 500;
      this.genre_1 = scoreArray[0] ? scoreArray[0] : null;
      this.genre_2 = scoreArray[1] ? scoreArray[1] : null;
      this.genre_3 = scoreArray[2] ? scoreArray[2] : null;
      this.genre_4 = scoreArray[3] ? scoreArray[3] : null;
      this.genre_5 = scoreArray[4] ? scoreArray[4] : null;
      this.genre_6 = scoreArray[5] ? scoreArray[5] : null;
      this.genre_7 = scoreArray[6] ? scoreArray[6] : null;
      this.genre_8 = scoreArray[7] ? scoreArray[7] : null;
      this.genre_9 = scoreArray[8] ? scoreArray[8] : null;
      this.genre_10 = scoreArray[9] ? scoreArray[9] : null;
      this.brRadius = brRadius;
      this.fgopacity = fg_opacity;
      this.oveflows = "";
      this.displayName = displayName;
      this.bgColor = bgColor;
      this.textColor = textColor;
      this.detailsColor = detailsColor;
      this.br = br;
      this.brColor = brColor;
      this.fgColor = fgColor;
      this.nameheight = "height: 24px";
      this.defname = 'height: 100%;align-self: start;width: 64px;-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;'
    }
    render() {
      return `
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" role="img">
    <style>
    svg#Layer_1{
      min-width:${this.width}px;
      min-height:${this.height}px;
      text-align: -webkit-center;
      text-align-last: start;
      OVERFLOW: hidden;
    }
    .cls-main{
      background:${this.bgColor};
      border-radius: ${this.brRadius};
      height: -webkit-fill-available;
      display: flex;
      overflow:hidden;
      align-items: center;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      -webkit-background-clip: padding-box;
      -moz-background-clip: padding; 
      background-clip: padding-box;
      padding: 20px;
      border:${this.br};
      border-color:${this.brColor};
      min-width: 460px;
      min-height: ${this.genre_6? "410px" : "190px"};
      max-width: 460px;
      max-height: 410px
    }
    #bgcolor{
      display: grid;
      grid-template-columns: repeat(auto-fill,85px);
      justify-content: space-evenly;
    }
    .namedetails {
      line-height: 12.1px;
      padding-bottom: 2px;
      padding-top: 1px;
      align-items: center;
      display: inline-flex;
      justify-content: center;
      height: 48px;
      min-height:48px;
      max-height:48px;
      width: 65px;
      min-width: 65px;
      max-width: 65px;
      -webkit-mask-image: linear-gradient(to bottom,rgb(0 0 0 / 0%),rgba(0,0,0,1) 5px, rgba(0,0,0,1) 48px, rgba(0,0,0,0));
    }
    .cls-3 {
      font-size: 9px!important;
      color: ${this.textColor};
      font-family: SegoeUI-Bold, Segoe UI;
      font-weight: 700;
      text-align-last: center;
    }
    .cls-4 {
      color: ${this.detailsColor};
      font-family: SegoeUI, Segoe UI;
      font-size: 8px;
      text-wrap:nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display:flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    .imgDiv {
      display: flex;
      justify-content: space-around;
    }
    .test{
    background-color:${this.fgColor};
      height: 150px;
      max-height: 150px;
      min-height: 150px;
      padding: 10px;
      border-radius: 4px;
      margin-top:15px;
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    img#pfp-image {
      height: 70px;
      width: 50px;
      border-radius: 4px;
      background-color:${this.fgColor}
    }
    #header{
      text-align-last: center;
      font-size: 22px!important;
      top: -3px;
      position: relative;
      }
    a{
      text-decoration:none
    }
    b.value{
      font-size:12px;
      color: ${this.textColor};
    }
    @-moz-keyframes marquee {
      0% {-moz-transform: translateY(0%);}
      33% {-moz-transform: translateY(0%);}
      100% {-moz-transform: translateY(-${this.slidePercent}%);}
    }
    @-webkit-keyframes marquee {
      0% {-webkit-transform: translateY(0%);}
      33% {-webkit-transform: translateY(0%);}
      100% {-webkit-transform: translateY(-${this.slidePercent}%);}
    }
    @keyframes marquee {
      0% {-moz-transform: translateY(0%);-webkit-transform: translateY(0%);transform: translateY(0%);}
      33% {-moz-transform: translateY(0%);-webkit-transform: translateY(0%);transform: translateY(0%);}
      100% {-moz-transform: translateY(-${this.slidePercent}%);-webkit-transform: translateY-${this.slidePercent}%);transform: translateY(-${this.slidePercent}%);}
    }
    #name1{
      ${this.genre_1 && this.genre_1.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name2{
      ${this.genre_2 &&this.genre_2.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name3{
      ${this.genre_3 &&this.genre_3.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name4{
      ${this.genre_4 &&this.genre_4.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name5{
      ${this.genre_5 &&this.genre_5.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name6{
      ${this.genre_6 &&this.genre_6.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name7{
      ${this.genre_7 &&this.genre_7.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name8{
      ${this.genre_8 &&this.genre_8.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name9{
      ${this.genre_9 &&this.genre_9.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    #name10{
      ${this.genre_10 &&this.genre_10.media.title.romaji.length >= this.textLimit ? this.defname : ""}
    }
    }
    </style>
    <foreignObject height="${this.height}px" width="${this.width}px">
    <div id="base-shape" height="${this.height}px" width="${this.width}px" class="cls-main" xmlns="http://www.w3.org/1999/xhtml">

    <div class="cls-3" id="header" xmlns="http://www.w3.org/1999/xhtml" >${this.header}</div>
    <div id="bgcolor">
    ${this.genre_1 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_1.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_1.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3" id="name1"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_1.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_1.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_2 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_2.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_2.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3" id="name2"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_2.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_2.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_3 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_3.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_3.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3" id="name3" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_3.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_3.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_4 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_4.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_4.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3" id="name4" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_4.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_4.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_5 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_5.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_5.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3"  id="name5" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_5.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_5.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_6 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_6.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_6.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3" id="name6" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_6.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_6.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_7 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_7.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_7.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails" >
    <div class="cls-3" id="name7" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_7.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_7.score}</b></div>
    </div>
    </div>`:""}
    ${this.genre_8 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_8.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_8.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails">
    <div class="cls-3"  id="name8"  xmlns="http://www.w3.org/1999/xhtml" >${this.genre_8.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_8.score}</b></div>
    </div>
    </div>
    `:""}
    ${this.genre_9 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_9.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_9.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails" >
    <div class="cls-3" id="name9" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_9.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_9.score}</b></div>
    </div>
    </div>
    `:""}
    ${this.genre_10 ? `
    <div class="test">
    <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
    <a href="${this.genre_10.media.siteUrl}"><img id="pfp-image" height="50px" width="35px" src="${this.genre_10.media.coverImage.medium}"/></a>
    </div>
    <div class="namedetails" >
    <div class="cls-3" id="name10" xmlns="http://www.w3.org/1999/xhtml" >${this.genre_10.media.title.romaji}</div></div>
    <div class="details" xmlns="http://www.w3.org/1999/xhtml">
    <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">Score<b class='value'>${this.genre_10.score}</b></div>
    </div>
    </div>
    `:""}
    </div>
    </div>
    </foreignObject>
    </svg>`;
    }
  }
  module.exports = Card;