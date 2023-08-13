class Card {
  constructor({
    like1, like2, like3, like4, like5, like6, like7, like8, like9, like10,
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
    this.likes3list = likes3list;
    this.height = height;
    this.header = "Activity Likes";
    this.width = 500;
    this.like_1_name = like1.name;
    this.like_1_avatar = like1.avatar;
    this.like_1_count = "Likes: " + like1.count;
    this.like_2_name = like2.name;
    this.like_2_avatar = like2.avatar;
    this.like_2_count = "Likes: " + like2.count;
    this.like_3_name = like3.name;
    this.like_3_avatar = like3.avatar;
    this.like_3_count = "Likes: " + like3.count;
    this.like_4_name = like4.name;
    this.like_4_avatar = like4.avatar;
    this.like_4_count = "Likes: " + like4.count;
    this.like_5_name = like5.name;
    this.like_5_avatar = like5.avatar;
    this.like_5_count = "Likes: " + like5.count;
    this.like_6_name = like6.name;
    this.like_6_avatar = like6.avatar;
    this.like_6_count = "Likes: " + like6.count;
    this.like_7_name = like7.name;
    this.like_7_avatar = like7.avatar;
    this.like_7_count = "Likes: " + like7.count;
    this.like_8_name = like8.name;
    this.like_8_avatar = like8.avatar;
    this.like_8_count = "Likes: " + like8.count;
    this.like_9_name = like9.name;
    this.like_9_avatar = like9.avatar;
    this.like_9_count = "Likes: " + like9.count;
    this.like_10_name = like10.name;
    this.like_10_avatar = like10.avatar;
    this.like_10_count = "Likes: " + like10.count;
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
    margin-left: -5px;
    margin-top: -5px
  }
  #bgcolor{
    display: grid;
    grid-template-columns: repeat(auto-fill,210px);
    justify-content: space-evenly;
    ${this.likes3list === 1 ? 'margin-top: 325px' : ""}
  }
  .namedetails {
    ${this.nameheight}
  }
  .cls-3 {
    font-size: 16px;
    color: ${this.textColor};
    font-family: SegoeUI-Bold, Segoe UI;
    font-weight: 700;
    text-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    margin-left: -4px;
    height: 60px;
    width: 60px;
  }
  .test{
    display: flex;
    align-items: center;
    height:97px;
    justify-content: flex-start;
    ${this.br ? 'border-radius:2px' : ""}
  }
  .test2{
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
    background-color:${this.fgColor}
  }
  #header{
    text-align-last: center;
    font-size: 22px;
    padding-bottom: 6px;
    ${this.likes3list !== 1 ? 'margin-top: 4px;' : ""}
    ${this.likes3list === 1 ? 'position: absolute;top: 10px;left: 0;right: 0;' : ""}
  }
  a{
    text-decoration:none
  }
  img#detail-image {
    border-radius: 4px;
    object-fit: cover;
  }
  </style>
  <foreignObject height="100%" width="100%">
  <div id="base-shape" height="97px" width="100%" class="cls-main" xmlns="http://www.w3.org/1999/xhtml">

  <div class="cls-3" id="header" xmlns="http://www.w3.org/1999/xhtml" >${this.header}</div>
  <div id="bgcolor">
  <a href="https://anilist.com/user/${this.like_1_name}">
  <div class="test">
  <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.like_1_avatar}"/>
  </div><div class="namediv"><div class="namedetails">
  <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_1_name}</div></div>
  <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_1_count}</div></div></div></a>
  <a href="https://anilist.com/user/${this.like_2_name}">
  <div class="test">
  <div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
  <img id="pfp-image" height="60px" width="60px" src="${this.like_2_avatar}"/>
  </div><div class="namediv"><div class="namedetails">
  <div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_2_name}</div></div>
  <div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_2_count}</div></div></div></a>
  <a href="https://anilist.com/user/${this.like_3_name}">

  <div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.like_3_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_3_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_3_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_4_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
<img id="pfp-image" height="60px" width="60px" src="${this.like_4_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_4_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_4_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_5_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.like_5_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_5_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_5_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_6_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
<img id="pfp-image" height="60px" width="60px" src="${this.like_6_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_6_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_6_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_7_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.like_7_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_7_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_7_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_8_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
<img id="pfp-image" height="60px" width="60px" src="${this.like_8_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_8_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_8_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_9_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml"><img id="pfp-image" height="60px" width="60px" src="${this.like_9_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_9_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_9_count}</div></div></div></a>
<a href="https://anilist.com/user/${this.like_10_name}">
<div class="test">
<div class="imgDiv" height="100%" width="50%" xmlns="http://www.w3.org/1999/xhtml">
<img id="pfp-image" height="60px" width="60px" src="${this.like_10_avatar}"/>
</div><div class="namediv"><div class="namedetails">
<div class="cls-3" id="username-text"  xmlns="http://www.w3.org/1999/xhtml" >${this.like_10_name}</div></div>
<div class="cls-4" xmlns="http://www.w3.org/1999/xhtml">${this.like_10_count}</div></div></div></a>
  </div>
  </div>
  </foreignObject>
  </svg>`;
  }
}
module.exports = Card;
