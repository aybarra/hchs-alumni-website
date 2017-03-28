'use strict';

/**
 * @ngdoc function
 * @name hchsAlumniWebsiteAppApp.controller:BoardCtrl
 * @description
 * # BoardCtrl
 * Controller of the hchsAlumniWebsiteAppApp
 */
angular.module('hchsAlumniWebsiteAppApp')
  .controller('BoardCtrl', function ($scope) {

    $scope.boardMembers = [
      {
        name: 'Sunny Patel',
        position: 'President',
        imagePath: 'images/sunny-patel.jpg',
        altText: 'Sunny Headshot',
        bioText: 'Sunny graduated Health Careers High School as a member of the Class of 2009 where he lettered in golf. Sunny received a Bachelors in Economics from Pepperdine University in Malibu, California and was an active member of the Lambda Sigma Chapter of Psi Upsilon Fraternity. He is currently a licensed securities broker and investment advisor with Williams Financial Group in Dallas, Texas where he serves as a Regional Director in Sales Supervision and as the Firm’s Municipal Securities Principal. Sunny is also an avid philanthropist, working with and serving on the Board of various charitable organizations. In his free time, Sunny plays golf and runs half-marathons for the kids.'
      },
      {
        name: 'Elle Gonzalez',
        position: 'Treasurer',
        imagePath: 'images/elle-gonzalez.jpg',
        altText: 'Elle Headshot',
        bioText: 'Elle graduated Health Careers High School as a member of the Class of 2009 where she was a lettering tennis player and led in the Madrigals choir. She earned a Bachelors in Economics from Pepperdine University and was a member of the Zeta Phi chapter of Kappa Alpha Theta sorority. She still enjoys playing tennis and singing locally. Elle is currently the Vice President at a boutique corporate intelligence firm and lives in San Antonio, Texas with her husband and daughter.'
      },
      {
        name: 'Katie Singleton',
        position: 'Secretary',
        imagePath: 'images/katie-singleton.jpg',
        altText: 'Katie Headshot',
        bioText: 'Katie graduated from Health Careers High School in 2009. During her time at Health Careers, she was in the choir and met her future husband, Derick. She graduated from the University of Texas at San Antonio with a Bachelors in Psychology. Katie currently lives in Colorado where she works for the Girl Scouts of Colorado and is earning her Masters in Public Administration from the University of Colorado Denver. Katie currently volunteers with the Muscular Dystrophy Association and serves on the Young Nonprofit Professionals Network Denver Board of Directors.'
      },
      {
        name: 'Anusha Goud',
        position: 'Co-Chair of Scholarship Committee',
        imagePath: 'images/anusha-goud.jpg',
        altText: 'Anusha Headshot',
        bioText: 'Anusha graduated from Health Careers High School in 2009. During her time at Health Careers, she was actively involved in Health Occupation Students of America and Business Professionals of America. She received a Bachelor of Science in Biology and Sociology from Texas A&M University-Commerce and is working on earning her Masters in Public Health. She is currently a Supervisor of Practice Operations at The Children’s Hospital of San Antonio Primary Care, an entity of CHRISTUS Health which is a not-for-profit health system. Anusha is very passionate about helping others and volunteers her time and diverse skills with various non-profit organizations to execute their humanitarian efforts. In her spare time, she enjoys traveling, cooking and spending quality time with her family and friends.'
      },
      {
        name: 'Cheryl Sarem',
        position: 'Co-Chair of Scholarship Committee',
        imagePath: 'images/cheryl-sarem.jpg',
        altText: 'Cheryl Headshot',
        bioText: 'Cheryl graduated Health Careers High School in 2009 where she participated in many extracurricular activities, such as Interact (a volunteer organization), Spanish Honor Society, Drama Club and National Honor Society. Cheryl received a Bachelor of Science from Howard Payne University in Brownwood, Texas in Biology with minors in Psychology and Chemistry while working as a peer tutor for the university. She was President of Gamma Beta Phi as well as an active member in both Beta Beta Beta and Psi Chi. Cheryl is currently a Chemist at Mission Pharmacal in Boerne, Texas, where she tests raw materials for use in pharmaceutical products. Cheryl enjoys spending time with her family and friends, playing guitar traveling and reading.'
      },
      {
        name: 'Warren Sheridan',
        position: 'Co-Chair of Membership Committee',
        imagePath: 'images/warren-sheridan.jpg',
        altText: 'Warren Headshot',
        bioText: 'Born and raised in San Antonio Texas , Warren Martin Sheridan Jr attended Northside Health Careers High School and graduated as a part of the class of 2009. After High School, Warren attended Northwest Vista College where he received an Associates in Psychology then to Texas A&M University-San Antonio where he graduated Magna Cumme Laude and received a Bachelor\'s in Psychology in 2013. In April of 2014, Warren became employed with the Texas Department of Family and Protective Services where he currently serves as the managing conservator for abused and neglected children of Bexar County. During his tenure with the Department of Family Protective Services, Warren returned to Texas A&M University-San Antonio where he studied mental health counseling and will graduate with his masters degree in May 2017. Warren currently interns at non-profit organization where he is earning his hours necessary to be a licensed professional counselor. Warren enjoys traveling, reading, cooking listening to music (especially Frank Sinatra), dancing poorly, and spending time with his niece and nephew.'
      },
      {
        name: 'Andy Ybarra',
        position: 'Co-Chair of Membership Committee',
        imagePath: 'images/andy-ybarra.jpg',
        altText: 'Andy Headshot',
        bioText: 'Andy graduated from Health Careers High School in 2009 where he served as Class President for four years. He received a Bachelor of Science in Computer Engineering and Computer Science from the University of Southern California. He was awarded the GEM Fellowship in 2014 and received a Master of Science in Computer Science from Georgia Tech specializing in Human Computer Interaction. He is currently a software engineer for Adobe in Seattle, WA. In his spare time he is spending time with his new puppy and training him to do tricks like not going potty inside the house.'
      }
    ];
  });
