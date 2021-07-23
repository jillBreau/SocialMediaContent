import React from 'react';
import Posts from '../../components/Posts';
import './Organization.css';

import p_6_1 from '../../images/JackOrgMUN/Goals/1.png';
import p_6_2 from '../../images/JackOrgMUN/Goals/2.png';
import p_6_3 from '../../images/JackOrgMUN/Goals/3.png';
import p_6_4 from '../../images/JackOrgMUN/Goals/4.png';
import p_6_5 from '../../images/JackOrgMUN/Goals/5.png';
import p_6_6 from '../../images/JackOrgMUN/Goals/6.png';
import p_6_7 from '../../images/JackOrgMUN/Goals/7.png';
import p_6_8 from '../../images/JackOrgMUN/Goals/8.png';
import p_6_9 from '../../images/JackOrgMUN/Goals/9.png';
import p_6_10 from '../../images/JackOrgMUN/Goals/10.png';
import p_5 from '../../images/JackOrgMUN/Valentines/FACEBOOK.png';
import p_4_1 from '../../images/JackOrgMUN/Finals/1f.png';
import p_4_2 from '../../images/JackOrgMUN/Finals/2f.png';
import p_4_3 from '../../images/JackOrgMUN/Finals/3f.png';
import p_4_4 from '../../images/JackOrgMUN/Finals/4f.png';
import p_4_5 from '../../images/JackOrgMUN/Finals/5f.png';
import p_4_6 from '../../images/JackOrgMUN/Finals/6f.png';
import p_4_7 from '../../images/JackOrgMUN/Finals/7f.png';
import p_4_8 from '../../images/JackOrgMUN/Finals/8f.png';
import p_3 from '../../images/JackOrgMUN/PumpkinSmash/PumpkinSmash.MOV';
import p_2 from '../../images/JackOrgMUN/Giveaway/Giveaway.png';
import p_1 from '../../images/JackOrgMUN/MIAW/MIAW.png';
import s_3 from '../../images/JackOrgMUN/Stories/Volunteers-FB-page.mp4';
import s_2 from '../../images/JackOrgMUN/Stories/YOUR-Spotify-Top-Songs.png';
import s_1 from '../../images/JackOrgMUN/Stories/Giveaway-selection.MOV';

const posts = [
  {
    media: [
      {
        src: p_6_1,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_2,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_3,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_4,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_5,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_6,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_7,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_8,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_9,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_6_10,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      April 2021
    </p>,
    postCaption: 
    <p>
      Goal setting is important, and can have positive impacts on mental health!<br/>
      Whether you are focused on short-term goals to get through exams, or long-term goals for personal growth, check out our tips for goal setting.
      You'll also find some example goals, including sustainable goals, kindly provided by our collaborator, @mun_save_the_sea_society 🌊🌎
    </p>
  },
  {
    media: [
      {
        src: p_5,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>{' '}
      and <a href="https://www.facebook.com/jackorgmun" title="Jack.org MUN - Facebook">Facebook</a>,
      February 2021
    </p>,
    postCaption: 
    <p>
      💙 Help us spread the love! This year, we're delivering your valentines around campus... virtually!<br/>
      ✏️ Fill out the attached Google Form to have us send as many valentines as you want on your behalf.<br/>
      💌 They can be anonymous, or signed!<br/>
      ➡️ Look through these photos to see the templates you can choose from.<br/>
      📅 The deadline to submit is Friday, February 12th, and your valentines will be sent on Valentine's Day!<br/><br/>
      https://forms.gle/Yvur39ynN5quhh5o9
    </p>
  },
  {
    media: [
      {
        src: p_4_1,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_2,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_3,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_4,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_5,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_6,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_7,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
      {
        src: p_4_8,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      December 2020
    </p>,
    postCaption: 
    <p>
      We asked, you answered!<br/>
      Here are some ideas from your peers to look after your mental health during finals.<br/>
      Thank you to everyone who participated.<br/>
      Take care of yourselves🧡💙
    </p>
  },
  {
    media: [
      {
        src: p_3,
        alt: 'A TikTok video by Jack.org MUN chapter',
        video: true
      },
    ],
    postInfo: 
    <p> 
      Posted on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram">Instagram</a>{' '}
      and <a href="https://www.tiktok.com/@jack.org_mun" title="Jack.org MUN - TikTok"> TikTok</a>,
      October 2020
    </p>,
    postCaption: <p>
      🎃🔨 SMASH THE STIGMA<br/>

      Send us your pumpkin smash videos!<br/>
      
      Here at jack.org MUN, it’s our 5th annual Smash the Stigma, and this year, we’ve gone virtual! This event is all about putting an end to stigmas and myths about mental health. Watch some of our executive members smashing stigmatizing phrases they have heard about mental health!<br/>
      
      What stigmas are you smashing? Send us your (vertical) video submission by November 9th to be included in the compilation video on our social media pages.
    </p>
  },
  {
    media: [
      {
        src: p_2,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      October 2020
    </p>,
    postCaption: 
    <p>
      🔹🔸GIVEAWAY🔸🔹<br/><br/>

      The Jack.org MUN chapter is doing a giveaway to end off Mental Illness Awareness Week!<br/>
      
      Our exciting prize selection supports the local business @displayrules , which works to make clothing that starts conversations about mental health!<br/><br/>
      
      WINNER WILL RECEIVE:<br/>
      
      - Mental health awareness T-shirt (design of your choice) from @displayrules<br/>
      
      - Jack.org popsocket!<br/><br/>
      
      To enter:<br/>
      - You must be following our Instagram page (@jack.org_mun)<br/>
      - Tag a friend in the comments (Each comment counts as an entry, so tag as many friends as you want for extra entries!)<br/>
      - Share this post to your story<br/><br/>
      
      !! CONTEST RUNS UNTIL FRIDAY, OCTOBER 16th !!
    </p>
  },
  {
    media: [
      {
        src: p_1,
        alt: 'A square graphic by Jack.org MUN chapter',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      October 2020
    </p>,
    postCaption: 
    <p>
      This week is Mental Illness Awareness Week, an annual educational campaign to increase awareness about mental illness. This year's theme is "What People with Mental Illness Want You to Know". Stay tuned for posts throughout the week!
    </p>
  },
  {
    media: [
      {
        src: s_3,
        alt: 'A video by Jack.org MUN chapter',
        video: true
      },
    ],
    postInfo: 
    <p> 
      Posted as a <em>story</em> on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      January 2021
    </p>,
    postCaption: ``
  },
  {
    media: [
      {
        src: s_2,
        alt: 'A graphic by Jack.org MUN chapter',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted as a <em>story</em> on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      December 2020
    </p>,
    postCaption: ``
  },
  {
    media: [
      {
        src: s_1,
        alt: 'A video by Jack.org MUN chapter',
        video: true
      },
    ],
    postInfo: 
    <p> 
      Posted as a <em>story</em> on the Jack.org MUN Chapter's <a href="https://www.instagram.com/jack.org_mun/" title="Jack.org MUN - Instagram"> Instagram</a>,
      December 2020
    </p>,
    postCaption: ``
  },
]

class JackOrgMUN extends React.Component {
  
  render() {
    return (
      <div className="contentContainer">
        <div className="mainContent" id="posts">
          <Posts posts={posts}></Posts>

        </div>
      </div>
    );
  };
};

export default JackOrgMUN;