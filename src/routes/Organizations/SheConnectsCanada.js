import React from 'react';
import Posts from '../../components/Posts';
import './Organization.css';

import p_4_1 from '../../images/SheConnectsCanada/ReadingList/1.png';
import p_4_2 from '../../images/SheConnectsCanada/ReadingList/2.png';
import p_4_3 from '../../images/SheConnectsCanada/ReadingList/3.png';
import p_4_4 from '../../images/SheConnectsCanada/ReadingList/4.png';
import p_4_5 from '../../images/SheConnectsCanada/ReadingList/5.png';
import p_4_6 from '../../images/SheConnectsCanada/ReadingList/6.png';
import p_4_7 from '../../images/SheConnectsCanada/ReadingList/7.png';
import p_4_8 from '../../images/SheConnectsCanada/ReadingList/8.png';
import p_4_9 from '../../images/SheConnectsCanada/ReadingList/9.png';
import p_4_10 from '../../images/SheConnectsCanada/ReadingList/10.png';
import p_3_1 from '../../images/SheConnectsCanada/DisabilityPride/1.png';
import p_3_2 from '../../images/SheConnectsCanada/DisabilityPride/2.png';
import p_3_3 from '../../images/SheConnectsCanada/DisabilityPride/3.png';
import p_2_1 from '../../images/SheConnectsCanada/Pride/1.png';
import p_2_2 from '../../images/SheConnectsCanada/Pride/2.png';
import p_1 from '../../images/SheConnectsCanada/Leadership/2021-05-15-Leadership-stat.png';

const posts = [
  {
    media: [
      {
        src: p_4_1,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_2,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_3,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_4,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_5,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_6,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_7,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_8,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_9,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_4_10,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on She Connects Canada's <a href="https://www.instagram.com/sheconnectscanada/" title="She Connects Canada - Instagram"> Instagram</a>{' '}
      and <a href="https://www.facebook.com/sheconnectscanada" title="She Connects Canada - Facebook">Facebook</a>{' '},
      July 2021
    </p>,
    postCaption:
    <p>
      Presenting our empowering 2021 Summer Reading List ☀️<br/>
      We've created this list for the young womxn in our network who want to be happy, fulfilled, and intentional - and we're pretty sure that's all of you!<br/>
      Thank you to all the inspiring authors who made the list:<br/>
      @gretchenrubin<br/>
      @elainewelteroth<br/>
      @iamsophianelson<br/>
      @tiffanymjewell<br/>
      @chimamanda_adichie<br/>
      @tasha.spillett<br/>
      @disability_visibility<br/>
      @brendasalgado33<br/><br/>

      (Image descriptions available in alt text feature)<br/><br/>

      #bookstagram #books #summerreading #empowerment
    </p>
  },
  {
    media: [
      {
        src: p_3_1,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_3_2,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_3_3,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on She Connects Canada's <a href="https://www.instagram.com/sheconnectscanada/" title="She Connects Canada - Instagram"> Instagram</a>{' '}
      and <a href="https://www.facebook.com/sheconnectscanada" title="She Connects Canada - Facebook">Facebook</a>{' '},
      July 2021
    </p>,
    postCaption: 
      <p>
        Did you know? July is Disability Pride Month!<br/>
        This is a time to learn more about disability, how to be a better ally, and how to challenge ableism in yourself and in the world around you.<br/>
        We recommend the article linked below from @qicreativeinc, based in Edmonton. Qi Creative Inc. discusses ableism, medical and social models of disability, and the importance of intersectionality in disability inclusion. They also provide a list of disabled creators to support, and inclusive books to read, which is why this article is a great place to start.<br/><br/>
        https://www.qicreative.com/news/disability-pride-month<br/><br/>
        (Image descriptions available in alt text feature)
      </p>
  },
  {
    media: [
      {
        src: p_2_1,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
      {
        src: p_2_2,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on She Connects Canada's <a href="https://www.instagram.com/sheconnectscanada/" title="She Connects Canada - Instagram"> Instagram</a>
      , <a href="https://www.facebook.com/sheconnectscanada" title="She Connects Canada - Facebook">Facebook</a>{' '}
      and <a href="https://www.linkedin.com/company/sheconnects/" title="She Connects Canada - LinkedIn">LinkedIn</a>,
      June 2021
    </p>,
    postCaption: 
      <p>
        The She Connects mentorship program is by womxn, for womxn. Any female-identifying or gender diverse students in grades 10-12, or recent graduates, are encouraged to join our growing group of mentees. Every one-on-one mentorship relationship is a safe space.<br/>
        Swipe to the second slide for information on some incredible organizations who are providing LGBTQ+ support resources to Canadian youth.<br/><br/>
        #pride #pridemonth #lgbtq #lgbtqpride #loveislove
      </p>
  },
  {
    media: [
      {
        src: p_1,
        alt: 'A square graphic by She Connects Canada',
        video: false
      },
    ],
    postInfo: 
    <p> 
      Posted on She Connects Canada's <a href="https://www.instagram.com/sheconnectscanada/" title="She Connects Canada - Instagram"> Instagram</a>{' '}
      and <a href="https://www.facebook.com/sheconnectscanada" title="She Connects Canada - Facebook">Facebook</a>,
      May 2021
    </p>,
    postCaption: 
    <p>
      Our vision at She Connects is to empower young womxn and help them gain knowledge that will guide them through their mental wellbeing, careers, and education.<br/>
      Research shows that meaningful mentoring relationships can positively impact those exact areas of life. Young adults with a mentor are more likely to participate regularly in extracurricular activities, to volunteer regularly, and to hold leadership positions, to name a few examples from @mentornmp’s resource linked below.<br/><br/>
      https://www.mentoring.org/mentoring-impact/
    </p>
  },
]

class SheConnectsCanada extends React.Component {
  
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

export default SheConnectsCanada;