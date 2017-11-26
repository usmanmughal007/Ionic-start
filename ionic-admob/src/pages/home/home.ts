// import { AdMob } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController 
    // , public admob: AdMobFree //usman
  ) {

  }

  showBanner() {
    
           const bannerConfig: AdMobFreeBannerConfig = {
               isTesting: true, // Remove in production
               autoShow: true,
               //publisherId: admob_key
              
               id: 'ca-app-pub-9604915415648306/7098266830'
           };
    
        //    this.admob.banner.config(bannerConfig);
    
        //     this.admob.banner.prepare().then(() => {     //usman all lines
        //        // success
        //     }).catch(e => console.log(e));
    
       }

       
    launchInterstitial() {
      
             let interstitialConfig: AdMobFreeInterstitialConfig = {
                 isTesting: true, // Remove in production
                 autoShow: true,
                 id: 'ca-app-pub-9604915415648306/7098266830'
             };
      
            //  this.admob.interstitial.config(interstitialConfig);
      
            //  this.admob.interstitial.prepare().then(() => {                  //usman all lines
            //      // success
            //  })
            //  .catch(e => console.log(e));
            }



            // showRewardVideoAds(){
            //   const bannerConfig: AdMobFreeBannerConfig = {
            //   id: 'ca-app-pub-9604915415648306/7098266830',
            //   isTesting: false,
            //   autoShow: false
            //   };
            //   this.admob.rewardVideo.config(bannerConfig);
          
            //   this.admob.rewardVideo.prepare()
            //   .then(() => {
            //       this.admob.rewardVideo.show()
            //   })
            //   .catch(e => console.log(e));    
            //   }


              // loadAd(){
              //   let options = {
              //    adId: 'ca-app-pub-9604915415648306/7098266830',
              //    isTesting: false
              //   };
              //    AdMob.prepareInterstitial(options)
              //         .then(() => {
              //           AdMob.showInterstitial();
              //         });
              //  };

            showDetais()
            {
                


            }

}
