class Card {
  constructor({
    likesArray,
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
    likes3list,
  }) {
    this.slidePercent = 40;
    this.slideSpeed = 6;
    this.likes3list = likes3list;
    this.height = height;
    this.header = "Activity Likes";
    this.width = 500;
    this.likesArray = likesArray;
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
    if(likes3list){
      this.height = 150;
      this.width = 700;
    }
  }
  render() {
    return `
  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}" role="img">
  <style>
  svg#Layer_1{
    min-width:250px;
    text-align: -webkit-center;
    text-align-last: start;
    OVERFLOW: HIDDEN;
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
    border:${this.br};
    border-color:${this.brColor};
    min-width: ${this.width}px;
    max-width: ${this.width}px;
    min-height: ${this.height}px;
    max-height: ${this.height}px;
  }
  .namediv{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow:hidden;
    margin-left: -10px;
    padding-right: 5px;
    padding-left: 1px;
    width: 120px;
    -webkit-mask-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,1) 2px, rgba(0,0,0,1), 112px, rgba(0,0,0,0) 117px, rgba(0,0,0,0));
  }
  .namedetails {
    width: min-content;
    ${this.nameheight}
  }
  #username-1 {
    ${this.likesArray[0].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-2 {
    ${this.likesArray[1].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-3 {
    ${this.likesArray[2].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-4 {
    ${this.likesArray[3].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-5 {
    ${this.likesArray[4].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-6 {
    ${this.likesArray[5].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-7 {
    ${this.likesArray[6].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-8 {
    ${this.likesArray[7].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-9 {
    ${this.likesArray[8].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #username-10 {
    ${this.likesArray[9].name.length > 12 ? '-webkit-animation: marquee '+this.slideSpeed+'s linear infinite alternate;animation: marquee '+this.slideSpeed+'s linear infinite alternate;' : ""}
  }
  #bgcolor{
    display: grid;
    grid-template-columns: repeat(auto-fill,210px);
    justify-content: space-evenly;
    ${this.likes3list !== 1 ? 'margin-top: 3px' : ""}
    ${this.likes3list === 1 ? 'margin-top: 345px' : ""}
  }
  .cls-3 {
    font-size: 16px;
    color: ${this.textColor};
    font-family: SegoeUI-Bold, Segoe UI;
    font-weight: 700;
    text-wrap: nowrap;
  }
  .cls-4 {
    color: ${this.detailsColor};
    font-family: SegoeUI, Segoe UI;
    font-size: 13px;
    text-wrap:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .imgDiv {
    padding:20px;
    margin-left: -7px;
    height: 60px;
    width: 60px;
  }
  .likeDiv{
    display: flex;
    align-items: center;
    height:86px;
    justify-content: flex-start;
    ${this.br ? 'border-radius:2px' : ""}
  }
  .likeDiv2{
    padding:0px 25px 0px 25px;
  }
  .detailimgDiv {
    padding: 5px 5px 5px 6px;
    height: 28px;
    width: 28px;
    align-self: center;
  }
  img#pfp-image {
    border-radius: 50px;
    object-fit: cover;
    background-color:${this.bgColor}
  }
  #header{
    text-align-last: center;
    font-size: 22px;
    padding-bottom: 6px;
    ${this.likes3list !== 1 ? 'margin-top: 6px;margin-bottom: 4px;' : ""}
    ${this.likes3list === 1 ? 'position: absolute;top: 10px;left: 0;right: 0;' : ""}
  }
  a{
    text-decoration:none
  }
  a.user{
    background-color:${this.fgColor};
    border-radius:6px;
    ${this.likes3list !== 1 ? 'margin-bottom:10px' : ""}
    ${this.likes3list === 1 ? 'margin-bottom:12px' : ""}
  }
  img#detail-image {
    border-radius: 4px;
    object-fit: cover;
  }
  @-moz-keyframes marquee {
    0% {-moz-transform: translateX(0%);}
    33% {-moz-transform: translateX(0%);}
    100% {-moz-transform: translateX(-${this.slidePercent}%);}
  }
  @-webkit-keyframes marquee {
    0% {-webkit-transform: translateX(0%);}
    33% {-webkit-transform: translateX(0%);}
    100% {-webkit-transform: translateX(-${this.slidePercent}%);}
  }
  @keyframes marquee {
    0% {-moz-transform: translateX(0%);-webkit-transform: translateX(0%);transform: translateX(0%);}
    33% {-moz-transform: translateX(0%);-webkit-transform: translateX(0%);transform: translateX(0%);}
    100% {-moz-transform: translateX(-${this.slidePercent}%);-webkit-transform: translateX-${this.slidePercent}%);transform: translateX(-${this.slidePercent}%);}
  }
  </style>
<foreignObject height="100%" width="100%">
<div id="base-shape" height="97px" width="100%" class="cls-main" xmlns="http://www.w3.org/1999/xhtml">
<div class="cls-3" id="header" xmlns="http://www.w3.org/1999/xhtml" >${this.header}</div>
<div id="bgcolor">

<a class="user" href="https://anilist.com/user/${this.likesArray[0].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[0].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-1"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[0].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[0].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[1].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[1].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-2"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[1].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[1].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[2].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[2].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-3"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[2].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[2].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[3].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[3].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-4"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[3].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[3].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[4].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[4].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-5"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[4].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[4].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[5].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[5].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-6"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[5].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[5].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[6].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[6].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-7"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[6].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[6].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[7].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[7].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-8"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[7].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[7].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[8].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[8].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-9"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[8].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[8].count}</div></div></div></a>

<a class="user" href="https://anilist.com/user/${this.likesArray[9].name}">
<div class="likeDiv">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.likesArray[9].avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-10"  xmlns="http://www.w3.org/1999/xhtml" >${this.likesArray[9].name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.likesArray[9].count}</div></div></div></a>
  </div>
  </div>
  </foreignObject>
  </svg>`;
  }
}
module.exports = Card;