import React from 'react';
import GlassKeep_Logo from '../GlassKeep_Logo.jpg';
import GlassKeep_Img from '../GlassKeep_Img.jpg';
import GlassKeep_Img_2 from '../GlassKeep_Img_2.jpg';
import GlassKeep_Img_3 from '../GlassKeep_Img_3.jpg';
import GlassKeep_Img_4 from '../GlassKeep_Img_4.jpg';
import facebook from '../facebook.png';
import twitter from '../twitter.png';


export default function Home() {
    return (
        <div>
            <div>
                <img src={GlassKeep_Logo} alt="GlassKeep_Logo" width={300} />
                <p>Everyday, people lose or damage their glasses, because they can't find a safe place to put them. But now that's not a worry, thanks to GlassKeep, the one and only invention that will hold your glasses securely in place without magnets or clasps. Best of all its made right here in the USA!</p>
                <h1 style={{ color: 'blue' }}>GlassKeep is easy to use! Just hook it in place behind a button and hang you eye glasses in place.</h1>
                <img src={GlassKeep_Img} alt="GlassKeep_Img" width={150} height={150} />{' '}
                <img src={GlassKeep_Img_2} alt="GlassKeep_Img_2" width={150} height={150} />{' '}
                <img src={GlassKeep_Img_3} alt="GlassKeep_Img_3" width={150} height={150} />{' '}
                <img src={GlassKeep_Img_4} alt="GlassKeep_Img_4" width={150} height={150} />{' '}
            </div>

            <div>
                <h2><u>Testimonials</u></h2>
                <p>"I used to forget where I put my glasses but now I won't have to worry about that anymore thanks to GlassKeep. It holds my glasses securely and helps save my time because I know where to find them!" - W.H.</p>
                <p>"Anyone who wears glasses will immediately recognize GlassKeep as an essential product to keep their glasses secure." - D.B.</p>
            </div>
            <div>
                <p>Follow us on social media links to stay updated with our products!</p>
                <a href="https://cdn.someecards.com/someecards/usercards/1347979246124_6330831.png"><img src={facebook} alt="facebook" width={117} height={38} /></a>{' '}
                <a href="https://cdn.someecards.com/someecards/usercards/i-dont-have-a-facebook-or-a-twitter-account-so-i-just-go-around-announcing-out-loud-what-im-doing-at-random-times-ive-got-3-followers-so-far-but-i-think-2-are-cops--051e4.png"><img src={twitter} alt="twitter" width={117} height={38} /></a>
            </div>

        </div>
    )
}
