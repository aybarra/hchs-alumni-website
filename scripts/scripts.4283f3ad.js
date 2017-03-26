"use strict";angular.module("hchsAlumniWebsiteAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/purpose",{templateUrl:"views/purpose.html",controller:"PurposeCtrl",controllerAs:"purpose"}).when("/board",{templateUrl:"views/board.html",controller:"BoardCtrl",controllerAs:"board"}).when("/bylaws",{templateUrl:"views/bylaws.html",controller:"BylawsCtrl",controllerAs:"bylaws"}).when("/newsletter",{templateUrl:"views/newsletter.html",controller:"NewsletterCtrl",controllerAs:"newsletter"}).when("/notableAlumni",{templateUrl:"views/notablealumni.html",controller:"NotablealumniCtrl",controllerAs:"notableAlumni"}).when("/events",{templateUrl:"views/events.html",controller:"EventsCtrl",controllerAs:"events"}).when("/membershipCategories",{templateUrl:"views/membershipcategories.html",controller:"MembershipcategoriesCtrl",controllerAs:"membershipCategories"}).when("/join",{templateUrl:"views/join.html",controller:"JoinCtrl",controllerAs:"join"}).when("/scholarshipOverview",{templateUrl:"views/scholarshipoverview.html",controller:"ScholarshipoverviewCtrl",controllerAs:"scholarshipOverview"}).when("/submit",{templateUrl:"views/submit.html",controller:"SubmitCtrl",controllerAs:"submit"}).when("/recipients",{templateUrl:"views/recipients.html",controller:"RecipientsCtrl",controllerAs:"recipients"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/membershipCategories",{templateUrl:"views/membershipcategories.html",controller:"MembershipcategoriesCtrl",controllerAs:"membershipCategories"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("hchsAlumniWebsiteAppApp").controller("MainCtrl",function(){}),angular.module("hchsAlumniWebsiteAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("PurposeCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("BoardCtrl",["$scope",function(a){a.boardMembers=[{name:"Sunny Patel",position:"President",imagePath:"images/sunny-patel.5d210b95.jpg",altText:"Sunny Headshot",bioText:"Sunny graduated Health Careers High School as a member of the Class of 2009 where he lettered in golf. Sunny received a Bachelors in Economics from Pepperdine University in Malibu, California and was an active member of the Lambda Sigma Chapter of Psi Upsilon Fraternity. He is currently a licensed securities broker and investment advisor with Williams Financial Group in Dallas, Texas where he serves as a Regional Director in Sales Supervision and as the Firm’s Municipal Securities Principal. Sunny is also an avid philanthropist, working with and serving on the Board of various charitable organizations. In his free time, Sunny plays golf and runs half-marathons for the kids."},{name:"Elle Gonzalez",position:"Treasurer",imagePath:"images/elle-gonzalez.70786cf3.jpg",altText:"Elle Headshot",bioText:"Elle graduated Health Careers High School as a member of the Class of 2009 where she was a lettering tennis player and led in the Madrigals choir. She earned a Bachelors in Economics from Pepperdine University and was a member of the Zeta Phi chapter of Kappa Alpha Theta sorority. She still enjoys playing tennis and singing locally. Elle is currently the Vice President at a boutique corporate intelligence firm and lives in San Antonio, Texas with her husband and daughter."},{name:"Katie Singleton",position:"Secretary",imagePath:"images/katie-singleton.6ba94649.jpg",altText:"Katie Headshot",bioText:"Katie graduated from Health Careers High School in 2009. During her time at Health Careers, she was in the choir and met her future husband, Derick. She graduated from the University of Texas at San Antonio with a Bachelors in Psychology. Katie currently lives in Colorado where she works for the Girl Scouts of Colorado and is earning her Masters in Public Administration from the University of Colorado Denver. Katie currently volunteers with the Muscular Dystrophy Association and serves on the Young Nonprofit Professionals Network Denver Board of Directors."},{name:"Anusha Goud",position:"Co-Chair of Scholarship Committee",imagePath:"images/anusha-goud.jpg",altText:"Anusha Headshot"},{name:"Cheryl Sarem",position:"Co-Chair of Scholarship Committee",imagePath:"images/cheryl-sarem.757d48ac.jpg",altText:"Cheryl Headshot",bioText:"Cheryl graduated Health Careers High School in 2009 where she participated in many extracurricular activities, such as Interact (a volunteer organization), Spanish Honor Society, Drama Club and National Honor Society. Cheryl received a Bachelor of Science from Howard Payne University in Brownwood, Texas in Biology with minors in Psychology and Chemistry while working as a peer tutor for the university. She was President of Gamma Beta Phi as well as an active member in both Beta Beta Beta and Psi Chi. Cheryl is currently a Chemist at Mission Pharmacal in Boerne, Texas, where she tests raw materials for use in pharmaceutical products. Cheryl enjoys spending time with her family and friends, playing guitar traveling and reading."},{name:"Warren Sheridan",position:"Co-Chair of Scholarship Committee",imagePath:"images/warren-sheridan.jpg",altText:"Warren Headshot"},{name:"Andy Ybarra",position:"Co-Chair of Membership Committee",imagePath:"images/andy-ybarra.4236c850.jpg",altText:"Andy Headshot",bioText:"Andy graduated from Health Careers High School in 2009 where he served as Class President for four years. He received a Bachelor of Science in Computer Engineering and Computer Science from the University of Southern California. He was awarded the GEM Fellowship in 2014 and received a Master of Science in Computer Science from Georgia Tech specializing in Human Computer Interaction. He is currently a software engineer for Adobe in Seattle, WA. In his spare time he is spending time with his new puppy and training him to do tricks like not going potty inside the house."}]}]),angular.module("hchsAlumniWebsiteAppApp").controller("BylawsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("NewsletterCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("NotablealumniCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("EventsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("MembershipcategoriesCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("JoinCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("ScholarshipoverviewCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("SubmitCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("RecipientsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hchsAlumniWebsiteAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/board.html",'<div ng-repeat="boardMember in boardMembers" ng-if="boardMember.bioText" class="panel panel-primary"> <div class="panel-heading"> <h3>{{boardMember.name}}</h3> <h4>{{boardMember.position}}</h4> </div> <div class="panel-body"> <img class="board-headshot-circle" src="{{boardMember.imagePath}}" alt="{{boardMember.altText}}"> <p class="bio-text">{{boardMember.bioText}}</p> </div> </div>'),a.put("views/bylaws.html","<p>This is the bylaws view.</p>"),a.put("views/contact.html","<p>This is the contact view.</p>"),a.put("views/events.html","<p>This is the events view.</p>"),a.put("views/join.html","<p>This is the join view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h2>Welcome to the Health Careers High School Alumni Association!</h2> <img src="images/hchs-front-door.af7c9a0c.jpg" alt="HCHS front"> <!-- <p class="lead">\n    <img src="images/hchs-front-door.af7c9a0c.jpg" alt="HCHS front"><br>\n    Always a pleasure scaffolding your apps.\n  </p>\n  <p><a class="btn btn-lg btn-success" ng-href="/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> --> </div> <!-- <div class="row marketing">\n  <h4>HTML5 Boilerplate</h4>\n  <p>\n    HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.\n  </p>\n\n  <h4>Angular</h4>\n  <p>\n    AngularJS is a toolset for building the framework most suited to your application development.\n  </p>\n\n  <h4>Karma</h4>\n  <p>Spectacular Test Runner for JavaScript.</p>\n</div> -->'),a.put("views/membershipcategories.html","<p>This is the membershipCategories view.</p>"),a.put("views/newsletter.html","<p>This is the newsletter view.</p>"),a.put("views/notablealumni.html","<p>This is the notableAlumni view.</p>"),a.put("views/purpose.html","<p>This is the purpose view.</p>"),a.put("views/recipients.html","<p>This is the recipients view.</p>"),a.put("views/scholarshipoverview.html","<p>This is the scholarshipOverview view.</p>"),a.put("views/submit.html","<p>This is the submit view.</p>")}]);